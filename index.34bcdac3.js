!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},a=e.parcelRequired7c6;null==a&&((a=function(t){if(t in o)return o[t].exports;if(t in n){var e=n[t];delete n[t];var a={id:t,exports:{}};return o[t]=a,e.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){n[t]=e},e.parcelRequired7c6=a),a("luyKi"),a("3JZwd"),a("tp3re"),a("64MGL");var s=a("dIxxU"),i=a("4Nugj");const{categoryListEl:l}=(0,i.default)();!async function(){try{const t=(await async function(){try{const{data:t}=await s.default.get("https://books-backend.p.goit.global/books/category-list");return t}catch(t){console.log(t)}}()).sort(((t,e)=>t.list_name.localeCompare(e.list_name)));for(const e of t){const t=document.createElement("li"),o=document.createElement("button");o.classList.add("category-btn"),o.textContent=`${e.list_name}`,o.setAttribute("id",e.list_name),l.appendChild(t),t.appendChild(o)}}catch(t){console.log(t)}}();i=a("4Nugj");const{categoriesListContainer:c}=(0,i.default)();c.addEventListener("click",(function(t){if(t.preventDefault(),"BUTTON"!==t.target.nodeName)return;const e=t.target,o=document.querySelector(".active-category");o&&o!==e&&o.classList.remove("active-category");e.classList.add("active-category")}));i=a("4Nugj");const{categoryListEl:r,titleEl:d}=(0,i.default)();let g="";r.addEventListener("click",(function(t){if(t.target.classList.contains("category-btn")){const e=t.target.textContent,o=e.split(" ");g=o[o.length-1];const n=e.split(" ").slice(0,-1).join(" ");d.textContent=n,d.innerHTML+=` <span class="bestsellers-title--last-word-static">${g}</span>`}}));i=a("4Nugj"),s=a("dIxxU");var u=a("6JpON");async function p(){t(u).Loading.dots();try{const{data:e}=await s.default.get("https://books-backend.p.goit.global/books/top-books");return t(u).Loading.remove(),e}catch(e){t(u).Loading.remove(),t(u).Notify.failure("Something went wrong. Please try again"),console.log(e)}}function m({_id:t,title:e,author:o,description:n,list_name:a,book_image:s,book_image_width:i,book_image_height:l}){return`\n    <a class="book-item-link" href="" aria-label="Book thumbnail">\n      <div class="book-item-thumb">\n        <img class="book-image" src="${s}" loading="lazy" data_id=${t} />\n        <div class="book-image-overlay" data_id=${t}>\n          <p class="book-image-overlay-text">Quick view</p>\n        </div>\n      </div>\n      <div class="book-item-meta">\n        <h3 class="book-title">${e}</h3>\n        <p class="book-author">${o}</p>\n      </div>\n    </a>\n  `}i=a("4Nugj");const{selectedBooksListEl:f}=(0,i.default)();async function b(){try{const t=await p();f.innerHTML="";for(const e of t){const t=`\n        <li class="bestseller-category">\n          <h2 class="bestseller-category-title">${e.list_name}</h2>\n          <ul class="books-list">\n            ${e.books.map((t=>`\n              <li class="book-item">\n                ${m(t)}\n              </li>\n            `)).join("")}\n          </ul>\n          <button class="button see-more-btn" id="${e.list_name}">See more</button>\n        </li>\n      `;f.insertAdjacentHTML("beforeend",t)}}catch(t){console.log(t)}}b();const{allCategoriesBtn:k,selectedBooksListEl:h,titleEl:v}=(0,i.default)();k.addEventListener("click",(async function(t){t.preventDefault(),v.innerHTML='Best Seller <span class="bestsellers-title--last-word-static">Books</span>',h.innerHTML="",await b()})),a("l5Qlz");s=a("dIxxU"),u=a("6JpON");async function y(e){t(u).Loading.dots("Please wait");try{const{data:o}=await s.default.get(`https://books-backend.p.goit.global/books/category?category=${e}`);return t(u).Loading.remove(),o}catch(e){t(u).Loading.remove(),t(u).Notify.failure("Something went wrong. Please try again"),console.log(e)}}i=a("4Nugj");const{selectedBooksListEl:L}=(0,i.default)();function E(t){return L.innerHTML="",t.map((({_id:t,title:e,author:o,book_image:n})=>`<li class="books-list-item">\n          <a class="book-item-link" href="" aria-label="Book thumbnail">\n            <div class="book-item-thumb">\n              <img class="book-image" src="${n}" loading="lazy" data_id=${t} alt="book cover"/>\n              <div class="book-image-overlay" data_id=${t} >\n                <p class="book-image-overlay-text">Quick view</p>\n              </div>\n            </div>\n            <div class="book-item-meta">\n              <h3 class="book-title">${e}</h3>\n              <p class="book-author">${o}</p>\n            </div>\n          </a>\n        </li>`)).join("")}i=a("4Nugj");const{categoryListEl:_,selectedBooksListEl:w}=(0,i.default)();_.addEventListener("click",(async function(t){if(t.preventDefault(),"BUTTON"!==t.target.nodeName)return;const e=t.target.attributes.id.value,o=await y(e);w.innerHTML=E(o)}));var B=a("c0gs0");i=a("4Nugj");const{titleEl:$,categoryContainerEl:x,selectedBooksListEl:N}=(0,i.default)();x.addEventListener("click",(async function(t){if(t.target.classList.contains("see-more-btn")){const e=t.target.attributes.id.value,o=e.split(" ");let n;n=o[o.length-1];const a=e.split(" ").slice(0,-1).join(" ");$.textContent=a,$.innerHTML+=` <span class="bestsellers-title--last-word-static">${n}</span>`;const s=await y(e),i=document.querySelectorAll(".category-btn"),l=document.querySelector(".active-category");for(const t of i)t.textContent===e&&t.classList.add("active-category");l.classList.remove("active-category"),N.insertAdjacentHTML("beforeend",E(s)),(0,B.scrollToTop)()}}));i=a("4Nugj");var C=a("dtK8v");const T=(0,i.default)();T.categoryContainerEl.addEventListener("click",(function(t){t.preventDefault(),(t.target.matches(".book-image")||t.target.matches(".book-image-overlay"))&&async function(t){S.bookID=t.target.attributes.data_id.value;try{const t=await S.fetchBookByID();T.modalPopUp.classList.remove("is-hidden"),T.modalContentEl.innerHTML=function(t){const{_id:e,book_image:o,author:n,title:a,description:s,buy_links:[i,l,c]}=t,{appleBooksIconPath:r,bookShopIconPath:d,amazonIconPath:g}=(0,C.default)();return T.addBtnEL.setAttribute("data_id_of_book",`${e}`),`            \n    <img class="modal-img" src="${o}" alt="book cover" />\n    <div class='modal-book-attributes'>\n      <p class="modal-book-title">${a}</p>\n      <p class="modal-book-author">${n}</p>\n      <p class="modal-book-desc">${s}</p>\n      <div class="modal-shops">\n        <a class="modal-shop-link" href="${i.url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Amazon link">\n          <img class="modal-shop-img shopping-shopimg amazon" src="${g}" alt="Amazon link" />\n        </a>\n        <a class="modal-shop-link" href="${l.url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Apple Books link">\n          <img class="modal-shop-img shopping-shopimg apple" src="${r}" alt="Apple Books link" />\n        </a>\n        <a class="modal-shop-link" href="${c.url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="BookShop link">\n          <img class="modal-shop-img shopping-shopimg book-shop" src="${d}" alt="BookShop link" />\n        </a>\n      </div>\n    </div>\n`}(t),document.body.style.overflow="hidden",T.closeModalPopUpBtn.addEventListener("click",A),document.addEventListener("keydown",D),document.addEventListener("click",M);if(P.find((e=>e._id===t._id)))return T.addBtnEL.textContent="Remove from the shopping list",void T.addBtnEL.after(U);T.addBtnEL.textContent="Add to shopping list",U.remove()}catch(t){console.log(t)}}(t)}));const S=new class{#t="https://books-backend.p.goit.global/books";bookID=null;async fetchBookByID(){try{const t=await fetch(`${this.#t}/${this.bookID}`);return await t.json()}catch(t){console.log(t.message)}}},j="storage-of-books",P=JSON.parse(localStorage.getItem(j))||[];function I(t){if(P.find((e=>e._id===t._id))){const t=T.addBtnEL.getAttribute("data_id_of_book"),e=P.findIndex((e=>e._id===t));return P.splice(e,1),localStorage.setItem(j,JSON.stringify(P)),T.addBtnEL.textContent="Add to shopping list",void U.remove()}var e;e=t,P.push(e),localStorage.setItem(j,JSON.stringify(P)),T.addBtnEL.textContent="Remove from the shopping list",T.addBtnEL.after(U)}T.addBtnEL.addEventListener("click",(async function(t){try{I(await S.fetchBookByID())}catch(t){console.log(t)}}));const U=document.createElement("p");function A(t){T.modalPopUp.classList.add("is-hidden"),document.body.style.removeProperty("overflow")}function M(t){t.target==T.modalPopUp&&(T.modalPopUp.classList.add("is-hidden"),document.body.style.removeProperty("overflow"))}function D(t){"Escape"===t.key&&(T.modalPopUp.classList.add("is-hidden"),document.body.style.removeProperty("overflow"))}U.classList.add("modal-message"),U.textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list."',T.closeModalPopUpBtn.removeEventListener("click",A),document.removeEventListener("click",M),document.removeEventListener("keydown",D),a("2NTPx"),a("eOo1s"),a("fqCpV"),a("2ZAjC"),a("csoNL"),a("c0gs0")}();
//# sourceMappingURL=index.34bcdac3.js.map