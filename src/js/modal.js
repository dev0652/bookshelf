// import BooksApi from './api';

import getRefs from './refs.js';

const refs = getRefs();

refs.categoryContainerEl.addEventListener('click', function (e) {
  // e.target was the clicked element
  e.preventDefault();
  if (e.target.matches('.book-image')) {
    handleBookElClick(e);
  }
});

class BooksApi {
  #BASE_URL = `https://books-backend.p.goit.global/books`;
  bookID = null;

  async fetchBookByID() {
    try {
      const response = await fetch(`${this.#BASE_URL}/${this.bookID}`);
      const book = await response.json();
      return book;
    } catch (error) {
      console.log(error.message);
    }
  }
}

const BookAPI = new BooksApi();

// const modalContentEl = document.querySelector('.modal-pop-up-content');

// --------------------------------------//////// код юра
// --------------------------------------////////
// --------------------------------------////////
const SHOPPING_LIST_STORAGE_KEY = 'storage-of-books'; // ключ

const shoppingList =
  JSON.parse(localStorage.getItem(SHOPPING_LIST_STORAGE_KEY)) || [];
console.log(shoppingList);

// Функція для додавання товару у корзину
function addToStorage(book) {
  // Додаємо товар до корзини
  shoppingList.push(book);
  // Зберігаємо зміни в LocalStorage
  localStorage.setItem(SHOPPING_LIST_STORAGE_KEY, JSON.stringify(shoppingList));
}

// Додавання книги у корзину, за наявності книги - видалення книги, зміна Textcontent кнопкпи
function handleAddBookInStorage(data) {
  //   Фільтрування унікальності книги
  const isBookId = shoppingList.find(
    bookInStorage => bookInStorage._id === data._id
  );

  // Видалення книги у модальному вікні
  if (isBookId) {
    const dataBookID = refs.addBtnEL.getAttribute('data_id_of_book');

    const bookIndex = shoppingList.findIndex(
      bookInStorage => bookInStorage._id === dataBookID
    );

    shoppingList.splice(bookIndex, 1);
    // Зберігаємо зміни в LocalStorage
    localStorage.setItem(
      SHOPPING_LIST_STORAGE_KEY,
      JSON.stringify(shoppingList)
    );
    refs.addBtnEL.textContent = 'Add to shopping list';
    console.log('Книгу видалено');
    return;
  }
  // Додавання книги у модальному вікні
  addToStorage(data);
  refs.addBtnEL.textContent = 'Remove from the shopping list';
  console.log('Книгу додано');
}

// Обробник кліку по кнопці у модальному вікні
export async function handleBookElClickToStorage(e) {
  // BookAPI.bookID = '643282b1e85766588626a080';

  try {
    const data = await BookAPI.fetchBookByID(); // обєкт із бекенду
    handleAddBookInStorage(data); // додавання/видалення книги

    const isBookId = shoppingList.find(
      bookInStorage => bookInStorage._id === data._id
    );
    if (isBookId) {
      console.log('добавлено у кошик');
      addBtnEL.textContent = 'STOP';
      return;
    }
  } catch (err) {
    console.log(err);
  }
}

refs.addBtnEL.addEventListener('click', handleBookElClickToStorage);

// ----------------------------------------////
// ----------------------------------------////
// ----------------------------------------////
export async function handleBookElClick(e) {
  // const id = e.target.attributes.data_id.value;
  BookAPI.bookID = e.target.attributes.data_id.value;

  try {
    const data = await BookAPI.fetchBookByID();
    toggleModal();
    refs.modalContentEl.innerHTML = createModal(data);

    const isBookId = shoppingList.find(
      bookInStorage => bookInStorage._id === data._id
    );
    if (isBookId) {
      refs.addBtnEL.textContent = 'Remove from the shopping list';
      console.log('Ця книга вже у кошику');
      return;
    }
    refs.addBtnEL.textContent = 'Add to shopping list';
  } catch (err) {
    console.log(err);
  }
}

export function createModal(data) {
  const {
    _id,
    book_image,
    author,
    title,
    description,
    amazon_product_url,
    buy_links: [amazon, apple, bandn, million, bookshop, indie],
  } = data;

  const appleBooksIcon = new URL(
    '../images/shops/apple-books.png',
    import.meta.url
  ).href;
  const bookShopIcon = new URL('../images/shops/book-shop.png', import.meta.url)
    .href;
  const amazonIcon = new URL('../images/shops/amazon.png', import.meta.url)
    .href;

  refs.addBtnEL.setAttribute('data_id_of_book', `${_id}`);

  return `
                        
              <img class="modal-img" src="${book_image}"/>
              <div class='modal-book-attributes'>
              <p class="modal-book-title">${title}</p>
              <p class="modal-book-author">${author}</p>
              <p class="modal-book-desc">${description}</p>
              <div class="modal-shops">
              <a class="modal-shop-link" href="${amazon_product_url}" target="_blank">
              <img class="modal-shop-img amazon" src="${amazonIcon}" alt="Amazon link"/>
              </a>
              <a class="modal-shop-link" href="${apple.url}" target="_blank">
              <img class="modal-shop-img apple" src="${appleBooksIcon}" alt="Apple Books link" />
              </a>
              <a class="modal-shop-link" href="${bookshop.url}" target="_blank">
              <img class="modal-shop-img book-shop" src="${bookShopIcon}" alt="Book Shop link"/>
              </a>
              </div>
              </div>
              
          `;
}

refs.openModalPopUpBtn.addEventListener('click', handleBookElClick);

function toggleModal() {
  refs.modalPopUp.classList.toggle('is-hidden');
}

// Close PopUp Modal by Close btn click
refs.closeModalPopUpBtn.addEventListener(
  'click',
  handleModalPopUpCloseBtnClick
);

function handleModalPopUpCloseBtnClick(e) {
  toggleModal();
  refs.modalContentEl.innerHTML = '';
}

refs.closeModalPopUpBtn.removeEventListener(
  'click',
  handleModalPopUpCloseBtnClick
);

// Close PopUp Modal by Esc click
window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    toggleModal();
  }
});
