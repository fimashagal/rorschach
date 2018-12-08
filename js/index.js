"use strict";

swInit();

function swInit() {
    if (!"serviceWorker" in navigator) {
        console.warn("SW fail!");
        return;
    }
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/sw.js")
            .then((registration) => console.log("SW done. Scope: ", registration.scope))
            .catch(err => console.warn(err))
            .finally(main);
    });
}

function main(){
    console.log("I'm work!");
}
