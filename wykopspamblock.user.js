// ==UserScript==
// @name           wykopSpamBlock
// @namespace      wykopSpamBlock
// @version        1.0
// @description    Skrypt ukrywający sponsorowane i polecane wykopy w serwisie wykop.pl 1337
// @include        https://*wykop.pl/*
// ==/UserScript==

(function () {
  ["https://www.wykop.pl/reklama", "https://www.wykop.pl/paylink/"]
    .map((href) => {
      return [...document.querySelectorAll(`[href^="${href}"]`)];
    })
    .flat()
    .map((link) => {
      try {
        link.closest(".link.iC").remove();
      } catch (e) {}
    });
})();
