import getRefs from '../refs';
import {
  handleClickOnSingInCloseBtn,
  handleClickOnSingUpCloseBtn,
  userLogIn,
  userLogOut,
} from '../modal-login/authorization-form';
import { createUser, onLogOut, onLogin } from './authservice';
import { deleteBookShopping, postShoppingList } from './firebaseservise';
import validateOnSubmit from '../modal-login/form-validator';

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
  const valid = validateOnSubmit(e);
  if (!valid) {
    return;
  }
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
  // console.log(token);
  if (token) {
    userLogIn();
  }
}
