var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},t=o.parcelRequired7c6;null==t&&((t=function(o){if(o in e)return e[o].exports;if(o in n){var t=n[o];delete n[o];var i={id:o,exports:{}};return e[o]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+o+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(o,e){n[o]=e},o.parcelRequired7c6=t);var i=t("2shzp");const r=o=>o.map((o=>`\n       <li class="book-item">\n       <img  src="${o.book_image}"  loading="lazy"  class="book-image"/>\n       <h3 class="book-title">${o.title}</h3>\n       <p class="book-author"> ${o.author}\n        </p>\n        </li>`)).join(""),l=document.querySelector(".books-list__first"),s=document.querySelector(".books-list__second"),a=document.querySelector(".books-list__third"),c=document.querySelector(".books-list__fourth");i.default.get("https://books-backend.p.goit.global/books/top-books").then((o=>o.data)).catch((o=>{console.log(o)})).then((o=>{o.map((o=>"Combined Print and E-Book Fiction"===o.list_name?l.innerHTML+=r(o.books):"Combined Print and E-Book Nonfiction"===o.list_name?s.innerHTML+=r(o.books):"Hardcover Fiction"===o.list_name?a.innerHTML+=r(o.books):"Hardcover Nonfiction"===o.list_name?c.innerHTML+=r(o.books):void 0))})).catch((o=>{console.log(o)}));
//# sourceMappingURL=index.818c693c.js.map