!function(){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},i={},o=n.parcelRequired7c6;null==o&&((o=function(n){if(n in e)return e[n].exports;if(n in i){var o=i[n];delete i[n];var l={id:n,exports:{}};return e[n]=l,o.call(l.exports,l,l.exports),l.exports}var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(n,e){i[n]=e},n.parcelRequired7c6=o);var l=(0,o("4Nugj").default)();function t(){l.signUpModalEl.classList.add("open"),l.signInModalEl.classList.contains("open")&&s()}function d(){l.signUpModalEl.classList.remove("open")}function s(){l.signInModalEl.classList.remove("open")}l.openSignUpBtnEl.addEventListener("click",t),l.closeSignUpBtnEl.addEventListener("click",d),l.openSignUpBtnSecondEl.addEventListener("click",t),l.openSignInBtnEl.addEventListener("click",(function(){l.signInModalEl.classList.add("open"),d()})),l.closeSignInBtnEl.addEventListener("click",s),window.addEventListener("keydown",(function(n){"Escape"===n.key&&l.signInModalEl.classList.remove("open")})),window.addEventListener("keydown",(function(n){"Escape"===n.key&&l.signUpModalEl.classList.remove("open")})),l.signUpModalEl.addEventListener("click",(function(n){n.target===l.signUpModalEl&&d()})),l.signInModalEl.addEventListener("click",(function(n){n.target===l.signInModalEl&&s()}))}();
//# sourceMappingURL=index.5ca394bc.js.map