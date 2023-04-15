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
  refs.form.reset();
});
