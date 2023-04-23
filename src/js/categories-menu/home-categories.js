import getRefs from '../refs';
const { categoryListEl, titleEl } = getRefs();

// Find and paint last word in a category title
let lastWord = '';

function handleCategoryClick(event) {
  if (event.target.classList.contains('category-btn')) {
    const buttonText = event.target.textContent;
    const words = buttonText.split(' ');
    lastWord = words[words.length - 1];
    const buttonTextWithoutLastWord = buttonText
      .split(' ')
      .slice(0, -1)
      .join(' ');

    titleEl.textContent = buttonTextWithoutLastWord;
    titleEl.innerHTML += ` <span class="bestsellers-title--last-word-static">${lastWord}</span>`;
  }
}

categoryListEl.addEventListener('click', handleCategoryClick);
