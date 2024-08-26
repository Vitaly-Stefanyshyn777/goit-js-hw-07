// Функція для генерації випадкового кольору у форматі hex
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

// Отримуємо посилання на основні елементи DOM
const controlsRef = document.querySelector("#controls");
const inputRef = controlsRef.querySelector("input");
const createBtnRef = controlsRef.querySelector("[data-create]");
const destroyBtnRef = controlsRef.querySelector("[data-destroy]");
const boxesRef = document.querySelector("#boxes");

// Додаємо обробник події для кнопки "Створити"
createBtnRef.addEventListener("click", () => {
  const amount = Number(inputRef.value);
  // Перевіряємо чи введене число знаходиться в межах від 1 до 100
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount); // Викликаємо функцію створення боксів
  } else {
    alert("Введіть число від 1 до 100"); // Виводимо попередження якщо число не в межах
  }
});

// Додаємо обробник події для кнопки "Видалити"
destroyBtnRef.addEventListener("click", destroyBoxes);

// Функція для створення блоків (боксів)
function createBoxes(amount) {
  let size = 30; // Початковий розмір блоку
  const fragment = document.createDocumentFragment(); // Створюємо фрагмент для оптимізації DOM

  // Цикл для створення заданої кількості блоків
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    // Встановлюємо розмір блоку з використанням шаблонних рядків
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    // Встановлюємо випадковий колір фону блоку
    div.style.backgroundColor = getRandomHexColor();
    // Додаємо блок до фрагменту
    fragment.appendChild(div);
    size += 10; // Збільшуємо розмір кожного наступного блоку на 10 пікселів
  }

  boxesRef.innerHTML = ""; // Очищаємо контейнер перед додаванням нових блоків
  boxesRef.appendChild(fragment); // Додаємо фрагмент з блоками до контейнера
}

// Функція для видалення всіх блоків і очищення введеного значення
function destroyBoxes() {
  boxesRef.innerHTML = ""; // Очищаємо контейнер
  inputRef.value = ""; // Очищаємо поле введення
}