'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "70f41237130319d116326737d10e9cd6",
".git/config": "d340d422c26c7886b8234b1bb504f6a9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5a642e210e14dfb4999f2ce832c6895c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "987c4657b14fdc29abdab4a5bd1b4de2",
".git/logs/refs/heads/master": "987c4657b14fdc29abdab4a5bd1b4de2",
".git/logs/refs/remotes/origin/master": "e57988823d3a0449ceb792554aa41267",
".git/objects/02/194ab1169da977cb4482faa2be72a74d937c3c": "88c8fd2f8cfee69c2d9752e2d2455f9f",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/52bfece67cf1b3b2119e00ecd4444304a9dccf": "1cce96a22fcfbb30bbc41a4aa9f6b0d3",
".git/objects/13/4ca34a4a34edbaa26c455ed7e6b040ecf657f8": "cca751c05806a2f518925ea5060588cf",
".git/objects/19/b5c5a99f2f13a5840bba7106bd0579c7e373da": "2d100fb7abdb80cdd4979c62ebd2a191",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3f/386b2def7a4e7f6d5db9fb792c1ec3ba0103f2": "fb8547ad024c6ca9d042c602bdf3d294",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/f1c0f23f3ce759912e6b4d7fd23e0412df7187": "aeede00dbd3fc27aebdaaec0e7e57c92",
".git/objects/51/ae43b895b163642db2b3c6c882f8d2c2394dbc": "a75870860b9db586353dcaa33b5f2e1f",
".git/objects/53/033b4e83b2d00374e998755f22020867427114": "9b9f63f63f1c6c7a0bffe36f450efaae",
".git/objects/55/33b6cbb90e956e141ae48abbc943fcdd5e331a": "8c2d5669bb389b30e7d4ac9dcb9af354",
".git/objects/5c/f9f23f950b193a48dcb86b649bb20f474d3620": "4fe8232996b67ab1de4df337ec51d50d",
".git/objects/61/0af3580f0182292760fddedfe4912574af247b": "5769159a810551ff3f34e4ac20a6cdcc",
".git/objects/63/3962cdf2aa082cf83b04909180129a17bfdbc3": "f5ec41572292cc8ad6b7086a8de9b1d8",
".git/objects/66/941b547658dc35ea63f757106756b1103b6c5a": "2cda452c55b5737cb42d8056a8c2be11",
".git/objects/76/1c734e3c5e8f0104db2ce1b0b2affb77736737": "45fac2f8d7fcf3ab445b87cedfa335a5",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/81/a95e50898393c5b5f725a5542ea6f082dac168": "22939f3d18ca9edcb1c56b4d9a42419f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/30c1b5c933dbe87c98082462a170c0c67fa2f2": "8635c2eae7421e551087300c6da3fb43",
".git/objects/91/147e04f5696e71084f60a8ef31b2d20a98f2c0": "05900a41133c2fa065b3b5d4a3f8bf30",
".git/objects/9e/41cc66a404234ab88cb6bdd3f9a483836c95f8": "6bd904ee395ae39138e65f82aa926ed1",
".git/objects/9f/3a1cf4cb16da814437dd29910c5523d5b045bf": "e65391cd436042958fd71d66a231c49a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/8aaf5dbe9d1c1b9bcb106a9df346c5730f27d9": "c7ea740b25615d18ec45be2b5dfdbab6",
".git/objects/a6/02191b7350f274722a793dd20f5f95fdee60eb": "22a407da37f712912a525b9ebcf07026",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/8139124cdd07b741480d44cda87d84a07a8ef8": "364b60b24d263cddf322225947c3a077",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/1ac6cae2677a26566b2008008d408fe59a1868": "91849e87e539518e37ccd11b6d2b399c",
".git/objects/b5/8c318da5eba9e70ebcf5294d7e063dda24847f": "c7870d04b7a1b2ea89d11244d2775769",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/544e8349b3d4ca823e448c9f9bb437926f11f2": "5cab52668b9ad024ce2168f938b8e6df",
".git/objects/bf/f6ee3a03ef445f0ec7a3daa4d0a8fd4a9b33ab": "eb583a09ced35174e99aac7bbcc0806a",
".git/objects/c1/b23c39916d5a3ea28aa6117d90536a6ec84627": "06d3cdb40ebad3484ff7a2aea3578de5",
".git/objects/c7/80b41958d17620f65ffd913113d0149358dac9": "ceb9d1b7d135d0e66f7f75e86337bd08",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/579c0a62211ed390f26cca137ce5afb659735a": "ca7cf98e1d52ac5e67e173ecde08a2f4",
".git/objects/dd/4a94e0301784f4f79b877f18cacf861c3aa9a2": "d8417d61c8efe579ee9814e23e3b1b9e",
".git/objects/de/f4f14c66d7d0ba59c1f00b1aad3f625ef4e3ee": "dd18b8d7e24fdabeace4866d0f9f83cc",
".git/objects/df/32813bc4a4257092fc3f853cd7a0f84e4391e3": "6ebd8a4457d97c042fafa4f9a0f022de",
".git/objects/e2/1487c20e628b8c9ca63a5e544d20b21a5d3ed3": "d1711f63e2be061c899d482a2cf335bd",
".git/objects/e2/b7a9a7a7ef10a0c4ec0f5909669dae4ef6e895": "a428bfe3d1be6be2d0a79af7e9b8cd72",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/09e183ccd194d4ac5b8616d6febb38419fdb18": "05b9fafe057c8bc5fbd1c422ae74a776",
".git/objects/ea/98f62d5cc1926a731310c0f5b0569c6dcf528d": "ad38509d11c249845a01a08cf8a3f0bd",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/c17de70a4fbe4d79e63ab1576cc97ec72385c7": "53fb65a5637dab774653e9c8a93a0748",
".git/objects/ef/ce85ea45e40198097cec06d5b1ee4a394ee4a0": "bb183a65beee189da3419abe91bc2776",
".git/objects/f3/0d2091c8f9ebc590bb38bd5c944e4d1f130ad6": "4fee03cc3765a13618a41fb14d192ab4",
".git/objects/f8/279f4ac3d73b70646f91cb34b553c9e1dee615": "fcc8ae64ff50f21c43ceaedd75cae93c",
".git/refs/heads/master": "4d4a5aa38f26085caa347dd28289bf2b",
".git/refs/remotes/origin/master": "4d4a5aa38f26085caa347dd28289bf2b",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "9093b0ad26289f3575983cc9838ab95e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fd854a1505acaf13a09b59106a292bbb",
"/": "fd854a1505acaf13a09b59106a292bbb",
"lib/app/app_module.dart": "1e7e9ca2b5924d47f43384bfdc8fcd27",
"lib/app/app_widget.dart": "605e150b8cc645a5559056da8d080bfa",
"lib/main.dart": "093f2c66362a9c3c347f071749dea513",
"main.dart.js": "1e8fa7f5a78f10c869a0ca2e404d8377",
"manifest.json": "800e057220b84304ae4d6b6aea2d8957",
"version.json": "84eb79edf05647c3c861511938af4c89"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
