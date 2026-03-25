const CACHE_NAME = 'uf-pro-v2';
self.addEventListener('install', (e) => {
  console.log('SW: Instalado');
});
self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});