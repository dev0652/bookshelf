// export  const createBookMarkup =  (book)=> {

//     const markup =   `
//        <li class="book-item">
//        <img  src="${book.book_image}"  loading="lazy"  class="book-image" data_id=${book._id}/>
//        <h3 class="book-title">${book.title}</h3>
//        <p class="book-author"> ${book.author}
//         </p>
//         </li>`
       
    
//    return markup;
   
   
//    }

   export function createBookMarkup(book) {
    const markup = `
                          <a class="book-item-link" href="" aria-label="Book thumbnail">
                              <div class="book-item-thumb">
                                  <img class="book-image" src="${book.book_image}"  loading="lazy" data_id=${book._id} />
                                  <div class="book-image-overlay" data_id=${book._id} >
                                      <p class="book-image-overlay-text">Quick view</p>
                                  </div>
                              </div>
                              <div class="book-item-meta">
                                  <h3 class="book-title">${book.title}</h3>
                                     <p class="book-author"> ${book.author}</p>
                              </div>
                          </a>
          `;
  
    return markup;
  }