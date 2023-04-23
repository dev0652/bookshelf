// import axios from 'axios';
// import Notiflix from 'notiflix';
import { fetchSelectedBooks } from '../api/fetchSelectedBooks';
import { renderBooksList } from '../books-by-category/renderSelectedCategory';
import { scrollToTop } from '../components/back-to-top';
import getRefs from '../refs';
const { titleEl, categoryContainerEl, selectedBooksListEl } = getRefs();

categoryContainerEl.addEventListener('click', renderCategory);

async function renderCategory(e) {
  if (e.target.classList.contains('see-more-btn')) {
    const id = e.target.attributes.id.value;
    const words = id.split(' ');
    let lastWord;
    lastWord = words[words.length - 1];
    const titleCategory = id.split(' ').slice(0, -1).join(' ');

    titleEl.textContent = titleCategory;

    titleEl.innerHTML += ` <span class="content-part-title--last-word-static">${lastWord}</span>`;
    const data = await fetchSelectedBooks(id);

    const categoriesBtn = document.querySelectorAll('.category-btn');
    const activeCategoryBtn = document.querySelector('.active-category');
    for (const btn of categoriesBtn) {
      if (btn.textContent === id) {
        btn.classList.add('active-category');
      }
    }
    activeCategoryBtn.classList.remove('active-category');

    selectedBooksListEl.insertAdjacentHTML('beforeend', renderBooksList(data));

    scrollToTop();
  }
}
