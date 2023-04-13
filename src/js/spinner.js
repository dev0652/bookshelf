import Notiflix from 'notiflix';

export const spiner = {
  options: {
    svgSize: '90px',
    svgColor: 'rgba(0, 255, 27, 1)',
    messageFontSize: '16px',
    messageColor: 'rgba(0, 255, 27, 1)',
  },

  start() {
    return Notiflix.Loading.hourglass('Ищем книгу...', this.options);
  },

  stop() {
    Notiflix.Loading.remove();
  },
};
// или что-то в этом роде?

import Notiflix from 'notiflix';

//  асинхронного запроса
async function fetchData() {
  Notiflix.Loading.hourglass('Loading...');

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
