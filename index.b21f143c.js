!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){o[e]=t},e.parcelRequired7c6=r),r.register("4Nugj",(function(e,t){var o,r,n,c;function a(){return{header:document.querySelector("header"),scrollToTopButton:document.querySelector(".back-to-top"),toTopTarget:document.querySelector(".to-top-target"),colorSwitcher:document.querySelector("#color-scheme-switcher-checkbox"),allCategoriesBtn:document.querySelector('button[name="allcategories"]')}}o=e.exports,r="default",n=function(){return a},Object.defineProperty(o,r,{get:n,set:c,enumerable:!0,configurable:!0})}));var n=r("4Nugj"),c=(0,(n=r("4Nugj")).default)().scrollToTopButton,a=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting?c.classList.add("hidden"):c.classList.remove("hidden")}))}));var l=(0,(n=r("4Nugj")).default)().colorSwitcher;function u(){l.checked?document.body.classList.add("dark"):document.body.classList.remove("dark")}function d(e){var t;u(),t=e.currentTarget,localStorage.setItem("saved switcher value",t.checked)}checkLocalStorage=function(){return localStorage.getItem("saved switcher value")};var i,s=(0,n.default)(),f=s.scrollToTopButton,g=s.toTopTarget;a.observe(g),f.addEventListener("click",(function(){window.scroll({top:0,behavior:"smooth"})})),(i=checkLocalStorage())&&(l.checked="true"===i),u(),l.addEventListener("change",d)}();
//# sourceMappingURL=index.b21f143c.js.map
