!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){r[t]=e},e.parcelRequired7c6=o),o.register("6qd2L",(function(t,e){var n,r,o=t.exports={};function a(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(t){if(n===setTimeout)return setTimeout(t,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(t){n=a}try{r="function"==typeof clearTimeout?clearTimeout:i}catch(t){r=i}}();var s,u=[],l=!1,d=-1;function p(){l&&s&&(l=!1,s.length?u=s.concat(u):d=-1,u.length&&f())}function f(){if(!l){var t=c(p);l=!0;for(var e=u.length;e;){for(s=u,u=[];++d<e;)s&&s[d].run();d=-1,e=u.length}s=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===i||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function m(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new h(t,e)),1!==u.length||l||c(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}));var a=o("bpxeT"),i=o("2TvXO");o("6qd2L");o("bpxeT"),o("2TvXO"),a=o("bpxeT"),i=o("2TvXO");var c=o("dIxxU");function s(){return u.apply(this,arguments)}function u(){return(u=t(a)(t(i).mark((function e(){var n;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.default.get("https://books-backend.p.goit.global/books/top-books");case 3:return n=t.sent.data,t.abrupt("return",n);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var l=function(t){return'\n       \t\t\t\t\t<li class="book-item">\n\t\t\t\t\t\t<a class="book-item-link" href="" aria-label="Book thumbnail">\n\t\t\t\t\t\t\t<div class="book-item-thumb">\n\n\t\t\t\t\t\t\t\t<img class="book-image" src="'.concat(t.book_image,'"  loading="lazy" data_id=').concat(t._id,'/>\n\n\t\t\t\t\t\t\t\t<div class="book-image-overlay">\n\t\t\t\t\t\t\t\t\t<p class="book-image-overlay-text">Quick view</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class="book-item-meta">\n\t\t\t\t\t\t\t\t<h3 class="book-title">').concat(t.title,'</h3>\n       \t\t\t\t\t<p class="book-author"> ').concat(t.author,"</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</li>\n        ")},d=(0,o("4Nugj").default)().categoryContainerEl;function p(){return f.apply(this,arguments)}function f(){return(f=t(a)(t(i).mark((function e(){var n,r,o,a,c,u,p,f,h,m,v,b,g,k,y,T,x,w,L;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s();case 3:n=t.sent,r=document.createElement("ul"),o=!0,a=!1,c=void 0,t.prev=6,u=n[Symbol.iterator]();case 8:if(o=(p=u.next()).done){t.next=44;break}for(f=p.value,(h=document.createElement("li")).classList.add("home-category"),(m=document.createElement("h2")).classList.add("home-category-title"),h.appendChild(m),m.innerText=f.list_name,r.appendChild(h),(v=document.createElement("ul")).classList.add("books-list"),b=!0,g=!1,k=void 0,t.prev=20,y=f.books[Symbol.iterator]();!(b=(T=y.next()).done);b=!0)x=T.value,(w=document.createElement("li")).classList.add("book-item"),w.innerHTML=l(x),v.appendChild(w),h.appendChild(v);t.next=28;break;case 24:t.prev=24,t.t0=t.catch(20),g=!0,k=t.t0;case 28:t.prev=28,t.prev=29,b||null==y.return||y.return();case 31:if(t.prev=31,!g){t.next=34;break}throw k;case 34:return t.finish(31);case 35:return t.finish(28);case 36:(L=document.createElement("button")).classList.add("button"),L.classList.add("see-more-btn"),L.innerText="See more",h.appendChild(L);case 41:o=!0,t.next=8;break;case 44:t.next=50;break;case 46:t.prev=46,t.t1=t.catch(6),a=!0,c=t.t1;case 50:t.prev=50,t.prev=51,o||null==u.return||u.return();case 53:if(t.prev=53,!a){t.next=56;break}throw c;case 56:return t.finish(53);case 57:return t.finish(50);case 58:d.appendChild(r),t.next=64;break;case 61:t.prev=61,t.t2=t.catch(0),console.log(t.t2);case 64:case"end":return t.stop()}}),e,null,[[0,61],[6,46,50,58],[20,24,28,36],[29,,31,35],[51,,53,57]])})))).apply(this,arguments)}p();var h=(0,o("4Nugj").default)(),m=h.allCategoriesBtn,v=h.categoryContainerEl,b=h.titleEl;function g(){return(g=t(a)(t(i).mark((function e(n){return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),b.innerHTML='Best Sellers <span class="home-bs__title-part">Books</span>',v.innerHTML="",t.next=5,p();case 5:case"end":return t.stop()}}),e)})))).apply(this,arguments)}m.addEventListener("click",(function(t){return g.apply(this,arguments)}))}();
//# sourceMappingURL=shopping-list.60f52870.js.map