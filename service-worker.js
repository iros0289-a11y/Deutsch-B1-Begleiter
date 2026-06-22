const CACHE_NAME = "deutsch-b1-begleiter-20260622-dtz-v6";
const CORE_ASSETS = [
  "./",
  "./?app=deutsch-b1-begleiter-20260622",
  "./index.html?app=deutsch-b1-begleiter-20260622",
  "./styles.css?v=20260622dtz",
  "./app.js?v=20260622dtz",
  "./manifest.webmanifest?v=20260622dtz",
  "./service-worker.js",
  "./icon.svg",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((names) => Promise.all(names.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200) return response;
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      }).catch(() => caches.match("./index.html"));
    })
  );
});
