var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var a=n("2shzp");async function l(){try{const{data:e}=await a.default.get("https://books-backend.p.goit.global/books/top-books");return e}catch(e){console.log(e)}}const s=e=>`\n       <li class="book-item">\n       <img  src="${e.book_image}"  loading="lazy"  class="book-image" data_id=${e._id}/>\n       <h3 class="book-title">${e.title}</h3>\n       <p class="book-author"> ${e.author}\n        </p>\n        </li>`;var c=n("krGWQ");const{allCategoriesBtn:i}=(0,c.default)(),d=document.querySelector(".category-container");!async function(){try{const e=await l(),t=document.createElement("ul");for(const o of e){const e=document.createElement("li");e.classList.add("home-category");const n=document.createElement("h2");n.classList.add("home-category-title"),e.appendChild(n),n.innerText=o.list_name,t.appendChild(e);const a=document.createElement("ul");a.classList.add("books-list");for(const t of o.books){const o=document.createElement("li");o.classList.add("book-item"),o.innerHTML=s(t),a.appendChild(o),e.appendChild(a)}const l=document.createElement("button");l.classList.add("button"),l.classList.add("see-more-btn"),l.innerText="See more",e.appendChild(l)}d.appendChild(t)}catch(e){console.log(e)}}();
//# sourceMappingURL=index.fa6a714b.js.map
