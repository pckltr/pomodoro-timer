self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll([
        "./",
        "./style.css",
        "./logo240.png",
        "./favicon.ico",
        "./pomodoro.js",
        "./index.js",
        "./manifest.json",
        "./timeToWork.mp3",
        "./timeforABreak.mp3",
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
