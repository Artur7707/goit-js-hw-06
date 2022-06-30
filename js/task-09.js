// Напиши скрипт, который изменяет цвета фона
// элемента < body > через инлайн стиль при клике
//  на button.change - color и выводит значение
//   цвета в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector(".change-color");
const bodyRef = document.body;
const spanRef = document.querySelector(".color");
btnRef.addEventListener("click", changeColor);

function changeColor(event) {
  const color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
  spanRef.textContent = color;
}
