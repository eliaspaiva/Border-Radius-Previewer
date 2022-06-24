// variables 
const inputTopLeft = document.querySelector('.border-radius-top-left');
const inputTopRight = document.querySelector('.border-radius-top-right');
const inputBottomLeft = document.querySelector('.border-radius-bottom-left');
const inputBottomRight = document.querySelector('.border-radius-bottom-right');
const border = document.querySelector('.inside-boder');
const copyInput = document.querySelector('.input-copy');

// Event Listeners
inputTopLeft.addEventListener('input', ()=> {
  const valueTopLeft = Number(inputTopLeft.value);
  border.style.borderTopLeftRadius = `${valueTopLeft}px`;
})

inputTopRight.addEventListener('input', () => {
  const valueTopRight = Number(inputTopRight.value);
  border.style.borderTopRightRadius = `${valueTopRight}px`;
});

inputBottomLeft.addEventListener('input', () => {
  const valueBottomLeft = Number(inputBottomLeft.value);
  border.style.borderBottomLeftRadius = `${valueBottomLeft}px`;
});

inputBottomRight.addEventListener('input', () => {
  const valueBottomRight = Number(inputBottomRight.value);
  border.style.borderBottomRightRadius = `${valueBottomRight}px`;
});