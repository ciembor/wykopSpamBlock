// ==UserScript==
// @name           wykopSpamBlock
// @namespace      wykopSpamBlock
// @description    Skrypt ukrywający sponsorowane i polecane wykopy w serwisie wykop.pl 3.0
// @include        http://www.*wykop.pl/
// @include        http://www.*wykop.pl/strona/*
// @include        http://www.*wykop.pl/wykopalisko*
// @include        http://www.*wykop.pl/hity* 
// ==/UserScript==

(function() {

  function block(element) {
    
    element.style.display = 'none';
    console.log('Wykop kurwa!');
    
  }

  //////////////////////////////////////////////////////////////////////

  var Filter = new RegExp('^http://www.wykop.pl/link/partnerredirect/');
  var Entries = document.getElementById('body-con').getElementsByClassName('entry');
  var Links;

  //////////////////////////////////////////////////////////////////////

  for (i = 0; i < Entries.length; i++) {
    
    Links = Entries.item(i).getElementsByTagName('div').item(0).getElementsByClassName('content').item(0).getElementsByTagName('header').item(0).getElementsByTagName('p').item(0).getElementsByTagName('a');

    if (Filter.test(Links.item(1).href) || Filter.test(Links.item(2).href)) {
      block(Entries.item(i));
    }
    
  }

})();
  
