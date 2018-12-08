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
    let touchVirginity = true;

    const glide = new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        perView: 1,
        gap: 0,
        dragThreshold: 20
    });

    const application = document.querySelector(".application"),
          preload = application.querySelector(".preload"),
          guide = application.querySelector(".guide");

    glide.on('mount.after', function() {
        preload.classList.add("on");
    });

    glide.on("run.after", function () {
        guide.classList.add("off");
    });

    glide.mount();



}
