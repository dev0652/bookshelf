import getRefs from '../refs';
import {
  handleClickOnSingInCloseBtn,
  handleClickOnSingUpCloseBtn,
  userLogIn,
  userLogOut,
} from '../authorization-form';
import { createUser, onLogOut, onLogin } from './authservice';
import { deleteBookShopping, postShoppingList } from './firebaseservise';

const refs = getRefs();

refs.formSingUp.addEventListener('submit', onCreateUser);
refs.formLogIn.addEventListener('submit', onLogIn);
refs.logOut.addEventListener('click', onLogOutUser);

localStorage.setItem(
  'storage-of-books',
  JSON.stringify([
    { __v: 0, _id: '643282b1e85766588626a085' },
    { __v: 0, _id: '643282b1e85766588626a086' },
    { __v: 0, _id: '643282b1e85766588626a081' },
    { __v: 0, _id: '643282b1e85766588626a07a' },
    { __v: 0, _id: '643282b1e85766588626a07b' },
    { __v: 0, _id: '643282b1e85766588626a088' },
  ])
);

async function onCreateUser(e) {
  e.preventDefault();
  const {
    elements: { user_name, user_email, user_password },
  } = e.currentTarget;
  const displayName = user_name.value;
  const userEmail = user_email.value;
  const userPassword = user_password.value;
  e.currentTarget.reset();
  await createUser(userEmail, userPassword, displayName);
  userLogIn();
  handleClickOnSingUpCloseBtn();
}

async function onLogOutUser(e) {
  e.preventDefault();
  const localList = JSON.parse(localStorage.getItem('storage-of-books'));
  if (localList) {
    await deleteBookShopping();
    postShoppingList(localList);
  }
  userLogOut();
  onLogOut();
}

function onLogIn(e) {
  e.preventDefault();
  const {
    elements: { user_email, user_password },
  } = e.currentTarget;
  const userEmail = user_email.value;
  const userPassword = user_password.value;
  e.currentTarget.reset();
  onLogin(userEmail, userPassword);
  handleClickOnSingInCloseBtn();
  const token = JSON.parse(localStorage.getItem('token'));
  if (token) {
    userLogIn();
  }
}
