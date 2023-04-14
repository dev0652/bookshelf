import Notiflix from 'notiflix';

async function fetchData() {
  Notiflix.Loading.pulse('Зачекайте...');

  try {
    const response = await fetch('');

    // получаем ответ
    const data = await response.json();

    // скрыть спиннер после получения данных
    Notiflix.Loading.remove();

    // обработать данные
    console.log(data);
  } catch (error) {
    // скрыть спиннер в случае ошибки
    Notiflix.Loading.remove();

    // обработать ошибку
    console.error(error);
  }
}
// вызвать функцию для выполнения запроса
fetchData();
