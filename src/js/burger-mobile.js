const refs = {
  openMenuBtn: document.querySelector('[data-menu-open]'),
  menu_open: document.querySelector('.mobile-menu-open__icon'),
  menu_close: document.querySelector('.mobile-menu__close-icon'),
  menu: document.querySelector('[data-menu]'),
};
refs.openMenuBtn.addEventListener('click', toggleModal);
function toggleModal() {
  // console.log(refs.menu_open);
  refs.menu.classList.toggle('is-open');
  refs.menu_close.classList.toggle('is-hidden');
  refs.menu_open.classList.toggle('is-hidden');
  if (refs.menu_open.classList.contains('is-hidden')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

function setActiveClass() {
  const burgerNavLinks = document.querySelectorAll('.burger-nav-link');
  // const currentLocation = window.location.pathname;

  burgerNavLinks.forEach(link => {
    // console.log('link.href', link.href);
    if (
      link.href === window.location.href ||
      link.href === window.location.href + 'index.html'
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

setActiveClass();
