var CACHE_NAME = 'DaysUntil-cache-v1';
//let pathroot = '/';
//let pathroot = '/DaysUntil/';
let pathroot = '/DaysUntilPWAApp/';

var urlsToCache = [
    `${pathroot}`,
    `${pathroot}favicon.ico`,
    `${pathroot}sw-init.js`,
    `${pathroot}manifest.json`,
    `${pathroot}serviceworker.js`,
    `${pathroot}css/site.css`,
    `${pathroot}images/DaysUntilLogo-192.png`,
    `${pathroot}images/DaysUntilLogo-512.png`,
    `${pathroot}images/DaysUntilLogo.svg`,
    `${pathroot}_framework/blazor.webassembly.js`,
    `${pathroot}_framework/blazor.boot.json`,
    `${pathroot}_framework/wasm/mono.js`,
    `${pathroot}_framework/wasm/mono.wasm`,
    `${pathroot}_framework/_bin/DaysUntil.dll`,
    `${pathroot}_framework/_bin/DaysUntilCommon.dll`,
    `${pathroot}_framework/_bin/DaysUntilCore.dll`,
    `${pathroot}_framework/_bin/DaysUntilData.dll`,
    `${pathroot}_framework/_bin/Microsoft.AspNetCore.Authorization.dll`,
    `${pathroot}_framework/_bin/Microsoft.AspNetCore.Blazor.dll`,
    `${pathroot}_framework/_bin/Microsoft.AspNetCore.Blazor.HttpClient.dll`,
    `${pathroot}_framework/_bin/Microsoft.AspNetCore.Components.dll`,
    `${pathroot}_framework/_bin/Microsoft.AspNetCore.Components.Forms.dll`,
    `${pathroot}_framework/_bin/Microsoft.AspNetCore.Components.Web.dll`,
    `${pathroot}_framework/_bin/Microsoft.AspNetCore.Metadata.dll`,
    `${pathroot}_framework/_bin/Microsoft.Bcl.AsyncInterfaces.dll`,
    `${pathroot}_framework/_bin/Microsoft.Extensions.DependencyInjection.Abstractions.dll`,
    `${pathroot}_framework/_bin/Microsoft.Extensions.DependencyInjection.dll`,
    `${pathroot}_framework/_bin/Microsoft.Extensions.Logging.Abstractions.dll`,
    `${pathroot}_framework/_bin/Microsoft.Extensions.Options.dll`,
    `${pathroot}_framework/_bin/Microsoft.Extensions.Primitives.dll`,
    `${pathroot}_framework/_bin/Microsoft.JSInterop.dll`,
    `${pathroot}_framework/_bin/Mono.Security.dll`,
    `${pathroot}_framework/_bin/Mono.WebAssembly.Interop.dll`,
    `${pathroot}_framework/_bin/mscorlib.dll`,
    `${pathroot}_framework/_bin/System.Buffers.dll`,
    `${pathroot}_framework/_bin/System.ComponentModel.Annotations.dll`,
    `${pathroot}_framework/_bin/System.Core.dll`,
    `${pathroot}_framework/_bin/System.dll`,
    `${pathroot}_framework/_bin/System.Memory.dll`,
    `${pathroot}_framework/_bin/System.Net.Http.dll`,
    `${pathroot}_framework/_bin/System.Numerics.Vectors.dll`,
    `${pathroot}_framework/_bin/System.Runtime.CompilerServices.Unsafe.dll`,
    `${pathroot}_framework/_bin/System.Text.Encodings.Web.dll`,
    `${pathroot}_framework/_bin/System.Text.Json.dll`,
    `${pathroot}_framework/_bin/System.Threading.Tasks.Extensions.dll`,
];

self.addEventListener('install', function (event) {
    console.log('service worker install');
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    console.log(`sw cache hit ${event.request.url}`);
                    return response;
                }

                console.log(`sw cache miss ${event.request.url}`);
                return fetch(event.request);
            })
    );
});

self.addEventListener('activate', function (event) {
    console.log('sw activate');

    //var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];

    //event.waitUntil(
    //    caches.keys().then(function (cacheNames) {
    //        return Promise.all(
    //            cacheNames.map(function (cacheName) {
    //                if (cacheWhitelist.indexOf(cacheName) === -1) {
    //                    return caches.delete(cacheName);
    //                }
    //            })
    //        );
    //    })
    //);
});

self.addEventListener('beforeinstallprompt', (e) => {
    console.log('sw beforeinstallprompt')
    e.prompt();
    // Stash the event so it can be triggered later.
    //deferredPrompt = e;
    // Update UI notify the user they can add to home screen
    //showInstallPromotion();
});
