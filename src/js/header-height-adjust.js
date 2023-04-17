import getRefs from './refs';
const { header, headerNavLinks } = getRefs();

export default function () {
  const { height: pageHeaderHeight } = header.getBoundingClientRect();
  document.body.style.paddingTop = `${pageHeaderHeight}px`;
}

headerNavLinks.forEach(link => {
  if (
    link.href === window.location.href ||
    link.href === window.location.href + 'index.html'
  ) {
    link.classList.add('current');
  } else {
    link.classList.remove('current');
  }
});
