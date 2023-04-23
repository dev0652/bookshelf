export default function () {
  return {
    // Header
    header: document.querySelector('header'),
    headerNavLinks: document.querySelectorAll('.page-navigation-link '),

    // Scroll to top:
    scrollToTopButton: document.querySelector('.back-to-top'),
    toTopTarget: document.querySelector('.to-top-target'),

    // Color scheme switcher:
    colorSwitcherCnt: document.querySelector('.color-scheme-switcher'),
    colorSwitcher: document.querySelector('#color-scheme-switcher-checkbox'),
    colorSwitcherSlider: document.querySelector(
      '.color-scheme-switcher-slider'
    ),

    // All categories button:
    allCategoriesBtn: document.querySelector('button[name=allcategories]'),

    //Categories:
    categoryListEl: document.querySelector('.categories_list'),
    categoriesListContainer: document.querySelector('.categories'),
    categoryContainerEl: document.querySelector(
      '.book-data-rendring-container'
    ),
    titleEl: document.querySelector('.content-part-title'),
    // selectedBooksListEl: document.querySelector('.selected-category'),
    selectedBooksListEl: document.querySelector('.category-blocks-list'),

    // home-container
    homeContainer: document.querySelector('.home-container'),

    // Support Ukraine
    supportUkraineCnt: document.querySelector('.support-list'),

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
    nameField: document.querySelector('[name=user_name]'),
    emailField: document.querySelector('[name=user_email]'),
    passwordField: document.querySelector('#signup-user-password'),
    authSubmitBtn: document.querySelector('modal-form__submit'),

    // Pop Up
    bookCard: document.querySelector('.book-link'),
    closeModalPopUpBtn: document.querySelector('[data-pop-up-close]'),
    modalPopUp: document.querySelector('[data-pop-up]'),
    modalContentEl: document.querySelector('.modal-pop-up-content'),

    //Stepan
    userName: document.getElementById('user-name'),
    formSingUp: document.getElementById('singUp'),
    logOut: document.getElementById('logOut'),
    userBarMenu: document.getElementById('userBarMenu'),
    logOutMenu: document.getElementById('logOutMenu'),
    formLogIn: document.getElementById('logIn'),

    // Shopping list
    divEl: document.querySelector('.shopping__list'),
    addBtnEL: document.querySelector('.modal-pop-up-btn'),
    // Paginations
    paginationsSection: document.querySelector('.paginations'),
    paginationContainerPages: document.querySelector(
      '.paginations__container-pages'
    ),
    paginationContainerBackBtn: document.querySelector(
      '.paginations__container-back'
    ),
    paginationContainerEndBtn: document.querySelector(
      '.paginations__container-end'
    ),
    startButton: document.querySelector("button[name='startButton']"),
    previousButton: document.querySelector("button[name='previousButton']"),
    nextButton: document.querySelector("button[name='nextButton']"),
    endButton: document.querySelector("button[name='endButton']"),
    activButton: document.querySelector('.active'),

    singUpBtn: document.querySelector('.userbar-btn'),
  };
}
