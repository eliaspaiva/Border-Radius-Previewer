// variables 
const inputTopLeft = document.querySelector('.border-radius-top-left');
const inputTopRight = document.querySelector('.border-radius-top-right');
const inputBottomLeft = document.querySelector('.border-radius-bottom-left');
const inputBottomRight = document.querySelector('.border-radius-bottom-right');

inputTopLeft.addEventListener('input', ()=> {
  console.log(inputTopLeft.value); 
  // inputTopLeft.style.borderTopLeftRadius = topLeftValue;
})