/* by ROBIN PRILLWITZ 2019  */
/* jshint esversion: 6 */

document.addEventListener('DOMContentLoaded', function() {
    setTimeout( () => {
        document.getElementById("avatar").play();
    }, 200);
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