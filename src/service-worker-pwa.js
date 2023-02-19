import {precacheAndRoute} from 'workbox-precaching';
// Testing add something into service worker
console.log("add something");

let click_open_url;
self.addEventListener("push", function(event){
     let push_message = event.data.text();

    click_open_url = "https://google.com";
     const options = {
        body: push_message.body,
        icon: "./img/icons/android-chrome-192x192.png",
        image: "./img/icons/android-chrome-512x512.png",
        vibrate: [200, 100, 200, 100, 200, 100, 200],
        tag: "vibration-sample"
     };
     event.waitUntil(
        self.registration.showNotification("My Notification", options)
     );
});

self.addEventListener("notificationClick", function(event){
    const clickedNotification = event.notification;
    clickedNotification.close();
    if(click_open_url) {
        const promiseChain = clients.openWindow(click_open_url);
        event.waitUntil(promiseChain);
    }
});

precacheAndRoute(self.__WB_MANIFEST);