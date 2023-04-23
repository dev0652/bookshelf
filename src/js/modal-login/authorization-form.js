import getRefs from '../refs.js';

const refs = getRefs();

refs.openSignUpBtnEl.addEventListener('click', handleClickOnSingUpOpenBtn);
refs.closeSignUpBtnEl.addEventListener('click', handleClickOnSingUpCloseBtn);
refs.signUpModalEl.addEventListener('click', handleClickOnsingUpBackdrop);
refs.openSignInBtnEl.addEventListener('click', handleClickOnSingInOpenBtn);
refs.openSignUpBtnSecondEl.addEventListener(
  'click',
  handleClickOnSingUpSecondCloseBtn
);
refs.closeSignInBtnEl.addEventListener('click', handleClickOnSingInCloseBtn);
refs.userBarMenu.addEventListener('click', openUserBarMenu);

// Відкрити Sign up модалку
function handleClickOnSingUpOpenBtn() {
  refs.signUpModalEl.classList.add('open');
  refs.signInModalWindowEl.style.display = 'none';
  refs.signUpModalWindowEl.style.display = 'block';
}

// Закрити Sign up модалку
export function handleClickOnSingUpCloseBtn() {
  refs.signUpModalEl.classList.remove('open');
}

// Закрити Sign up і Sign in модалки при натисканні Esc

window.addEventListener('keydown', evt => {
  if (refs.signUpModalEl.classList.contains('open')) {
    if (evt.key === 'Escape') {
      refs.signUpModalEl.classList.remove('open');
    }
  }
});

// Закрити Sing up і Sign in модалки при натисканні поза них

function handleClickOnsingUpBackdrop(evt) {
  const target = evt.target;

  if (target === refs.signUpModalEl) {
    handleClickOnSingUpCloseBtn();
  }
}

// Відкрити Sign in модальне вікно
function handleClickOnSingInOpenBtn() {
  refs.signUpModalWindowEl.style.display = 'none';
  refs.signInModalWindowEl.style.display = 'block';
}

// Закрити Sign in модальне вікно і вікрити Sign up модальне вікно
function handleClickOnSingUpSecondCloseBtn() {
  refs.signInModalWindowEl.style.display = 'none';
  refs.signUpModalWindowEl.style.display = 'block';
}

// Закрити Sign in модалку
export function handleClickOnSingInCloseBtn() {
  refs.signUpModalEl.classList.remove('open');
}

function openUserBarMenu() {
  refs.logOutMenu.classList.toggle('logout-menu');
}

export function userLogIn() {
  refs.userBarMenu.classList.remove('user-out');
  refs.singUpBtn.classList.add('user-in');
}

export function userLogOut() {
  refs.userBarMenu.classList.add('user-out');
  refs.singUpBtn.classList.remove('user-in');
}
