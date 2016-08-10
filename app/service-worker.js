/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/DashboardPage/DashboardPage-controller.js","89647300886397fd499b160af0c77011"],["/DashboardPage/DashboardPage-service.js","c1e0bc8e0c3739851f59ed5ece21b6c1"],["/DashboardPage/DashboardPage.html","474f07ab27eb29bcd5498d72452534b0"],["/DataEntryPage/DataEntryPage-controller.js","dfe10a28659510376a62467c5a433ca8"],["/DataEntryPage/DataEntryPage.html","171b8912b070bdf9fa2451b99f84084a"],["/app.js","1528697435f97f29a150a09dcc5bba88"],["/components/PMSAssembled/PMSAssembled-controller.js","0f99f1271676565aa735b270fc716225"],["/components/PMSAssembled/PMSAssembled-directive.js","ff372cd2d4188d596ac6a78ef455e1a3"],["/components/PMSAssembled/PMSAssembled.html","0a1f8e6ef730f120e959b70797447018"],["/components/PMSClinicalCheck/PMSClinicalCheck-controller.js","03e0e864bb0e78192849d0b60864c1bc"],["/components/PMSClinicalCheck/PMSClinicalCheck-directive.js","3d7be44145d6542f0de9c58ab1b3726d"],["/components/PMSClinicalCheck/PMSClinicalCheck.html","56a5d53d3fe14d5ae0486aef89e6ba03"],["/components/PMSClinicalServices/PMSClinicalServices-controller.js","8005c0eb26b25416bc9fad666ab72592"],["/components/PMSClinicalServices/PMSClinicalServices-directive.js","bd0c0bb2b89d76d34433317e6cff4bac"],["/components/PMSClinicalServices/PMSClinicalServices.html","21e63a1abfa2fea61e96d30a9772f7bf"],["/components/PMSConsultation/PMSConsultation-controller.js","56cd4221ea1857e8cc5583dcb9e58cef"],["/components/PMSConsultation/PMSConsultation-directive.js","81595414e908c3f151b04f6116463013"],["/components/PMSConsultation/PMSConsultation.html","135b2515f594f0dfeae5412ff1dd9fb3"],["/components/PMSDataEntry/PMSDataEntry-controller.js","4cbc41ef703c5241659ef5e5755ebbb7"],["/components/PMSDataEntry/PMSDataEntry-directive.js","37ebb002e205c5571af82ff62d64dd73"],["/components/PMSDataEntry/PMSDataEntry.html","29a731b52ea77902d666eb96111c818e"],["/components/PMSDataReview/PMSDataReview-controller.js","d5ae20aa1db2d72eb53ef3c636c0c82d"],["/components/PMSDataReview/PMSDataReview-directive.js","5b7a81ea6267cc26497050fbfec99b3e"],["/components/PMSDataReview/PMSDataReview.html","da12006e83812ffae4b89795067bd080"],["/components/PMSHeader/PMSHeader-controller.js","6262c87d81a5390cc4ea470e09913c52"],["/components/PMSHeader/PMSHeader-directive.js","14de4dbadc5c241320d4a8065640f070"],["/components/PMSHeader/PMSHeader.html","d8cf0a767d86e67dbaf6e18dcb91ac50"],["/components/PMSIe/PMSIe-controller.js","6b9bf823338ae89e81dca0a471703e80"],["/components/PMSIe/PMSIe-directive.js","daf8f537b7af4105e1d640145e3e9b04"],["/components/PMSIe/PMSIe.html","96647ba2648924ac32860a3452f5adef"],["/components/PMSPickupPreference/PMSPickupPreference-controller.js","a6a3f1d9b7a07913cacd557638159473"],["/components/PMSPickupPreference/PMSPickupPreference-directive.js","4ae23231393ba8a6b70d28a13a67ef88"],["/components/PMSPickupPreference/PMSPickupPreference.html","cb75c08b1666c7209df43851e7443df9"],["/components/PMSProductReview/PMSProductReview-controller.js","31e115e18f4e1cd5af4dfde2457a17de"],["/components/PMSProductReview/PMSProductReview-directive.js","57a5f5040c26117004022e30ae5520ed"],["/components/PMSProductReview/PMSProductReview.html","de84c27b8addf300ed459d8f32e97f67"],["/components/PMSRa/PMSRa-controller.js","2f4952b518bc59773332b172416ed151"],["/components/PMSRa/PMSRa-directive.js","effada7362991a5909611329d3ff068b"],["/components/PMSRa/PMSRa.html","effdfae1793641d67e103b21641d8892"],["/components/PMSRxInProgress/PMSRxInProgress-controller.js","0a61e515ba30318840bf62cf65fe04f2"],["/components/PMSRxInProgress/PMSRxInProgress-directive.js","a13f7458a602c16955b4b0d4acd45209"],["/components/PMSRxInProgress/PMSRxInProgress.html","81d79700265815ed1e2bfa99a5cfa236"],["/components/PMSSearchBar/PMSSearchBar-controller.js","995dfacf5092eec8b12b01c412f9a4e3"],["/components/PMSSearchBar/PMSSearchBar-directive.js","491b6b762bea3db151490dc2e61bf075"],["/components/PMSSearchBar/PMSSearchBar.html","637a217d6ef861426955cbb14a17a177"],["/components/PMSToDo/PMSToDo-controller.js","ede9f0a9758a3a8f2b97899b7137080c"],["/components/PMSToDo/PMSToDo-directive.js","7a1c03b38102ad5658dee2f8c5aa544b"],["/components/PMSToDo/PMSToDo.html","e1b2ba5d55b47acdc8aae3dc301e5dfa"],["/components/PMSTph/PMSTph-controller.js","e5f318eb01ddee18af218141856ef4cf"],["/components/PMSTph/PMSTph-directive.js","746315201c9226994f5cb756403aac19"],["/components/PMSTph/PMSTph.html","14f6ddfac103e44c5ec5ba1f93ef5c79"],["/components/lib/vendor/angular-ui-router.js","749a18f80f375e3049975f190a7bfc4e"],["/components/lib/vendor/angular.js","d6cb8cc8c593edba5fb72d317f97f918"],["/components/lib/vendor/bootstrap.min.js","fb0e635db142b1b9fce20fe2370ec6cc"],["/components/lib/vendor/chart.js","17e47f46cb35fccddde8329a25862180"],["/components/lib/vendor/jquery.min.js","8e67452f561a3b8ee8a82fdf57672cd5"],["/components/lib/vendor/moment.min.js","3a22f0762c13e6872a54c65fd03e8b02"],["/components/lib/vendor/tc-angular-chartjs.js","f6b33d2922564431527bffe4857521d7"],["/css/bootstrap.min.css","b4076bd227322219236d2cfcba596d4a"],["/css/styles.css","d1c4810787383c3f163e69dbc133fecb"],["/images/add-presc.png","88d1125b642b229fb9bd54d2689dc1df"],["/images/back.png","a1546aa0cf03c4fccf7464a4c3452fbc"],["/images/checklist.png","a981b8844f81cb6c8e749e7654cde33a"],["/images/diamond.png","c0afa5c93bc192c9b269783eb9e5c67e"],["/images/dnut-lgnd-left.png","daf6228c96790080524ef7ec633e2af2"],["/images/dnut-lgnd-right.png","0af52f16b0c25c3fedad5e810fe59742"],["/images/icons/icon-128x128.png","b1b0f7b8adb5bb5568c370b1c8af29e9"],["/images/icons/icon-144x144.png","928538579a59f24888281462ce75ef7a"],["/images/icons/icon-152x152.png","300cd90366750e4abbab2205d219624e"],["/images/icons/icon-192x192.png","ac65b2a8d6e7ad80fdab29f76edd91c7"],["/images/icons/icon-256x256.png","827577d4371bd0c83789fac7a2fe1546"],["/images/icons/icon-32x32.png","940d8b2f15cc3bee9e6997f9408bbea7"],["/images/img-tool1.png","7cf3889dca7b5cba4d0f9d0bae4f4a3a"],["/images/img-tool2.png","755cb0465deeedfeae761b78d985a380"],["/images/img-tool3.png","aa81218a4b5505ecee03199886c17720"],["/images/img-tool4.png","bad49e9190a43ff9fd18249920dc8b6d"],["/images/img-tool5.png","46e2aa90c92f858a4221c71eec6d64ab"],["/images/img-tool6.png","7b952e7cf4e830bfc0907f269153ab85"],["/images/img-tool7.png","7c6c0f4953d2cabd00c26ae91fd91ee5"],["/images/img-tool8.png","2b10998aa34f6517987338b28340a406"],["/images/line.png","72a93905636b3bf82f272f899cf968b3"],["/images/next.png","e883159845b5b7bfc7312ba520bbac54"],["/images/online-status.png","478b3903ca11c8380b72047275bf814a"],["/images/pie-chart.png","524a1f8c854a77b332c7437692e42b38"],["/images/pms-logo.png","1cf9fe113c1de60f055c7cd3403f35fa"],["/images/prev.png","c79dab0825b4aa09bc2f486690ed589f"],["/images/rx-img.jpg","17f8ae32d68d6c1924cb46d6c3e0cb09"],["/images/triangle-yellow.png","9a5cf967e449a90efdd88a9dd23861a9"],["/images/triangle.png","43cbfcca202a569a05a4835cb471e509"],["/index.html","12e76c7d56c673a500e322e903073f3a"],["/manifest.json","fae9c0ce22439aa965bd56ca3158065a"]];
var cacheName = 'sw-precache-v2--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {credentials: 'same-origin'}));
            }
          })
        );
      });
    }).then(function() {
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      return self.clients.claim();
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url));
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







