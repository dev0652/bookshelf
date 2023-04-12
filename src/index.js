import getRefs from './js/refs';
import { scrollToTop, toTopObserver } from './js/back-to-top';
import colorSwitcher from './js/color-scheme-switcher';

// ##################################################################

// Add your ref here:
const { scrollToTopButton, toTopTarget } = getRefs();

// ##################################################################

// Scroll-to-top button
toTopObserver.observe(toTopTarget);
scrollToTopButton.addEventListener('click', scrollToTop);

// Color scheme switcher
colorSwitcher();

// ##################################################################
