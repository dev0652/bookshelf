!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},a=e.parcelRequired7c6;null==a&&((a=function(t){if(t in o)return o[t].exports;if(t in n){var e=n[t];delete n[t];var a={id:t,exports:{}};return o[t]=a,e.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){n[t]=e},e.parcelRequired7c6=a),a("iE7OH").register(JSON.parse('{"EVgbq":"index.4e4f73dd.js","4j2Vp":"apple-books.652b354e.png","gUbv1":"book-shop.1d091ebd.png","dRQ8R":"amazon.626c9508.png","7MYWd":"shopping-list.e180ada6.css","6Gzb5":"shopping-list.8e57df9f.js"}')),a("j1lrD"),a("ahIRe"),a("dDBSc"),a("9v99b");var s=a("dIxxU"),i=a("4Nugj");const{categoryListEl:l}=(0,i.default)();!async function(){try{const t=(await async function(){try{const{data:t}=await s.default.get("https://books-backend.p.goit.global/books/category-list");return t}catch(t){console.log(t)}}()).sort(((t,e)=>t.list_name.localeCompare(e.list_name)));for(const e of t){const t=document.createElement("li"),o=document.createElement("button");o.classList.add("category-btn"),o.textContent=`${e.list_name}`,o.setAttribute("id",e.list_name),l.appendChild(t),t.appendChild(o)}}catch(t){console.log(t)}}();i=a("4Nugj");const{categoriesListContainer:c}=(0,i.default)();c.addEventListener("click",(function(t){if(t.preventDefault(),"BUTTON"!==t.target.nodeName)return;const e=t.target,o=document.querySelector(".active-category");o&&o!==e&&o.classList.remove("active-category");e.classList.add("active-category")}));i=a("4Nugj");const{categoryListEl:r,titleEl:d}=(0,i.default)();let g="";r.addEventListener("click",(function(t){if(t.target.classList.contains("category-btn")){const e=t.target.textContent,o=e.split(" ");g=o[o.length-1];const n=e.split(" ").slice(0,-1).join(" ");d.textContent=n,d.innerHTML+=` <span class="home-bs__title-part">${g}</span>`}}));i=a("4Nugj"),s=a("dIxxU");var p=a("6JpON");async function u(){t(p).Loading.dots();try{const{data:e}=await s.default.get("https://books-backend.p.goit.global/books/top-books");return t(p).Loading.remove(),e}catch(e){t(p).Loading.remove(),t(p).Notify.failure("Something went wrong. Please try again"),console.log(e)}}function m(t){return`\n\t\t\t\t\t\t<a class="book-item-link" href="" aria-label="Book thumbnail">\n\t\t\t\t\t\t\t<div class="book-item-thumb">\n\n\t\t\t\t\t\t\t\t<img class="book-image" src="${t.book_image}"  loading="lazy" data_id=${t._id} />\n\n\t\t\t\t\t\t\t\t<div class="book-image-overlay" data_id=${t._id} >\n\t\t\t\t\t\t\t\t\t<p class="book-image-overlay-text">Quick view</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class="book-item-meta">\n\t\t\t\t\t\t\t\t<h3 class="book-title">${t.title}</h3>\n       \t\t\t\t\t        <p class="book-author"> ${t.author}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\n        `}i=a("4Nugj");const{selectedBooksListEl:f}=(0,i.default)();async function b(){try{const t=await u();for(const e of t){const t=document.createElement("li");t.classList.add("home-category");const o=document.createElement("h2");o.classList.add("home-category-title"),t.appendChild(o),o.innerText=e.list_name,f.appendChild(t);const n=document.createElement("ul");n.classList.add("books-list");for(const o of e.books){const e=document.createElement("li");e.classList.add("book-item"),e.innerHTML=m(o),n.appendChild(e),t.appendChild(n)}const a=document.createElement("button");a.classList.add("button"),a.classList.add("see-more-btn"),a.innerText="See more",a.setAttribute("id",e.list_name),t.appendChild(a)}}catch(t){console.log(t)}}b();const{allCategoriesBtn:h,selectedBooksListEl:k,titleEl:v}=(0,i.default)();h.addEventListener("click",(async function(t){t.preventDefault(),v.innerHTML='Best Sellers <span class="home-bs__title-part">Books</span>',k.innerHTML="",await b()})),a("xpKCW");s=a("dIxxU"),p=a("6JpON");async function y(e){t(p).Loading.dots("Please wait");try{const{data:o}=await s.default.get(`https://books-backend.p.goit.global/books/category?category=${e}`);return t(p).Loading.remove(),o}catch(e){t(p).Loading.remove(),t(p).Notify.failure("Something went wrong. Please try again"),console.log(e)}}i=a("4Nugj");const{selectedBooksListEl:L}=(0,i.default)();function E(t){return L.innerHTML="",t.map((({_id:t,title:e,author:o,description:n,list_name:a,book_image:s,book_image_width:i,book_image_height:l})=>`<li class="book-item-cat"><img class="book-image" src="${s}" alt="Cover of ${e}"><h3 class="book-title">${e}</h3><h4 class="book-author">${o}</h4></li>`)).join("")}i=a("4Nugj");const{categoryListEl:_,selectedBooksListEl:B}=(0,i.default)();_.addEventListener("click",(async function(t){if(t.preventDefault(),"BUTTON"!==t.target.nodeName)return;const e=t.target.attributes.id.value,o=await y(e);B.insertAdjacentHTML("beforeend",E(o))}));const w=(0,(i=a("4Nugj")).default)();w.categoryContainerEl.addEventListener("click",(function(t){t.preventDefault(),(t.target.matches(".book-image")||t.target.matches(".book-image-overlay"))&&async function(t){C.bookID=t.target.attributes.data_id.value;try{const t=await C.fetchBookByID();w.modalPopUp.classList.remove("is-hidden"),w.modalContentEl.innerHTML=function(t){const{_id:e,book_image:o,author:n,title:a,description:s,amazon_product_url:i,buy_links:[l,c,r,d,g,p]}=t,u=new URL(H).href,m=new URL(R).href,f=new URL(S).href;return w.addBtnEL.setAttribute("data_id_of_book",`${e}`),`\n                        \n              <img class="modal-img" src="${o}"/>\n              <div class='modal-book-attributes'>\n              <p class="modal-book-title">${a}</p>\n              <p class="modal-book-author">${n}</p>\n              <p class="modal-book-desc">${s}</p>\n              <div class="modal-shops">\n              <a class="modal-shop-link" href="${i}" target="_blank" rel="noreferrer noopener">\n              <img class="modal-shop-img shopping-shopimg amazon" src="${f}" alt="Amazon link"/>\n              </a>\n              <a class="modal-shop-link" href="${c.url}" target="_blank" rel="noreferrer noopener">\n              <img class="modal-shop-img shopping-shopimg apple" src="${u}" alt="Apple Books link" />\n              </a>\n              <a class="modal-shop-link" href="${g.url}" target="_blank" rel="noreferrer noopener">\n              <img class="modal-shop-img shopping-shopimg book-shop" src="${m}" alt="Book Shop link"/>\n              </a>\n              </div>\n              </div>\n              \n          `}(t),document.body.style.overflow="hidden",w.closeModalPopUpBtn.addEventListener("click",T),document.addEventListener("keydown",(t=>{"Escape"===t.key&&(w.modalPopUp.classList.add("is-hidden"),document.body.style.removeProperty("overflow"))}),{once:!0}),document.addEventListener("click",j);if(N.find((e=>e._id===t._id)))return w.addBtnEL.textContent="Remove from the shopping list",w.addBtnEL.after($),void console.log("Ця книга вже у кошику");w.addBtnEL.textContent="Add to shopping list",$.remove()}catch(t){console.log(t)}}(t)}));const C=new class{#t="https://books-backend.p.goit.global/books";bookID=null;async fetchBookByID(){try{const t=await fetch(`${this.#t}/${this.bookID}`);return await t.json()}catch(t){console.log(t.message)}}},x="storage-of-books",N=JSON.parse(localStorage.getItem(x))||[];function U(t){if(N.find((e=>e._id===t._id))){const t=w.addBtnEL.getAttribute("data_id_of_book"),e=N.findIndex((e=>e._id===t));return N.splice(e,1),localStorage.setItem(x,JSON.stringify(N)),w.addBtnEL.textContent="Add to shopping list",$.remove(),void console.log("Книгу видалено")}var e;e=t,N.push(e),localStorage.setItem(x,JSON.stringify(N)),w.addBtnEL.textContent="Remove from the shopping list",w.addBtnEL.after($),console.log("Книгу додано")}console.log(N),w.addBtnEL.addEventListener("click",(async function(t){try{U(await C.fetchBookByID())}catch(t){console.log(t)}}));const $=document.createElement("p");$.classList.add("modal-message"),$.textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list."';var H={};H=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("4j2Vp");var R={};R=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("gUbv1");var S={};function T(t){w.modalPopUp.classList.add("is-hidden"),document.body.style.removeProperty("overflow")}function j(t){t.target==w.modalPopUp&&(w.modalPopUp.classList.add("is-hidden"),document.body.style.removeProperty("overflow"))}S=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("dRQ8R"),w.closeModalPopUpBtn.removeEventListener("click",T),document.removeEventListener("click",j),a("2NTPx"),a("eOo1s"),a("fqCpV"),a("bX5OU"),a("9v99b"),a("lzhzI");var A=a("bX5OU");i=a("4Nugj");const{titleEl:O,categoryContainerEl:I,selectedBooksListEl:D}=(0,i.default)();I.addEventListener("click",(async function(t){if(t.target.classList.contains("see-more-btn")){const e=t.target.attributes.id.value,o=e.split(" ");let n;n=o[o.length-1];const a=e.split(" ").slice(0,-1).join(" ");O.textContent=a,O.innerHTML+=` <span class="home-bs__title-part">${n}</span>`;const s=await y(e),i=document.querySelectorAll(".category-btn"),l=document.querySelector(".active-category");for(const t of i)t.textContent===e&&t.classList.add("active-category");l.classList.remove("active-category"),D.insertAdjacentHTML("beforeend",E(s)),(0,A.scrollToTop)()}}))}();
//# sourceMappingURL=index.4e4f73dd.js.map