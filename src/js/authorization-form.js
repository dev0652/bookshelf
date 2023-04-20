import getRefs from './refs.js';
import validateOnSubmit from './form-validator.js';

const refs = getRefs();

refs.openSignUpBtnEl.addEventListener('click', handleClickOnSignUpOpenBtn);
refs.closeSignUpBtnEl.addEventListener('click', handleClickOnSignUpCloseBtn);
refs.signUpModalEl.addEventListener('click', handleClickOnSignUpBackdrop);
refs.openSignInBtnEl.addEventListener('click', handleClickOnSignInOpenBtn);
refs.openSignUpBtnSecondEl.addEventListener(
  'click',
  handleClickOnSignUpSecondCloseBtn
);
refs.closeSignInBtnEl.addEventListener('click', handleClickOnSignInCloseBtn);
refs.userBarMenu.addEventListener('click', openUserBarMenu);

// Відкрити Sign up модалку
function handleClickOnSignUpOpenBtn() {
  refs.signUpModalEl.classList.add('open');
  refs.signInModalWindowEl.style.display = 'none';
  refs.signUpModalWindowEl.style.display = 'block';
  //  refs.authForm.addEventListener('submit', validateOnSubmit);
}

// Закрити Sign up модалку
export function handleClickOnSignUpCloseBtn() {
  refs.signUpModalEl.classList.remove('open');
  //  refs.authForm.removeEventListener('submit', validateOnSubmit);
}

// Закрити Sign up і Sign in модалки при натисканні Esc

window.addEventListener('keydown', evt => {
  if (refs.signUpModalEl.classList.contains('open')) {
    if (evt.key === 'Escape') {
      refs.signUpModalEl.classList.remove('open');
      //  refs.authForm.removeEventListener('submit', validateOnSubmit);
    }
  }
});

// Закрити Sign up і Sign in модалки при натисканні поза них

function handleClickOnSignUpBackdrop(evt) {
  const target = evt.target;

  if (target === refs.signUpModalEl) {
    handleClickOnSignUpCloseBtn();
  }
}

// Відкрити Sign in модальне вікно
function handleClickOnSignInOpenBtn() {
  refs.signUpModalWindowEl.style.display = 'none';
  refs.signInModalWindowEl.style.display = 'block';
}

// Закрити Sign in модальне вікно і вікрити Sign up модальне вікно
function handleClickOnSignUpSecondCloseBtn() {
  refs.signInModalWindowEl.style.display = 'none';
  refs.signUpModalWindowEl.style.display = 'block';
}

// Закрити Sign in модалку
export function handleClickOnSignInCloseBtn() {
  refs.signUpModalEl.classList.remove('open');
}

function openUserBarMenu() {
  refs.logOutMenu.classList.toggle('logout-menu');
}

export function userLogIn() {
  refs.userBarMenu.classList.remove('user-out');
  refs.SignUpBtn.classList.add('user-in');
}

export function userLogOut() {
  refs.userBarMenu.classList.add('user-out');
  refs.SignUpBtn.classList.remove('user-in');
}
