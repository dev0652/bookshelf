

import getTopBooksArray from "./fetchBooks";
import  {createBookMarkup}  from "./markupBook.js";



// const booksListFirstEl = document.querySelector('.books-list__first');
// const booksListSecEl = document.querySelector('.books-list__second');
// const booksListThirdEl = document.querySelector('.books-list__third');
// const booksListFourthEl = document.querySelector('.books-list__fourth');

// fetchBooks().then((data)=> {
// data.map((category)=> {

//    console.log(category)

//    if(category.list_name === 'Combined Print and E-Book Fiction') {
//    return booksListFirstEl.innerHTML += createBookMarkup(category.books); 
//    }
    
// else if(category.list_name === 'Combined Print and E-Book Nonfiction') {
//     return booksListSecEl.innerHTML += createBookMarkup(category.books);
// }

// else if(category.list_name === 'Hardcover Fiction') {
//     return booksListThirdEl.innerHTML += createBookMarkup(category.books);
// }

// else if(category.list_name === 'Hardcover Nonfiction') {
//    return booksListFourthEl.innerHTML += createBookMarkup(category.books);
// }

// })
// }).catch(err=> {
//     console.log(err)
// })


// Vitalii code

import getRefs from '../refs';

const { allCategoriesBtn } = getRefs();


const categoryContainerEl = document.querySelector('.category-container');

export async function renderTopBooks() {
    try {
      const data = await getTopBooksArray();
  
      const categoryTop = document.createElement('ul');
  
      for (const element of data) {
        const categoryItem = document.createElement('li');
        categoryItem.classList.add('home-category');


        const categoryTitel = document.createElement('h2');
        categoryTitel.classList.add('home-category-title');
        categoryItem.appendChild(categoryTitel);
        categoryTitel.innerText = element.list_name;

    
        categoryTop.appendChild(categoryItem);
  
        const bestSellers = document.createElement('ul');
        bestSellers.classList.add('books-list');

        for (const book of element.books) {
          const bestBook = document.createElement('li');
          bestBook.classList.add('book-item');
          bestBook.innerHTML = createBookMarkup(book);
          

          bestSellers.appendChild(bestBook);
          categoryItem.appendChild(bestSellers);
        }

        const buttonEl = document.createElement('button');
        buttonEl.classList.add('button');
        buttonEl.classList.add('see-more-btn');
        buttonEl.innerText = 'See more'

        categoryItem.appendChild(buttonEl);
      }
  
      categoryContainerEl.appendChild(categoryTop);
    } catch (error) {
      console.log(error);
    }
  }
  renderTopBooks()