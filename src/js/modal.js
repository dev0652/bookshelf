import getRefs from './refs.js';
const refs = getRefs();

refs.categoryContainerEl.addEventListener('click', function (e) {
  // e.target was the clicked element
  e.preventDefault();
  if (e.target.matches('.book-image') || e.target.matches('.book-image-overlay')) {
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
    modalMessage.remove(); //видалення повідомлення
    console.log('Книгу видалено');
    return;
  }
  // Додавання книги у модальному вікні
  addToStorage(data);
  refs.addBtnEL.textContent = 'Remove from the shopping list';
  refs.addBtnEL.after(modalMessage); //додавання повідомлення
  console.log('Книгу додано');
}

// Обробник кліку по кнопці у модальному вікні
export async function handleBookElClickToStorage(e) {
  try {
    const data = await BookAPI.fetchBookByID(); // обєкт із бекенду
    handleAddBookInStorage(data); // додавання/видалення книги
    // const isBookId = shoppingList.find(
    //   bookInStorage => bookInStorage._id === data._id
    // );
    // if (isBookId) {
    //   console.log('добавлено у кошик');
    //   addBtnEL.textContent = 'STOP';
    //   return;
    // }
  } catch (err) {
    console.log(err);
  }
}

refs.addBtnEL.addEventListener('click', handleBookElClickToStorage);

//Створення повідомлення після натискання на кнопку addBtnEL
const modalMessage = document.createElement('p');
modalMessage.classList.add('modal-message');
modalMessage.textContent =
  'Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list."';

//Обробник кліку по книжці
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
    document.addEventListener(
      'keydown',
      e => {
        if (e.key === 'Escape') {
          refs.modalPopUp.classList.add('is-hidden');
          document.body.style.removeProperty('overflow');
        }
      },
      { once: true }
    );
    document.addEventListener('click', handleBackdropClick);
    const isBookId = shoppingList.find(
      bookInStorage => bookInStorage._id === data._id
    );
    if (isBookId) {
      refs.addBtnEL.textContent = 'Remove from the shopping list';
      refs.addBtnEL.after(modalMessage);
      console.log('Ця книга вже у кошику');
      return;
    }
    refs.addBtnEL.textContent = 'Add to shopping list';
    modalMessage.remove();
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
              <img class="modal-shop-img shopping-shopimg amazon" src="${amazonIcon}" alt="Amazon link"/>
              </a>
              <a class="modal-shop-link" href="${apple.url}" target="_blank">
              <img class="modal-shop-img shopping-shopimg apple" src="${appleBooksIcon}" alt="Apple Books link" />
              </a>
              <a class="modal-shop-link" href="${bookshop.url}" target="_blank">
              <img class="modal-shop-img shopping-shopimg book-shop" src="${bookShopIcon}" alt="Book Shop link"/>
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

refs.closeModalPopUpBtn.removeEventListener(
  'click',
  handleModalPopUpCloseBtnClick
);

document.removeEventListener('click', handleBackdropClick);
