import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { getShoppingList } from './firebaseservise';
import getRefs from '../refs';
import { userLogIn } from '../authorization-form';

const refs = getRefs();

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
    return (refs.userName.textContent = user.displayName);
  } else {
    console.log('User is signed out');
  }
});

//Створення нового аккаунту

export function createUser(userEmail, userPassword, displayName) {
  createUserWithEmailAndPassword(auth, userEmail, userPassword, displayName)
    .then(userCredential => {
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
      onUserLogin(userCredential, displayName);
      getShoppingList().then(shoppingList => {
        if (shoppingList === null) {
          console.log('null');
          localStorage.setItem('list', null);
          return;
        }
        const books = Object.keys(shoppingList);
        const list = [];
        for (const key of books) {
          list.push(shoppingList[key]);
        }
        list.map(el => {
          const listJson = JSON.stringify(el);
          localStorage.setItem('list', listJson);
        });
      });
      return (refs.userName.textContent = displayName);
    })
    .catch(error => {
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
      localStorage.setItem('list', null);
      localStorage.setItem('userName', null);
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
