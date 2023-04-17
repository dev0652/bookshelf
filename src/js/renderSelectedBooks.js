// import axios from 'axios';
// import Notiflix from 'notiflix';
// import getRefs from './refs';
// const { categoryListEl } = getRefs();

// categoryListEl.addEventListener('click', fetchSelectedBooks);

// async function fetchSelectedBooks(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }
//   Notiflix.Loading.pulse('Please hang on...');

//   const clickedCategory = e.target.textContent;

//   try {
//     const { data } = await axios.get(
//       `https://books-backend.p.goit.global/books/category?category=${clickedCategory}`
//     );
//     Notiflix.Loading.remove();
//     console.log(data);
//     return data;
//   } catch (error) {
//     Notiflix.Loading.remove();
//     Notiflix.Notify.failure('Something went wrong. Please try again');
//     console.log(error);
//   }
// }
