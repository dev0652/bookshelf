export function createBookMarkup({
  _id,
  title,
  author,
  description,
  list_name,
  book_image,
  book_image_width,
  book_image_height,
}) {
  return `
    <a class="book-item-link" href="" aria-label="Book thumbnail">
      <div class="book-item-thumb">
        <img class="book-image" src="${book_image}" loading="lazy" data_id=${_id} />
        <div class="book-image-overlay" data_id=${_id}>
          <p class="book-image-overlay-text">Quick view</p>
        </div>
      </div>
      <div class="book-item-meta">
        <h3 class="book-title">${title}</h3>
        <p class="book-author">${author}</p>
      </div>
    </a>
  `;
}
