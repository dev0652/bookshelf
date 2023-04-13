import getRefs from './refs';
const { colorSwitcher } = getRefs();

// Check if switcher position is saved in Local Storage
checkLocalStorage = () => {
  return localStorage.getItem('saved switcher value');
};

// Save switcher position to Local Storage
function updateLocalStorage(checkbox) {
  localStorage.setItem('saved switcher value', checkbox.checked);
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

// Checkbox event handler
function onChange(event) {
  setSwitcher();
  updateLocalStorage(event.currentTarget);
}

// #############################################################

// Action!
export default function () {
  presetSwitcher();
  setSwitcher();

  colorSwitcher.addEventListener('change', onChange);
}
