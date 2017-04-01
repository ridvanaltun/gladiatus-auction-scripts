// ==UserScript==
// @name         Auction Failure
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Checker for messages.
// @author       You
// @match        https://*.gladiatus.gameforge.com/game/index.php?mod=messages&submod=messageShow&folder*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var time;
    var parseText = "eşyası için vermiş olduğun teklif geçildi.";

    function check() {

        var bodyText, searchText;

        bodyText = document.getElementsByTagName("body")[0].innerHTML;
        searchText = bodyText.indexOf(parseText);

        if (searchText !== -1) {

            new Audio('http://p.esy.es/stuffed-and-dropped.mp3').play();
            refresh(6);

        } else
            refresh(10);

    }

    function refresh(time) {

        setTimeout(function() { location.reload(); }, time * 1000);
    }

    check();

})();