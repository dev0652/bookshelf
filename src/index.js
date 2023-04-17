import getRefs from './js/refs';
import { scrollToTop, toTopObserver } from './js/back-to-top';
import './js/burger-mobile';

// ##################################################################

const { scrollToTopButton, toTopTarget } = getRefs();

// ##################################################################

toTopObserver.observe(toTopTarget);
scrollToTopButton.addEventListener('click', scrollToTop);

// ##################################################################
