// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

const decrCounter = () => {
  counterValue -= 1;
  value.textContent = counterValue;
  return counterValue;
};

decrementBtn.addEventListener("click", decrCounter);

const incrCounter = () => {
  counterValue += 1;
  value.textContent = counterValue;
  return counterValue;
};

incrementBtn.addEventListener("click", incrCounter);
