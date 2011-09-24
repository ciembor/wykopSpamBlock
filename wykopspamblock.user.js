// ==UserScript==
// @name           wykopSpamBlock
// @namespace      wykopSpamBlock
// @description    Skrypt ukrywający sponsorowane i polecane wykopy w serwisie wykop.pl 3.0
// @include        http://www.*wykop.pl/
// @include        http://www.*wykop.pl/strona/*
// @include        http://www.*wykop.pl/wykopalisko*
// @include        http://www.*wykop.pl/hity* 
// ==/UserScript==

function block(element) {
  
  element.style.display = 'none';
  console.log('Wykop kurwa!');
  
}

////////////////////////////////////////////////////////////////////////

var entries = document.getElementById('body-con').getElementsByClassName('entry');
var filter = new RegExp('^http://www.wykop.pl/link/partnerredirect/');

////////////////////////////////////////////////////////////////////////

for (i = 0; i < entries.length; i++) {
  
  var link = entries.item(i).getElementsByTagName('div').item(0).getElementsByClassName('content').item(0).getElementsByTagName('header').item(0).getElementsByTagName('p').item(0).getElementsByTagName('a').item(1).href;

  if (filter.test(link)) {
    block(entries.item(i));
  }
  
}
