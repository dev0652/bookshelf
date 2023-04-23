import getRefs from '../refs';
const { categoryListEl, mainTitle } = getRefs();

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

    mainTitle.textContent = buttonTextWithoutLastWord;
    mainTitle.innerHTML += ` <span class="content-part-title--last-word-static">${lastWord}</span>`;
  }
}

categoryListEl.addEventListener('click', handleCategoryClick);
