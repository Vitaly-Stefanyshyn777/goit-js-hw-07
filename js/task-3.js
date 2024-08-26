// Отримуємо посилання на елемент вводу імені
const nameInputRef = document.querySelector("#name-input");

// Отримуємо посилання на елемент виводу імені
const nameOutputRef = document.querySelector("#name-output");

// Додаємо слухач події "input" до елемента вводу
nameInputRef.addEventListener("input", handleInputChange);

// Функція, яка обробляє зміну вводу
function handleInputChange(event) {
  // Отримуємо значення вводу і видаляємо пробіли з початку і кінця
  const inputValue = event.target.value.trim();

  // Встановлюємо текст виводу: якщо ввід не порожній, використовуємо його,
  // інакше встановлюємо "Anonymous"
  nameOutputRef.textContent = inputValue || "Anonymous";
}
