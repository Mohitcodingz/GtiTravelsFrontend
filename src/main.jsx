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

// Auto-detect subfolder the app is served from ('' at domain root, '/dist' if uploaded as subfolder, etc.)
// Works with both absolute ('/assets/...') and relative ('./assets/...') Vite builds.
// Uses script.src (browser-resolved absolute URL, correct even on deep SPA routes) instead of
// the raw attribute (which resolves wrongly against the current deep URL).
let appBase = '';
try {
  const scripts = document.querySelectorAll('script[src*="assets/"]');
  for (const s of scripts) {
    try {
      const abs = new URL(s.src, window.location.href);
      const idx = abs.pathname.indexOf('/assets/');
      if (idx !== -1) {
        let prefix = abs.pathname.substring(0, idx).replace(/\/+$/, '');
        if (prefix === '/') prefix = '';
        appBase = prefix || '';
        break;
      }
    } catch (e) { /* try next script */ }
  }
} catch (e) {
  appBase = '';
}

// Fallback for direct visit to /dist before JS bundle name is known (keeps old behaviour)
if (!appBase && (window.location.pathname === '/dist' || window.location.pathname.startsWith('/dist/'))) {
  appBase = '/dist';
}

// When served from a subfolder, rewrite absolute '/images/...' references so they stay inside the subfolder.
// (No design/code change - purely a deploy-path fix.)
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

  const originalSetAttr = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function (name, val) {
    if (typeof name === 'string' && name.toLowerCase() === 'src') {
      val = patchUrl(val);
    }
    return originalSetAttr.call(this, name, val);
  };

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
    <BrowserRouter basename={appBase || undefined}>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
