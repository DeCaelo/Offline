// Service Worker Toolbox
importScripts('public/js/lib/sw-toolbox/sw-toolbox.js');

// Set a name for the current cache
var cacheName = 'v1';

// Default files to always cache
var precacheFiles = [
  '/index.html',
  '/app.css'
];
toolbox.precache(precacheFiles);

// Install and Activate events
self.addEventListener('install', (event) => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));

// Fetch events
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => response || fetch(event.request))
    );
});
