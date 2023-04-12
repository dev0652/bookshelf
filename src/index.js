import getRefs from './js/refs';
import { scrollToTop, toTopObserver } from './js/back-to-top';
import colorSwitcher from './js/color-scheme-switcher';

// ##################################################################

// Add your ref here:
const { scrollToTopButton, toTopTarget } = getRefs();

// ##################################################################

// Activate scroll-to-top button
toTopObserver.observe(toTopTarget);
scrollToTopButton.addEventListener('click', scrollToTop);

// Activate color scheme switcher
colorSwitcher();

// ##################################################################
