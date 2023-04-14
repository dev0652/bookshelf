import { BooksApi } from './api.js'

const refs = {
    // openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  // function toggleModal() {
  //   refs.modal.classList.toggle("is-hidden");
  // }
  
  const bookEl = document.querySelector('.book-image');
  bookEl.addEventListener('click', handleBookElClick);
  
  const BookAPI = new BooksApi();
  
  async function handleBookElClick(e) {
    // const id = e.target.attributes.data_id.value;
    BookAPI.bookID = '643282b1e85766588626a080';
  
    try {
      const data = await BookAPI.fetchBookByID();
     // до чого приєднати зрендерену модалку
      bookEl.insertAdjacentHTML('beforeend', createModal(data));
    } catch (err) {
      console.log(err);
    }
  }
  
  function createModal(data) {
    const {
      book_image,
      author,
      title,
      description,
      amazon_product_url,
      buy_links: [amazon, apple, bandn, million, bookshop, indie],
    } = data;
  
    return `
            <div class="backdrop" data-modal>
            <div class="modal">
              <button class="close-button" data-modal-close>
                <svg class="close-button__icon" >
                  <use href="images/symbol-defs.svg#icon-x-close"></use>
                </svg>
              </button>
              <img class="modal-img" src="${book_image}" />
              <p class="modal-book-title">${title}</p>
              <p class="modal-book-author">${author}</p>
              <p class="modal-book-desc">${description}</p>
              <div class="modal-shops">
              <a class="modal-shop-link" href="${amazon_product_url}" target="_blank">
              <img class="modal-shop-img amazon" src="./images/shops/amazon.png" alt="Amazon link"/>
              </a>
              <a class="modal-shop-link" href="${apple.url}" target="_blank">
              <img class="modal-shop-img apple" src="./images/shops/apple-books.png" alt="Apple Books link" />
              </a>
              <a class="modal-shop-link" href="${bookshop.url}" target="_blank">
              <img class="modal-shop-img" src="./images/shops/book-shop.png" alt="Book Shop link"/>
              </a>
              </div>
              <button class="modal-btn button" type="submit">add to shopping list</button>
              
            </div>
          </div> 
          `;
  }
  
  // const modalBtn = document.querySelector('.modal-btn');
  // modalBtn.addEventListener('click', handleModalBtnClick);
  
  // function handleModalBtnClick(e) {
  //   modalBtn.textContent = 'remove from the shopping list';
  //   refs.modal.insertAdjacentHTML(
  //     'beforeend',
  //     'p class="modal-message">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>'
  //   );
  // }
  // refs.closeModalBtn.addEventListener("click", toggleModal);