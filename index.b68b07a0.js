!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a);var o=a("bpxeT"),c=a("2TvXO"),i=a("dIxxU");(0,a("4Nugj").default)().allCategoriesBtn.addEventListener("click",(function(){return p.apply(this,arguments)}));var u=document.querySelector(".topbooks");function l(){return s.apply(this,arguments)}function s(){return(s=e(o)(e(c).mark((function t(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.default.get("https://books-backend.p.goit.global/books/top-books");case 3:return n=e.sent.data,e.abrupt("return",n);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function p(){return(p=e(o)(e(c).mark((function t(){var n,r,a,o,i,s,p,d,f,h,v,b,x,k,m,g,w;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l();case 3:n=e.sent,r=document.createElement("ul"),a=!0,o=!1,i=void 0,e.prev=6,s=n[Symbol.iterator]();case 8:if(a=(p=s.next()).done){e.next=34;break}for(d=p.value,(f=document.createElement("li")).innerText=d.list_name,r.appendChild(f),h=document.createElement("ul"),v=!0,b=!1,x=void 0,e.prev=15,k=d.books[Symbol.iterator]();!(v=(m=k.next()).done);v=!0)g=m.value,(w=document.createElement("li")).innerHTML='<img src="'.concat(g.book_image,'" width="',"book.book_image_width",'" height="').concat(g.book_image_height,'" alt="bookcover" /><h3>').concat(g.title,"</h3><h4>").concat(g.author,"</h4>"),h.appendChild(w),f.appendChild(h);e.next=23;break;case 19:e.prev=19,e.t0=e.catch(15),b=!0,x=e.t0;case 23:e.prev=23,e.prev=24,v||null==k.return||k.return();case 26:if(e.prev=26,!b){e.next=29;break}throw x;case 29:return e.finish(26);case 30:return e.finish(23);case 31:a=!0,e.next=8;break;case 34:e.next=40;break;case 36:e.prev=36,e.t1=e.catch(6),o=!0,i=e.t1;case 40:e.prev=40,e.prev=41,a||null==s.return||s.return();case 43:if(e.prev=43,!o){e.next=46;break}throw i;case 46:return e.finish(43);case 47:return e.finish(40);case 48:u.appendChild(r),e.next=54;break;case 51:e.prev=51,e.t2=e.catch(0),console.log(e.t2);case 54:case"end":return e.stop()}}),t,null,[[0,51],[6,36,40,48],[15,19,23,31],[24,,26,30],[41,,43,47]])})))).apply(this,arguments)}}();
//# sourceMappingURL=index.b68b07a0.js.map