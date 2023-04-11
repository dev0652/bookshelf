import getRefs from './refs';
const { scrollToTopButton } = getRefs();

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

export function scrollToTop() {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
}

// observer.observe(target);
// scrollToTopButton.addEventListener('click', scrollToTop);
