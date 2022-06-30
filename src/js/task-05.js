// // Напиши скрипт который, при наборе текста в инпуте
//  input#name - input(событие input), подставляет его текущее
//   значение в span#name - output.
//   Если инпут пустой, в спане
//   должна отображаться строка "Anonymous".

const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

inputRef.addEventListener("input", (event) => {
  if (inputRef.value === "") {
    return (outputRef.textContent = "Anonymous");
  }
  outputRef.textContent = event.currentTarget.value;
});
