// ==UserScript==
// @name         Vanz Gacor KB AllOrigins
// @version      1.1
// @match        *://www.google.com/search?*
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';
    let angkaSakti = "";

    setInterval(() => {
        GM_xmlhttpRequest({
            method: "GET",
            // Pake AllOrigins biar nggak kena blokir kayak corsproxy tadi
            url: "https://api.allorigins.win/raw?url=" + encodeURIComponent("http://178.128.59.48/angka.txt?t=" + Date.now()),
            onload: function(r) {
                if (r.responseText) {
                    let d = r.responseText.split(',');
                    if (d[0]) {
                        angkaSakti = d[0].trim();
                    }
                }
            }
        });
    }, 500);

    setInterval(() => {
        let box = document.querySelector('.f9S76c');
        if (box && angkaSakti && box.innerText !== "") {
            if (box.innerText !== angkaSakti) {
                box.innerText = angkaSakti;
                box.setAttribute('aria-label', 'Total: ' + angkaSakti);
            }
        }
    }, 10);
})();
