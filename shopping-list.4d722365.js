var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},l={},i=n.parcelRequired7c6;null==i&&((i=function(n){if(n in e)return e[n].exports;if(n in l){var i=l[n];delete l[n];var o={id:n,exports:{}};return e[n]=o,i.call(o.exports,o,o.exports),o.exports}var d=new Error("Cannot find module '"+n+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(n,e){l[n]=e},n.parcelRequired7c6=i);const o=(0,i("krGWQ").default)();function d(){o.signUpModalEl.classList.remove("open")}o.openSignUpBtnEl.addEventListener("click",(function(){o.signUpModalEl.classList.add("open"),o.signInModalWindowEl.style.display="none",o.signUpModalWindowEl.style.display="block"})),o.closeSignUpBtnEl.addEventListener("click",d),o.signUpModalEl.addEventListener("click",(function(n){n.target===o.signUpModalEl&&d()})),o.openSignInBtnEl.addEventListener("click",(function(){o.signUpModalWindowEl.style.display="none",o.signInModalWindowEl.style.display="block"})),o.openSignUpBtnSecondEl.addEventListener("click",(function(){o.signInModalWindowEl.style.display="none",o.signUpModalWindowEl.style.display="block"})),o.closeSignInBtnEl.addEventListener("click",(function(){o.signUpModalEl.classList.remove("open")})),window.addEventListener("keydown",(n=>{"Escape"===n.key&&o.signUpModalEl.classList.remove("open")}));
//# sourceMappingURL=shopping-list.4d722365.js.map
