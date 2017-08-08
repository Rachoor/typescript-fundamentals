"use strict";
function generateRandomId(options) {
    return options.symbol + Math.random().toString(36).substr(2, options.length);
}
function main() {
    var app = document.getElementById('app');
    setInterval(function () {
        if (app) {
            app.innerHTML = generateRandomId({
                symbol: '#',
                length: 7
            });
        }
    }, 1000);
}
function userAlert() {
    alert('Hello');
}
function alertError() {
    throw new Error('error');
}
