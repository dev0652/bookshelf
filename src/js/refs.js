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

    //Categories:
    categoryListEl: document.querySelector('.categories_list'),
    categoryContainerEl: document.querySelector('.category-container'),
    titleEl: document.querySelector('.home-br__title'),

    // Sign up
    openSignUpBtnEl: document.querySelector('#signUp-open-btn'),
    signUpModalEl: document.querySelector('#sign-up-modal'),
    signUpModalWindowEl: document.querySelector('#sign-up-modal-window'),
    closeSignUpBtnEl: document.querySelector('#signUp-modal-close-btn'),
    openSignUpBtnSecondEl: document.querySelector('#signUp-open-btn-second'),

    // Sign in
    openSignInBtnEl: document.querySelector('#signIn-open-btn'),
    signInModalEl: document.querySelector('#sign-in-modal'),
    signInModalWindowEl: document.querySelector('#sign-in-modal-window'),
    closeSignInBtnEl: document.querySelector('#signIn-modal-close-btn'),

    // Auth form elements
    authForm: document.querySelector('.modal-form'),
    nameField: document.querySelector('[name=user-name]'),
    emailField: document.querySelector('[name=user-email]'),
    passwordField: document.querySelector('#signup-user-password'),
    authSubmitBtn: document.querySelector('modal-form__submit'),

    // Pop Up
    openModalPopUpBtn: document.querySelector('.open-modal-button'),
    closeModalPopUpBtn: document.querySelector('[data-pop-up-close]'),
    modalPopUpBtn: document.querySelector('.modal-pop-up-btn'),
    modalPopUp: document.querySelector('[data-pop-up]'),
    modalContentEl: document.querySelector('.modal-pop-up-content'),

    //Stepan
    userName: document.getElementById('user-name'),
    formSingUp: document.getElementById('singUp'),
    logOut: document.getElementById('logOut'),
    userBarMenu: document.getElementById('userBarMenu'),
    logOutMenu: document.getElementById('logOutMenu'),
    formLogIn: document.getElementById('logIn'),
    singUpBtn: document.querySelector('.userbar-btn'),
  };
}
