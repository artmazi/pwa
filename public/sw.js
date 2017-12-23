self.addEventListener('install', (event) => {
    console.log('SW Installed')
    caches.delete('static').then(() => {
        console.log('deleteeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeed')
    })
    cacheFiles(event)
})

const cacheFiles = (event) => {
    event.waitUntil(
        caches.open('static')
            .then((cache) => {
                cache.addAll([
                    '/',
                    '/index.html',
                    '/src/js/app.js',
                    '/src/css/app.css',
                    '/src/images/pwa.webp',
                    'https://fonts.googleapis.com/css?family=Raleway:400,700'
                ])
            })
    )
}


self.addEventListener('activate', (event) => {
    console.log('SW Activated')
})

self.addEventListener('fetch', (event) => {
    console.log('Fetching')
    event.respondWith(
        caches.match(event.request)
            .then((res) => {
                if (res) {
                    return res;
                }
                else { 
                    return fetch(event.request)
                }
            })
    )
})