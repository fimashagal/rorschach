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
    const glide = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1
    });

    const application = document.querySelector(".application");

    glide.on('mount.after', function() {
        application.querySelector('.glide').classList.add("on");
    });

    glide.mount();



}
