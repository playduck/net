/* by ROBIN PRILLWITZ 2019  */
/* jshint esversion: 6 */

document.addEventListener('DOMContentLoaded', function () {

    window.addEventListener("resize", updateBig);
    updateBig();

    window.addEventListener("scroll", (e) => {
        document.getElementById("big-name").style = `transform: translate(-50%, ${window.scrollY / 1.5}px)!important;`;
    });

    setTimeout(() => {
        document.getElementById("avatar").play();

        if (location.search) {
            if (location.search.includes("mailsend", 0)) {
                document.getElementById("bar").classList.add("success");
            } else if (location.search.includes("mailerr", 0)) {
                document.getElementById("bar").classList.add("err");
            }
            document.getElementById("bar").classList.add("show");
            setTimeout(() => {
                document.getElementById("bar").classList.remove("show");
            }, 4500);
        }

    }, 200);

    /*     const items = [...document.querySelector("header nav ul").children];
        items.forEach((e) => {
            e.addEventListener("click", () => {
                let body = document.body.getBoundingClientRect();
                let el = document.getElementById(e.getAttribute("target")).getBoundingClientRect();
                window.scrollTo({
                    left: 0,
                    top: Math.round(el.top - body.top - 55),
                    behavior: "smooth"
                });
            });
        }); */
}, false);

function updateSubmit() {
    document.getElementById("submit").disabled = !validateForm();
}

function validateForm() {
    let valid = true;

    let n = document.forms.send.name.value;
    let e = document.forms.send.email.value;
    let t = document.forms.send.msg.value;

    if (n == undefined || n.trim() == "") {
        valid = false;
    }
    if (e == undefined || e.trim() == "" || !validateEmail(e)) {
        valid = false;
    }
    if (t == undefined || t.trim() == "") {
        valid = false;
    }

    return valid;
}

function validateEmail(email) {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

function updateBig()    {
    if(window.innerWidth <= 1550)   {
        document.getElementById("big-name").innerText = "R.";
    }   else    {
        document.getElementById("big-name").innerText = "robin.";
    }
}