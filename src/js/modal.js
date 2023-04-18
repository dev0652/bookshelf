// import BooksApi from './api';

import getRefs from './refs.js';

const refs = getRefs();

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
const addBtnEL = document.querySelector('.modal-pop-up-btn');

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

// Додавання книги у корзину
function handleAddBookInStorage(data) {
  //   Фільтрування унікальності книги
  const isBookId = shoppingList.find(
    bookInStorage => bookInStorage._id === data._id
  );
  if (isBookId) {
    console.log('Ця книга вже у кошику');
    return;
  }
  addToStorage(data);
}

export async function handleBookElClickToStorage(e) {
  // BookAPI.bookID = '643282b1e85766588626a080';

  try {
    const data = await BookAPI.fetchBookByID();
    const fn = await handleAddBookInStorage(data);
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

addBtnEL.addEventListener('click', handleBookElClickToStorage);
// ----------------------------------------////
// ----------------------------------------////
// ----------------------------------------////

export async function handleBookElClick(e) {
  BookAPI.bookID = e.target.attributes.data_id.value;

  try {
    const data = await BookAPI.fetchBookByID();
    toggleModal();
    refs.modalContentEl.innerHTML = createModal(data);

    const isBookId = shoppingList.find(
      bookInStorage => bookInStorage._id === data._id
    );
    if (isBookId) {
      console.log('Ця книга вже у кошику');
      addBtnEL.textContent = 'STOP';
      return;
    }
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

  return `
                        
              <img class="modal-img" src="${book_image}"/>
              <div class='modal-book-atributes'>
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
              <img class="modal-shop-img" src="${bookShopIcon}" alt="Book Shop link"/>
              </a>
              </div>
              </div>
              
          `;
}

refs.categoryContainerEl.addEventListener('click', function (e) {
  // e.target was the clicked element
  if (e.target.matches('.book-image')) {
    e.preventDefault();
    handleBookElClick(e);
  }
});

// refs.openModalPopUpBtn.addEventListener('click', handleBookElClick);

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
refs.closeModalPopUpBtn.removeEventListener('click',
handleModalPopUpCloseBtnClick);


// Close PopUp Modal by Esc click
window.addEventListener('keydown', handleEscKeydown);

function handleEscKeydown(e) {
  if (e.key === 'Escape') {
    toggleModal();
  }
}

window.removeEventListener('keydown', handleEscKeydown);

// Close PopUp Modal by backdrop click
window.addEventListener('click', handleBackdropClick);

function handleBackdropClick(e) {
  if (e.target == refs.modalPopUp) {
    toggleModal();
  }
}

window.removeEventListener('click', handleBackdropClick);
