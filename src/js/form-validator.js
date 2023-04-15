import Notiflix from 'notiflix';

import getRefs from './refs';
const { authForm, nameField, emailField, passwordField, authSubmitBtn } =
  getRefs();

// Обработчик отправки формы

authForm.addEventListener('submit', validateOnSubmit);

export function validateOnSubmit(event) {
  event.preventDefault();

  // Убираем пробелы

  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const password = passwordField.value.trim();

  // Проверяем, что все поля заполнены

  if (name === '' || email === '' || password === '') {
    Notiflix.Notify.warning('Будь ласка заповніть усі поля');
    return;
  }

  // проверяем, что адрес электронной почты имеет правильный формат
  if (!/\S+@\S+\.\S+/.test(email)) {
    Notiflix.Notify.failure(
      'Будь ласка, введіть дійсну адресу електронної пошти'
    );
    return;
  }

  // проверяем, что пароль имеет длину не менее 5 символов
  if (password.length < 5) {
    Notiflix.Notify.failure('Пароль має бути не менше 5 символів');
    return;
  }

  //проверки прошли успешно => отправляем форму
  Notiflix.Notify.success('Форму успішно надіслано!');
  authForm.reset();
}
