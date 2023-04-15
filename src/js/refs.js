export default function () {
  return {
    header: document.querySelector('header'),

    // Scroll to top:
    scrollToTopButton: document.querySelector('.back-to-top'),
    toTopTarget: document.querySelector('.to-top-target'),

    // Color scheme switcher:
    colorSwitcher: document.querySelector('#color-scheme-switcher-checkbox'),

    // All categories button:
    allCategoriesBtn: document.querySelector('button[name="allcategories"]'),


    //Categories list:
    categoryListEl: document.querySelector('.categories_list'),

    // Sign up
    openSignUpBtnEl: document.querySelector('#signUp-open-btn'),
    signUpModalEl: document.querySelector('#sign-up-modal'),
    closeSignUpBtnEl: document.querySelector('#signUp-modal-close-btn'),
    openSignUpBtnSecondEl: document.querySelector('#signUp-open-btn-second'),
    // Sign in
    openSignInBtnEl: document.querySelector('#signIn-open-btn'),
    signInModalEl: document.querySelector('#sign-in-modal'),
    closeSignInBtnEl: document.querySelector('#signIn-modal-close-btn'),

    // Pop Up
    openModalPopUpBtn: document.querySelector('.open-modal-button'),
    closeModalPopUpBtn: document.querySelector('[data-pop-up-close]'),
    modalPopUpBtn: document.querySelector('.modal-pop-up-btn'),
    modalPopUp: document.querySelector('[data-pop-up]'),
    modalContentEl: document.querySelector('.modal-pop-up-content'),
  };
}
