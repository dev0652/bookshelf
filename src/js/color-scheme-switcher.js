import getRefs from './refs';
const { colorSwitcher } = getRefs();

// Check if switcher position is saved in Local Storage
function checkLocalStorage() {
  return localStorage.getItem('dark-color-scheme');
}

// Save switcher position to Local Storage
function updateLocalStorage(checkbox) {
  localStorage.setItem('dark-color-scheme', checkbox.checked);
}

// #############################################################

function presetSwitcher() {
  const isSaved = checkLocalStorage();
  if (!isSaved) return;

  colorSwitcher.checked = isSaved === 'true' ? true : false;
}

function setSwitcher() {
  if (colorSwitcher.checked) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
}

// #############################################################

// Resulting function:
export default function () {
  presetSwitcher();
  setSwitcher();

  colorSwitcher.addEventListener('change', onChange);
}

function onChange(event) {
  setSwitcher();
  updateLocalStorage(event.currentTarget);
}
