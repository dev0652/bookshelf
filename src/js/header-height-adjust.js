import getRefs from './refs';
const { header } = getRefs();

export default function () {
  const { height: pageHeaderHeight } = header.getBoundingClientRect();
  document.body.style.paddingTop = `${pageHeaderHeight}px`;
}

const currentLink = document.location.href;
const links = document.querySelectorAll('.page-navigation-link ');

links.forEach(link => {
  link.href === currentLink
    ? link.classList.add('current')
    : link.classList.remove('current');
});
