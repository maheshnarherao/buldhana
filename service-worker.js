
const CACHE_NAME = 'buldhana-app-cache-v1';
const toCache = [
  './',
  './index.html',
  './style.css',
  './manifest.json',
  './Narendra-Modi.webp',
  './DevendraFadnavis.webp'
];
self.addEventListener("install", (event) => {
  console.log("Service Worker Installed");
});

self.addEventListener("fetch", (event) => {});

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(toCache))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request);
    })
  );
 
});

