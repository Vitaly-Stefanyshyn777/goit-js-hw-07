// Отримуємо посилання на елемент з id "categories"
const categoriesListRef = document.querySelector("#categories");

// Знаходимо всі елементи з класом "item" всередині categoriesListRef
const categoriesItemsRefs = categoriesListRef.querySelectorAll(".item");

// Виводимо в консоль кількість знайдених категорій
console.log(`Number of categories: ${categoriesItemsRefs.length}`);

// Перебираємо кожну категорію
categoriesItemsRefs.forEach((categoriesItemRef) => {
  // Знаходимо заголовок категорії (елемент h2)
  const categoryTitleRef = categoriesItemRef.querySelector("h2");
  
  // Знаходимо всі елементи списку (li) в поточній категорії
  const categoryItemsRefs = categoriesItemRef.querySelectorAll("li");

  // Виводимо в консоль назву категорії
  console.log(`Category: ${categoryTitleRef.textContent}`);
  
  // Виводимо в консоль кількість елементів у категорії
  console.log(`Elements: ${categoryItemsRefs.length}`);
});
