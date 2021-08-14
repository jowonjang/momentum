const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    TEXT = "현재 시간은 : "
    clock.innerText = `${TEXT}${hours}:${minutes}:${seconds}`;
}

getClock()
setInterval(getClock, 1000)