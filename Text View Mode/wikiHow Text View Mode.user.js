// ==UserScript==
// @name wikiHow Text View Mode
// @namespace https://github.com/paKanhu/wikiHow-userscripts
// @description Changes wikiHow Categories view mode to text
// @downloadURL https://github.com/paKanhu/wikiHow-userscripts/raw/master/Text%20View%20Mode/wikiHow%20Text%20View%20Mode.user.js
// @updateURL https://github.com/paKanhu/wikiHow-userscripts/raw/master/Text%20View%20Mode/wikiHow%20Text%20View%20Mode.meta.js
// @include http://www.wikihow.com/Category:*
// @include http://hi.wikihow.com/%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%87%E0%A4%A3%E0%A5%80:*
// @include http://es.wikihow.com/Categor%C3%ADa:*
// @include http://de.wikihow.com/Kategorie:*
// @include http://fr.wikihow.com/Cat%C3%A9gorie:*
// @include http://it.wikihow.com/Categoria:*
// @include http://nl.wikihow.com/Categorie:*
// @include http://pt.wikihow.com/Categoria:*
// @include http://ru.wikihow.com/%D0%9A%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8%D1%8F:*
// @include http://zh.wikihow.com/Category:*
// @run-at document-start
// @version 1.0
// @author Prasannajit Acharya - Kanhu
// @license GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// ==/UserScript==
(function () {
  window.location.href = window.location.origin + "/index.php?title="+ window.location.pathname.split('/')[1] + "&viewMode=text";
})();
