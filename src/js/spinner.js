// import Notiflix from 'notiflix';

// async function fetchData() {
//   Notiflix.Loading.pulse('Please hang on...');

//   try {
//     const response = await fetch('');

//     // получаем ответ
//     const data = await response.json();

//     // скрыть спиннер после получения данных
//     Notiflix.Loading.remove();

//     // обработать данные
//     Notiflix.Notify.success('Дякуємо за очикування!');
//   } catch (error) {
//     // скрыть спиннер в случае ошибки
//     Notiflix.Loading.remove();

//     // обработать ошибку
//     Notiflix.Notify.failure('Помилка. Спробуйте, ще раз.');
//     console.error(error);
//   }
// }
// // вызвать функцию для выполнения запроса
// // fetchData();
