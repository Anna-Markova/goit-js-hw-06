const input = document.querySelector("#font-size-control");
const output = document.querySelector("#text");
output.style.fontSize = input.value+"px";
const inputTextRef = document.querySelector("#text");
const inputControlRef = document.querySelector("#font-size-control");
inputControlRef.oninput = function () {
    console.log(this.value)
    inputTextRef.style.fontSize = inputControlRef.value + 'px';
}