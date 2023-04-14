import getRefs from './refs.js';

const refs = getRefs();

refs.openSignUpBtnEl.addEventListener('click', handleClickOnSingUpOpenBtn);
refs.closeSignUpBtnEl.addEventListener('click', handleClickOnSingUpCloseBtn);

refs.openSignUpBtnSecondEl.addEventListener(
  'click',
  handleClickOnSingUpOpenBtn
);

refs.openSignInBtnEl.addEventListener('click', handleClickOnSingInOpenBtn);
refs.closeSignInBtnEl.addEventListener('click', handleClickOnSingInCloseBtn);

//
// Функції для Sign up модалки

// Відкрити Sign up модалку
function handleClickOnSingUpOpenBtn() {
  refs.signUpModalEl.classList.add('open');
  if (refs.signInModalEl.classList.contains('open')) {
    handleClickOnSingInCloseBtn();
  }
}

// Закрити Sign up модалку
function handleClickOnSingUpCloseBtn() {
  refs.signUpModalEl.classList.remove('open');
}

//
// Функції для Sign in модалки

// Відкрити Sign in модалку + закрити Sign up модалку
function handleClickOnSingInOpenBtn() {
  refs.signInModalEl.classList.add('open');
  handleClickOnSingUpCloseBtn();
}

// Закрити Sign in модалку
function handleClickOnSingInCloseBtn() {
  refs.signInModalEl.classList.remove('open');
}

//
// Закриття по Esc

// Закрити Sign in модалку при натисканні Esc
window.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
    refs.signInModalEl.classList.remove('open');
  }
});

// Закрити Sign up модалку при натисканні Esc
window.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
    refs.signUpModalEl.classList.remove('open');
  }
});

//
// Закриття при натисканні на backdrop

// Закрити Sing up модадку при натисканні поза неї

refs.signUpModalEl.addEventListener('click', handleClickOnsingUpBackdrop);

function handleClickOnsingUpBackdrop(evt) {
  target = evt.target;

  if (target === refs.signUpModalEl) {
    handleClickOnSingUpCloseBtn();
  }
}

// Закрити Sing in модадку при натисканні поза неї

refs.signInModalEl.addEventListener('click', handleClickOnsingInBackdrop);

function handleClickOnsingInBackdrop(evt) {
  target = evt.target;

  if (target === refs.signInModalEl) {
    handleClickOnSingInCloseBtn();
  }
}
