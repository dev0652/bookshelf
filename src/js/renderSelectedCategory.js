import getRefs from './refs';
const { selectedBooksListEl } = getRefs();

export function renderPage(data) {
  selectedBooksListEl.innerHTML = '';
  return data
    .map(
      ({
        _id,
        title,
        author,
        description,
        list_name,
        book_image,
        book_image_width,
        book_image_height,
      }) => {
        return `<li class="book-item-cat"><img class="book-image" src="${book_image}" alt="Cover of ${title}"><h3 class="book-title">${title}</h3><h4 class="book-author">${author}</h4></li>`;
      }
    )
    .join('');
}
