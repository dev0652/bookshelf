function n(n,e,l,i){Object.defineProperty(n,e,{get:l,set:i,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},i={},o=e.parcelRequired7c6;null==o&&((o=function(n){if(n in l)return l[n].exports;if(n in i){var e=i[n];delete i[n];var o={id:n,exports:{}};return l[n]=o,e.call(o.exports,o,o.exports),o.exports}var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(n,e){i[n]=e},e.parcelRequired7c6=o),o.register("bKXdD",(function(e,l){n(e.exports,"handleClickOnSingUpCloseBtn",(function(){return t})),n(e.exports,"handleClickOnSingInCloseBtn",(function(){return d}));const i=(0,o("krGWQ").default)();function t(){i.signUpModalEl.classList.remove("open")}function d(){i.signUpModalEl.classList.remove("open")}i.openSignUpBtnEl.addEventListener("click",(function(){i.signUpModalEl.classList.add("open"),i.signInModalWindowEl.style.display="none",i.signUpModalWindowEl.style.display="block"})),i.closeSignUpBtnEl.addEventListener("click",t),i.signUpModalEl.addEventListener("click",(function(n){n.target===i.signUpModalEl&&t()})),i.openSignInBtnEl.addEventListener("click",(function(){i.signUpModalWindowEl.style.display="none",i.signInModalWindowEl.style.display="block"})),i.openSignUpBtnSecondEl.addEventListener("click",(function(){i.signInModalWindowEl.style.display="none",i.signUpModalWindowEl.style.display="block"})),i.closeSignInBtnEl.addEventListener("click",d),i.userBarMenu.addEventListener("click",(function(){i.logOutMenu.classList.toggle("logout-menu")})),window.addEventListener("keydown",(n=>{"Escape"===n.key&&i.signUpModalEl.classList.remove("open")}))})),o("bKXdD");
//# sourceMappingURL=shopping-list.e9cdf1e7.js.map
