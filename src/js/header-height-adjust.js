import getRefs from './refs';
const { header } = getRefs();

export default function () {
  const { height: pageHeaderHeight } = header.getBoundingClientRect();
  document.body.style.paddingTop = `${pageHeaderHeight}px`;
}

const currentLink = document.location.href;

const links = document.querySelectorAll('.page-navigation-link ');

links.forEach(link => {
  if (
    link.href === document.location.href ||
    link.href === document.location.href + 'index.html'
  ) {
    link.classList.add('current');
  } else {
    link.classList.remove('current');
  }
});
