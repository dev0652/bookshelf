import getRefs from './js/refs';
const { scrollToTopButton, target } = getRefs();

import { scrollToTop, observer } from './js/back-to-top';

observer.observe(target);
scrollToTopButton.addEventListener('click', scrollToTop);
