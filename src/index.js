import getRefs from './js/refs';
import headerHeightAdjust from './js/header-height-adjust';
import { scrollToTop, toTopObserver } from './js/back-to-top';
import colorSwitcher from './js/color-scheme-switcher';
// import { handleBookElClick } from './js/modal';

// ##################################################################

// Add your ref here:
const { scrollToTopButton, toTopTarget, authForm } = getRefs();

// ##################################################################

headerHeightAdjust();
colorSwitcher(); // Activate color scheme switcher

// Activate scroll-to-top button
toTopObserver.observe(toTopTarget);
scrollToTopButton.addEventListener('click', scrollToTop);

// ##################################################################

// Temp: authentication form validation on submit

import { validateOnSubmit } from './js/form-validator';
authForm.addEventListener('submit', validateOnSubmit);

// ##################################################################
