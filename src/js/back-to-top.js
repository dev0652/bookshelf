import getRefs from './refs';
const refs = getRefs();

const showOnPx = 300;

export function onScroll() {
  if (scrollContainer().scrollTop > showOnPx) {
    refs.toTopButton.classList.remove('hidden');
    refs.toTopButton.addEventListener('click', scrollToTop);
  } else {
    refs.toTopButton.classList.add('hidden');
  }
}

export function scrollToTop() {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
}

function scrollContainer() {
  return document.documentElement || document.body;
}
