function calculer() {
    var a = Number(document.getElementById("q1").value) * Number(document.getElementById("p1").value);
    var b = Number(document.getElementById("q2").value) * Number(document.getElementById("p2").value);
    var c = Number(document.getElementById("q3").value) * Number(document.getElementById("p3").value);

    document.getElementById("r1").value = a;
    document.getElementById("r2").value = b;
    document.getElementById("r3").value = c;

    document.getElementById("total").value = a + b + c;
}

function reinitialiser() {
    document.getElementById("q1").value = 12;
    document.getElementById("q2").value = 4;
    document.getElementById("q3").value = 12;

    document.getElementById("p1").value = 4;
    document.getElementById("p2").value = 4;
    document.getElementById("p3").value = 5;

    document.getElementById("r1").value = '';
    document.getElementById("r2").value = '';
    document.getElementById("r3").value = '';
    document.getElementById("total").value = '';
}