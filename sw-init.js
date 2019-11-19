﻿if ('serviceWorker' in navigator) {
    //let pathroot = '/';
    let pathroot = '/DaysUntilPWAApp/';

    window.addEventListener('load', function () {
        navigator.serviceWorker.register(`${pathroot}serviceworker.js`).then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}