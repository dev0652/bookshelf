function n(n,e,t,i){Object.defineProperty(n,e,{get:t,set:i,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},s=e.parcelRequired7c6;null==s&&((s=function(n){if(n in t)return t[n].exports;if(n in i){var e=i[n];delete i[n];var s={id:n,exports:{}};return t[n]=s,e.call(s.exports,s,s.exports),s.exports}var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(n,e){i[n]=e},e.parcelRequired7c6=s),s.register("kyEFX",(function(e,t){var i,s;n(e.exports,"register",(function(){return i}),(function(n){return i=n})),n(e.exports,"resolve",(function(){return s}),(function(n){return s=n}));var o={};i=function(n){for(var e=Object.keys(n),t=0;t<e.length;t++)o[e[t]]=n[e[t]]},s=function(n){var e=o[n];if(null==e)throw new Error("Could not resolve bundle with id "+n);return e}})),s("kyEFX").register(JSON.parse('{"f9bx4":"shopping-list.25a07337.js","3dsh1":"apple-books.652b354e.png","kkfaH":"shopping-list.dd88de10.js"}'));var o=s("krGWQ");s("04jNI"),s("3aHCK"),s("7HXnL"),s("dTazW"),s("04jNI");s("krGWQ"),o=s("krGWQ");const{paginationContainerPages:a,paginationContainerBackBtn:r,paginationContainerEndBtn:l,startButton:c,previousButton:d,nextButton:p,endButton:g}=(0,o.default)(),u=JSON.parse(localStorage.getItem("storage-of-books"))||[],f=3;let h=Math.ceil(u.length/f),v=1,_=(v-1)*f,m=_+f;j(u.slice(_,m));for(let n=1;n<=h;n++){const e=n,t=document.createElement("button");t.classList.add("paginations__btn"),t.classList.add("paginations__btn--pages"),t.textContent=n,L(r),L(l),t.addEventListener("click",(()=>{v=e,console.log(v),b(),k(),y(c),y(g)})),a.appendChild(t)}function b(){divEl.innerHTML=""}function k(){j((_=(v-1)*f,m=_+f,u.slice(_,m)))}function y(n){n.disabled=!1}function E(n){n.disabled=!0}function L(n){n.style.display="flex"}function H(n){n.style.display="none"}d.addEventListener("click",(()=>{v>1&&(v--,b(),k(),y(g))})),p.addEventListener("click",(()=>{v<h&&(v++,b(),k(),y(c))})),c.addEventListener("click",(()=>{v=1,b(),k(),E(c),y(g)})),g.addEventListener("click",(()=>{v=h,b(),k(),E(g),y(c)}));const{divEl:w,paginationContainerPages:B,paginationContainerBackBtn:x,paginationContainerEndBtn:S}=(0,o.default)(),T="storage-of-books";var C={};function j(n){return n.map((({title:n,author:e,description:t,list_name:i})=>{const s=new URL(C).href;return`\n        <article class="shopping__card">\n          <div class="div1">\n            <img\n              class="shopping__card-img"\n              src="https://picsum.photos/116/165"\n              alt=""\n            />\n          </div>\n\n          <div class="div2">\n            <h3 class="shopping__card-title">${n}</h3>\n            <p class="shopping__card-category">${i}</p>\n          </div>\n\n          <div class="div3">\n            <p class="shopping__card-description">${t}</p>\n          </div>\n\n          <div class="div4">\n            <p class="shopping__card-author">${e}</p>\n          </div>\n\n          <div class="div5">\n            <ul class="shopping__card-shoplist">\n              <li class="store">\n                <a href=""\n                  ><img\n                    class="modal-shop-img apple"\n                    src="${s}"\n                    alt="Apple Books link"\n                /></a>\n              </li>\n              <li class="store">\n                <a href=""\n                  ><img\n                    class="modal-shop-img apple"\n                    src="${s}"\n                    alt="Apple Books link"\n                /></a>\n              </li>\n              <li class="store">\n                <a href=""\n                  ><img\n                    class="modal-shop-img apple"\n                    src="${s}"\n                    alt="Apple Books link"\n                /></a>\n              </li>\n            </ul>\n          </div>\n          <button class="shopping__card-btn" type="button" data-book-name="${n}">\n            <svg class="icon-trash" width="16" height="16">\n              <use href="./src/images/symbol-defs.svg#icon-chevron"></use>\n            </svg>\n          </button>\n        </article>\n\n        `})).join("")}C=new URL(s("kyEFX").resolve("3dsh1"),import.meta.url).toString();const O=JSON.parse(localStorage.getItem(T))||[];O.length?w.insertAdjacentHTML("beforeend",j(O)):w.innerHTML='<div class="is-empty__wrapper"><p class="is-empty__info">This page is empty, add some books and proceed to order.</p></div>';document.querySelector(".shopping__list").addEventListener("click",(n=>{if(n.target.classList.contains("shopping__card-btn")){const e=n.target.getAttribute("data-book-name"),t=O.findIndex((n=>n.title===e));if(O.splice(t,1),localStorage.setItem(T,JSON.stringify(O)),w.innerHTML=j(O),!O.length)return H(x),H(S),B.innerHTML="",void(w.innerHTML='<div class="is-empty__wrapper"><p class="is-empty__info">This page is empty, add some books and proceed to order.</p></div>')}})),s("1szBL"),s("j7E5r");(0,o.default)();
//# sourceMappingURL=shopping-list.25a07337.js.map
