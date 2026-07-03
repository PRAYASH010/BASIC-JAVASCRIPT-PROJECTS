const hourEl = document.querySelector("#hour");
const minuteEl = document.querySelector("#minute");
const secondEl = document.querySelector("#second");

function updateClock(){
    const currentDate = new Date();

    const hour = String(currentDate.getHours()).padStart(2, "0");
    const minute = String(currentDate.getMinutes()).padStart(2, "0");
    const second = String(currentDate.getSeconds()).padStart(2, "0");

    hourEl.value = hour;
    minuteEl.value = minute;
    secondEl.value = second;
}
updateClock();
setInterval(updateClock, 1000);