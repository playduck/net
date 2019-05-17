/* jshint esversion: 6 */

document.addEventListener('DOMContentLoaded', function () {
    // document.getElementById("c-name").onclick = function() {
    //     document.getElementById("out-name").select();
    //     document.execCommand("copy");
    // };

    // document.getElementById("c-att").onclick = function() {
    //     document.getElementById("out-att").select();
    //     document.execCommand("copy");
    // };

    // document.getElementById("c-text").onclick = function() {
    //     document.getElementById("out-text").select();
    //     document.execCommand("copy");
    // };

    document.getElementById("in").oninput = function() {
       doUpdate();
    };

    document.getElementById("tabelle").onchange = function() {
        doUpdate();
    };
});

function doUpdate() {
    let text = document.getElementById("in").value;
    let sp = text.split('\n\n');
    // console.log(sp);
    
    let name = sp[0];

    let att = "";
    let att_sp = sp[1].split("\n");
    let att_reg = /(^.*:)(\n?)(.*)/;

    if(document.getElementById("tabelle").checked !== true) {
        for(let i = 0; i < att_sp.length; i++)  {
            if( att_sp[i] ) {
                let a = att_reg.exec(att_sp[i]);
                // console.log(a);
                att += `<b>${a[1]}</b>${a[2]}${a[3]} <br>`;
            }
        }
    }   else    {
        for(let i = 0; i < att_sp.length; i+=2)  {
            console.log( att_sp[i] );
            console.log( att_sp[i+1] );

            att += `<b>${att_sp[i]}</b> ${att_sp[i+1]} <br>`;
        }
    } 
    
    let main = "\n";
    for(let i = 2; i < sp.length; i++)  {
        main += "<br>" + sp[i];
    }

    document.getElementById("out-name").innerHTML = name;
    document.getElementById("out-att").innerHTML = att;
    document.getElementById("out-text").innerHTML = main;
}

