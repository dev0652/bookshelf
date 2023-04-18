import getRefs from './refs';
const { scrollToTopButton, toTopTarget } = getRefs();

export const toTopObserver = new IntersectionObserver(cb);

function cb(entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      scrollToTopButton.classList.remove('hidden');
    } else {
      scrollToTopButton.classList.add('hidden');
    }
  });
}

export function scrollToTop(event) {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
}

toTopObserver.observe(toTopTarget);
scrollToTopButton.addEventListener('click', scrollToTop);
