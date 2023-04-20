import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';

import { getShoppingList } from './firebaseservise';
import getRefs from '../refs';
import { userLogIn } from '../authorization-form';
// import { Notify } from 'notiflix';

const refs = getRefs();
const isLogin = JSON.parse(localStorage.getItem('token'));
const shoppingListPage = document.querySelector('.navigation-link-shopping');

console.log(shoppingListPage);

const firebaseConfig = {
  apiKey: 'AIzaSyCq9mOndO3g-rUoq_LhFsLf4QY5_4L9fkc',
  authDomain: 'books-314f3.firebaseapp.com',
  databaseURL:
    'https://books-314f3-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'books-314f3',
  storageBucket: 'books-314f3.appspot.com',
  messagingSenderId: '627795944798',
  appId: '1:627795944798:web:853f1b3c49bede1282dbcf',
  measurementId: 'G-L8HC0K2SWK',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();

onAuthStateChanged(auth, user => {
  if (user) {
    userLogIn();
    if (isLogin) {
      shoppingListPage.classList.remove('is-hidden');
    }

    return (refs.userName.textContent = user.displayName);
  } else {
    console.log('User is signed out');
  }
});

//Створення нового аккаунту

export function createUser(userEmail, userPassword, displayName) {
  createUserWithEmailAndPassword(auth, userEmail, userPassword, displayName)
    .then(userCredential => {
      updateProfile(auth.currentUser, {
        displayName,
      });
      onUserLogin(userCredential, displayName);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

//Log in

export function onLogin(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const displayName = userCredential.user.displayName;

      shoppingListPage.classList.remove('is-hidden');

      // shoppingListVisibile();
      onUserLogin(userCredential, displayName);
      getShoppingList().then(shoppingList => {
        if (shoppingList === null) {
          return;
        }
        const books = Object.keys(shoppingList);
        const list = [];
        for (const key of books) {
          list.push(shoppingList[key]);
        }
        list.map(el => {
          const listFromServer = [...el];
          const listLocalStorage = JSON.parse(
            localStorage.getItem('storage-of-books')
          );
          if (listLocalStorage !== null) {
            const newBooksList = [];
            for (el of listLocalStorage) {
              const idEl = el._id;
              console.log(idEl);
              const filtredList = listFromServer.every(
                book => book._id !== idEl
              );
              if (filtredList) {
                newBooksList.push(el);
              }
              const allBooks = [...listFromServer, ...newBooksList];
              localStorage.setItem(
                'storage-of-books',
                JSON.stringify(allBooks)
              );
            }
            return;
          }
          const listJson = JSON.stringify(listFromServer);
          localStorage.setItem('storage-of-books', listJson);
        });
      });
      return (refs.userName.textContent = displayName);
    })
    .catch(error => {
      // Notify.failure('This user account does not exist');
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

//Log out

export function onLogOut() {
  signOut(auth)
    .then(() => {
      localStorage.setItem('uid', null);
      localStorage.setItem('token', null);
      localStorage.setItem('storage-of-books', null);
      localStorage.setItem('userName', null);
      shoppingListPage.classList.add('is-hidden');
      return (refs.userName.textContent = '');
    })
    .catch(error => {
      console.log(error.message);
    });
}

function onUserLogin(userCredential, displayName) {
  const userUid = userCredential.user.uid;
  const idToken = userCredential.user.accessToken;
  localStorage.setItem('token', JSON.stringify(idToken));
  localStorage.setItem('uid', JSON.stringify(userUid));
  localStorage.setItem('userName', displayName);
  return (refs.userName.textContent = displayName);
}
