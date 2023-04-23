export function createBookMarkup({
  _id: id,
  title,
  author,
  // description,
  // list_name,
  book_image: image,
  // book_image_width: width,
  // book_image_height: height,
}) {
  return `
    <a class="book-link" href="" aria-label="Book thumbnail">
      <div class="book-thumb">
        <img class="book-image" src="${image}" loading="lazy" data_id=${id} />
        <div class="book-image-overlay" data_id=${id}>
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
