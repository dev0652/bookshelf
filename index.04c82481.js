var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var o=n("krGWQ");const{categoryListEl:a,allCategoriesBtn:i}=(0,o.default)();function l(e){if(e.preventDefault(),"BUTTON"!==e.target.nodeName)return;const t=e.target,r=document.querySelector(".active-category");r&&r!==t&&r.classList.remove("active-category"),t.classList.add("active-category")}a.addEventListener("click",l),i.addEventListener("click",l);
//# sourceMappingURL=index.04c82481.js.map
