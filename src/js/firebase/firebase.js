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
  const localList = JSON.parse(localStorage.getItem('list'));
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
  userLogIn();
  onLogin(userEmail, userPassword);
  handleClickOnSingInCloseBtn();
}
