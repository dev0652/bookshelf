// Перелік категорій книг
// https://books-backend.p.goit.global/books/category-list

// Популярні книги, що належать до усіх категорій
// https://books-backend.p.goit.global/books/top-books

// Книги окремої категорії
// https://books-backend.p.goit.global/books/category?category=selectedCategory

// Детальна інформація про книгу
// https://books-backend.p.goit.global/books/ bookId

const BASE_URL = 'https://books-backend.p.goit.global/books/bookId';

export class BooksApi {
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