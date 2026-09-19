self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Leitet Anfragen live an Netzwerk/Google weiter
  event.respondWith(fetch(event.request));
});