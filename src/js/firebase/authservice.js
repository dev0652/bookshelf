import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
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

//Створення нового аккаунту

export function createUser(userEmail, userPassword, displayName) {
  const authCreate = getAuth();
  createUserWithEmailAndPassword(
    authCreate,
    userEmail,
    userPassword,
    displayName
  )
    .then(userCredential => {
      const userUid = userCredential.user.uid;
      const idToken = userCredential.user.accessToken;
      const token = JSON.stringify(idToken);
      const uid = JSON.stringify(userUid);
      localStorage.setItem('token', token);
      localStorage.setItem('uid', uid);
      return (refs.userName.textContent = displayName);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

//Log in

export function onLogin(email, password) {
  const authSign = getAuth();
  signInWithEmailAndPassword(authSign, email, password)
    .then(userCredential => {
      const userUid = userCredential.user.uid;
      const idToken = userCredential.user.accessToken;
      localStorage.setItem('token', JSON.stringify(idToken));
      localStorage.setItem('uid', JSON.stringify(userUid));
      const displayName = userCredential.user.displayName;
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
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      localStorage.setItem('uid', null);
      localStorage.setItem('token', null);
      localStorage.setItem('list', null);
      return (refs.userName.textContent = '');
    })
    .catch(error => {
      console.log(error.message);
    });
}
