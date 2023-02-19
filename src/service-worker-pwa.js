import {precacheAndRoute} from 'workbox-precaching';
// Testing add something into service worker
console.log("testing123");
precacheAndRoute(self.__WB_MANIFEST);