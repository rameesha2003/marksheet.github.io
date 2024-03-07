function calc() {
    var a = parseFloat(document.getElementById("o1").value);
    var b = parseFloat(document.getElementById("o2").value);
    var c = parseFloat(document.getElementById("o3").value);
    var d = parseFloat(document.getElementById("o4").value);
    var e = parseFloat(document.getElementById("o5").value);

    var omm = (a + b + c + d + e).toFixed(2);
    document.getElementById("omm").innerHTML = omm;

    var pp = ((omm / 500) * 100).toFixed(2);
    document.getElementById("pp").innerHTML = pp + "%";

    if (pp == 100 || pp >= 90) { 
        var gg = "A-one"; 
        document.getElementById("gg").innerHTML = gg;
        var abc = "Pass! Outstanding Performance."
        document.getElementById("abc").innerHTML = abc;
    }
    else if (pp < 90 && pp >= 80) {
        var gg = "A"; 
        document.getElementById("gg").innerHTML = gg;
        var abc = "Pass! Excellent Work."
        document.getElementById("abc").innerHTML = abc;
    }
    else if (pp < 80 && pp >= 70) {
        var gg = "B"; 
        document.getElementById("gg").innerHTML = gg;
        var abc = "Pass! Good Effort."
        document.getElementById("abc").innerHTML = abc;
    }
    else if (pp < 70 && pp >= 60) {
        var gg = "C"; 
        document.getElementById("gg").innerHTML = gg;
        var abc = "Pass! Satisfactory Performance."
        document.getElementById("abc").innerHTML = abc;
    }
    else if (pp < 60 && pp >= 50) {
        var gg = "D"; 
        document.getElementById("gg").innerHTML = gg;
        var abc = "Pass! Needs Improvement."
        document.getElementById("abc").innerHTML = abc;
    }
    else if (pp < 50 && pp >= 40) {
        var gg = "E"; 
        document.getElementById("gg").innerHTML = gg;
        var abc = "Below Average."
        document.getElementById("abc").innerHTML = abc;
    }
    else {
        var gg = "F"; 
        document.getElementById("gg").innerHTML = gg;
        var abc = "Fail"
        document.getElementById("abc").innerHTML = abc;
    }
    return false;
}
