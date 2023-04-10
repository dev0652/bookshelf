import getRefs from './js/refs';
import { scrollToTop, observer } from './js/back-to-top';

// ##################################################################

const { scrollToTopButton, target } = getRefs();

// ##################################################################

observer.observe(target);
scrollToTopButton.addEventListener('click', scrollToTop);

// ##################################################################
