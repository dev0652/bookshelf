var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},t=o.parcelRequired7c6;null==t&&((t=function(o){if(o in e)return e[o].exports;if(o in n){var t=n[o];delete n[o];var a={id:o,exports:{}};return e[o]=a,t.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+o+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(o,e){n[o]=e},o.parcelRequired7c6=t),t("kyEFX").register(JSON.parse('{"Ujaud":"index.44257de7.js","3dsh1":"apple-books.652b354e.png","1Fi3j":"book-shop.1d091ebd.png","6GerT":"amazon.626c9508.png"}'));const a=(0,t("krGWQ").default)();const s=new class{#o="https://books-backend.p.goit.global/books";bookID=null;async fetchBookByID(){try{const o=await fetch(`${this.#o}/${this.bookID}`);return await o.json()}catch(o){console.log(o.message)}}},l=document.querySelector(".modal-pop-up-btn"),i=JSON.parse(localStorage.getItem("storage-of-books"))||[];function r(o){var e;i.find((e=>e._id===o._id))?console.log("Ця книга вже у кошику"):(e=o,i.push(e),localStorage.setItem("storage-of-books",JSON.stringify(i)))}console.log(i),l.addEventListener("click",(async function(o){try{const o=await s.fetchBookByID();await r(o);if(i.find((e=>e._id===o._id)))return console.log("добавлено у кошик"),void(l.textContent="STOP")}catch(o){console.log(o)}}));var d;d=new URL(t("kyEFX").resolve("3dsh1"),import.meta.url).toString();var c;c=new URL(t("kyEFX").resolve("1Fi3j"),import.meta.url).toString();var p;function g(){a.modalPopUp.classList.toggle("is-hidden")}p=new URL(t("kyEFX").resolve("6GerT"),import.meta.url).toString(),a.openModalPopUpBtn.addEventListener("click",(async function(o){s.bookID="643282b1e85766588626a080";try{const o=await s.fetchBookByID();g(),a.modalContentEl.innerHTML=function(o){const{_id:e,book_image:n,author:t,title:a,description:s,amazon_product_url:l,buy_links:[i,r,g,f,m,u]}=o,h=new URL(d).href,k=new URL(c).href,b=new URL(p).href;return`\n                        \n              <img class="modal-img" src="${n}"/>\n              <div class='modal-book-atributes'>\n              <p class="modal-book-title">${a}</p>\n              <p class="modal-book-author">${t}</p>\n              <p class="modal-book-desc">${s}</p>\n              <div class="modal-shops">\n              <a class="modal-shop-link" href="${l}" target="_blank">\n              <img class="modal-shop-img amazon" src="${b}" alt="Amazon link"/>\n              </a>\n              <a class="modal-shop-link" href="${r.url}" target="_blank">\n              <img class="modal-shop-img apple" src="${h}" alt="Apple Books link" />\n              </a>\n              <a class="modal-shop-link" href="${m.url}" target="_blank">\n              <img class="modal-shop-img" src="${k}" alt="Book Shop link"/>\n              </a>\n              </div>\n              </div>\n              \n          `}(o);if(i.find((e=>e._id===o._id)))return console.log("Ця книга вже у кошику"),void(l.textContent="STOP")}catch(o){console.log(o)}})),a.closeModalPopUpBtn.addEventListener("click",(function(o){g(),a.modalContentEl.innerHTML=""})),window.addEventListener("keydown",(o=>{"Escape"===o.key&&g()})),a.modalPopUpBtn.addEventListener("click",(function(o){o.target.textContent="Remove from the shopping list",o.target.insertAdjacentHTML("afterend",'<p class="modal-message">Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list."</p>')}));
//# sourceMappingURL=index.44257de7.js.map
