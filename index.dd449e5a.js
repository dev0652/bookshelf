!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r),r.register("1UHsN",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),r.register("ffZzF",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),r.register("5k7tO",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),r("iE7OH").register(JSON.parse('{"dxLsE":"index.dd449e5a.js","4j2Vp":"apple-books.652b354e.png","gUbv1":"book-shop.1d091ebd.png","dRQ8R":"amazon.626c9508.png"}'));var a=r("bpxeT"),s=r("8MBJY"),c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t){var n=l.default(e,t,"get");return i.default(e,n)};var l=u(r("1UHsN")),i=u(r("ffZzF"));function u(e){return e&&e.__esModule?e:{default:e}}var d={};Object.defineProperty(d,"__esModule",{value:!0}),d.default=function(e,t,n){f.default(e,t),t.set(e,n)};var p,f=(p=r("5k7tO"))&&p.__esModule?p:{default:p};var g=r("a2hTj"),h=r("hKHmD"),v=r("1t1Wn"),b=r("2TvXO"),m=(0,r("4Nugj").default)(),k=new WeakMap,_=new(function(){"use strict";function t(){e(s)(this,t),e(d)(this,k,{writable:!0,value:"https://books-backend.p.goit.global/books"}),e(h)(this,"bookID",null)}return e(g)(t,[{key:"fetchBookByID",value:function(){var t=this;return e(a)(e(b).mark((function n(){var o,r;return e(b).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,fetch("".concat(e(c)(t,k),"/").concat(t.bookID));case 3:return o=n.sent,n.next=6,o.json();case 6:return r=n.sent,n.abrupt("return",r);case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})))()}}]),t}()),x="storage-of-books",w=document.querySelector(".modal-pop-up-btn"),y=JSON.parse(localStorage.getItem(x))||[];function E(e){var t;y.find((function(t){return t._id===e._id}))?console.log("Ця книга вже у кошику"):(t=e,y.push(t),localStorage.setItem(x,JSON.stringify(y)))}function L(){return(L=e(a)(e(b).mark((function t(n){var o;return e(b).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.fetchBookByID();case 3:return o=e.sent,e.next=6,E(o);case 6:if(e.sent,!y.find((function(e){return e._id===o._id}))){e.next=12;break}return console.log("добавлено у кошик"),w.textContent="STOP",e.abrupt("return");case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),t,null,[[0,14]])})))).apply(this,arguments)}function O(){return(O=e(a)(e(b).mark((function t(n){var o;return e(b).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _.bookID="643282b1e85766588626a080",e.prev=1,e.next=4,_.fetchBookByID();case 4:if(o=e.sent,B(),m.modalContentEl.innerHTML=U(o),!y.find((function(e){return e._id===o._id}))){e.next=12;break}return console.log("Ця книга вже у кошику"),w.textContent="STOP",e.abrupt("return");case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case"end":return e.stop()}}),t,null,[[1,14]])})))).apply(this,arguments)}console.log(y),w.addEventListener("click",(function(e){return L.apply(this,arguments)}));var H;H=r("aNJCr").getBundleURL("dxLsE")+r("iE7OH").resolve("4j2Vp");var R;R=r("aNJCr").getBundleURL("dxLsE")+r("iE7OH").resolve("gUbv1");var M;function U(t){t._id;var n=t.book_image,o=t.author,r=t.title,a=t.description,s=t.amazon_product_url,c=e(v)(t.buy_links,6),l=(c[0],c[1]),i=(c[2],c[3],c[4]),u=(c[5],new URL(H).href),d=new URL(R).href,p=new URL(M).href;return'\n                        \n              <img class="modal-img" src="'.concat(n,'"/>\n              <div class=\'modal-book-atributes\'>\n              <p class="modal-book-title">').concat(r,'</p>\n              <p class="modal-book-author">').concat(o,'</p>\n              <p class="modal-book-desc">').concat(a,'</p>\n              <div class="modal-shops">\n              <a class="modal-shop-link" href="').concat(s,'" target="_blank">\n              <img class="modal-shop-img amazon" src="').concat(p,'" alt="Amazon link"/>\n              </a>\n              <a class="modal-shop-link" href="').concat(l.url,'" target="_blank">\n              <img class="modal-shop-img apple" src="').concat(u,'" alt="Apple Books link" />\n              </a>\n              <a class="modal-shop-link" href="').concat(i.url,'" target="_blank">\n              <img class="modal-shop-img" src="').concat(d,'" alt="Book Shop link"/>\n              </a>\n              </div>\n              </div>\n              \n          ')}function B(){m.modalPopUp.classList.toggle("is-hidden")}M=r("aNJCr").getBundleURL("dxLsE")+r("iE7OH").resolve("dRQ8R"),m.openModalPopUpBtn.addEventListener("click",(function(e){return O.apply(this,arguments)})),m.closeModalPopUpBtn.addEventListener("click",(function(e){B(),m.modalContentEl.innerHTML=""})),window.addEventListener("keydown",(function(e){"Escape"===e.key&&B()})),m.modalPopUpBtn.addEventListener("click",(function(e){e.target.textContent="Remove from the shopping list",e.target.insertAdjacentHTML("afterend",'<p class="modal-message">Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list."</p>')}))}();
//# sourceMappingURL=index.dd449e5a.js.map
