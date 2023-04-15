import getRefs from './refs.js';

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

// Відкрити Sign up модалку
function handleClickOnSingUpOpenBtn() {
  refs.signUpModalEl.classList.add('open');
  refs.signInModalWindowEl.style.display = 'none';
  refs.signUpModalWindowEl.style.display = 'block';
}

// Закрити Sign up модалку
function handleClickOnSingUpCloseBtn() {
  refs.signUpModalEl.classList.remove('open');
}

// Закрити Sign up і Sign in модалки при натисканні Esc
window.addEventListener('keydown', evt => {
  if (evt.key === 'Escape') {
    refs.signUpModalEl.classList.remove('open');
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
function handleClickOnSingInCloseBtn() {
  refs.signUpModalEl.classList.remove('open');
}

// refs.openSignUpBtnEl.addEventListener('click', handleClickOnSingUpOpenBtn);
// refs.closeSignUpBtnEl.addEventListener('click', handleClickOnSingUpCloseBtn);

// refs.openSignUpBtnSecondEl.addEventListener(
//   'click',
//   handleClickOnSingUpOpenBtn
// );

// refs.openSignInBtnEl.addEventListener('click', handleClickOnSingInOpenBtn);
// refs.closeSignInBtnEl.addEventListener('click', handleClickOnSingInCloseBtn);

// //
// // Функції для Sign up модалки

// Відкрити Sign up модалку
// function handleClickOnSingUpOpenBtn() {
// refs.signUpModalEl.classList.add('open');
// if (refs.signInModalEl.classList.contains('open')) {
//   handleClickOnSingInCloseBtn();
// }
// }

// Закрити Sign up модалку
// function handleClickOnSingUpCloseBtn() {
//   refs.signUpModalEl.classList.remove('open');
// }

// //
// // Функції для Sign in модалки

// // Відкрити Sign in модалку

// function handleClickOnSingInOpenBtn() {
//   refs.signUpNameInputEl.style.display = 'none';
// }

// // Відкрити Sign in модалку + закрити Sign up модалку
// function handleClickOnSingInOpenBtn() {
//   refs.signInModalEl.classList.add('open');
//   handleClickOnSingUpCloseBtn();
// }

// // Закрити Sign in модалку
// function handleClickOnSingInCloseBtn() {
//   refs.signInModalEl.classList.remove('open');
// }

// //
// // Закриття по Esc

// // Закрити Sign in модалку при натисканні Esc
// window.addEventListener('keydown', evt => {
//   if (evt.key === 'Escape') {
//     refs.signInModalEl.classList.remove('open');
//   }
// });

// // Закрити Sign up модалку при натисканні Esc
// window.addEventListener('keydown', evt => {
//   if (evt.key === 'Escape') {
//     refs.signUpModalEl.classList.remove('open');
//   }
// });

// //
// // Закриття при натисканні на backdrop

// // Закрити Sing up модадку при натисканні поза неї
// refs.signUpModalEl.addEventListener('click', handleClickOnsingUpBackdrop);

// function handleClickOnsingUpBackdrop(evt) {
//   const target = evt.target;

//   if (target === refs.signUpModalEl) {
//     handleClickOnSingUpCloseBtn();
//   }
// }

// // Закрити Sing in модадку при натисканні поза неї
// refs.signInModalEl.addEventListener('click', handleClickOnsingInBackdrop);

// function handleClickOnsingInBackdrop(evt) {
//   const target = evt.target;

//   if (target === refs.signInModalEl) {
//     handleClickOnSingInCloseBtn();
//   }
// }
