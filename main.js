/* by ROBIN PRILLWITZ 2019  */
/* jshint esversion: 6 */

const themes = [
    {
        main_bg: "#404040",
        main_text: "#F2F2F2",
        main_accent: "#F29877",
        sec_bg: "#0D0D0D"
    },
    {
        main_bg: "#262626",
        main_text: "#93A2BF",
        main_accent: "#E4EDF2",
        sec_bg: "#363B59"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    let t = themes[Math.round(Math.random() * themes.length)];
    document.getElementById("root").innerHTML = `
    :root {
        --main-bg: ${t.main_bg};
        --main-text: ${t.main_text};
        --main-accent: ${t.main_accent};
        --sec-bg: ${t.sec_bg};
    }`;
}, false);

