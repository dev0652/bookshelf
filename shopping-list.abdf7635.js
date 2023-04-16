const s=document.querySelector(".shopping__list");function n(){return i.map((({title:s,author:n,description:i,list_name:t})=>`<article class="shopping__card">\n  <div class="div1">\n    <img\n      class="shopping__card-img"\n      src="https://picsum.photos/116/165"\n      alt=""\n    />\n  </div>\n\n  <div class="div2">\n    <h3 class="shopping__card-title">${s}</h3>\n    <p class="shopping__card-category">${t}</p>\n  </div>\n\n  <div class="div3">\n    <p class="shopping__card-description">${i}</p>\n  </div>\n\n  <div class="div4">\n    <p class="shopping__card-author">${n}</p>\n  </div>\n\n  <div class="div5">\n    <ul class="shopping__card-shoplist">\n      <li class="store"><a href="">St1</a></li>\n      <li class="store"><a href="">St2</a></li>\n      <li class="store"><a href="">St3</a></li>\n    </ul>\n  </div>\n  <button class="shopping__card-btn" type="button" data-book-name="${s}"><svg class="icon-trash" width="16" height="16"><use href="./src/images/symbol-defs.svg#icon-chevron"></use></svg>\n  </button>\n</article>\n\n        `)).join("")}const i=JSON.parse(localStorage.getItem("storage-of-books"))||[];i.length?s.insertAdjacentHTML("beforeend",n()):s.innerHTML='<div class="is-empty__wrapper"><p class="is-empty__info">This page is empty, add some books and proceed to order.</p></div>';document.querySelector(".shopping__list").addEventListener("click",(t=>{if(t.target.classList.contains("shopping__card-btn")){const e=t.target.getAttribute("data-book-name"),a=i.findIndex((s=>s.title===e));if(i.splice(a,1),localStorage.setItem("storage-of-books",JSON.stringify(i)),s.innerHTML=n(),!i.length)return void(s.innerHTML='<div class="is-empty__wrapper"><p class="is-empty__info">This page is empty, add some books and proceed to order.</p></div>')}}));
//# sourceMappingURL=shopping-list.abdf7635.js.map