// ==UserScript==
// @name         Vanz Gacor KB
// @version      1.0
// @match        *://www.google.com/search?*
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';
    let angkaSakti = "";

    setInterval(() => {
        GM_xmlhttpRequest({
            method: "GET",
            // INI KUNCINYA: Meminjam jalur HTTPS biar tembus Safari
            url: "https://corsproxy.io/?http://178.128.59.48/angka.txt?t=" + Date.now(),
            onload: function(r) {
                let d = r.responseText.split(',');
                if (d[0]) {
                    angkaSakti = d[0].trim();
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
