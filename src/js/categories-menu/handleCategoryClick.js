import getRefs from '../refs';
const { categoryListEl, selectedBooksListEl, mainTitle } = getRefs();

import { fetchSelectedBooks } from '../books-by-category/fetchSelectedBooks';
import { renderBooksByCategory } from '../books-by-category/renderSelectedCategory';
import { renderTopBooks } from '../bestsellers/bestsellers';

import { scrollToTop } from '../components/back-to-top';
import { renderMainTitle } from '../_shared/render-main-title';

// ########################################################

// Listen to clicks on category list items in sidebar
categoryListEl.addEventListener('click', onCategoryClick);

// ########################################################

// Handler
async function onCategoryClick(event) {
  event.preventDefault();

  if (!event.target.classList.contains('category-btn')) return;

  if (event.target.classList.contains('all-categories-btn')) {
    mainTitle.innerHTML = `Best Seller <span class="content-part-title--last-word-static">Books</span>`;
    // selectedBooksListEl.innerHTML = '';
    await renderTopBooks();
    return;
  }

  const id = event.target.attributes.id.value;
  const data = await fetchSelectedBooks(id);

  // Change content part title and colorize its last word
  renderMainTitle(id);

  renderBooksByCategory(data);
  scrollToTop();
}
