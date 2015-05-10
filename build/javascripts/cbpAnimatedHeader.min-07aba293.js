/**
 * cbpAnimatedHeader.min.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader=function(){function t(){window.addEventListener("scroll",function(){r||(r=!0,setTimeout(e,250))},!1)}function e(){var t=n();t>=a?classie.add(o,"cbp-af-header-shrink"):classie.remove(o,"cbp-af-header-shrink"),r=!1}function n(){return window.pageYOffset||i.scrollTop}var i=document.documentElement,o=document.querySelector(".navbar-default"),r=!1,a=300;t()}();