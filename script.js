// variables 
const inputTopLeft = document.querySelector('.border-radius-top-left');
const inputTopRight = document.querySelector('.border-radius-top-right');
const inputBottomLeft = document.querySelector('.border-radius-bottom-left');
const inputBottomRight = document.querySelector('.border-radius-bottom-right');
const border = document.querySelector('.inside-boder');
const copyInput = document.querySelector('.input-copy');
let valueLeftTop = 0;
let valueRightTop = 0;
let valueLeftBottom = 0;
let valueRightBottom = 0;

// Event Listeners
inputTopLeft.addEventListener('input', () => {
  const valueTopLeft = Number(inputTopLeft.value);
  border.style.borderTopLeftRadius = `${valueTopLeft}px`;
  valueLeftTop = valueTopLeft;
  copyInput.value = `${valueLeftTop}px`;
});

inputTopRight.addEventListener('input', () => {
  const valueTopRight = Number(inputTopRight.value);
  border.style.borderTopRightRadius = `${valueTopRight}px`;
  valueRightTop = valueTopRight;
  copyInput.value = `${valueLeftTop}px ${valueRightTop}px`;
});

inputBottomLeft.addEventListener('input', () => {
  const valueBottomLeft = Number(inputBottomLeft.value);
  border.style.borderBottomLeftRadius = `${valueBottomLeft}px`;
  valueLeftBottom = valueBottomLeft;
  copyInput.value = `${valueLeftTop}px ${valueRightTop}px ${valueLeftBottom}px`;
});

inputBottomRight.addEventListener('input', () => {
  const valueBottomRight = Number(inputBottomRight.value);
  border.style.borderBottomRightRadius = `${valueBottomRight}px`;
  valueRightBottom = valueBottomRight;
  copyInput.value = `${valueLeftTop}px ${valueRightTop}px ${valueLeftBottom}px ${valueRightBottom}px`;
  }
); 
