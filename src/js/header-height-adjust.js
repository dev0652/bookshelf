import getRefs from './refs';
const { header, headerNavLinks } = getRefs();

// Body height adjust to compensate for positioned header height
function headerHeightAdjust() {
  const { height: pageHeaderHeight } = header.getBoundingClientRect();
  document.body.style.paddingTop = `${pageHeaderHeight}px`;
}

headerHeightAdjust();

// Active nav link in header
function toggleActiveNavLinks() {
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
}

toggleActiveNavLinks();
