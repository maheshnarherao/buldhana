const CACHE_NAME = "nagarpalika-cache-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/Narendra-Modi.webp",
  "/DevendraFadnavis.webp"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});