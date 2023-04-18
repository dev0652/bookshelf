import getRefs from './js/refs';
const refs = getRefs();
import './js/spinner.js';

import './js/home-bs/home-bs';

// Sidebar
import './js/home-categories';
import './js/renderCategoriesList';
import './js/activeCatBtnSwitcher';
import './js/handleAllCategoriesClick';
import './js/support';

import './js/renderSelectedBooks';

import './js/modal';

import './js/header-height-adjust';

// Authorization
import './js/firebase/firebase';
import { validateOnSubmit } from './js/form-validator';
authForm.addEventListener('submit', validateOnSubmit);

// Mobile menu
import './js/burger-mobile';

import { scrollToTop, toTopObserver } from './js/back-to-top';
// Activate scroll-to-top button
res.toTopObserver.observe(toTopTarget);
refs / scrollToTopButton.addEventListener('click', scrollToTop);

import './js/color-scheme-switcher';
// import colorSwitcher from './js/color-scheme-switcher';

// import './js/handleAllCategoriesClick';
// // import './js/renderSelectedBooks';

// import './js/shopping-list';

// // ##########################################################

// Add your ref here:

// // ##################################################################

// headerHeightAdjust();
