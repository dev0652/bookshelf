import getRefs from './js/refs';
import headerHeightAdjust from './js/header-height-adjust';
import { scrollToTop, toTopObserver } from './js/back-to-top';
import colorSwitcher from './js/color-scheme-switcher';
import { handleBookElClick } from './js/modal';




// ##################################################################

// Add your ref here:
const { scrollToTopButton, toTopTarget } = getRefs();

// ##################################################################

// Adjust body's top padding to account for page header height
headerHeightAdjust();

// Activate scroll-to-top button
toTopObserver.observe(toTopTarget);
scrollToTopButton.addEventListener('click', scrollToTop);

// Activate color scheme switcher
colorSwitcher();

// ##################################################################
