"use strict";var precacheConfig=[["/Sherryxbw/apptrial/index.html","a2dfd5ba95b519c42b5474b915268d85"],["/Sherryxbw/apptrial/static/css/main.076fc88f.css","cb5182ca000f86d09f8a8957ad541fe7"],["/Sherryxbw/apptrial/static/js/main.ee6eebf8.js","663d10f8f2cfc614924b9fa7d0f7e7de"],["/Sherryxbw/apptrial/static/media/bg5.056eb058.jpg","056eb0586182a8d28273ad11c028e912"],["/Sherryxbw/apptrial/static/media/logo-white.eec7c7f6.svg","eec7c7f60134e712ef7174c96ca7ee5a"],["/Sherryxbw/apptrial/static/media/mike.aab414f7.jpg","aab414f7b69d0d4ad897e75e735f240a"],["/Sherryxbw/apptrial/static/media/nucleo-outline.22a0bffe.ttf","22a0bffe789c286a9d78eb52670996a7"],["/Sherryxbw/apptrial/static/media/nucleo-outline.24e2d6b4.woff","24e2d6b43b1b0f84fdfaa06a4032f154"],["/Sherryxbw/apptrial/static/media/nucleo-outline.53a1bed7.eot","53a1bed7a3ec86d010fe100873828a89"],["/Sherryxbw/apptrial/static/media/nucleo-outline.8ebec31f.woff2","8ebec31f5ce59f908db84d86aed5947f"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,r,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,r){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return r.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,r,/\.\w{8}\./);return[a.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(r){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!r.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var r=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!r.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,r=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,a),e=urlsToCacheKeys.has(r));var n="/Sherryxbw/apptrial/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(r=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(r)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});