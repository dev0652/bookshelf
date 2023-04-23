import getRefs from '../refs';
const { categoryContainerEl } = getRefs();

import { fetchSelectedBooks } from '../books-by-category/fetchSelectedBooks';
import { renderBooksByCategory } from '../books-by-category/renderSelectedCategory';
import { scrollToTop } from '../components/back-to-top';
import { renderMainTitle } from '../_shared/render-main-title';

// ########################################################

categoryContainerEl.addEventListener('click', seeMoreBtnClickHandler);

// ########################################################

async function seeMoreBtnClickHandler(e) {
  if (!e.target.classList.contains('see-more-btn')) return;

  // e.preventDefault();

  const id = e.target.attributes.id.value;
  const data = await fetchSelectedBooks(id);

  // Change content part title and colorize its last word
  renderMainTitle(id);

  // Set active category in sidebar
  const categoriesBtn = document.querySelectorAll('.category-btn');
  const activeCategoryBtn = document.querySelector('.active-category');
  for (const btn of categoriesBtn) {
    if (btn.textContent === id) {
      btn.classList.add('active-category');
    }
  }
  activeCategoryBtn.classList.remove('active-category');

  renderBooksByCategory(data);
  scrollToTop();
}
