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

const appBase = import.meta.env.BASE_URL.replace(/\/$/, '');

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
