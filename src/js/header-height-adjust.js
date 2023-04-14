import getRefs from './refs';
const { header } = getRefs();

export default function () {
  const { height: pageHeaderHeight } = header.getBoundingClientRect();
  document.body.style.paddingTop = `${pageHeaderHeight}px`;
}
