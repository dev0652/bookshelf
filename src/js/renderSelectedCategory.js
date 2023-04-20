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
        return `<li class="book-item-cat">
<a class="book-item-link" href="" aria-label="Book thumbnail">
<div class="book-item-thumb">
<img class="book-image" src="${book_image}" data_id=${_id} alt="Cover of ${title}">
<div class="book-image-overlay" data_id=${_id} >
<p class="book-image-overlay-text">Quick view</p>
</div>
</div>
<div class="book-item-meta">
<h3 class="book-title">${title}</h3>
<h4 class="book-author">${author}</h4>
</div>
</a>
</li>`;
      }
    )
    .join('');
}
