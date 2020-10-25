function dispFunc1() {
    let x = document.getElementById('prot');
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
    }
}
    
function dispFunc2() {    
    var y = document.getElementById("trouble");
        if (y.style.display === "none") {
            y.style.display = "block";
        } else {
            y.style.display = "none";
    }
}
function dispFunc3() {    
    var z = document.getElementById("error");
        if (z.style.display === "none") {
            z.style.display = "block";
        } else {
            z.style.display = "none";
    }
} 


function displayAndHide(ele) {
    var id = document.getElementById(ele);
    if (id.style.display === "none") {
        id.style.display = "block";
    } else {
        id.style.display = "none";
    }
}
