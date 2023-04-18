import getRefs from './js/refs';
const refs = getRefs();

import './js/home-bs/home-bs';
import './js/home-categories';
import './js/support';
import './js/firebase/firebase';
import './js/modal';
import './js/burger-mobile';

import './js/renderCategoriesList';
import './js/activeCatBtnSwitcher';
import './js/handleAllCategoriesClick';
import './js/renderSelectedBooks';

import './js/header-height-adjust';

import { scrollToTop, toTopObserver } from './js/back-to-top';
// Activate scroll-to-top button
res.toTopObserver.observe(toTopTarget);
refs / scrollToTopButton.addEventListener('click', scrollToTop);

// import './js/color-scheme-switcher';
import colorSwitcher from './js/color-scheme-switcher';

// Sidebar
import './js/support';
import './js/renderCategoriesList';
// // import renderCategories from './js/renderCategoriesList';
// // renderCategories();
import './js/home-categories';
import './js/activeCatBtnSwitcher';

// // import { handleBookElClick } from './js/modal';

// // Best Seller Books
// import './js/home-bs/home-bs';

// Modal window
// import './js/modal';

// Authorization
import './js/firebase/firebase';
import { validateOnSubmit } from './js/form-validator';
authForm.addEventListener('submit', validateOnSubmit);

// Mobile menu
import './js/burger-mobile';

// import './js/handleAllCategoriesClick';
// // import './js/renderSelectedBooks';

// import './js/shopping-list';

// // ##########################################################

// Add your ref here:

// // ##################################################################

// headerHeightAdjust();
