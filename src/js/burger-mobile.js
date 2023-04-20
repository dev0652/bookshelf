const refs = {
  openMenuBtn: document.querySelector('[data-menu-open]'),
  menu_open: document.querySelector('.mobile-menu-open__icon'),
  menu_close: document.querySelector('.mobile-menu__close-icon'),
  menu: document.querySelector('[data-menu]'),
};
refs.openMenuBtn.addEventListener('click', toggleModal);
function toggleModal() {
  console.log(refs.menu_open)
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
  const links = document.getElementsByTagName('a');
  const currentLocation = window.location.pathname;

  for (let i = 0; i < links.length; i++) {
    let link = links[i]
    console.log (link.href, currentLocation);
    if (link.href.includes(currentLocation)) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  }
  console.log(links);
}

setActiveClass();

