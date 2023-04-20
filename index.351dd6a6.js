function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},a=e.parcelRequired7c6;null==a&&((a=function(t){if(t in o)return o[t].exports;if(t in n){var e=n[t];delete n[t];var a={id:t,exports:{}};return o[t]=a,e.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){n[t]=e},e.parcelRequired7c6=a),a("kyEFX").register(JSON.parse('{"5ZPII":"index.351dd6a6.js","3dsh1":"apple-books.652b354e.png","1Fi3j":"book-shop.1d091ebd.png","6GerT":"amazon.626c9508.png","7MYWd":"shopping-list.e180ada6.css","26KnZ":"shopping-list.faf5f086.js"}')),a("04jNI"),a("3aHCK"),a("7HXnL");var s=a("2shzp"),i=a("krGWQ");const{categoryListEl:l}=(0,i.default)();!async function(){try{const t=(await async function(){try{const{data:t}=await s.default.get("https://books-backend.p.goit.global/books/category-list");return t}catch(t){console.log(t)}}()).sort(((t,e)=>t.list_name.localeCompare(e.list_name)));for(const e of t){const t=document.createElement("li"),o=document.createElement("button");o.classList.add("category-btn"),o.textContent=`${e.list_name}`,o.setAttribute("id",e.list_name),l.appendChild(t),t.appendChild(o)}}catch(t){console.log(t)}}();i=a("krGWQ");const{categoriesListContainer:c}=(0,i.default)();c.addEventListener("click",(function(t){if(t.preventDefault(),"BUTTON"!==t.target.nodeName)return;const e=t.target,o=document.querySelector(".active-category");o&&o!==e&&o.classList.remove("active-category");e.classList.add("active-category")}));i=a("krGWQ");const{categoryListEl:r,titleEl:d}=(0,i.default)();let p="";r.addEventListener("click",(function(t){if(t.target.classList.contains("category-btn")){const e=t.target.textContent,o=e.split(" ");p=o[o.length-1];const n=e.split(" ").slice(0,-1).join(" ");d.textContent=n,d.innerHTML+=` <span class="home-bs__title-part">${p}</span>`}}));i=a("krGWQ"),s=a("2shzp");var m=a("7Y9D8");async function g(){t(m).Loading.dots();try{const{data:e}=await s.default.get("https://books-backend.p.goit.global/books/top-books");return t(m).Loading.remove(),e}catch(e){t(m).Loading.remove(),t(m).Notify.failure("Something went wrong. Please try again"),console.log(e)}}function u(t){return`\n\t\t\t\t\t\t<a class="book-item-link" href="" aria-label="Book thumbnail">\n\t\t\t\t\t\t\t<div class="book-item-thumb">\n\n\t\t\t\t\t\t\t\t<img class="book-image" src="${t.book_image}"  loading="lazy" data_id=${t._id} />\n\n\t\t\t\t\t\t\t\t<div class="book-image-overlay" data_id=${t._id} >\n\t\t\t\t\t\t\t\t\t<p class="book-image-overlay-text">Quick view</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class="book-item-meta">\n\t\t\t\t\t\t\t\t<h3 class="book-title">${t.title}</h3>\n       \t\t\t\t\t        <p class="book-author"> ${t.author}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\n        `}i=a("krGWQ");const{selectedBooksListEl:h}=(0,i.default)();async function f(){try{const t=await g();for(const e of t){const t=document.createElement("li");t.classList.add("home-category");const o=document.createElement("h2");o.classList.add("home-category-title"),t.appendChild(o),o.innerText=e.list_name,h.appendChild(t);const n=document.createElement("ul");n.classList.add("books-list");for(const o of e.books){const e=document.createElement("li");e.classList.add("book-item"),e.innerHTML=u(o),n.appendChild(e),t.appendChild(n)}const a=document.createElement("button");a.classList.add("button"),a.classList.add("see-more-btn"),a.innerText="See more",a.setAttribute("id",e.list_name),t.appendChild(a)}}catch(t){console.log(t)}}f();const{allCategoriesBtn:k,selectedBooksListEl:b,titleEl:v}=(0,i.default)();k.addEventListener("click",(async function(t){t.preventDefault(),v.innerHTML='Best Sellers <span class="home-bs__title-part">Books</span>',b.innerHTML="",await f()})),a("dTazW");s=a("2shzp"),m=a("7Y9D8");async function y(e){t(m).Loading.dots("Please wait");try{const{data:o}=await s.default.get(`https://books-backend.p.goit.global/books/category?category=${e}`);return t(m).Loading.remove(),o}catch(e){t(m).Loading.remove(),t(m).Notify.failure("Something went wrong. Please try again"),console.log(e)}}i=a("krGWQ");const{selectedBooksListEl:L}=(0,i.default)();function _(t){return L.innerHTML="",t.map((({_id:t,title:e,author:o,description:n,list_name:a,book_image:s,book_image_width:i,book_image_height:l})=>`<li class="book-item-cat"><img class="book-image" src="${s}" alt="Cover of ${e}"><h3 class="book-title">${e}</h3><h4 class="book-author">${o}</h4></li>`)).join("")}i=a("krGWQ");const{categoryListEl:E,selectedBooksListEl:w}=(0,i.default)();E.addEventListener("click",(async function(t){if(t.preventDefault(),"BUTTON"!==t.target.nodeName)return;const e=t.target.attributes.id.value,o=await y(e);w.insertAdjacentHTML("beforeend",_(o))}));const B=(0,(i=a("krGWQ")).default)();B.categoryContainerEl.addEventListener("click",(function(t){t.preventDefault(),(t.target.matches(".book-image")||t.target.matches(".book-image-overlay"))&&async function(t){C.bookID=t.target.attributes.data_id.value;try{const t=await C.fetchBookByID();B.modalPopUp.classList.remove("is-hidden"),B.modalContentEl.innerHTML=function(t){const{_id:e,book_image:o,author:n,title:a,description:s,amazon_product_url:i,buy_links:[l,c,r,d,p,m]}=t,g=new URL(x).href,u=new URL(A).href,h=new URL(R).href;return B.addBtnEL.setAttribute("data_id_of_book",`${e}`),`\n                        \n              <img class="modal-img" src="${o}"/>\n              <div class='modal-book-attributes'>\n              <p class="modal-book-title">${a}</p>\n              <p class="modal-book-author">${n}</p>\n              <p class="modal-book-desc">${s}</p>\n              <div class="modal-shops">\n              <a class="modal-shop-link" href="${i}" target="_blank">\n              <img class="modal-shop-img shopping-shopimg amazon" src="${h}" alt="Amazon link"/>\n              </a>\n              <a class="modal-shop-link" href="${c.url}" target="_blank">\n              <img class="modal-shop-img shopping-shopimg apple" src="${g}" alt="Apple Books link" />\n              </a>\n              <a class="modal-shop-link" href="${p.url}" target="_blank">\n              <img class="modal-shop-img shopping-shopimg book-shop" src="${u}" alt="Book Shop link"/>\n              </a>\n              </div>\n              </div>\n              \n          `}(t),document.body.style.overflow="hidden",B.closeModalPopUpBtn.addEventListener("click",U),document.addEventListener("keydown",(t=>{"Escape"===t.key&&(B.modalPopUp.classList.add("is-hidden"),document.body.style.removeProperty("overflow"))}),{once:!0}),document.addEventListener("click",D);if($.find((e=>e._id===t._id)))return B.addBtnEL.textContent="Remove from the shopping list",B.addBtnEL.after(H),void console.log("Ця книга вже у кошику");B.addBtnEL.textContent="Add to shopping list",H.remove()}catch(t){console.log(t)}}(t)}));const C=new class{#t="https://books-backend.p.goit.global/books";bookID=null;async fetchBookByID(){try{const t=await fetch(`${this.#t}/${this.bookID}`);return await t.json()}catch(t){console.log(t.message)}}},S="storage-of-books",$=JSON.parse(localStorage.getItem(S))||[];function T(t){if($.find((e=>e._id===t._id))){const t=B.addBtnEL.getAttribute("data_id_of_book"),e=$.findIndex((e=>e._id===t));return $.splice(e,1),localStorage.setItem(S,JSON.stringify($)),B.addBtnEL.textContent="Add to shopping list",H.remove(),void console.log("Книгу видалено")}var e;e=t,$.push(e),localStorage.setItem(S,JSON.stringify($)),B.addBtnEL.textContent="Remove from the shopping list",B.addBtnEL.after(H),console.log("Книгу додано")}console.log($),B.addBtnEL.addEventListener("click",(async function(t){try{T(await C.fetchBookByID())}catch(t){console.log(t)}}));const H=document.createElement("p");H.classList.add("modal-message"),H.textContent='Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list."';var x={};x=new URL(a("kyEFX").resolve("3dsh1"),import.meta.url).toString();var A={};A=new URL(a("kyEFX").resolve("1Fi3j"),import.meta.url).toString();var R={};function U(t){B.modalPopUp.classList.add("is-hidden"),document.body.style.removeProperty("overflow")}function D(t){t.target==B.modalPopUp&&(B.modalPopUp.classList.add("is-hidden"),document.body.style.removeProperty("overflow"))}R=new URL(a("kyEFX").resolve("6GerT"),import.meta.url).toString(),B.closeModalPopUpBtn.removeEventListener("click",U),document.removeEventListener("click",D),a("kThre"),a("ipdwX"),a("apWeF"),a("j7E5r"),a("7HXnL"),a("bKXdD");var F=a("j7E5r");i=a("krGWQ");const{titleEl:M,categoryContainerEl:P,selectedBooksListEl:j}=(0,i.default)();P.addEventListener("click",(async function(t){if(t.target.classList.contains("see-more-btn")){const e=t.target.attributes.id.value,o=e.split(" ");let n;n=o[o.length-1];const a=e.split(" ").slice(0,-1).join(" ");M.textContent=a,M.innerHTML+=` <span class="home-bs__title-part">${n}</span>`;const s=await y(e),i=document.querySelectorAll(".category-btn"),l=document.querySelector(".active-category");for(const t of i)t.textContent===e&&t.classList.add("active-category");l.classList.remove("active-category"),j.insertAdjacentHTML("beforeend",_(s)),(0,F.scrollToTop)()}}));
//# sourceMappingURL=index.351dd6a6.js.map
