function e(e,n,t,i){Object.defineProperty(e,n,{get:t,set:i,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){i[e]=n},n.parcelRequired7c6=r),r.register("kyEFX",(function(n,t){var i,r;e(n.exports,"register",(function(){return i}),(function(e){return i=e})),e(n.exports,"resolve",(function(){return r}),(function(e){return r=e}));var o={};i=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)o[n[t]]=e[n[t]]},r=function(e){var n=o[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),r.register("jJ57b",(function(e,n){var t=r("krGWQ");const{divEl:i,paginationContainerPages:o,paginationContainerBackBtn:s,paginationContainerEndBtn:a,startButton:l,previousButton:c,nextButton:d,endButton:p}=(0,t.default)(),g="storage-of-books",f=new URL(r("2C6cK")).href,u=new URL(r("1rJhf")),h=JSON.parse(localStorage.getItem(g))||[],m=3;let _=Math.ceil(h.length/m),v=1,b=(v-1)*m,L=b+m,k=h.slice(b,L);function y(e){const n=new URL(r("itCz0")).href,t=new URL(r("8JoLD")).href,i=new URL(r("jJhLf")).href;return e.map((({_id:e,title:r,author:o,description:s,list_name:a,book_image:l,amazon_product_url:c,buy_links:[d,p]})=>`<article class="shopping__card">\n  <div class="grid-img">\n    <img\n      class="shopping__card-img"\n      src="${l}"\n      alt="${r}"\n    />\n  </div>\n\n  <div class="grid-title">\n    <h3 class="shopping__card-title">${r}</h3>\n    <p class="shopping__card-category">${a}</p>\n  </div>\n\n  <div class="grid-description">\n    <p class="shopping__card-description">${s}</p>\n  </div>\n\n  <div class="grid-author">\n    <p class="shopping__card-author">${o}</p>\n  </div>\n\n  <div class="grid-shoplist">\n    <ul class="shopping__card-shoplist">\n      <li class="store"><a "modal-shop-img" href="${c}" target="_blank" rel="noreferrer noopener" rel="noopener noreferrer nofollow"><img class="modal-shop-img shopping-shopimg amazon" src="${i}" alt="Amazon"/>\n              </a></li>\n      <li class="store"><a "modal-shop-img" href="${d.url}" target="_blank" rel="noreferrer noopener" rel="noopener noreferrer nofollow"><img class="modal-shop-img shopping-shopimg apple" src="${n}" alt="Apple" /></a></li>\n      <li class="store"><a "modal-shop-img" href="${p.url}" target="_blank" rel="noreferrer noopener" rel="noopener noreferrer nofollow"><img class="modal-shop-img shopping-shopimg book-shop" src="${t}" alt="Book"/></a></li>\n    </ul>\n  </div>\n  <button class="shopping__card-btn" type="button" data-book-id="${e}"><svg class="icon-trash" data-book-id="${e}" width="17" height="17"><use href="${u}#icon-trash"></use></svg>\n  </button>\n</article>\n\n        `)).join("")}h.length?i.insertAdjacentHTML("beforeend",y(k)):i.innerHTML=`<div class="is-empty__wrapper"><p class="is-empty__info">This page is empty, add some books and proceed to order.</p><img class="is-empty__picture" src="${f}" alt="Shop is Empty"></div >`,i.addEventListener("click",(e=>{if(e.target.closest(".shopping__card-btn")){const n=e.target.getAttribute("data-book-id"),t=h.findIndex((e=>e._id===n));if(h.splice(t,1),localStorage.setItem(g,JSON.stringify(h)),!h.length)return void(i.innerHTML=`<div class="is-empty__wrapper"><p class="is-empty__info">This page is empty, add some books and proceed to order.</p><img class="is-empty__picture" src="${f}" alt="Shop is Empty"></div >`);i.innerHTML=y(w()),function(e){const n=h.length/m;Math.round(n)===n&&e.lastElementChild.remove()}(o),h.length<=3&&(x(s),x(a),o.innerHTML="")}}));for(let e=1;e<=_;e++){if(h.length<=3)return;const n=e,t=document.createElement("button");t.classList.add("paginations__btn"),t.classList.add("paginations__btn--pages"),t.textContent=e,R(s),R(a),t.addEventListener("click",(()=>{v=n,E(),H(),S(l),S(p)})),o.appendChild(t)}function E(){i.innerHTML=""}function w(){return b=(v-1)*m,L=b+m,h.slice(b,L)}function H(){i.insertAdjacentHTML("beforeend",y(w()))}function S(e){e.disabled=!1}function F(e){e.disabled=!0}function R(e){e.style.display="flex"}function x(e){e.style.display="none"}function T(e){const n=document.querySelector(".active");n&&n.classList.remove("active"),e.classList.add("active")}o.firstChild.classList.add("active"),c.addEventListener("click",(()=>{if(v>1){v--,E(),H(),S(p);const e=document.querySelector(".active");e.classList.remove("active"),e.previousElementSibling.classList.add("active")}})),d.addEventListener("click",(()=>{if(v<_){v++,E(),H(),S(l);const e=document.querySelector(".active");e.classList.remove("active"),e.nextElementSibling.classList.add("active")}})),l.addEventListener("click",(()=>{v=1,E(),H(),F(l),S(p),T(o.firstChild)})),p.addEventListener("click",(()=>{v=_,E(),H(),F(p),S(l),T(o.lastElementChild)})),o.addEventListener("click",(function(e){if("BUTTON"!==e.target.tagName)return;T(e.target)}))})),r.register("2C6cK",(function(e,n){e.exports=new URL(r("kyEFX").resolve("5tepk"),import.meta.url).toString()})),r.register("1rJhf",(function(e,n){e.exports=new URL(r("kyEFX").resolve("9v6fF"),import.meta.url).toString()})),r.register("itCz0",(function(e,n){e.exports=new URL(r("kyEFX").resolve("3dsh1"),import.meta.url).toString()})),r.register("8JoLD",(function(e,n){e.exports=new URL(r("kyEFX").resolve("1Fi3j"),import.meta.url).toString()})),r.register("jJhLf",(function(e,n){e.exports=new URL(r("kyEFX").resolve("6GerT"),import.meta.url).toString()})),r("kyEFX").register(JSON.parse('{"f9bx4":"shopping-list.21bbbccb.js","3dsh1":"apple-books.652b354e.png","1Fi3j":"book-shop.1d091ebd.png","6GerT":"amazon.626c9508.png","5tepk":"shoppingbook1.6c062fbc.png","9v6fF":"symbol-defs.31cd5416.svg","h2ssr":"shopping-list.0c2409ca.js","7MYWd":"shopping-list.e180ada6.css"}')),r("04jNI"),r("3aHCK"),r("7HXnL"),r("13HhB"),r("dTazW"),r("04jNI"),r("jJ57b"),r("kThre"),r("ipdwX"),r("apWeF"),r("j7E5r");
//# sourceMappingURL=shopping-list.21bbbccb.js.map
