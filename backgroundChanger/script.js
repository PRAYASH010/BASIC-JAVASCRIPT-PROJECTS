const btnEl = document.querySelector("button");

btnEl.addEventListener("click", () => {
    change_color(`${'#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`);
})

function change_color(color){
    document.body.style.backgroundColor = color;
}