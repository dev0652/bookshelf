import Notiflix from 'notiflix';

import getRefs from './refs';
const { authForm, nameField, emailField, passwordField, authSubmitBtn } =
  getRefs();

// Обработчик отправки формы

authForm.addEventListener('focusout', validateOnSubmit);

export default function validateOnSubmit(e) {
  e.preventDefault();

  // Убираем пробелы

  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const password = passwordField.value.trim();

  // Проверяем, что все поля заполнены

  if (name === '' || email === '' || password === '') {
    Notiflix.Notify.warning('Please fill in all fields');

    return;
  }

  // проверяем, что адрес электронной почты имеет правильный формат
  if (!/\S+@\S+\.\S+/.test(email)) {
    Notiflix.Notify.failure('Please enter a valid email');
    return;
  }

  // проверяем, что пароль имеет длину не менее 5 символов
  if (password.length < 5) {
    Notiflix.Notify.failure('Password has to be at least 5 characters long');
    return;
  }

  //проверки прошли успешно => отправляем форму
  Notiflix.Notify.success('Submitted successfully');
  authForm.reset();
}
