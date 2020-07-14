/*
 *
 *  MilkingReflections
 *  Copyright 2020 The SunShining All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

const version = "0.1.20";
const cacheName = 'MilkingRelectionsP-v1.10';
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        '/MilkingRelections/',
        '/MilkingRelections/MilkingReflectionsLogo.png',
        '/MilkingRelections/Milk.png',
        'https://i.imgur.com/8uxYM4O.gif',
        'https://i.imgur.com/lNbi0gO.gif',
        'https://i.imgur.com/jDLYAHf.gif',
        'https://i.imgur.com/G37A4lx.gif',
        'https://i.imgur.com/P86zDpn.gif',
        'https://i.imgur.com/kmSPbxX.gif',
        'https://i.imgur.com/ae5vHtv.gif',
        'https://i.imgur.com/hHHsttd.gif',
        'https://i.imgur.com/MUweHXu.gif',
        'https://i.imgur.com/4mrjY7X.gif',
        'https://i.imgur.com/GczXFv8.gif',
        'https://i.imgur.com/sHYQEho.gif',
        'https://i.imgur.com/avHnkE0.gif',
        'https://i.imgur.com/GOTSy8M.gif',
        'https://i.imgur.com/NgbWnhs.gif',
        'https://i.imgur.com/93WJffn.gif',
        'https://i.imgur.com/7kCwIgO.gif',
        'https://i.imgur.com/9qdDDwa.gif',
        'https://i.imgur.com/CiirV2F.gif',
        'https://i.imgur.com/Q80kWFB.gif',
        'https://i.imgur.com/rjo1Ifq.gif'
])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});