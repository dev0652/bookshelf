function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},n.parcelRequired7c6=o),o.register("kyEFX",(function(n,t){var r,o;e(n.exports,"register",(function(){return r}),(function(e){return r=e})),e(n.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var n=Object.keys(e),t=0;t<n.length;t++)i[n[t]]=e[n[t]]},o=function(e){var n=i[e];if(null==n)throw new Error("Could not resolve bundle with id "+e);return n}})),o.register("jJ57b",(function(e,n){var t=o("krGWQ");const{divEl:r,paginationContainerPages:i,paginationContainerBackBtn:s,paginationContainerEndBtn:a,startButton:l,previousButton:p,nextButton:d,endButton:c}=(0,t.default)(),g="storage-of-books",f=new URL(o("2C6cK")).href,u=new URL(o("1rJhf")),h=JSON.parse(localStorage.getItem(g))||[],_=3;let m=Math.ceil(h.length/_),b=1,v=(b-1)*_,k=v+_,y=h.slice(v,k);function E(e){const n=new URL(o("itCz0")).href,t=new URL(o("8JoLD")).href,r=new URL(o("jJhLf")).href;return e.map((({_id:e,title:o,author:i,description:s,list_name:a,book_image:l,amazon_product_url:p,buy_links:[d,c]})=>`<article class="shopping__card">\n  <div class="grid-img">\n    <img\n      class="shopping__card-img"\n      src="${l}"\n      alt="${o}"\n    />\n  </div>\n\n  <div class="grid-title">\n    <h3 class="shopping__card-title">${o}</h3>\n    <p class="shopping__card-category">${a}</p>\n  </div>\n\n  <div class="grid-description">\n    <p class="shopping__card-description">${s}</p>\n  </div>\n\n  <div class="grid-author">\n    <p class="shopping__card-author">${i}</p>\n  </div>\n\n  <div class="grid-shoplist">\n    <ul class="shopping__card-shoplist">\n      <li class="store"><a "modal-shop-img" href="${p}" target="_blank" rel="noreferrer noopener" rel="noopener noreferrer nofollow"><img class="modal-shop-img shopping-shopimg amazon" src="${r}" alt="Amazon"/>\n              </a></li>\n      <li class="store"><a "modal-shop-img" href="${d.url}" target="_blank" rel="noreferrer noopener" rel="noopener noreferrer nofollow"><img class="modal-shop-img shopping-shopimg apple" src="${n}" alt="Apple" /></a></li>\n      <li class="store"><a "modal-shop-img" href="${c.url}" target="_blank" rel="noreferrer noopener" rel="noopener noreferrer nofollow"><img class="modal-shop-img shopping-shopimg book-shop" src="${t}" alt="Book"/></a></li>\n    </ul>\n  </div>\n  <button class="shopping__card-btn" type="button" data-book-id="${e}"><svg class="icon-trash" data-book-id="${e}" width="17" height="17"><use href="${u}#icon-trash"></use></svg>\n  </button>\n</article>\n\n        `)).join("")}h.length?r.insertAdjacentHTML("beforeend",E(y)):r.innerHTML=`<div class="is-empty__wrapper"><p class="is-empty__info">This page is empty, add some books and proceed to order.</p><img class="is-empty__picture" src="${f}" alt="Shop is Empty"></div >`,r.addEventListener("click",(e=>{if(e.target.closest(".shopping__card-btn")){const n=e.target.getAttribute("data-book-id"),t=h.findIndex((e=>e._id===n));if(h.splice(t,1),localStorage.setItem(g,JSON.stringify(h)),!h.length)return void(r.innerHTML=`<div class="is-empty__wrapper"><p class="is-empty__info">This page is empty, add some books and proceed to order.</p><img class="is-empty__picture" src="${f}" alt="Shop is Empty"></div >`);r.innerHTML=E(w()),function(e){const n=h.length/_;Math.round(n)===n&&e.lastElementChild.remove()}(i),h.length<=3&&(j(s),j(a),i.innerHTML="")}}));for(let e=1;e<=m;e++){if(h.length<=3)return;const n=e,t=document.createElement("button");t.classList.add("paginations__btn"),t.classList.add("paginations__btn--pages"),t.textContent=e,S(s),S(a),t.addEventListener("click",(()=>{b=n,L(),H(),F(l),F(c)})),i.appendChild(t)}function L(){r.innerHTML=""}function w(){return v=(b-1)*_,k=v+_,h.slice(v,k)}function H(){r.insertAdjacentHTML("beforeend",E(w()))}function F(e){e.disabled=!1}function R(e){e.disabled=!0}function S(e){e.style.display="flex"}function j(e){e.style.display="none"}p.addEventListener("click",(()=>{b>1&&(b--,L(),H(),F(c))})),d.addEventListener("click",(()=>{b<m&&(b++,L(),H(),F(l))})),l.addEventListener("click",(()=>{b=1,L(),H(),R(l),F(c)})),c.addEventListener("click",(()=>{b=m,L(),H(),R(c),F(l)}))})),o.register("2C6cK",(function(e,n){e.exports=new URL(o("kyEFX").resolve("5tepk"),import.meta.url).toString()})),o.register("1rJhf",(function(e,n){e.exports=new URL(o("kyEFX").resolve("9v6fF"),import.meta.url).toString()})),o.register("itCz0",(function(e,n){e.exports=new URL(o("kyEFX").resolve("3dsh1"),import.meta.url).toString()})),o.register("8JoLD",(function(e,n){e.exports=new URL(o("kyEFX").resolve("1Fi3j"),import.meta.url).toString()})),o.register("jJhLf",(function(e,n){e.exports=new URL(o("kyEFX").resolve("6GerT"),import.meta.url).toString()})),o("kyEFX").register(JSON.parse('{"f9bx4":"shopping-list.7eac52aa.js","3dsh1":"apple-books.652b354e.png","1Fi3j":"book-shop.1d091ebd.png","6GerT":"amazon.626c9508.png","5tepk":"shoppingbook1.6c062fbc.png","9v6fF":"symbol-defs.31cd5416.svg","8ejtn":"shopping-list.3f57c8db.js","7MYWd":"shopping-list.e180ada6.css"}')),o("04jNI"),o("3aHCK"),o("7HXnL"),o("13HhB"),o("dTazW"),o("04jNI"),o("jJ57b"),o("kThre"),o("ipdwX"),o("apWeF"),o("j7E5r");
//# sourceMappingURL=shopping-list.7eac52aa.js.map
