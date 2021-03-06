"use strict";
importScripts("./js/sw-toolbox.js");
toolbox.precache([
    "index.html",
    "css/index.css",
    "js/glide.min.js"
]);
toolbox.router.get("/assets/*", toolbox.cacheFirst);
toolbox.router.get("/*", toolbox.networkFirst, {
    networkTimeoutSeconds: 5
});