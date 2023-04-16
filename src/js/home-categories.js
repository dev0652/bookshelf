import getRefs from './refs';
const { categoryListEl } = getRefs();

import { renderCategories } from './renderCategoriesList';

const titleEl = document.querySelector('.home-br__title');
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
    titleEl.innerHTML += ` <span class="home-bs__title-part">${lastWord}</span>`;
  }
}

categoryListEl.addEventListener('click', handleCategoryClick);

renderCategories();
