import getRefs from '../refs';
const refs = getRefs();

import getIconPaths from '../icon-path-refs';

refs.categoryContainerEl.addEventListener('click', function (e) {
  // e.target was the clicked element
  e.preventDefault();
  if (
    e.target.matches('.book-image') ||
    e.target.matches('.book-image-overlay')
  ) {
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
const SHOPPING_LIST_STORAGE_KEY = 'storage-of-books'; // ключ

const shoppingList =
  JSON.parse(localStorage.getItem(SHOPPING_LIST_STORAGE_KEY)) || [];
// console.log(shoppingList);

// Add item to shopping list
function addToStorage(book) {
  shoppingList.push(book);
  localStorage.setItem(SHOPPING_LIST_STORAGE_KEY, JSON.stringify(shoppingList));
}

// Add item to shopping list, if already added - change the button's textContent and remove the item from shopping list
function handleAddBookInStorage(data) {
  const isBookId = shoppingList.find(
    bookInStorage => bookInStorage._id === data._id
  );

  if (isBookId) {
    const dataBookID = refs.addBtnEL.getAttribute('data_id_of_book');

    const bookIndex = shoppingList.findIndex(
      bookInStorage => bookInStorage._id === dataBookID
    );

    shoppingList.splice(bookIndex, 1);
    localStorage.setItem(
      SHOPPING_LIST_STORAGE_KEY,
      JSON.stringify(shoppingList)
    );
    refs.addBtnEL.textContent = 'Add to shopping list';
    modalMessage.remove();
    return;
  }

  addToStorage(data);
  refs.addBtnEL.textContent = 'Remove from the shopping list';
  refs.addBtnEL.after(modalMessage);
}

// Modal window button click handler
export async function handleBookElClickToStorage(e) {
  try {
    const data = await BookAPI.fetchBookByID();
    handleAddBookInStorage(data);
  } catch (err) {
    console.log(err);
  }
}

refs.addBtnEL.addEventListener('click', handleBookElClickToStorage);

// Create a message after addBtnEL button has been pressed
const modalMessage = document.createElement('p');
modalMessage.classList.add('modal-message');
modalMessage.textContent =
  'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list."';

// #################################################################

// Book card click handler
export async function handleBookElClick(e) {
  BookAPI.bookID = e.target.attributes.data_id.value;

  try {
    const data = await BookAPI.fetchBookByID();
    refs.modalPopUp.classList.remove('is-hidden');
    refs.modalContentEl.innerHTML = createModal(data);
    document.body.style.overflow = 'hidden';
    refs.closeModalPopUpBtn.addEventListener(
      'click',
      handleModalPopUpCloseBtnClick
    );
    document.addEventListener('keydown', handleEscapeKeyDown);
    document.addEventListener('click', handleBackdropClick);
    const isBookId = shoppingList.find(
      bookInStorage => bookInStorage._id === data._id
    );
    if (isBookId) {
      refs.addBtnEL.textContent = 'Remove from the shopping list';
      refs.addBtnEL.after(modalMessage);
      return;
    }
    refs.addBtnEL.textContent = 'Add to shopping list';
    modalMessage.remove();
  } catch (err) {
    console.log(err);
  }
}

// ####################################################################

// Create modal markup

export function createModal(data) {
  const {
    _id,
    book_image,
    author,
    title,
    description,
    buy_links: [amazon, apple, bookshop],
  } = data;

  const { appleBooksIconPath, bookShopIconPath, amazonIconPath } =
    getIconPaths();

  refs.addBtnEL.setAttribute('data_id_of_book', `${_id}`);

  return `            
    <img class="modal-img" src="${book_image}" alt="book cover" />
    <div class='modal-book-attributes'>
      <p class="modal-book-title">${title}</p>
      <p class="modal-book-author">${author}</p>
      <p class="modal-book-desc">${description}</p>
      <div class="modal-shops">
        <a class="modal-shop-link" href="${amazon.url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Amazon link">
          <img class="modal-shop-img shopping-shopimg amazon" src="${amazonIconPath}" alt="Amazon link" />
        </a>
        <a class="modal-shop-link" href="${apple.url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="Apple Books link">
          <img class="modal-shop-img shopping-shopimg apple" src="${appleBooksIconPath}" alt="Apple Books link" />
        </a>
        <a class="modal-shop-link" href="${bookshop.url}" target="_blank" rel="noopener noreferrer nofollow" aria-label="BookShop link">
          <img class="modal-shop-img shopping-shopimg book-shop" src="${bookShopIconPath}" alt="BookShop link" />
        </a>
      </div>
    </div>
`;
}

function handleModalPopUpCloseBtnClick(e) {
  refs.modalPopUp.classList.add('is-hidden');
  document.body.style.removeProperty('overflow');
}

function handleBackdropClick(e) {
  if (e.target == refs.modalPopUp) {
    refs.modalPopUp.classList.add('is-hidden');
    document.body.style.removeProperty('overflow');
  }
}

function handleEscapeKeyDown(e) {
  if (e.key === 'Escape') {
    refs.modalPopUp.classList.add('is-hidden');
    document.body.style.removeProperty('overflow');
  }
}

refs.closeModalPopUpBtn.removeEventListener(
  'click',
  handleModalPopUpCloseBtnClick
);

document.removeEventListener('click', handleBackdropClick);

document.removeEventListener('keydown', handleEscapeKeyDown);
