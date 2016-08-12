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

var precacheConfig = [["/DashboardPage/DashboardPage-controller.js","89647300886397fd499b160af0c77011"],["/DashboardPage/DashboardPage-service.js","3888c6f12ea488a5bfdef3f66c28fd7c"],["/DashboardPage/DashboardPage.html","474f07ab27eb29bcd5498d72452534b0"],["/DataEntryPage/DataEntryPage-controller.js","dfe10a28659510376a62467c5a433ca8"],["/DataEntryPage/DataEntryPage.html","171b8912b070bdf9fa2451b99f84084a"],["/app.js","1528697435f97f29a150a09dcc5bba88"],["/components/PMSAssembled/PMSAssembled-controller.js","0f99f1271676565aa735b270fc716225"],["/components/PMSAssembled/PMSAssembled-directive.js","ff372cd2d4188d596ac6a78ef455e1a3"],["/components/PMSAssembled/PMSAssembled.html","0a1f8e6ef730f120e959b70797447018"],["/components/PMSClinicalCheck/PMSClinicalCheck-controller.js","62b0f00c920b27f0fb8146d9e65810bb"],["/components/PMSClinicalCheck/PMSClinicalCheck-directive.js","3d7be44145d6542f0de9c58ab1b3726d"],["/components/PMSClinicalCheck/PMSClinicalCheck.html","56a5d53d3fe14d5ae0486aef89e6ba03"],["/components/PMSClinicalServices/PMSClinicalServices-controller.js","8005c0eb26b25416bc9fad666ab72592"],["/components/PMSClinicalServices/PMSClinicalServices-directive.js","bd0c0bb2b89d76d34433317e6cff4bac"],["/components/PMSClinicalServices/PMSClinicalServices.html","21e63a1abfa2fea61e96d30a9772f7bf"],["/components/PMSConsultation/PMSConsultation-controller.js","56cd4221ea1857e8cc5583dcb9e58cef"],["/components/PMSConsultation/PMSConsultation-directive.js","81595414e908c3f151b04f6116463013"],["/components/PMSConsultation/PMSConsultation.html","135b2515f594f0dfeae5412ff1dd9fb3"],["/components/PMSDataEntry/PMSDataEntry-controller.js","cd75bef8da25a2b9d9d05fcf9bdd1137"],["/components/PMSDataEntry/PMSDataEntry-directive.js","37ebb002e205c5571af82ff62d64dd73"],["/components/PMSDataEntry/PMSDataEntry.html","29a731b52ea77902d666eb96111c818e"],["/components/PMSDataReview/PMSDataReview-controller.js","d5ae20aa1db2d72eb53ef3c636c0c82d"],["/components/PMSDataReview/PMSDataReview-directive.js","5b7a81ea6267cc26497050fbfec99b3e"],["/components/PMSDataReview/PMSDataReview.html","da12006e83812ffae4b89795067bd080"],["/components/PMSHeader/PMSHeader-controller.js","787561d9c187fc1d3110fb3b4551df80"],["/components/PMSHeader/PMSHeader-directive.js","14de4dbadc5c241320d4a8065640f070"],["/components/PMSHeader/PMSHeader.html","d8cf0a767d86e67dbaf6e18dcb91ac50"],["/components/PMSIe/PMSIe-controller.js","6b9bf823338ae89e81dca0a471703e80"],["/components/PMSIe/PMSIe-directive.js","daf8f537b7af4105e1d640145e3e9b04"],["/components/PMSIe/PMSIe.html","96647ba2648924ac32860a3452f5adef"],["/components/PMSPickupPreference/PMSPickupPreference-controller.js","a6a3f1d9b7a07913cacd557638159473"],["/components/PMSPickupPreference/PMSPickupPreference-directive.js","4ae23231393ba8a6b70d28a13a67ef88"],["/components/PMSPickupPreference/PMSPickupPreference.html","cb75c08b1666c7209df43851e7443df9"],["/components/PMSProductReview/PMSProductReview-controller.js","31e115e18f4e1cd5af4dfde2457a17de"],["/components/PMSProductReview/PMSProductReview-directive.js","57a5f5040c26117004022e30ae5520ed"],["/components/PMSProductReview/PMSProductReview.html","de84c27b8addf300ed459d8f32e97f67"],["/components/PMSRa/PMSRa-controller.js","2f4952b518bc59773332b172416ed151"],["/components/PMSRa/PMSRa-directive.js","effada7362991a5909611329d3ff068b"],["/components/PMSRa/PMSRa.html","effdfae1793641d67e103b21641d8892"],["/components/PMSRxInProgress/PMSRxInProgress-controller.js","0c8bc272574264ef222feca5abb3e9c2"],["/components/PMSRxInProgress/PMSRxInProgress-directive.js","a13f7458a602c16955b4b0d4acd45209"],["/components/PMSRxInProgress/PMSRxInProgress.html","81d79700265815ed1e2bfa99a5cfa236"],["/components/PMSSearchBar/PMSSearchBar-controller.js","995dfacf5092eec8b12b01c412f9a4e3"],["/components/PMSSearchBar/PMSSearchBar-directive.js","491b6b762bea3db151490dc2e61bf075"],["/components/PMSSearchBar/PMSSearchBar.html","637a217d6ef861426955cbb14a17a177"],["/components/PMSToDo/PMSToDo-controller.js","89b11ba4aead042285ec5b6eb4e741b0"],["/components/PMSToDo/PMSToDo-directive.js","7a1c03b38102ad5658dee2f8c5aa544b"],["/components/PMSToDo/PMSToDo.html","e1b2ba5d55b47acdc8aae3dc301e5dfa"],["/components/PMSTph/PMSTph-controller.js","e5f318eb01ddee18af218141856ef4cf"],["/components/PMSTph/PMSTph-directive.js","746315201c9226994f5cb756403aac19"],["/components/PMSTph/PMSTph.html","14f6ddfac103e44c5ec5ba1f93ef5c79"],["/components/lib/vendor/angular-ui-router.js","749a18f80f375e3049975f190a7bfc4e"],["/components/lib/vendor/angular.js","d6cb8cc8c593edba5fb72d317f97f918"],["/components/lib/vendor/bootstrap.min.js","fb0e635db142b1b9fce20fe2370ec6cc"],["/components/lib/vendor/chart.js","17e47f46cb35fccddde8329a25862180"],["/components/lib/vendor/jquery.min.js","8e67452f561a3b8ee8a82fdf57672cd5"],["/components/lib/vendor/moment.min.js","3a22f0762c13e6872a54c65fd03e8b02"],["/components/lib/vendor/tc-angular-chartjs.js","f6b33d2922564431527bffe4857521d7"],["/css/bootstrap.min.css","b4076bd227322219236d2cfcba596d4a"],["/css/styles.css","d1c4810787383c3f163e69dbc133fecb"],["/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/fonts/glyphicons-halflings-regular.svg","f721466883998665b87923b92dea655b"],["/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/images/add-presc.png","88d1125b642b229fb9bd54d2689dc1df"],["/images/back.png","a1546aa0cf03c4fccf7464a4c3452fbc"],["/images/checklist.png","a981b8844f81cb6c8e749e7654cde33a"],["/images/diamond.png","c0afa5c93bc192c9b269783eb9e5c67e"],["/images/dnut-lgnd-left.png","daf6228c96790080524ef7ec633e2af2"],["/images/dnut-lgnd-right.png","0af52f16b0c25c3fedad5e810fe59742"],["/images/icons/icon-128x128.png","b1b0f7b8adb5bb5568c370b1c8af29e9"],["/images/icons/icon-144x144.png","928538579a59f24888281462ce75ef7a"],["/images/icons/icon-152x152.png","300cd90366750e4abbab2205d219624e"],["/images/icons/icon-192x192.png","ac65b2a8d6e7ad80fdab29f76edd91c7"],["/images/icons/icon-256x256.png","827577d4371bd0c83789fac7a2fe1546"],["/images/icons/icon-32x32.png","940d8b2f15cc3bee9e6997f9408bbea7"],["/images/img-tool1.png","7cf3889dca7b5cba4d0f9d0bae4f4a3a"],["/images/img-tool2.png","755cb0465deeedfeae761b78d985a380"],["/images/img-tool3.png","aa81218a4b5505ecee03199886c17720"],["/images/img-tool4.png","bad49e9190a43ff9fd18249920dc8b6d"],["/images/img-tool5.png","46e2aa90c92f858a4221c71eec6d64ab"],["/images/img-tool6.png","7b952e7cf4e830bfc0907f269153ab85"],["/images/img-tool7.png","7c6c0f4953d2cabd00c26ae91fd91ee5"],["/images/img-tool8.png","2b10998aa34f6517987338b28340a406"],["/images/line.png","72a93905636b3bf82f272f899cf968b3"],["/images/next.png","e883159845b5b7bfc7312ba520bbac54"],["/images/online-status.png","478b3903ca11c8380b72047275bf814a"],["/images/pie-chart.png","524a1f8c854a77b332c7437692e42b38"],["/images/pms-logo.png","1cf9fe113c1de60f055c7cd3403f35fa"],["/images/prev.png","c79dab0825b4aa09bc2f486690ed589f"],["/images/rx-img.jpg","17f8ae32d68d6c1924cb46d6c3e0cb09"],["/images/triangle-yellow.png","9a5cf967e449a90efdd88a9dd23861a9"],["/images/triangle.png","43cbfcca202a569a05a4835cb471e509"],["/index.html","9d3990721ed2d4b18a72965853d74c01"],["/service-worker-registration.js","942a2a286db47a981884c61d0d7e71b6"]];
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


// *** Start of auto-included sw-toolbox code. ***
/*
  Copyright 2014 Google Inc. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.toolbox = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";function debug(e,n){n=n||{};var t=n.debug||globalOptions.debug;t&&console.log("[sw-toolbox] "+e)}function openCache(e){var n;return e&&e.cache&&(n=e.cache.name),n=n||globalOptions.cache.name,caches.open(n)}function fetchAndCache(e,n){n=n||{};var t=n.successResponses||globalOptions.successResponses;return fetch(e.clone()).then(function(c){return"GET"===e.method&&t.test(c.status)&&openCache(n).then(function(t){t.put(e,c).then(function(){var c=n.cache||globalOptions.cache;(c.maxEntries||c.maxAgeSeconds)&&c.name&&queueCacheExpiration(e,t,c)})}),c.clone()})}function queueCacheExpiration(e,n,t){var c=cleanupCache.bind(null,e,n,t);cleanupQueue=cleanupQueue?cleanupQueue.then(c):c()}function cleanupCache(e,n,t){var c=e.url,a=t.maxAgeSeconds,u=t.maxEntries,o=t.name,r=Date.now();return debug("Updating LRU order for "+c+". Max entries is "+u+", max age is "+a),idbCacheExpiration.getDb(o).then(function(e){return idbCacheExpiration.setTimestampForUrl(e,c,r)}).then(function(e){return idbCacheExpiration.expireEntries(e,u,a,r)}).then(function(e){debug("Successfully updated IDB.");var t=e.map(function(e){return n["delete"](e)});return Promise.all(t).then(function(){debug("Done with cache cleanup.")})})["catch"](function(e){debug(e)})}function renameCache(e,n,t){return debug("Renaming cache: ["+e+"] to ["+n+"]",t),caches["delete"](n).then(function(){return Promise.all([caches.open(e),caches.open(n)]).then(function(n){var t=n[0],c=n[1];return t.keys().then(function(e){return Promise.all(e.map(function(e){return t.match(e).then(function(n){return c.put(e,n)})}))}).then(function(){return caches["delete"](e)})})})}var globalOptions=require("./options"),idbCacheExpiration=require("./idb-cache-expiration"),cleanupQueue;module.exports={debug:debug,fetchAndCache:fetchAndCache,openCache:openCache,renameCache:renameCache};
},{"./idb-cache-expiration":2,"./options":3}],2:[function(require,module,exports){
"use strict";function openDb(e){return new Promise(function(r,n){var t=indexedDB.open(DB_PREFIX+e,DB_VERSION);t.onupgradeneeded=function(){var e=t.result.createObjectStore(STORE_NAME,{keyPath:URL_PROPERTY});e.createIndex(TIMESTAMP_PROPERTY,TIMESTAMP_PROPERTY,{unique:!1})},t.onsuccess=function(){r(t.result)},t.onerror=function(){n(t.error)}})}function getDb(e){return e in cacheNameToDbPromise||(cacheNameToDbPromise[e]=openDb(e)),cacheNameToDbPromise[e]}function setTimestampForUrl(e,r,n){return new Promise(function(t,o){var i=e.transaction(STORE_NAME,"readwrite"),u=i.objectStore(STORE_NAME);u.put({url:r,timestamp:n}),i.oncomplete=function(){t(e)},i.onabort=function(){o(i.error)}})}function expireOldEntries(e,r,n){return r?new Promise(function(t,o){var i=1e3*r,u=[],c=e.transaction(STORE_NAME,"readwrite"),s=c.objectStore(STORE_NAME),a=s.index(TIMESTAMP_PROPERTY);a.openCursor().onsuccess=function(e){var r=e.target.result;if(r&&n-i>r.value[TIMESTAMP_PROPERTY]){var t=r.value[URL_PROPERTY];u.push(t),s["delete"](t),r["continue"]()}},c.oncomplete=function(){t(u)},c.onabort=o}):Promise.resolve([])}function expireExtraEntries(e,r){return r?new Promise(function(n,t){var o=[],i=e.transaction(STORE_NAME,"readwrite"),u=i.objectStore(STORE_NAME),c=u.index(TIMESTAMP_PROPERTY),s=c.count();c.count().onsuccess=function(){var e=s.result;e>r&&(c.openCursor().onsuccess=function(n){var t=n.target.result;if(t){var i=t.value[URL_PROPERTY];o.push(i),u["delete"](i),e-o.length>r&&t["continue"]()}})},i.oncomplete=function(){n(o)},i.onabort=t}):Promise.resolve([])}function expireEntries(e,r,n,t){return expireOldEntries(e,n,t).then(function(n){return expireExtraEntries(e,r).then(function(e){return n.concat(e)})})}var DB_PREFIX="sw-toolbox-",DB_VERSION=1,STORE_NAME="store",URL_PROPERTY="url",TIMESTAMP_PROPERTY="timestamp",cacheNameToDbPromise={};module.exports={getDb:getDb,setTimestampForUrl:setTimestampForUrl,expireEntries:expireEntries};
},{}],3:[function(require,module,exports){
"use strict";var scope;scope=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,module.exports={cache:{name:"$$$toolbox-cache$$$"+scope+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/};
},{}],4:[function(require,module,exports){
"use strict";var url=new URL("./",self.location),basePath=url.pathname,pathRegexp=require("path-to-regexp"),Route=function(e,t,i,s){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=basePath+t),this.keys=[],this.regexp=pathRegexp(t,this.keys)),this.method=e,this.options=s,this.handler=i};Route.prototype.makeHandler=function(e){var t;if(this.regexp){var i=this.regexp.exec(e);t={},this.keys.forEach(function(e,s){t[e.name]=i[s+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},module.exports=Route;
},{"path-to-regexp":14}],5:[function(require,module,exports){
"use strict";function regexEscape(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var Route=require("./route"),keyMatch=function(e,t){for(var r=e.entries(),o=r.next(),n=[];!o.done;){var u=new RegExp(o.value[0]);u.test(t)&&n.push(o.value[1]),o=r.next()}return n},Router=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this["default"]=null};["get","post","put","delete","head","any"].forEach(function(e){Router.prototype[e]=function(t,r,o){return this.add(e,t,r,o)}}),Router.prototype.add=function(e,t,r,o){o=o||{};var n;t instanceof RegExp?n=RegExp:(n=o.origin||self.location.origin,n=n instanceof RegExp?n.source:regexEscape(n)),e=e.toLowerCase();var u=new Route(e,t,r,o);this.routes.has(n)||this.routes.set(n,new Map);var a=this.routes.get(n);a.has(e)||a.set(e,new Map);var s=a.get(e),i=u.regexp||u.fullUrlRegExp;s.set(i.source,u)},Router.prototype.matchMethod=function(e,t){var r=new URL(t),o=r.origin,n=r.pathname;return this._match(e,keyMatch(this.routes,o),n)||this._match(e,[this.routes.get(RegExp)],t)},Router.prototype._match=function(e,t,r){if(0===t.length)return null;for(var o=0;o<t.length;o++){var n=t[o],u=n&&n.get(e.toLowerCase());if(u){var a=keyMatch(u,r);if(a.length>0)return a[0].makeHandler(r)}}return null},Router.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},module.exports=new Router;
},{"./route":4}],6:[function(require,module,exports){
"use strict";function cacheFirst(e,r,t){return helpers.debug("Strategy: cache first ["+e.url+"]",t),helpers.openCache(t).then(function(r){return r.match(e).then(function(r){return r?r:helpers.fetchAndCache(e,t)})})}var helpers=require("../helpers");module.exports=cacheFirst;
},{"../helpers":1}],7:[function(require,module,exports){
"use strict";function cacheOnly(e,r,c){return helpers.debug("Strategy: cache only ["+e.url+"]",c),helpers.openCache(c).then(function(r){return r.match(e)})}var helpers=require("../helpers");module.exports=cacheOnly;
},{"../helpers":1}],8:[function(require,module,exports){
"use strict";function fastest(e,n,t){return helpers.debug("Strategy: fastest ["+e.url+"]",t),new Promise(function(r,s){var c=!1,o=[],a=function(e){o.push(e.toString()),c?s(new Error('Both cache and network failed: "'+o.join('", "')+'"')):c=!0},h=function(e){e instanceof Response?r(e):a("No result returned")};helpers.fetchAndCache(e.clone(),t).then(h,a),cacheOnly(e,n,t).then(h,a)})}var helpers=require("../helpers"),cacheOnly=require("./cacheOnly");module.exports=fastest;
},{"../helpers":1,"./cacheOnly":7}],9:[function(require,module,exports){
module.exports={networkOnly:require("./networkOnly"),networkFirst:require("./networkFirst"),cacheOnly:require("./cacheOnly"),cacheFirst:require("./cacheFirst"),fastest:require("./fastest")};
},{"./cacheFirst":6,"./cacheOnly":7,"./fastest":8,"./networkFirst":10,"./networkOnly":11}],10:[function(require,module,exports){
"use strict";function networkFirst(e,r,t){t=t||{};var s=t.successResponses||globalOptions.successResponses,n=t.networkTimeoutSeconds||globalOptions.networkTimeoutSeconds;return helpers.debug("Strategy: network first ["+e.url+"]",t),helpers.openCache(t).then(function(r){var o,u,i=[];if(n){var c=new Promise(function(t){o=setTimeout(function(){r.match(e).then(function(e){e&&t(e)})},1e3*n)});i.push(c)}var a=helpers.fetchAndCache(e,t).then(function(e){if(o&&clearTimeout(o),s.test(e.status))return e;throw helpers.debug("Response was an HTTP error: "+e.statusText,t),u=e,new Error("Bad response")})["catch"](function(s){return helpers.debug("Network or response error, fallback to cache ["+e.url+"]",t),r.match(e).then(function(e){if(e)return e;if(u)return u;throw s})});return i.push(a),Promise.race(i)})}var globalOptions=require("../options"),helpers=require("../helpers");module.exports=networkFirst;
},{"../helpers":1,"../options":3}],11:[function(require,module,exports){
"use strict";function networkOnly(e,r,t){return helpers.debug("Strategy: network only ["+e.url+"]",t),fetch(e)}var helpers=require("../helpers");module.exports=networkOnly;
},{"../helpers":1}],12:[function(require,module,exports){
"use strict";function cache(e,t){return helpers.openCache(t).then(function(t){return t.add(e)})}function uncache(e,t){return helpers.openCache(t).then(function(t){return t["delete"](e)})}function precache(e){e instanceof Promise||validatePrecacheInput(e),options.preCacheItems=options.preCacheItems.concat(e)}require("serviceworker-cache-polyfill");var options=require("./options"),router=require("./router"),helpers=require("./helpers"),strategies=require("./strategies");helpers.debug("Service Worker Toolbox is loading");var flatten=function(e){return e.reduce(function(e,t){return e.concat(t)},[])},validatePrecacheInput=function(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e};self.addEventListener("install",function(e){var t=options.cache.name+"$$$inactive$$$";helpers.debug("install event fired"),helpers.debug("creating cache ["+t+"]"),e.waitUntil(helpers.openCache({cache:{name:t}}).then(function(e){return Promise.all(options.preCacheItems).then(flatten).then(validatePrecacheInput).then(function(t){return helpers.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}),self.addEventListener("activate",function(e){helpers.debug("activate event fired");var t=options.cache.name+"$$$inactive$$$";e.waitUntil(helpers.renameCache(t,options.cache.name))}),self.addEventListener("fetch",function(e){var t=router.match(e.request);t?e.respondWith(t(e.request)):router["default"]&&"GET"===e.request.method&&e.respondWith(router["default"](e.request))}),module.exports={networkOnly:strategies.networkOnly,networkFirst:strategies.networkFirst,cacheOnly:strategies.cacheOnly,cacheFirst:strategies.cacheFirst,fastest:strategies.fastest,router:router,options:options,cache:cache,uncache:uncache,precache:precache};
},{"./helpers":1,"./options":3,"./router":5,"./strategies":9,"serviceworker-cache-polyfill":15}],13:[function(require,module,exports){
module.exports=Array.isArray||function(r){return"[object Array]"==Object.prototype.toString.call(r)};
},{}],14:[function(require,module,exports){
function parse(e){for(var t,r=[],n=0,o=0,a="";null!=(t=PATH_REGEXP.exec(e));){var p=t[0],i=t[1],s=t.index;if(a+=e.slice(o,s),o=s+p.length,i)a+=i[1];else{var c=e[o],u=t[2],l=t[3],f=t[4],g=t[5],x=t[6],h=t[7];a&&(r.push(a),a="");var d=null!=u&&null!=c&&c!==u,y="+"===x||"*"===x,m="?"===x||"*"===x,R=t[2]||"/",T=f||g||(h?".*":"[^"+R+"]+?");r.push({name:l||n++,prefix:u||"",delimiter:R,optional:m,repeat:y,partial:d,asterisk:!!h,pattern:escapeGroup(T)})}}return o<e.length&&(a+=e.substr(o)),a&&r.push(a),r}function compile(e){return tokensToFunction(parse(e))}function encodeURIComponentPretty(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function encodeAsterisk(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function tokensToFunction(e){for(var t=new Array(e.length),r=0;r<e.length;r++)"object"==typeof e[r]&&(t[r]=new RegExp("^(?:"+e[r].pattern+")$"));return function(r,n){for(var o="",a=r||{},p=n||{},i=p.pretty?encodeURIComponentPretty:encodeURIComponent,s=0;s<e.length;s++){var c=e[s];if("string"!=typeof c){var u,l=a[c.name];if(null==l){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(isarray(l)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var f=0;f<l.length;f++){if(u=i(l[f]),!t[s].test(u))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(u)+"`");o+=(0===f?c.prefix:c.delimiter)+u}}else{if(u=c.asterisk?encodeAsterisk(l):i(l),!t[s].test(u))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+u+'"');o+=c.prefix+u}}else o+=c}return o}}function escapeString(e){return e.replace(/([.+*?=^!:${}()[\]|\/])/g,"\\$1")}function escapeGroup(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function attachKeys(e,t){return e.keys=t,e}function flags(e){return e.sensitive?"":"i"}function regexpToRegexp(e,t){var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return attachKeys(e,t)}function arrayToRegexp(e,t,r){for(var n=[],o=0;o<e.length;o++)n.push(pathToRegexp(e[o],t,r).source);var a=new RegExp("(?:"+n.join("|")+")",flags(r));return attachKeys(a,t)}function stringToRegexp(e,t,r){for(var n=parse(e),o=tokensToRegExp(n,r),a=0;a<n.length;a++)"string"!=typeof n[a]&&t.push(n[a]);return attachKeys(o,t)}function tokensToRegExp(e,t){t=t||{};for(var r=t.strict,n=t.end!==!1,o="",a=e[e.length-1],p="string"==typeof a&&/\/$/.test(a),i=0;i<e.length;i++){var s=e[i];if("string"==typeof s)o+=escapeString(s);else{var c=escapeString(s.prefix),u="(?:"+s.pattern+")";s.repeat&&(u+="(?:"+c+u+")*"),u=s.optional?s.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",o+=u}}return r||(o=(p?o.slice(0,-2):o)+"(?:\\/(?=$))?"),o+=n?"$":r&&p?"":"(?=\\/|$)",new RegExp("^"+o,flags(t))}function pathToRegexp(e,t,r){return t=t||[],isarray(t)?r||(r={}):(r=t,t=[]),e instanceof RegExp?regexpToRegexp(e,t):isarray(e)?arrayToRegexp(e,t,r):stringToRegexp(e,t,r)}var isarray=require("isarray");module.exports=pathToRegexp,module.exports.parse=parse,module.exports.compile=compile,module.exports.tokensToFunction=tokensToFunction,module.exports.tokensToRegExp=tokensToRegExp;var PATH_REGEXP=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^()])+)\\))?|\\(((?:\\\\.|[^()])+)\\))([+*?])?|(\\*))"].join("|"),"g");
},{"isarray":13}],15:[function(require,module,exports){
!function(){var t=Cache.prototype.addAll,e=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(e)var r=e[1],n=parseInt(e[2]);t&&(!e||"Firefox"===r&&n>=46||"Chrome"===r&&n>=50)||(Cache.prototype.addAll=function(t){function e(t){this.name="NetworkError",this.code=19,this.message=t}var r=this;return e.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return t=t.map(function(t){return t instanceof Request?t:String(t)}),Promise.all(t.map(function(t){"string"==typeof t&&(t=new Request(t));var r=new URL(t.url).protocol;if("http:"!==r&&"https:"!==r)throw new e("Invalid scheme");return fetch(t.clone())}))}).then(function(n){if(n.some(function(t){return!t.ok}))throw new e("Incorrect response status");return Promise.all(n.map(function(e,n){return r.put(t[n],e)}))}).then(function(){})},Cache.prototype.add=function(t){return this.addAll([t])})}();
},{}]},{},[12])(12)
});


//# sourceMappingURL=./build/sw-toolbox.map.json
// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get(/https:\/\/demo0434460.mockable.io\//, toolbox.cacheFirst, {"cache":{"name":"dynamic1","maxEntries":4}});




