import getRefs from './js/refs';
const refs = getRefs();

// Header
import './js/header-height-adjust';
// Mobile menu
// import './js/burger-mobile';

// Sidebar
import './js/renderCategoriesList.js';
import './js/activeCatBtnSwitcher';
import './js/home-categories';
import './js/handleAllCategoriesClick';
import './js/support';
import './js/renderSelectedBooks';

// Content part
import './js/spinner.js';
import './js/home-bs/home-bs';

// Modal - popup
import './js/modal';

// Authorization
import './js/firebase/firebase';
import { validateOnSubmit } from './js/form-validator';
refs.authForm.addEventListener('submit', validateOnSubmit);



// Scroll-to-top button
import './js/back-to-top';

import './js/color-scheme-switcher';
// import colorSwitcher from './js/color-scheme-switcher';
