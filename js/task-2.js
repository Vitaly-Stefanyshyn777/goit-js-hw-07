// Масив об'єктів, кожен з яких представляє зображення з URL та альтернативним текстом
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  // ... (інші об'єкти зображень)
];

// Знаходимо елемент галереї на сторінці
const gallery = document.querySelector(".gallery");

// Створюємо фрагмент документа для оптимізації вставки елементів
const fragment = document.createDocumentFragment();

// Перебираємо кожне зображення в масиві
images.map((image) => {
  // Створюємо новий елемент списку
  const li = document.createElement("li");
  // Додаємо клас до елемента списку
  li.classList.add("gallery-item");

  // Створюємо новий елемент зображення
  const img = document.createElement("img");
  // Встановлюємо джерело зображення
  img.src = image.url;
  // Встановлюємо альтернативний текст зображення
  img.alt = image.alt;

  // Додаємо зображення до елемента списку
  li.appendChild(img);
  // Додаємо елемент списку до фрагмента
  fragment.appendChild(li);
});

// Додаємо весь фрагмент до галереї
gallery.appendChild(fragment);
