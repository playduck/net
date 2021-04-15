/* by ROBIN PRILLWITZ 2021  */
/* jshint esversion: 9 */

const main_bg = "#0f1010";
const light_text = "rgb(239, 239, 244)";
const dark_text = "rgb(10, 10, 14)";
const sec_bg = "rgb(120, 120, 129)";

const color_el = document.getElementById("color");
const timezone_el = document.getElementById("timezone");

const metaThemeColor = document.querySelector('meta[name=theme-color]');
const msThemeColor = document.querySelector('meta[name=msapplication-navbutton-color]');
const iosThemeColor = document.querySelector('meta[name=apple-mobile-web-app-status-bar-style]');

function setStyle(tint, text) {
    const rootEl = document.getElementById("root");
    rootEl.innerHTML = `
    :root {
        --main-bg: ${main_bg}!important;
        --main-text: ${text}!important;
        --main-accent: ${tint}!important;
        --sec-bg: ${sec_bg}!important;
        --tint: ${tint}!important;
    }`;

    color_el.innerText = tint;
    timezone_el.innerText = Intl.DateTimeFormat().resolvedOptions().timeZone;

    metaThemeColor.setAttribute('content', tint);
    msThemeColor.setAttribute('content', tint);
    iosThemeColor.setAttribute('content', tint);
}

// from https://awik.io/determine-color-bright-dark-using-javascript/
function lightOrDark(color) {
    let r, g, b, hsp;

    if (color.match(/^rgb/)) {
        // If RGB --> store the red, green, blue values in separate variables
        color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);

        r = color[1];
        g = color[2];
        b = color[3];
    }

    // If hex --> Convert it to RGB: http://gist.github.com/983661
    color = +("0x" + color.slice(1).replace(
        color.length < 5 && /./g, '$&$&'));

    r = color >> 16;
    g = color >> 8 & 255;
    b = color & 255;


    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
    );

    // Using the HSP value, determine whether the color is light or dark
    if (hsp > 127.5) {

        return 'light';
    } else {
        return 'dark';
    }
}

function asHex(num) {
    return num < 10 ? num : num.toString(16)
}

function timeToColor() {
    const d = new Date();

    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let milliseconds = d.getMilliseconds();

    // originally by http://thecolourclock.com
    let array = new Array();

    const c1 = (hours + minutes / 60) / 24;
    const c2 = (hours >= 20) ? (hours + minutes / 60) / 4 : (hours + minutes / 60) / 10;
    const c3 = Math.floor(c2);
    const c4 = (minutes + seconds / 60) / 60;
    const c5 = (minutes + seconds / 60) / 10;
    const c6 = Math.floor(c5);
    const c7 = (seconds + milliseconds / 1000) / 60;
    const c8 = (seconds + milliseconds / 1000) / 10;
    const c9 = Math.floor(c8);

    array[0] = asHex(Math.round(c1 * 15));
    array[1] = asHex(Math.round((c2 - c3) * 15));
    array[2] = asHex(Math.round(c4 * 15));
    array[3] = asHex(Math.round((c5 - c6) * 15));
    array[4] = asHex(Math.round(c7 * 15));
    array[5] = asHex(Math.round((c8 - c9) * 15));

    return "#" + array.join('').toString();
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("There's no easter eggs here");

    setStyle("#f0f0f8", dark_text);

    setInterval(() => {
        const tint = timeToColor();
        const light_or_dark = lightOrDark(tint);
        const text = (light_or_dark == "light") ? dark_text : light_text;

        setStyle(tint, text);
        document.getElementById("time-display").style.opacity = 1;
    }, 500);

}, false);