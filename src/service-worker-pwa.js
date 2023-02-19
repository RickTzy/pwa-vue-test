import {precacheAndRoute} from 'workbox-precaching';

let click_open_url;
self.addEventListener("push", function(event){
    //  let push_message = event.data.text();
    click_open_url = "https://google.com";
     const options = {
        body: "You received a push message",
        icon: "./img/icons/android-chrome-192x192.png",
        image: "./img/icons/android-chrome-512x512.png",
        vibrate: [200, 100, 200, 100, 200, 100, 200],
        tag: "vibration-sample"
     };
     event.waitUntil(
        self.registration.showNotification("Notification Test", options)
     );
});

self.addEventListener("notificationclick", function(event){
    const clickedNotification = event.notification;
    clickedNotification.close();
    if(click_open_url) {
        const promiseChain = clients.openWindow(click_open_url);
        event.waitUntil(promiseChain);
    }
});

precacheAndRoute(self.__WB_MANIFEST);