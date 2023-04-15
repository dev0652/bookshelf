import getRefs from './refs';
const { header } = getRefs();

export default function () {
  const { height: pageHeaderHeight } = header.getBoundingClientRect();
  document.body.style.paddingTop = `${pageHeaderHeight}px`;
}

const currentLink = window.location.href;
const links = document.querySelectorAll('.page-navigation-link ');

for (let i = 0; i < links.length; i++) {
  if (links[i].href === currentLink) {
    links[i].classList.add('current');
  } else {
    links[i].classList.remove('currente');
  }
}
