var kg=document.getElementById("kg");
var pound=document.getElementById("pound");
var inch=document.getElementById("onch");

function kilo(){
    pound.value=(+kg.value*2.205).toFixed(2);
    inch.value=(+kg.value*35.274).toFixed(2);
}

function pon(){
    kg.value=(+pound.value/2.205).toFixed(2);
    inch.value=(+pound.value*16).toFixed(2);
}


function onch(){
    kg.value=(+inch.value/35.274).toFixed(2);
    pound.value=(+inch.value/16).toFixed(2);
}














kg.addEventListener("input",kilo)
pound.addEventListener("input",pon)
inch.addEventListener("input",onch)
