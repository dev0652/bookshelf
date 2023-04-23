import getRefs from '../refs';
const { selectedBooksListEl } = getRefs();

export function renderBooksList(data) {
  selectedBooksListEl.innerHTML = '';
  return data
    .map(({ _id, title, author, book_image }) => {
      return `<li class="books-list-item">
          <a class="book-link" href="" aria-label="Book thumbnail">
            <div class="book-thumb">
              <img class="book-image" src="${book_image}" loading="lazy" data_id=${_id} alt="book cover"/>
              <div class="book-image-overlay" data_id=${_id} >
                <p class="book-image-overlay-text">Quick view</p>
              </div>
            </div>
            <div class="book-item-meta">
              <h3 class="book-title">${title}</h3>
              <p class="book-author">${author}</p>
            </div>
          </a>
        </li>`;
    })
    .join('');
}
