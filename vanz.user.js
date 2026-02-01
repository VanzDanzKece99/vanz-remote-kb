// ==UserScript==
// @name         Vanz Gacor KB V2
// @version      2.0
// @match        *://www.google.com/search?*
// @grant        GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';
    let angkaSakti = "";

    // Ambil data dari VPS via AllOrigins
    setInterval(() => {
        GM_xmlhttpRequest({
            method: "GET",
            url: "https://api.allorigins.win/raw?url=" + encodeURIComponent("http://178.128.59.48/angka.txt?t=" + Date.now()),
            onload: function(r) {
                if (r.responseText) {
                    let d = r.responseText.split(',');
                    angkaSakti = d[0].trim();
                }
            }
        });
    }, 500);

    // Cara Sapu Jagat: Cari semua elemen yang mungkin jadi tempat angka dadu
    setInterval(() => {
        if (!angkaSakti) return;

        // Tembak class umum dadu Google
        let targets = document.querySelectorAll('.f9S76c, .Z697W, [aria-live="polite"]');
        
        targets.forEach(box => {
            if (box.innerText !== "" && box.innerText !== angkaSakti) {
                box.innerText = angkaSakti;
                console.log("Vanz Berhasil Nindih: " + angkaSakti);
            }
        });
    }, 10); // Speed 10ms biar gak keduluan random Google
})();
