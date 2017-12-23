let pwaCard = document.querySelector('#pwa'),
    pwaCardContent = pwaCard.querySelector('.card__content'),
    pwaCardDetails = pwaCard.querySelector('.card__details'),
    detailsShown = false

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then(() => {
        console.log('SW registered')
        showNotification();
    })
    function showNotification() {
        Notification.requestPermission(function (result) {
            if (result === 'granted') {
                navigator.serviceWorker.ready.then(function (registration) {
                    registration.showNotification('Wohhoo', {
                        body: 'This is a simple notification',
                        icon: './src/images/icons/app-icon-96x96.png',
                        vibrate: [200, 100, 200, 100, 200, 100, 200],
                        tag: 'vib vib vib'
                    });
                });
            }
        });
    }
}

pwaCard.addEventListener('click', (e) => {
    if (!detailsShown) {
        detailsShown = true
        pwaCardContent.style.opacity = 0
        pwaCardDetails.style.display = 'block'
        pwaCardContent.style.display = 'none'

        setTimeout(() => {
            pwaCardDetails.style.opacity = 1
        }, 300)
    }
    else {
        detailsShown = false
        pwaCardDetails.style.opacity = 0
        pwaCardContent.style.display = 'block'
        pwaCardDetails.style.display = 'none'
        setTimeout(() => {
            pwaCardContent.style.opacity = 1;
        }, 300)

    }
})