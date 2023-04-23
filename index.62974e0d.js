function t(t){return t&&t.__esModule?t.default:t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},a=o.parcelRequired7c6;null==a&&((a=function(t){if(t in e)return e[t].exports;if(t in n){var o=n[t];delete n[t];var a={id:t,exports:{}};return e[t]=a,o.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,o){n[t]=o},o.parcelRequired7c6=a),a("63nI0"),a("aTNUQ"),a("j4h6C"),a("bHKmf");var s=a("2shzp"),i=a("krGWQ");const{categoryListEl:l}=(0,i.default)();!async function(){try{const t=(await async function(){try{const{data:t}=await s.default.get("https://books-backend.p.goit.global/books/category-list");return t}catch(t){console.log(t)}}()).sort(((t,o)=>t.list_name.localeCompare(o.list_name)));for(const o of t){const t=document.createElement("li"),e=document.createElement("button");e.classList.add("category-btn"),e.textContent=`${o.list_name}`,e.setAttribute("id",o.list_name),l.appendChild(t),t.appendChild(e)}}catch(t){console.log(t)}}();i=a("krGWQ");const{categoriesListContainer:r}=(0,i.default)();r.addEventListener("click",(function(t){if(t.preventDefault(),"BUTTON"!==t.target.nodeName)return;const o=t.target,e=document.querySelector(".active-category");e&&e!==o&&e.classList.remove("active-category");o.classList.add("active-category")}));i=a("krGWQ"),s=a("2shzp");var c=a("7Y9D8");async function d(o){t(c).Loading.dots("Please wait");try{const{data:e}=await s.default.get(`https://books-backend.p.goit.global/books/category?category=${o}`);return t(c).Loading.remove(),e}catch(o){t(c).Loading.remove(),t(c).Notify.failure("Something went wrong. Please try again"),console.log(o)}}i=a("krGWQ");function p({_id:t,title:o,author:e,book_image:n}){return`\n    <a class="book-link" href="" aria-label="Book thumbnail">\n      <div class="book-thumb">\n        <img class="book-image" src="${n}" loading="lazy" data_id=${t} />\n        <div class="book-image-overlay" data_id=${t}>\n          <p class="book-image-overlay-text">Quick view</p>\n        </div>\n      </div>\n      <div class="book-item-meta">\n        <h3 class="book-title">${o}</h3>\n        <p class="book-author">${e}</p>\n      </div>\n    </a>\n  `}function u(t){return`\n      <ul class="category-books-list">\n        ${t.map((t=>`\n            <li class="books-list-item">\n              ${p(t)}\n            </li>\n          `)).join("")}\n      </ul>\n    `}const{renderingContainer:g}=(0,i.default)();function m(t){const o=u(t);g.innerHTML=o}s=a("2shzp"),c=a("7Y9D8");async function f(){t(c).Loading.dots();try{const{data:o}=await s.default.get("https://books-backend.p.goit.global/books/top-books");return t(c).Loading.remove(),o}catch(o){t(c).Loading.remove(),t(c).Notify.failure("Something went wrong. Please try again"),console.log(o)}}i=a("krGWQ");const{renderingContainer:k}=(0,i.default)();async function b(){try{const t=await f();k.innerHTML="";const o=`\n      <ul class="category-blocks-list">\n        ${t.map((({list_name:t,books:o})=>`\n              <li class="bestseller-category">\n          <h3 class="bestseller-category-title">${t}</h3>\n          <ul class="books-list">\n            ${o.map((t=>`\n              <li class="books-list-item bestsellers-book-item">\n                ${p(t)}\n              </li>\n            `)).join("")}\n          </ul>\n          <button class="button see-more-btn" id="${t}">See more</button>\n        </li>\n            `)).join("")}\n      </ul>\n    `;k.innerHTML=o}catch(t){console.log(t)}}b();var h=a("eq7JK");i=a("krGWQ");const{mainTitle:v}=(0,i.default)();function y(t){const o=t.split(" ").slice(0,-1).join(" "),e=t.split(" "),n=e[e.length-1];v.innerHTML=`${o} <span class="main-title--last-word-static">${n}</span>`}const{categoryListEl:L,selectedBooksListEl:w,mainTitle:E}=(0,i.default)();L.addEventListener("click",(async function(t){if(t.preventDefault(),!t.target.classList.contains("category-btn"))return;if(t.target.classList.contains("all-categories-btn"))return E.innerHTML='Best Seller <span class="main-title--last-word-static">Books</span>',void await b();const o=t.target.attributes.id.value,e=await d(o);y(o),m(e),(0,h.scrollToTop)()})),a("aC5CC");i=a("krGWQ"),h=a("eq7JK");const{categoryContainerEl:_}=(0,i.default)();_.addEventListener("click",(async function(t){if(!t.target.classList.contains("see-more-btn"))return;const o=t.target.attributes.id.value,e=await d(o);y(o);const n=document.querySelectorAll(".category-btn"),a=document.querySelector(".active-category");for(const t of n)t.textContent===o&&t.classList.add("active-category");a.classList.remove("active-category"),m(e),(0,h.scrollToTop)()}));i=a("krGWQ");var B=a("iO0l9");const $=(0,i.default)();$.categoryContainerEl.addEventListener("click",(function(t){t.preventDefault(),(t.target.matches(".book-image")||t.target.matches(".book-image-overlay"))&&async function(t){C.bookID=t.target.attributes.data_id.value;try{const t=await C.fetchBookByID();$.modalPopUp.classList.remove("is-hidden"),$.modalContentEl.innerHTML=function(t){const{_id:o,book_image:e,author:n,title:a,description:s,buy_links:[i,l,r]}=t,{appleBooksIconPath:c,bookShopIconPath:d,amazonIconPath:p}=(0,B.default)();return $.addBtnEL.setAttribute("data_id_of_book",`${o}`),`            \n    <img class="modal-img" src="${e}" alt="book cover" />\n    <div class='modal-book-attributes'>\n      <p class="modal-book-title">${a}</p>\n      <p class="modal-book-author">${n}</p>\n      <p class="modal-book-desc">${s}</p>\n      <div class="modal-shops">\n        <a class="modal-shop-link" href="${i.url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Amazon link">\n          <img class="modal-shop-img shopping-shopimg amazon" src="${p}" alt="Amazon link" />\n        </a>\n        <a class="modal-shop-link" href="${l.url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Apple Books link">\n          <img class="modal-shop-img shopping-shopimg apple" src="${c}" alt="Apple Books link" />\n        </a>\n        <a class="modal-shop-link" href="${r.url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="BookShop link">\n          <img class="modal-shop-img shopping-shopimg book-shop" src="${d}" alt="BookShop link" />\n        </a>\n      </div>\n    </div>\n`}(t),document.body.style.overflow="hidden",$.closeModalPopUpBtn.addEventListener("click",D),document.addEventListener("keydown",U),document.addEventListener("click",I);if(S.find((o=>o._id===t._id)))return $.addBtnEL.textContent="Remove from the shopping list",void $.addBtnEL.after(x);$.addBtnEL.textContent="Add to shopping list",x.remove()}catch(t){console.log(t)}}(t)}));const C=new class{#t="https://books-backend.p.goit.global/books";bookID=null;async fetchBookByID(){try{const t=await fetch(`${this.#t}/${this.bookID}`);return await t.json()}catch(t){console.log(t.message)}}},T="storage-of-books",S=JSON.parse(localStorage.getItem(T))||[];function P(t){if(S.find((o=>o._id===t._id))){const t=$.addBtnEL.getAttribute("data_id_of_book"),o=S.findIndex((o=>o._id===t));return S.splice(o,1),localStorage.setItem(T,JSON.stringify(S)),$.addBtnEL.textContent="Add to shopping list",void x.remove()}var o;o=t,S.push(o),localStorage.setItem(T,JSON.stringify(S)),$.addBtnEL.textContent="Remove from the shopping list",$.addBtnEL.after(x)}$.addBtnEL.addEventListener("click",(async function(t){try{P(await C.fetchBookByID())}catch(t){console.log(t)}}));const x=document.createElement("p");function D(t){$.modalPopUp.classList.add("is-hidden"),document.body.style.removeProperty("overflow")}function I(t){t.target==$.modalPopUp&&($.modalPopUp.classList.add("is-hidden"),document.body.style.removeProperty("overflow"))}function U(t){"Escape"===t.key&&($.modalPopUp.classList.add("is-hidden"),document.body.style.removeProperty("overflow"))}x.classList.add("modal-message"),x.textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list."',$.closeModalPopUpBtn.removeEventListener("click",D),document.removeEventListener("click",I),document.removeEventListener("keydown",U),a("kThre"),a("ipdwX"),a("apWeF"),a("aDVvv"),a("lkxDy"),a("eq7JK");
//# sourceMappingURL=index.62974e0d.js.map
