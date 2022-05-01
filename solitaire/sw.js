const staticCacheName = 's-app-v0';

const assetUrls = ['index.html', 'css/app.min.css', 'js/main.min.js'];

self.addEventListener('install',async () => {
  const cache = await caches.open(staticCacheName);
  await cache.addAll(assetUrls);
});

self.addEventListener('activate',async event => {
  const cacheNames = await caches.keys();
  await Promise.all(
    cacheNames.filter(name => name !== staticCacheName)
      .map(name => caches.delete(name))
  )
});

self.addEventListener('fetch',event => {
  event.respondWith(cacheFirst(event.request));
});

async function cacheFirst(request) {
  const cached = await caches.match(request);
  return cached ?? await fetch(request);
}
