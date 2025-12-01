self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("evro-cache").then(cache => {
      return cache.addAll([
        "/index.html",
        "/manifest.json",
        "/sw.js",
        "/icon-192.png",
        "/icon-512.png"
      ]);
    })
  );
  self.skipWaiting();
});
self.addEventListener("activate", e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
