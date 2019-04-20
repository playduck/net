/* by ROBIN PRILLWITZ 2019  */
/* jshint esversion: 6 */

document.addEventListener('DOMContentLoaded', function() {
    setTimeout( () => {
        document.getElementById("avatar").play();

        // document.querySelector('#submit').scrollIntoView({ 
        //     behavior: 'smooth'
        // });
    }, 200);

    const items = [...document.querySelector("header nav ul").children];
    items.forEach( (e) => {
        e.addEventListener("click", () => {
            // document.getElementById(e.getAttribute("target")).scrollIntoView({ 
            //     behavior: 'smooth'
            // });
            let body = document.body.getBoundingClientRect();
            let el = document.getElementById(e.getAttribute("target")).getBoundingClientRect();
            let top = Math.round( el.top - body.top -55 );
            console.log(top);
            window.scrollTo({
                left: 0, 
                top: top,
                behavior: "smooth"
            });
        });
    });
}, false);

function updateSubmit() {
    document.getElementById("submit").disabled = !validateForm();
}

function validateForm() {
    let valid = true;

    let n = document.forms.send.name.value;
    let e = document.forms.send.email.value;
    let t = document.forms.send.msg.value;

    if(n == undefined || n.trim() == "")    {valid = false; }
    if(e == undefined || e.trim() == "" || !validateEmail(e))    {valid = false; }
    if(t == undefined || t.trim() == "")    {valid = false; }

    return valid;
}

function validateEmail(email) {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}