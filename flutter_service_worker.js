'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "f197cee873a16b0429ddd16743a92bf2",
"assets/assets/avatars/1.png": "c41a15e30727979dd8bb94884c204be3",
"assets/assets/avatars/2.png": "6cc4a6fbde129df4c4ec08875665a505",
"assets/assets/avatars/3.png": "9a06d4e2d9171f8a06d15b4e11c7f0d1",
"assets/assets/avatars/4.png": "36672fdfe798aa52f09dcbc379b6c6d4",
"assets/assets/banner/banner1.png": "47adc453b70419786133845bfcdebd36",
"assets/assets/hotels/1.png": "3e4b48222ec191c6b9281ebebfd26547",
"assets/assets/hotels/2.png": "1164294fa49181391821eb8076dd2140",
"assets/assets/hotels/3.png": "36d3f7671cbb231c1ff9354a5ed2fd45",
"assets/assets/hotels/4.png": "d12ef26f426229ef417bdd5b3b7e3ec2",
"assets/assets/logos/logo.png": "00b54bbb289060d12d540f041647b7b9",
"assets/assets/logos/logo1.png": "0151ce34833a130d91accee42834837c",
"assets/assets/logos/logo2.png": "0211a01e03ab9ea76440c31abbf3b31b",
"assets/assets/logos/logo3.png": "babbf4030fe1478d3b64ae5674f78e54",
"assets/assets/logos/logo5.png": "81607d64408e2183b76dd97ec1a1cf3b",
"assets/assets/mahrajan.jpg": "178425bc199276113fb6d1c1502b1a73",
"assets/assets/restaurants.png": "44109e5784ac186f7cb8903a9b28c30d",
"assets/assets/searchPain/Broderietraditionnelle/1.jpg": "eb5ddb2abf512826c6f281f195dc7261",
"assets/assets/searchPain/Broderietraditionnelle/2.jpg": "06ebfda97d119aa205c6cadab015e8e4",
"assets/assets/searchPain/Broderietraditionnelle/3.jpg": "0cbfa4e2b59888e06822dec494f095d8",
"assets/assets/searchPain/Broderietraditionnelle/4.jpg": "8323a009c18cff0fdadab2bb0b812d20",
"assets/assets/searchPain/Broderietraditionnelle/5.jpg": "be1bd7b02a314f5a85f6eda03ca08fd2",
"assets/assets/searchPain/Broderietraditionnelle/6.jpg": "1fde3d7e77e815bc394827ea103955c2",
"assets/assets/searchPain/djmila/1.jpg": "4b6ae6317192f526190f0fb30f0b63f0",
"assets/assets/searchPain/djmila/2.jpg": "c1aa25c354dbeccf1f7f3dfe423282fc",
"assets/assets/searchPain/djmila/3.jpg": "5b66ece5ee2bf82ce86877efa4fd9fc2",
"assets/assets/searchPain/djmila/4.jpg": "6e4c68515be5e9abfef74ef0554cc9e5",
"assets/assets/searchPain/djmila/5.jpg": "3ac5af489cde6749ee9fd8dc51fd4a98",
"assets/assets/searchPain/djmila/6.jpg": "d73aecb4cb763e40dc9ce1f9fe3be4a3",
"assets/assets/searchPain/dobara/1.jpg": "b6e712bac4296bbe0e9c38c86caf9e3c",
"assets/assets/searchPain/dobara/2.jpg": "727724ab481410f834112ae95d0dd89d",
"assets/assets/searchPain/dobara/3.jpg": "b012db60df0206a47f39ab6565f14c01",
"assets/assets/searchPain/dobara/4.jpg": "9b1f28b4c2a1c2f0d583b52b1edbba13",
"assets/assets/searchPain/dobara/5.jpg": "8a88d5af26d14c34953f7b31835cca3b",
"assets/assets/searchPain/dobara/6.png": "3eeb7efe11768854fb39563f9578106f",
"assets/assets/searchPain/independance/1.jpg": "5cf2099c679af89c014af7db4626b742",
"assets/assets/searchPain/independance/2.png": "d9b9388934231d0355c88197ff694edd",
"assets/assets/searchPain/independance/3.jpg": "e3224d3005be483d65e654bc281f6507",
"assets/assets/searchPain/independance/4.jpg": "f34973c5ad01fb194a6f9f87c818d9b2",
"assets/assets/searchPain/independance/5.png": "f138bbe4b49e81fa9968a086bc399c62",
"assets/assets/searchPain/KABYLE/1.jpg": "c952b9bfa32be0e7f3c5de10a6871880",
"assets/assets/searchPain/KABYLE/2.jpg": "e1720189c89d5eabffc65bc4b6603035",
"assets/assets/searchPain/KABYLE/3.jpg": "2e76cd13b58f16aa7319f7281a14e6da",
"assets/assets/searchPain/KABYLE/4.jpg": "fe3028f5805e684cd96ca54516207e28",
"assets/assets/searchPain/KABYLE/5.jpg": "cb090b559711b2837a0439e549cbc3f8",
"assets/assets/searchPain/KABYLE/6.png": "af8c45c326909d728a67a74e7646f5d1",
"assets/assets/searchPain/karako/1.jpg": "1a92b9a79ae192c6f8824349c6e1678f",
"assets/assets/searchPain/karako/2.jpg": "abe830acf8875c434da457e1930b67af",
"assets/assets/searchPain/karako/3.jpg": "37abc22785abf1170b022914f861ae8b",
"assets/assets/searchPain/karako/4.jpg": "6ef105cd6698b6b28181cacafd6b0bce",
"assets/assets/searchPain/karako/5.jpg": "ec7d649b6858d710d5bf69bed0a77115",
"assets/assets/searchPain/karako/6.jpg": "f282bca40eb671d1a6d74dfc55deda65",
"assets/assets/searchPain/koskos/1.jpg": "8736b2c36e3e9dda8621fb7bee576bc1",
"assets/assets/searchPain/koskos/2.jpeg": "bc6c4e9dd1edb8bfa0ed8c38be12ffd6",
"assets/assets/searchPain/koskos/3.jpg": "a1c0a0996f94a14a7910ba3c41355a3c",
"assets/assets/searchPain/koskos/4.png": "e37ac86bb279dd61b16e478676f4bf56",
"assets/assets/searchPain/koskos/6.jpg": "a1c0a0996f94a14a7910ba3c41355a3c",
"assets/assets/searchPain/Maroquinerietraditionnelle/1.jpg": "40505acdd33b92459d88f6841f1db9be",
"assets/assets/searchPain/Maroquinerietraditionnelle/2.jpg": "c3ac83697255e2c2b8794a23009bb718",
"assets/assets/searchPain/Maroquinerietraditionnelle/3.jpg": "199298aeca48f9372588042d8cb16976",
"assets/assets/searchPain/Maroquinerietraditionnelle/4.jpg": "875a2dc77d4615359e7231800065bdf7",
"assets/assets/searchPain/Maroquinerietraditionnelle/5.jpg": "74cef5f7bc908a855507c589d1991446",
"assets/assets/searchPain/Maroquinerietraditionnelle/6.jpg": "197bd781a7fd6efaf0fa1976ccced4f5",
"assets/assets/searchPain/musicAndalous/1.jpg": "529999b1d0df02deb70d506063ab1227",
"assets/assets/searchPain/musicAndalous/2.jpg": "c2730a7dd2ac16786d6fc0698319499a",
"assets/assets/searchPain/musicAndalous/3.jpg": "e13e771bd4f737eb5ce91360c298d320",
"assets/assets/searchPain/musicAndalous/4.jpg": "b11a61ad7213d5188fadb26bf0950d28",
"assets/assets/searchPain/musicAndalous/5.jpg": "55a50634a28cb57ae08d52f87cb5651f",
"assets/assets/searchPain/musicAndalous/6.png": "711ce263216d85747cd8e1fbce3325e5",
"assets/assets/searchPain/mzab/1.jpg": "3113e317e18fff7d90cbdfa0e63bdae5",
"assets/assets/searchPain/mzab/2.jpg": "f034161e9dd9166ba28e5c2eec5f3935",
"assets/assets/searchPain/mzab/3.jpg": "b3076b7571be241fed92f2f8b2bd26ad",
"assets/assets/searchPain/mzab/4.jpg": "7ebff529342b6f76eed41098d64bd86a",
"assets/assets/searchPain/mzab/5.png": "1a3bb73997a1ecd40f23eddcf8903174",
"assets/assets/searchPain/mzab/6.jpg": "503570bd708a8400229586f83600f9c2",
"assets/assets/searchPain/NAILI/1.jpg": "d31abef605e78fb061d3d156017e8aa5",
"assets/assets/searchPain/NAILI/2.jpg": "a2776293da861bcd88f536c0185f3e22",
"assets/assets/searchPain/NAILI/3.jpg": "ac2ccefbf2e2524036a6b82a86ea9517",
"assets/assets/searchPain/NAILI/4.png": "c96ce47e0a05053d4abbdc342d22a322",
"assets/assets/searchPain/NAILI/6.jpg": "91189f442d731b72cb6a6b6006881b94",
"assets/assets/searchPain/NAILI/6.png": "2ef46b4f873149c753c72bdf57c5a779",
"assets/assets/searchPain/ParcNationaldeGouraya/1.jpg": "98dee51fba5bb334b004a8203ac16744",
"assets/assets/searchPain/ParcNationaldeGouraya/2.jpg": "46159665c439ef728ebde38969346c32",
"assets/assets/searchPain/ParcNationaldeGouraya/3.jpg": "0af918b025f65e77913b1c2f273f5a50",
"assets/assets/searchPain/ParcNationaldeGouraya/4.jpg": "29e80658a636659a700b8cc9f9ccb5b3",
"assets/assets/searchPain/ParcNationaldeGouraya/6.jpg": "934f5a163c88b3d96685378b625cb19e",
"assets/assets/searchPain/ParcNationalduDjurdjura/1.png": "f2333483a2f54b6d68d4883d318fea25",
"assets/assets/searchPain/ParcNationalduDjurdjura/2.jpg": "a8dc6041a77823a51baff88b1f9ba875",
"assets/assets/searchPain/ParcNationalduDjurdjura/3.png": "9a4d455bccd050e18863ac14c3b94859",
"assets/assets/searchPain/ParcNationalduDjurdjura/4.png": "a6409108690b01c9eaef8ee22ee1537b",
"assets/assets/searchPain/ParcNationalduDjurdjura/5.png": "59588cfba39ffd814e5e9d6468193ab7",
"assets/assets/searchPain/ParcNationalduDjurdjura/6.jpeg": "953b6ba38fa6c0decba3dd0af1278e08",
"assets/assets/searchPain/ParcNationalduTassilinAjjer/1.jpg": "998cad3f749e991229159b9d79a70aa8",
"assets/assets/searchPain/ParcNationalduTassilinAjjer/2.jpg": "81b73c63c807f6d4daca6e115f3624a5",
"assets/assets/searchPain/ParcNationalduTassilinAjjer/3.jpg": "6133686a580ee8778cdf785eab4ca49e",
"assets/assets/searchPain/ParcNationalduTassilinAjjer/4.jpg": "31caca2f052829a86522bda7fef933c8",
"assets/assets/searchPain/ParcNationalduTassilinAjjer/5.jpg": "58cafb2599ff31aba40f42971f26634f",
"assets/assets/searchPain/ParcNationalduTassilinAjjer/6.jpg": "da32088741af4f9cfdbd3de50e8e4777",
"assets/assets/searchPain/ParcNationalElKala/1.jpg": "671dad3326d8e01e1e92a0ca081d5a8b",
"assets/assets/searchPain/ParcNationalElKala/2.jpg": "0677bd798f74409ebf441b4381b3b8f5",
"assets/assets/searchPain/ParcNationalElKala/3.jpg": "3e34ad7c7915dc6d99fa211f1b015bb3",
"assets/assets/searchPain/ParcNationalElKala/4.jpg": "7f8827a2f5df912acda9c147c642a620",
"assets/assets/searchPain/ParcNationalElKala/5.png": "b4e9cdd8becd13d14a075f64f383772f",
"assets/assets/searchPain/ParcNationalElKala/6.png": "142e1f9a5015f027facc8dd9da63fe3c",
"assets/assets/searchPain/poterie/1.jpg": "9a7e515f11d8f593015323f0e243df35",
"assets/assets/searchPain/poterie/2.jpg": "77a72e1e8d92b4089ff08cd923308e53",
"assets/assets/searchPain/poterie/3.jpg": "3695bc19acc37f7df9d1cf0dde901128",
"assets/assets/searchPain/poterie/4.jpg": "41500ec43287ca7e914ba88094ef0b03",
"assets/assets/searchPain/poterie/5.jpg": "dc64d7d01bb2ba016bdecb1e4b8deeb4",
"assets/assets/searchPain/poterie/6.jpg": "e0a9bbdd17ba036bbd27c1f4e761e2c2",
"assets/assets/searchPain/rechta/1.png": "b2097efd673660ac451fdecaff2e1384",
"assets/assets/searchPain/rechta/2.jpg": "cdfec563184712c8b44c363fe590db7d",
"assets/assets/searchPain/rechta/3.jpg": "e292c6e08895b79d3afda3b082dfab0a",
"assets/assets/searchPain/rechta/4.png": "c931ae75e5a869cc4efd1897cb3e5027",
"assets/assets/searchPain/rechta/5.jpg": "4ff87d85506fc95743f21aeeca760736",
"assets/assets/searchPain/rechta/6.jpg": "32ce12f530e93ad80ff7367a0898ad95",
"assets/assets/searchPain/revolution/1.jpg": "7e752aeab640c4fa6b62e138a26b22a8",
"assets/assets/searchPain/revolution/2.png": "6a76a2f5afe2dd2ea6aa21762b84c804",
"assets/assets/searchPain/revolution/3.jpg": "b97426da2a924e57b9768885df6c86e8",
"assets/assets/searchPain/revolution/4.png": "1a017796cb497ca511a20c8985fefef1",
"assets/assets/searchPain/revolution/5.png": "be5420183b27d01ff84c5d6037dffe38",
"assets/assets/searchPain/revolution/6.jpg": "f64df479fc774954c95ce64e00d257cc",
"assets/assets/searchPain/Tapistraditionnels/1.jpg": "648227d5b8d39942fe541a312ebea4a6",
"assets/assets/searchPain/Tapistraditionnels/2.jpg": "56cc6857fa86334f904d90ff71393c4b",
"assets/assets/searchPain/Tapistraditionnels/3.jpg": "cc9e3f27c7cd3ef561e3d66dc64ea818",
"assets/assets/searchPain/Tapistraditionnels/4.jpg": "96f296c5be96b5efb50af602a0575434",
"assets/assets/searchPain/Tapistraditionnels/5.jpg": "13da18c3972fb84c34d6b2c2598cf2b6",
"assets/assets/searchPain/Tapistraditionnels/6.jpg": "8e71a9ad47f1530301f72b1bc58ac604",
"assets/assets/searchPain/timgad/1.jpg": "072a9ccd40165583f95d212c86911781",
"assets/assets/searchPain/timgad/2.jpg": "1f3ffd4e948fc630a757ddaac443f208",
"assets/assets/searchPain/timgad/3.jpg": "c9ff26b9eed92efdaddc34fe885c32d4",
"assets/assets/searchPain/timgad/4.png": "eb4d73c0d6804bcae465d575947cf757",
"assets/assets/searchPain/tipasa/1.png": "713608448b6e88c0086a1f6331d17b50",
"assets/assets/searchPain/tipasa/2.png": "50669e2b206a990815fedef896a1ed13",
"assets/assets/searchPain/tipasa/3.png": "87186e7218382551033cd720ee264e8b",
"assets/assets/searchPain/tipasa/4.png": "50669e2b206a990815fedef896a1ed13",
"assets/assets/searchPain/tipasa/5.png": "87ed08df92ed7e1be094e08d74326f98",
"assets/assets/searchPain/tipasa/6.png": "87186e7218382551033cd720ee264e8b",
"assets/assets/searchPain/TLEMCENI/1.jpg": "5a23dc6e949fb56a57620c8e4ca4da09",
"assets/assets/searchPain/TLEMCENI/2.jpg": "2d798ce6184152c79fdf367235913969",
"assets/assets/searchPain/TLEMCENI/3.jpg": "00fe4a56a3c073c944c47122d5f29832",
"assets/assets/searchPain/TLEMCENI/4.jpg": "598da2a4b81f476a54abc4703b17f92c",
"assets/assets/searchPain/TLEMCENI/5.jpg": "cb4101e5671dd119161caf167a8dd3de",
"assets/assets/searchPain/TLEMCENI/6.jpg": "5f234cda16fbec504d74f4c7ccf67e34",
"assets/assets/searchPain/yanayer/1.jpg": "4565ceefd4b41c8b0f861b56d862f55f",
"assets/assets/searchPain/yanayer/2.jpg": "e34a2e7621920fb2360f18b1792c113d",
"assets/assets/searchPain/yanayer/3.jpg": "e0c1e75380c7d5f7b0ddea9866b121f7",
"assets/assets/searchPain/yanayer/4.jpg": "070196bc313ada23f0fa0f6ce2b7b132",
"assets/assets/searchPain/yanayer/5.jpg": "f18950f27a7853891a4b1b95c8722eb4",
"assets/assets/searchPain/yanayer/6.jpg": "17d8a3c2f41f24eafc8aefb281fc988f",
"assets/assets/searchPain/zfiti/1.png": "64d2cad79c4f2edd6fd37aac49189124",
"assets/assets/searchPain/zfiti/2.jpg": "e28b6242bd66537352ccf26bd98dbe43",
"assets/assets/searchPain/zfiti/3.jpeg": "899538999d647cd8aa2a3778b0f63943",
"assets/assets/searchPain/zfiti/4.jpg": "74f8035d157d939359a0c694117692a7",
"assets/assets/searchPain/zfiti/5.jpg": "d148ea54c4b51c5d7f56c26eddd833ef",
"assets/assets/searchPain/zfiti/6.jpg": "ec971955c0aba610bc7ffb5d77cb3381",
"assets/assets/slides/Asset1.png": "f5409300b98fb3a375c1e95705f46f75",
"assets/assets/slides/Asset2.png": "ee74ab5e2a417aae86438ab350e56914",
"assets/assets/slides/Asset3.png": "806dadb91da1a20a4b9df70f5b8a0459",
"assets/assets/slides/Asset4.png": "ea4898b205319d3e04b290ed7920e1ad",
"assets/assets/slides/Asset5.png": "9196290effe863ad7fc610b0a2c3f400",
"assets/assets/slides/Asset6.png": "4ce826f28411a01e73ebbcb7e1142047",
"assets/assets/slides/Asset7.png": "18525a67bc87a8cb3d9f9b96468f3ca5",
"assets/assets/slides/Asset8.png": "9de75041cc80ffe07b667fab6d7b30a0",
"assets/assets/slides_big/Asset1.png": "cd07bcdece3c9f84e5650302ddd39436",
"assets/assets/slides_big/Asset2.png": "0b449fe0d2169c0c97fe10871d3dfd7a",
"assets/assets/slides_big/Asset3.png": "86f108438b219e94fc4613e533be9ef3",
"assets/assets/slides_big/Asset4.png": "882a500dc414359f43f4b98f3bd3e9a8",
"assets/assets/slides_big/Asset5.png": "7c8788fe396648b6791d59da881e6830",
"assets/assets/slides_big/Asset6.png": "4ada44ad81dde1e1df2fb484a03b0ff4",
"assets/assets/slides_big/Asset7.png": "3431ca1589d86cb26bdd46f22905bc74",
"assets/assets/slides_big/Asset8.png": "eec0066703e4c13ae1abb20aeeafd212",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "352acb4d89ec883f13fd18de842fd6da",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "675975b6de5cd0d51336221ebebbb7c5",
"/": "675975b6de5cd0d51336221ebebbb7c5",
"main.dart.js": "fb67f7f22bdbf89d0d5a88d583d5a8fe",
"manifest.json": "4de18262345fe4959c58e87250503bdc",
"version.json": "8e484d5dcb15803297d742337b921788"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
