// ==UserScript==
// @name         Gladiatus Auction Alarm
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  it's an auction dedector.
// @author       You
// @match        https://*.gladiatus.gameforge.com/game/index.php?mod=auction*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    var time;
    var parseText = "çok kısa";

    function searcherVS() {

        var bodyText, searchText;

        bodyText = document.getElementsByTagName("body")[0].innerHTML;

        searchText = bodyText.indexOf(parseText);

        if (searchText !== -1) {

            new Audio('http://p.esy.es/trembling.mp3').play();
            refresh(6);

        } else
            refresh(10);
    }

    function refresh(time) {

        setTimeout(function() { location.reload(); }, time * 1000);
    }

    searcherVS();

})();