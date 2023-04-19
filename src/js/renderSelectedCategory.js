import getRefs from './refs';
const { selectedBooksListEl } = getRefs();

export function renderPage(data) {
  selectedBooksListEl.innerHTML = '';
  return data
    .map(({ _id, title, author, description, list_name, book_image }) => {
      return `<li class="selected-book"><img src="${book_image}" alt="Cover of ${title}"><h3>${title}</h3><h4>${author}</h4></li>`;
    })
    .join('');
}
