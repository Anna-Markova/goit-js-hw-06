function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const inputRef = document.querySelector("input");
const btnCreatRef = document.querySelector("button[data-create]");
const btnDestroyRef = document.querySelector("button[data-destroy]");
let value = 0;
let colection =[];

inputRef.addEventListener("input", (event) => {
  console.log(event.currentTarget.value);

  const value = event.currentTarget.value;
  console.log(value);
  return value;

});
console.log(value);
btnCreatRef.addEventListener("click", (event) => {
colection.push(inputRef.value);
})
console.log(colection);




