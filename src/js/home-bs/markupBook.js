export  const createBookMarkup =  (book)=> {

    const markup =   `
       <li class="book-item">
       <img  src="${book.book_image}"  loading="lazy"  class="book-image"/>
       <h3 class="book-title">${book.title}</h3>
       <p class="book-author"> ${book.author}
        </p>
        </li>`
       
    
   return markup;
   
   
   }