// variables 
const inputTopLeft = document.querySelector('.border-radius-top-left');
const inputTopRight = document.querySelector('.border-radius-top-right');
const inputBottomLeft = document.querySelector('.border-radius-bottom-left');
const inputBottomRight = document.querySelector('.border-radius-bottom-right');
const border = document.querySelector('.inside-boder');
const copyInput = document.querySelector('.input-copy');
const teste = [];

// Event Listeners
inputTopLeft.addEventListener('input', () => {
  const valueTopLeft = Number(inputTopLeft.value);
  border.style.borderTopLeftRadius = `${valueTopLeft}px`;
  teste.push(valueTopLeft);
});

inputTopRight.addEventListener('input', () => {
  const valueTopRight = Number(inputTopRight.value);
  border.style.borderTopRightRadius = `${valueTopRight}px`;
  teste.push(valueTopRight);  
});

inputBottomLeft.addEventListener('input', () => {
  const valueBottomLeft = Number(inputBottomLeft.value);
  border.style.borderBottomLeftRadius = `${valueBottomLeft}px`;
  teste.push(valueBottomLeft);
});

inputBottomRight.addEventListener('input', () => {
  const valueBottomRight = Number(inputBottomRight.value);
  border.style.borderBottomRightRadius = `${valueBottomRight}px`;
  teste.push(valueBottomRight);
  console.log(valueBottomRight);
  for (let index = 0; index < teste.length; index++) {
    const element = teste[index];
    console.log(element);
    copyInput.value = `${teste[0]}px ${teste[1]}px ${teste[2]}px ${teste[3]}px`;
  }
  }
); 
