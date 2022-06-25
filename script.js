// variables 
const inputTopLeft = document.querySelector('.border-radius-top-left');
const inputTopRight = document.querySelector('.border-radius-top-right');
const inputBottomLeft = document.querySelector('.border-radius-bottom-left');
const inputBottomRight = document.querySelector('.border-radius-bottom-right');
const border = document.querySelector('.inside-boder');
const copyInput = document.querySelector('.input-copy');
const emptyArray = [];
const teste = [];


// Event Listeners
inputTopLeft.addEventListener('input', () => {
  const valueTopLeft = Number(inputTopLeft.value);
  border.style.borderTopLeftRadius = `${valueTopLeft}px`;
  emptyArray.push(valueTopLeft);
  for (let index = 0; index < emptyArray.length; index++) {
    const element = emptyArray[index];
    if (element == valueTopLeft) teste.push(element);
  }
});

inputTopRight.addEventListener('input', () => {
  const valueTopRight = Number(inputTopRight.value);
  border.style.borderTopRightRadius = `${valueTopRight}px`;
  emptyArray.push(valueTopRight);
  for (let index = 0; index < emptyArray.length; index++) {
    const element = emptyArray[index];
    if (element == valueTopRight) teste.push(element);
  }
});

inputBottomLeft.addEventListener('input', () => {
  const valueBottomLeft = Number(inputBottomLeft.value);
  border.style.borderBottomLeftRadius = `${valueBottomLeft}px`;
  emptyArray.push(valueBottomLeft);
  for (let index = 0; index < emptyArray.length; index++) {
    const element = emptyArray[index];
    if (element === valueBottomLeft) teste.push(element);
  }
});

inputBottomRight.addEventListener('input', () => {
  const valueBottomRight = Number(inputBottomRight.value);
  border.style.borderBottomRightRadius = `${valueBottomRight}px`;
  emptyArray.push(valueBottomRight);
  console.log(emptyArray);
  console.log(valueBottomRight);
  for (let index = 0; index < emptyArray.length; index++) {
    const element = emptyArray[index];
    if (element == valueBottomRight) teste.push(element);
    console.log(teste);
  }
}); 
