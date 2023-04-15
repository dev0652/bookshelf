import getRefs from '../refs';
import {
  handleClickOnSingInCloseBtn,
  handleClickOnSingUpCloseBtn,
} from '../authorization-form';
import { createUser, onLogOut, onLogin } from './authservice';
import { deleteBookShopping, postShoppingList } from './firebaseservise';

const refs = getRefs();

console.log(refs.logOut);

refs.formSingUp.addEventListener('submit', onCreateUser);
refs.formLogIn.addEventListener('submit', onLogIn);
refs.logOut.addEventListener('click', onLogOutUser);

function onCreateUser(e) {
  e.preventDefault();
  const {
    elements: { signup_user_name, user_email, user_password },
  } = e.currentTarget;
  const displayName = signup_user_name.value;
  const userEmail = user_email.value;
  const userPassword = user_password.value;
  e.currentTarget.reset();
  createUser(userEmail, userPassword, displayName);
  handleClickOnSingUpCloseBtn();
}

async function onLogOutUser(e) {
  e.preventDefault();
  const localList = JSON.parse(localStorage.getItem('list'));
  if (localList) {
    await deleteBookShopping();
    console.log(localList);
    postShoppingList(localList);
  }
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
}
