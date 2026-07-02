const inputEl = document.querySelector("#number-input");
const decreaseEl = document.querySelector(".decrease");
const resetEl = document.querySelector(".reset");
const increaseEl = document.querySelector(".increase");

let count = 0;
increaseEl.addEventListener("click", () =>{
    count++;
    inputEl.value = `${count}`
})
decreaseEl.addEventListener("click", () =>{
    count--;
    inputEl.value = `${count}`
})
resetEl.addEventListener("click", () =>{
    count = 0;
    inputEl.value = "0";
})