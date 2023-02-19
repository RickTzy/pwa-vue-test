import {precacheAndRoute} from 'workbox-precaching';
// Testing add something into service worker
alert("testing123")
precacheAndRoute(self.__WB_MANIFEST);