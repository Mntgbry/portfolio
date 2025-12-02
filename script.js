function getValues() {
    var n1 = parseFloat(document.getElementById("t1").value);
    var n2 = parseFloat(document.getElementById("t2").value);
    return {n1, n2};
}

function egal() {
    var {n1} = getValues();
    document.getElementById("resultat").value = n1;
}

function addition() {
    var {n1, n2} = getValues();
    document.getElementById("resultat").value = n1 + n2;
}

function soustraction() {
    var {n1, n2} = getValues();
    document.getElementById("resultat").value = n1 - n2;
}

function multiplication() {
    var {n1, n2} = getValues();
    document.getElementById("resultat").value = n1 * n2;
}

function division() {
    var {n1, n2} = getValues();
    if (n2 === 0) {
        document.getElementById("resultat").value = "Division par 0 impossible"
    } else {
        document.getElementById("resultat").value = n1 / n2;
    }
}

function permuter() {
    var t1 = document.getElementById("t1");
    var t2 = document.getElementById("t2");
    var temp = t1.value;
    t1.value = t2.value;
    t2.value = temp;

function pair() {
    var {n1] = getValues();
    if (isNan(n1)) {
        document.getElementById("resultat").value = "Entrez un nombre";
        return;
    }

    if (n1 % 2 === 0) {
        document.getElementById("resultat").value = "Pair"
    } else {
        document.getElementById("resultat").value = "Impair";
    }
}

function effacer() {
    document.getElementById("t1").value = "";
    document.getElementById("t2").value = "";
    document.getElementById("resultat").value = "";
