import axios from 'axios';

export const categoryListEl = document.querySelector('.categories_list');

const categoriesArray = async () => {
  try {
    const { data } = await axios.get(
      'https://books-backend.p.goit.global/books/category-list'
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};

export async function renderCategories() {
  try {
    const array = await categoriesArray();
    const inAlphabeticalOrder = array.sort((a, b) =>
      a.list_name.localeCompare(b.list_name)
    );

    for (const arr of inAlphabeticalOrder) {
      categoryListEl.insertAdjacentHTML(
        'beforeend',
        `<li><button type="button" class="category-btn">${arr.list_name}</button></li>`
      );
    }
  } catch (error) {
    console.log(error);
  }
}

renderCategories();
