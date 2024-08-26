// Функція для генерації випадкового кольору в форматі Hex
function getRandomHexColor() {
  // Генерується випадкове число від 0 до 16777215 (максимальне значення для кольорів в Hex)
  // Потім це число перетворюється в шістнадцятковий рядок (Hex)
  // .padStart(6, 0) додає нулі на початку, якщо рядок коротший за 6 символів
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Додаємо обробник події 'click' для кнопки з класом "change-color"
document.querySelector(".change-color").addEventListener("click", function () {
  // Викликаємо функцію для генерації нового кольору
  const newColor = getRandomHexColor();

  // Змінюємо фон сторінки на згенерований колір
  document.body.style.backgroundColor = newColor;

  // Виводимо значення нового кольору в текстовий елемент з класом "color"
  document.querySelector(".color").textContent = newColor;
});
