/* by ROBIN PRILLWITZ 2021  */
/* jshint esversion: 9 */

const main_bg = "#0f1010"
const main_text = "rgb(239, 239, 244)"
const sec_bg = "rgb(42, 45, 46)"
    // const tint = "rgb(16, 63, 41)"

function setStyle(tint) {
    const rootEl = document.getElementById("root");
    rootEl.innerHTML = `
    :root {
        --main-bg: ${main_bg}!important;
        --main-text: ${main_text}!important;
        --main-accent: ${tint}!important;
        --sec-bg: ${sec_bg}!important;
        --tint: ${tint}!important;
    }`;
}

function timeToColor() {
    const d = new Date();

    let hours = d.getHours().toString();
    let minutes = d.getMinutes().toString();
    let seconds = d.getSeconds().toString();

    if (hours <= 9) { hours = '0' + hours };
    if (minutes <= 9) { minutes = '0' + minutes };
    if (seconds <= 9) { seconds = '0' + seconds };

    console.log(hours, minutes, seconds)

    return `#${hours}${minutes}${seconds}`;
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("There's no easter eggs here")

    setStyle("rgb(12, 10, 16)");

    setInterval(() => {
        const color = timeToColor();
        console.log(color)
        setStyle(color);
    }, 1000);

}, false);