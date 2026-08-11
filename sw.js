/* つくる手帖 ── キャッシュはオリジン単位で共有されます。
   github.io は全リポジトリが同じオリジンなので、
   自分の名前空間（TT_NS）のものだけを消します。 */
const TT_NS = 'tt:blockbreaker:';
const TT_OLD = 'tt-block-breaker-v1';   /* 旧名。次の更新のときに消して構いません */
const CACHE = TT_NS + 'v1';
const ASSETS = ['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./icon-maskable-512.png','./apple-touch-icon.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => (k.startsWith(TT_NS) || k === TT_OLD) && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => { if (e.request.method !== 'GET') return; e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request))); });
