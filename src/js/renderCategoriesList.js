import axios from 'axios';

const categoryListEl = document.querySelector('.categories_list');

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

async function renderCategories() {
  try {
    const array = await categoriesArray();

    for (const arr of array) {
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
