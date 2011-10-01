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
    
  }

  //////////////////////////////////////////////////////////////////////
  
  var i;
  var key;
  var entries = document.querySelectorAll('#body-con .entry');
  var header;
  
  //////////////////////////////////////////////////////////////////////
  
  // the type of an advert
  function AdType(filter) {
    
    this.filter = filter;
    this.href = undefined;
    
  }
    
  AdType.prototype.setHref = function(link) {
    
    if (link instanceof HTMLElement) {
      this.href = link.href;
    }
      
  };

  AdType.prototype.test = function() {
     
    if (this.href !== undefined) {
      return this.filter.test(this.href);
    }
    else {
      return false;
    }

  };
      
  // container with regular expressions
  var filters = {
      
    partner: new RegExp('^http://www.wykop.pl/link/partnerredirect/'),
    paylink: new RegExp('^http://www.wykop.pl/paylink/')
      
  };
    
  // container with advert types
  var adTypes = {
      
    partner: new AdType(filters.partner),
    wykopPoleca: new AdType(filters.partner),
    sponsorowany: new AdType(filters.paylink)
      
  };

  //////////////////////////////////////////////////////////////////////

  for (i = 0; i < entries.length; ++i) {

    // first div > .content > header
    header = entries.item(i).getElementsByTagName('div').item(0).querySelectorAll('.content header').item(0);

    adTypes.partner.setHref(header.querySelectorAll('p a').item(1));
    adTypes.wykopPoleca.setHref(header.querySelectorAll('p a').item(2));
    adTypes.sponsorowany.setHref(header.querySelectorAll('h2 a').item(0));

    for (key in adTypes) {
          
      if (adTypes[key].test()) {
        block(entries.item(i));
      }
      
    }
    
  }

})();
