!function(){function n(n,e,i,o){Object.defineProperty(n,e,{get:i,set:o,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},t=e.parcelRequired7c6;null==t&&((t=function(n){if(n in i)return i[n].exports;if(n in o){var e=o[n];delete o[n];var t={id:n,exports:{}};return i[n]=t,e.call(t.exports,t,t.exports),t.exports}var s=new Error("Cannot find module '"+n+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(n,e){o[n]=e},e.parcelRequired7c6=t),t.register("lzhzI",(function(e,i){n(e.exports,"handleClickOnSingUpCloseBtn",(function(){return s})),n(e.exports,"handleClickOnSingInCloseBtn",(function(){return l})),n(e.exports,"userLogIn",(function(){return d})),n(e.exports,"userLogOut",(function(){return r}));const o=(0,t("4Nugj").default)();function s(){o.signUpModalEl.classList.remove("open")}function l(){o.signUpModalEl.classList.remove("open")}function d(){o.userBarMenu.classList.remove("user-out"),o.singUpBtn.classList.add("user-in")}function r(){o.userBarMenu.classList.add("user-out"),o.singUpBtn.classList.remove("user-in")}o.openSignUpBtnEl.addEventListener("click",(function(){o.signUpModalEl.classList.add("open"),o.signInModalWindowEl.style.display="none",o.signUpModalWindowEl.style.display="block"})),o.closeSignUpBtnEl.addEventListener("click",s),o.signUpModalEl.addEventListener("click",(function(n){n.target===o.signUpModalEl&&s()})),o.openSignInBtnEl.addEventListener("click",(function(){o.signUpModalWindowEl.style.display="none",o.signInModalWindowEl.style.display="block"})),o.openSignUpBtnSecondEl.addEventListener("click",(function(){o.signInModalWindowEl.style.display="none",o.signUpModalWindowEl.style.display="block"})),o.closeSignInBtnEl.addEventListener("click",l),o.userBarMenu.addEventListener("click",(function(){o.logOutMenu.classList.toggle("logout-menu")})),window.addEventListener("keydown",(n=>{o.signUpModalEl.classList.contains("open")&&"Escape"===n.key&&o.signUpModalEl.classList.remove("open")}))}))}();
//# sourceMappingURL=index.dda786a1.js.map
