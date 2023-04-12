export default function () {
  return {
    header: document.querySelector('header'),

    // Scroll to top:
    scrollToTopButton: document.querySelector('.back-to-top'),
    toTopTarget: document.querySelector('.to-top-target'),

    // Color scheme switcher:
    colorSwitcher: document.querySelector('#color-scheme-switcher-checkbox'),
  };
}
