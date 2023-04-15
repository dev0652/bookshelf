import getRefs from './js/refs';
import { scrollToTop, toTopObserver } from './js/back-to-top';

// ##################################################################

const { scrollToTopButton, toTopTarget } = getRefs();

// ##################################################################

toTopObserver.observe(toTopTarget);
scrollToTopButton.addEventListener('click', scrollToTop);

// ##################################################################



