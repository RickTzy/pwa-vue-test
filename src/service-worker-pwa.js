import {precacheAndRoute} from 'workbox-precaching';
// Testing add something into service worker
precacheAndRoute(self.__WB_MANIFEST);