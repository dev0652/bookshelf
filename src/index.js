import getRefs from './js/refs';
const refs = getRefs();
import './js/spinner.js';

import './js/home-bs/home-bs';

// Sidebar
import './js/renderCategoriesList';
import './js/activeCatBtnSwitcher';
import './js/home-categories';
import './js/handleAllCategoriesClick';
import './js/support';

import './js/renderSelectedBooks';

import './js/modal';

import './js/header-height-adjust';

// Authorization
import './js/firebase/firebase';

import { validateOnSubmit } from './js/form-validator';
refs.authForm.addEventListener('submit', validateOnSubmit);

// Mobile menu
import './js/burger-mobile';

// Scroll-to-top button
import './js/back-to-top';

import './js/color-scheme-switcher';
// import colorSwitcher from './js/color-scheme-switcher';
