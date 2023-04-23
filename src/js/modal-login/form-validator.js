import Notiflix from 'notiflix';

import getRefs from '../refs';
const { authForm, nameField, emailField, passwordField } = getRefs();

const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

// Обработчик отправки формы

authForm.addEventListener('submit', validateOnSubmit);

export default function validateOnSubmit(e) {
  // Убираем пробелы

  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const password = passwordField.value.trim();

  // Проверяем, что все поля заполнены
  const testName = name.length === 0 || nameRegExp.test(name);
  const testEmail = email.length === 0 || emailRegExp.test(email);
  const testPassword = password.length > 5;

  if (!testName) {
    e.preventDefault();
    Notiflix.Notify.failure('Please enter a valid name');
    return;
  }

  // проверяем, что адрес электронной почты имеет правильный формат
  else if (!testEmail) {
    e.preventDefault();
    Notiflix.Notify.failure('Please enter a valid email');
    return;
  }

  // проверяем, что пароль имеет длину не менее 5 символов
  else if (!testPassword) {
    e.preventDefault();
    Notiflix.Notify.failure('Password has to be at least 5 characters long');
    return;
  }
  //проверки прошли успешно => отправляем форму
  return true;
}
