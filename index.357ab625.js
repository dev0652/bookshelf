function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},a=e.parcelRequired7c6;null==a&&((a=function(t){if(t in o)return o[t].exports;if(t in n){var e=n[t];delete n[t];var a={id:t,exports:{}};return o[t]=a,e.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){n[t]=e},e.parcelRequired7c6=a),a("63nI0"),a("aTNUQ"),a("j4h6C"),a("bHKmf");var s=a("2shzp"),i=a("krGWQ");const{categoryListEl:l}=(0,i.default)();!async function(){try{const t=(await async function(){try{const{data:t}=await s.default.get("https://books-backend.p.goit.global/books/category-list");return t}catch(t){console.log(t)}}()).sort(((t,e)=>t.list_name.localeCompare(e.list_name)));for(const e of t){const t=document.createElement("li"),o=document.createElement("button");o.classList.add("category-btn"),o.textContent=`${e.list_name}`,o.setAttribute("id",e.list_name),l.appendChild(t),t.appendChild(o)}}catch(t){console.log(t)}}();i=a("krGWQ");const{categoriesListContainer:r}=(0,i.default)();r.addEventListener("click",(function(t){if(t.preventDefault(),"BUTTON"!==t.target.nodeName)return;const e=t.target,o=document.querySelector(".active-category");o&&o!==e&&o.classList.remove("active-category");e.classList.add("active-category")}));i=a("krGWQ"),s=a("2shzp");var c=a("7Y9D8");async function d(){t(c).Loading.dots();try{const{data:e}=await s.default.get("https://books-backend.p.goit.global/books/top-books");return t(c).Loading.remove(),e}catch(e){t(c).Loading.remove(),t(c).Notify.failure("Something went wrong. Please try again"),console.log(e)}}function p({_id:t,title:e,author:o,description:n,list_name:a,book_image:s,book_image_width:i,book_image_height:l}){return`\n    <a class="book-link" href="" aria-label="Book thumbnail">\n      <div class="book-thumb">\n        <img class="book-image" src="${s}" loading="lazy" data_id=${t} />\n        <div class="book-image-overlay" data_id=${t}>\n          <p class="book-image-overlay-text">Quick view</p>\n        </div>\n      </div>\n      <div class="book-item-meta">\n        <h3 class="book-title">${e}</h3>\n        <p class="book-author">${o}</p>\n      </div>\n    </a>\n  `}i=a("krGWQ");const{selectedBooksListEl:m}=(0,i.default)();async function g(){try{const t=await d();m.innerHTML="";for(const e of t){const t=`\n        <li class="bestseller-category">\n          <h2 class="bestseller-category-title">${e.list_name}</h2>\n          <ul class="books-list">\n            ${e.books.map((t=>`\n              <li class="books-list-item bestsellers-book-item">\n                ${p(t)}\n              </li>\n            `)).join("")}\n          </ul>\n          <button class="button see-more-btn" id="${e.list_name}">See more</button>\n        </li>\n      `;m.insertAdjacentHTML("beforeend",t)}}catch(t){console.log(t)}}g();const{allCategoriesBtn:u,selectedBooksListEl:k,mainTitle:f}=(0,i.default)();u.addEventListener("click",(async function(t){t.preventDefault(),f.innerHTML='Best Seller <span class="content-part-title--last-word-static">Books</span>',k.innerHTML="",await g()})),a("aC5CC");i=a("krGWQ"),s=a("2shzp"),c=a("7Y9D8");async function b(e){t(c).Loading.dots("Please wait");try{const{data:o}=await s.default.get(`https://books-backend.p.goit.global/books/category?category=${e}`);return t(c).Loading.remove(),o}catch(e){t(c).Loading.remove(),t(c).Notify.failure("Something went wrong. Please try again"),console.log(e)}}i=a("krGWQ");const{selectedBooksListEl:h}=(0,i.default)();function v(t){return h.innerHTML="",t.map((({_id:t,title:e,author:o,book_image:n})=>`<li class="books-list-item">\n          <a class="book-link" href="" aria-label="Book thumbnail">\n            <div class="book-thumb">\n              <img class="book-image" src="${n}" loading="lazy" data_id=${t} alt="book cover"/>\n              <div class="book-image-overlay" data_id=${t} >\n                <p class="book-image-overlay-text">Quick view</p>\n              </div>\n            </div>\n            <div class="book-item-meta">\n              <h3 class="book-title">${e}</h3>\n              <p class="book-author">${o}</p>\n            </div>\n          </a>\n        </li>`)).join("")}const{categoryListEl:y,selectedBooksListEl:L}=(0,i.default)();y.addEventListener("click",(async function(t){if(t.preventDefault(),"BUTTON"!==t.target.nodeName)return;const e=t.target.attributes.id.value,o=await b(e);L.innerHTML=v(o)}));var _=a("eq7JK");i=a("krGWQ");const{mainTitle:E,categoryContainerEl:w,selectedBooksListEl:B}=(0,i.default)();w.addEventListener("click",(async function(t){if(t.target.classList.contains("see-more-btn")){const e=t.target.attributes.id.value,o=e.split(" ");let n;n=o[o.length-1];const a=e.split(" ").slice(0,-1).join(" ");E.textContent=a,E.innerHTML+=` <span class="content-part-title--last-word-static">${n}</span>`;const s=await b(e),i=document.querySelectorAll(".category-btn"),l=document.querySelector(".active-category");for(const t of i)t.textContent===e&&t.classList.add("active-category");l.classList.remove("active-category"),B.insertAdjacentHTML("beforeend",v(s)),(0,_.scrollToTop)()}}));i=a("krGWQ");const{categoryListEl:$,mainTitle:T}=(0,i.default)();let C="";$.addEventListener("click",(function(t){if(t.target.classList.contains("category-btn")){const e=t.target.textContent,o=e.split(" ");C=o[o.length-1];const n=e.split(" ").slice(0,-1).join(" ");T.textContent=n,T.innerHTML+=` <span class="content-part-title--last-word-static">${C}</span>`}}));i=a("krGWQ");var x=a("iO0l9");const S=(0,i.default)();S.categoryContainerEl.addEventListener("click",(function(t){t.preventDefault(),(t.target.matches(".book-image")||t.target.matches(".book-image-overlay"))&&async function(t){D.bookID=t.target.attributes.data_id.value;try{const t=await D.fetchBookByID();S.modalPopUp.classList.remove("is-hidden"),S.modalContentEl.innerHTML=function(t){const{_id:e,book_image:o,author:n,title:a,description:s,buy_links:[i,l,r]}=t,{appleBooksIconPath:c,bookShopIconPath:d,amazonIconPath:p}=(0,x.default)();return S.addBtnEL.setAttribute("data_id_of_book",`${e}`),`            \n    <img class="modal-img" src="${o}" alt="book cover" />\n    <div class='modal-book-attributes'>\n      <p class="modal-book-title">${a}</p>\n      <p class="modal-book-author">${n}</p>\n      <p class="modal-book-desc">${s}</p>\n      <div class="modal-shops">\n        <a class="modal-shop-link" href="${i.url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Amazon link">\n          <img class="modal-shop-img shopping-shopimg amazon" src="${p}" alt="Amazon link" />\n        </a>\n        <a class="modal-shop-link" href="${l.url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Apple Books link">\n          <img class="modal-shop-img shopping-shopimg apple" src="${c}" alt="Apple Books link" />\n        </a>\n        <a class="modal-shop-link" href="${r.url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="BookShop link">\n          <img class="modal-shop-img shopping-shopimg book-shop" src="${d}" alt="BookShop link" />\n        </a>\n      </div>\n    </div>\n`}(t),document.body.style.overflow="hidden",S.closeModalPopUpBtn.addEventListener("click",U),document.addEventListener("keydown",Q),document.addEventListener("click",N);if(A.find((e=>e._id===t._id)))return S.addBtnEL.textContent="Remove from the shopping list",void S.addBtnEL.after(M);S.addBtnEL.textContent="Add to shopping list",M.remove()}catch(t){console.log(t)}}(t)}));const D=new class{#t="https://books-backend.p.goit.global/books";bookID=null;async fetchBookByID(){try{const t=await fetch(`${this.#t}/${this.bookID}`);return await t.json()}catch(t){console.log(t.message)}}},P="storage-of-books",A=JSON.parse(localStorage.getItem(P))||[];function I(t){if(A.find((e=>e._id===t._id))){const t=S.addBtnEL.getAttribute("data_id_of_book"),e=A.findIndex((e=>e._id===t));return A.splice(e,1),localStorage.setItem(P,JSON.stringify(A)),S.addBtnEL.textContent="Add to shopping list",void M.remove()}var e;e=t,A.push(e),localStorage.setItem(P,JSON.stringify(A)),S.addBtnEL.textContent="Remove from the shopping list",S.addBtnEL.after(M)}S.addBtnEL.addEventListener("click",(async function(t){try{I(await D.fetchBookByID())}catch(t){console.log(t)}}));const M=document.createElement("p");function U(t){S.modalPopUp.classList.add("is-hidden"),document.body.style.removeProperty("overflow")}function N(t){t.target==S.modalPopUp&&(S.modalPopUp.classList.add("is-hidden"),document.body.style.removeProperty("overflow"))}function Q(t){"Escape"===t.key&&(S.modalPopUp.classList.add("is-hidden"),document.body.style.removeProperty("overflow"))}M.classList.add("modal-message"),M.textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list."',S.closeModalPopUpBtn.removeEventListener("click",U),document.removeEventListener("click",N),document.removeEventListener("keydown",Q),a("kThre"),a("ipdwX"),a("apWeF"),a("aDVvv"),a("lkxDy"),a("eq7JK");
//# sourceMappingURL=index.357ab625.js.map
