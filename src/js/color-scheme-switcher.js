import getRefs from './refs';

const { colorSwitcher } = getRefs();

export default function () {
  colorSwitcher.addEventListener('change', function () {
    if (this.checked) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  });
}
