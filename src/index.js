import getRefs from './js/refs';
const refs = getRefs();

import './js/spinner.js';

// Header
import './js/header-height-adjust';
// import './js/burger-mobile';
import './js/color-scheme-switcher';

// Sidebar
import './js/renderCategoriesList.js';
import './js/activeCatBtnSwitcher';
import './js/home-categories';
import './js/handleAllCategoriesClick';
import './js/support';
import './js/renderSelectedBooks';

// Content part
import './js/home-bs/home-bs';

// Modal - popup
import './js/modal';

// Authorization
import './js/firebase/firebase';
import './js/firebase/authservice';
import './js/firebase/firebaseservise';

import { validateOnSubmit } from './js/form-validator';
refs.authForm.addEventListener('submit', validateOnSubmit);

// Scroll-to-top button
import './js/back-to-top';
import './js/color-scheme-switcher';
import './js/authorization-form';

//burger menu
import './js/burger-mobile';
