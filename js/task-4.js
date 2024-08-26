// Додаємо обробник події 'submit' до форми логіну
document
  .querySelector(".login-form")
  .addEventListener("submit", function (event) {
    // Запобігаємо стандартній поведінці форми (перезавантаження сторінки)
    event.preventDefault();

    // Отримуємо посилання на поля вводу email та пароля
    const emailInput = this.elements.email;
    const passwordInput = this.elements.password;

    // Перевіряємо, чи заповнені обидва поля
    if (!emailInput.value.trim() || !passwordInput.value.trim()) {
      // Якщо хоча б одне поле порожнє, показуємо попередження
      alert("All form fields must be filled in");
      return; // Припиняємо виконання функції
    }

    // Створюємо об'єкт з даними форми
    const formData = {
      email: emailInput.value.trim(),
      password: passwordInput.value.trim(),
    };

    // Виводимо дані форми в консоль
    console.log(formData);

    // Очищаємо форму
    this.reset();
  });
