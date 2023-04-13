const refs = {
  form: document.querySelector('#myForm'),
  nameField: document.querySelector('#nameField'),
  emailField: document.querySelector('#emailField'),
  passwordField: document.querySelector('#passwordField'),
  submitBtn: document.querySelector('#submitBtn'),
};

// Обработчик отправки формы

refs.form.addEventListener('submit', event => {
  event.preventDefault();

  // Убираем пробелы

  const name = refs.nameField.value.trim();
  const email = refs.emailField.value.trim();
  const password = refs.passwordField.value.trim();

  // Проверяем, что все поля заполнены

  if (name === '' || email === '' || password === '') {
    alert('Будь ласка заповніть усі поля');
    return;
  }

  // проверяем, что адрес электронной почты имеет правильный формат
  if (!/\S+@\S+\.\S+/.test(email)) {
    alert('Будь ласка, введіть дійсну адресу електронної пошти');
    return;
  }

  // проверяем, что пароль имеет длину не менее 5 символов
  if (password.length < 5) {
    alert('Пароль має бути не менше 5 символів');
    return;
  }

  //проверки прошли успешно => отправляем форму
  alert('Форму успішно надіслано!');
  refs.form.reset();
});
