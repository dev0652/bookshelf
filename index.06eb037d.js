function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},a=e.parcelRequired7c6;null==a&&((a=function(t){if(t in o)return o[t].exports;if(t in n){var e=n[t];delete n[t];var a={id:t,exports:{}};return o[t]=a,e.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){n[t]=e},e.parcelRequired7c6=a),a("kyEFX").register(JSON.parse('{"5ZPII":"index.06eb037d.js","3dsh1":"apple-books.652b354e.png","1Fi3j":"book-shop.1d091ebd.png","6GerT":"amazon.626c9508.png","iWepY":"shopping-list.0aacc6bc.js","hivvt":"index.90e05346.js"}'));var i=a("krGWQ");a("04jNI"),a("3aHCK"),a("7HXnL");var s=a("2shzp");i=a("krGWQ");const{categoryListEl:l}=(0,i.default)();!async function(){try{const t=(await async function(){try{const{data:t}=await s.default.get("https://books-backend.p.goit.global/books/category-list");return t}catch(t){console.log(t)}}()).sort(((t,e)=>t.list_name.localeCompare(e.list_name)));for(const e of t){const t=document.createElement("li"),o=document.createElement("button");o.classList.add("category-btn"),o.textContent=`${e.list_name}`,l.appendChild(t),t.appendChild(o)}}catch(t){console.log(t)}}();i=a("krGWQ");const{categoryListEl:c,allCategoriesBtn:r}=(0,i.default)();c.addEventListener("click",(function(t){if(t.preventDefault(),"BUTTON"!==t.target.nodeName)return;const e=t.target,o=document.querySelector(".active-category");o&&o!==e&&o.classList.remove("active-category"),e.classList.add("active-category")})),console.log("categoryListEl: ",c);i=a("krGWQ");const{categoryListEl:d,titleEl:g}=(0,i.default)();let u="";d.addEventListener("click",(function(t){if(t.target.classList.contains("category-btn")){const e=t.target.textContent,o=e.split(" ");u=o[o.length-1];const n=e.split(" ").slice(0,-1).join(" ");g.textContent=n,g.innerHTML+=` <span class="home-bs__title-part">${u}</span>`}}));i=a("krGWQ"),s=a("2shzp");var p=a("7Y9D8");async function m(){t(p).Loading.dots();try{const{data:e}=await s.default.get("https://books-backend.p.goit.global/books/top-books");return t(p).Loading.remove(),e}catch(e){t(p).Loading.remove(),t(p).Notify.failure("Something went wrong. Please try again"),console.log(e)}}function f(t){return`\n\t\t\t\t\t\t<a class="book-item-link" href="" aria-label="Book thumbnail">\n\t\t\t\t\t\t\t<div class="book-item-thumb">\n\n\t\t\t\t\t\t\t\t<img class="book-image" src="${t.book_image}"  loading="lazy" data_id=${t._id} />\n\n\t\t\t\t\t\t\t\t<div class="book-image-overlay">\n\t\t\t\t\t\t\t\t\t<p class="book-image-overlay-text">Quick view</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class="book-item-meta">\n\t\t\t\t\t\t\t\t<h3 class="book-title">${t.title}</h3>\n       \t\t\t\t\t<p class="book-author"> ${t.author}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\n        `}i=a("krGWQ");const{categoryContainerEl:h}=(0,i.default)();async function k(){try{const t=await m(),e=document.createElement("ul");for(const o of t){const t=document.createElement("li");t.classList.add("home-category");const n=document.createElement("h2");n.classList.add("home-category-title"),t.appendChild(n),n.innerText=o.list_name,e.appendChild(t);const a=document.createElement("ul");a.classList.add("books-list");for(const e of o.books){const o=document.createElement("li");o.classList.add("book-item"),o.innerHTML=f(e),a.appendChild(o),t.appendChild(a)}const i=document.createElement("button");i.classList.add("button"),i.classList.add("see-more-btn"),i.innerText="See more",t.appendChild(i)}h.appendChild(e)}catch(t){console.log(t)}}k();const{allCategoriesBtn:b,categoryContainerEl:y,titleEl:v}=(0,i.default)();b.addEventListener("click",(async function(t){t.preventDefault(),v.innerHTML='Best Sellers <span class="home-bs__title-part">Books</span>',y.innerHTML="",await k()})),a("dTazW");s=a("2shzp"),p=a("7Y9D8"),i=a("krGWQ");const{categoryListEl:L,categoryContainerEl:E}=(0,i.default)();L.addEventListener("click",(async function(e){if(e.preventDefault(),"BUTTON"!==e.target.nodeName)return;let o;const n=await async function(e){t(p).Loading.dots("Please wait");const o=e.target.textContent;try{const{data:e}=await s.default.get(`https://books-backend.p.goit.global/books/category?category=${o}`);return t(p).Loading.remove(),e}catch(e){t(p).Loading.remove(),t(p).Notify.failure("Something went wrong. Please try again"),console.log(e)}}(e);o=n,async function(t){E.innerHTML="";const e=t,o=document.createElement("ul");try{for(const t of e){const e=document.createElement("li");e.innerHTML=`<img src="${t.book_image}" width="${t.book_image_width}" height="${t.book_image_height}" alt="bookcover of ${t.title}" /><h3>${t.title}</h3><h4>${t.author}</h4>`,o.appendChild(e)}E.appendChild(o)}catch(t){console.log(t)}}(o)}));const _=(0,(i=a("krGWQ")).default)();const w=new class{#t="https://books-backend.p.goit.global/books";bookID=null;async fetchBookByID(){try{const t=await fetch(`${this.#t}/${this.bookID}`);return await t.json()}catch(t){console.log(t.message)}}},C="storage-of-books",S=document.querySelector(".modal-pop-up-btn"),$=JSON.parse(localStorage.getItem(C))||[];function T(t){var e;$.find((e=>e._id===t._id))?console.log("Ця книга вже у кошику"):(e=t,$.push(e),localStorage.setItem(C,JSON.stringify($)))}async function H(t){w.bookID=t.target.attributes.data_id.value;try{const t=await w.fetchBookByID();U(),_.modalContentEl.innerHTML=function(t){const{_id:e,book_image:o,author:n,title:a,description:i,amazon_product_url:s,buy_links:[l,c,r,d,g,u]}=t,p=new URL(B).href,m=new URL(x).href,f=new URL(R).href;return`\n                        \n              <img class="modal-img" src="${o}"/>\n              <div class='modal-book-atributes'>\n              <p class="modal-book-title">${a}</p>\n              <p class="modal-book-author">${n}</p>\n              <p class="modal-book-desc">${i}</p>\n              <div class="modal-shops">\n              <a class="modal-shop-link" href="${s}" target="_blank">\n              <img class="modal-shop-img amazon" src="${f}" alt="Amazon link"/>\n              </a>\n              <a class="modal-shop-link" href="${c.url}" target="_blank">\n              <img class="modal-shop-img apple" src="${p}" alt="Apple Books link" />\n              </a>\n              <a class="modal-shop-link" href="${g.url}" target="_blank">\n              <img class="modal-shop-img" src="${m}" alt="Book Shop link"/>\n              </a>\n              </div>\n              </div>\n              \n          `}(t);if($.find((e=>e._id===t._id)))return console.log("Ця книга вже у кошику"),void(S.textContent="STOP")}catch(t){console.log(t)}}console.log($),S.addEventListener("click",(async function(t){try{const t=await w.fetchBookByID();await T(t);if($.find((e=>e._id===t._id)))return console.log("добавлено у кошик"),void(S.textContent="STOP")}catch(t){console.log(t)}}));var B={};B=new URL(a("kyEFX").resolve("3dsh1"),import.meta.url).toString();var x={};x=new URL(a("kyEFX").resolve("1Fi3j"),import.meta.url).toString();var R={};function U(){_.modalPopUp.classList.toggle("is-hidden")}function D(t){U(),_.modalContentEl.innerHTML=""}function F(t){"Escape"===t.key&&U()}function M(t){t.target==_.modalPopUp&&U()}R=new URL(a("kyEFX").resolve("6GerT"),import.meta.url).toString(),_.categoryContainerEl.addEventListener("click",(function(t){t.target.matches(".book-image")&&(t.preventDefault(),H(t))})),_.closeModalPopUpBtn.addEventListener("click",D),_.closeModalPopUpBtn.removeEventListener("click",D),window.addEventListener("keydown",F),window.removeEventListener("keydown",F),window.addEventListener("click",M),window.removeEventListener("click",M),a("kThre");var N=a("1szBL");a("j7E5r");(0,i.default)().authForm.addEventListener("submit",N.validateOnSubmit);
//# sourceMappingURL=index.06eb037d.js.map
