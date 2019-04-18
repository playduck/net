/* by ROBIN PRILLWITZ 2019  */
/* jshint esversion: 6 */

document.addEventListener('DOMContentLoaded', function() {
    for(let i = 0; i < 9; i++) {
        addItem(i);
    }
}, false);

function addItem(i)  {
    let container = document.createElement("div");
        container.classList.add("grid-item");
        container.classList.add("hide");
        container.style.backgroundImage = `url(./img/projects/${i}.jpg)`;
/*     let img = document.createElement("img");
        img.src = `./img/projects/${i}.jpg`;
        img.alt = "image";
    container.appendChild(img); */
    document.getElementById("images").appendChild(container);
    setTimeout( () => {
        container.classList.remove("hide");
    }, i*80);
}