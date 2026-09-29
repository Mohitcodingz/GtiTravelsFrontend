import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Supports Vercel (served at /) and cPanel (uploaded dist contents to domain root,
// or uploaded dist folder as /dist/). Auto-detects the subdirectory from built asset URLs.
let appBase = '';
try {
  const scripts = document.querySelectorAll('script[src]');
  for (const s of scripts) {
    const src = s.getAttribute('src') || '';
    if (src.includes('/assets/')) {
      // e.g. "/dist/assets/index-abc.js" -> "/dist", "/assets/index-abc.js" -> ""
      appBase = src.substring(0, src.indexOf('/assets/')).replace(/\/+$/, '') || '';
      break;
    }
  }
} catch (e) {
  appBase = '';
}

// Fallback: detect when visited via /dist or /dist/
if (!appBase && (window.location.pathname === '/dist' || window.location.pathname.startsWith('/dist/'))) {
  appBase = '/dist';
}

if (appBase && typeof window !== 'undefined') {
  const patchUrl = (val) => {
    if (typeof val === 'string') {
      if (val.startsWith('/images/')) {
        return appBase + val;
      }
      const originImage = window.location.origin + '/images/';
      if (val.startsWith(originImage)) {
        return window.location.origin + appBase + val.substring(window.location.origin.length);
      }
    }
    return val;
  };

  // 1. Intercept HTMLImageElement.prototype.src
  const srcDescriptor = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src');
  if (srcDescriptor && srcDescriptor.set) {
    Object.defineProperty(HTMLImageElement.prototype, 'src', {
      set(val) {
        srcDescriptor.set.call(this, patchUrl(val));
      },
      get() {
        return srcDescriptor.get.call(this);
      },
      configurable: true,
      enumerable: true
    });
  }

  // 2. Intercept setAttribute for src
  const originalSetAttr = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function (name, val) {
    if (typeof name === 'string' && name.toLowerCase() === 'src') {
      val = patchUrl(val);
    }
    return originalSetAttr.call(this, name, val);
  };

  // 3. Fallback capture-phase error listener for any missed image requests
  window.addEventListener(
    'error',
    (event) => {
      const target = event.target;
      if (target && target.tagName === 'IMG') {
        const currentSrc = target.getAttribute('src');
        if (currentSrc && currentSrc.startsWith('/images/')) {
          target.src = appBase + currentSrc;
        }
      }
    },
    true
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={appBase || ''}>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

