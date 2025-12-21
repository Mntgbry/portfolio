function getValues() {
    const n1 = parseFloat(document.getElementById("t1").value);
    const n2 = parseFloat(document.getElementById("t2").value);
    return { n1, n2 };
}

function addition() {
    const { n1, n2 } = getValues();
    calculResultat(n1, n2, (a,b) => a + b);
}

function soustraction() {
    const { n1, n2 } = getValues();
    calculResultat(n1, n2, (a,b) => a - b);
}

function multiplication() {
    const { n1, n2 } = getValues();
    calculResultat(n1, n2, (a,b) => a * b);
}

function division() {
    const { n1, n2 } = getValues();
    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("resultat").value = "Entrez deux nombres";
        return;
    }
    if (n2 === 0) {
        document.getElementById("resultat").value = "Division par 0 impossible";
        return;
    }
    calculResultat(n1, n2, (a,b) => a / b);
}

function calculResultat(n1, n2, operation) {
    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("resultat").value = "Entrez deux nombres";
        document.getElementById("parite").value = "";
        return;
    }
    const res = operation(n1, n2);
    document.getElementById("resultat").value = res;
    document.getElementById("parite").value = "";
}

function permuter() {
    const t1 = document.getElementById("t1");
    const t2 = document.getElementById("t2");
    const temp = t1.value;
    t1.value = t2.value;
    t2.value = temp;
}

function parite() {
    const res = parseFloat(document.getElementById("resultat").value);
    if (isNaN(res)) {
        document.getElementById("parite").value = "Aucun résultat";
        return;
    }
    document.getElementById("parite").value = (res % 2 === 0) ? "Pair" : "Impair";
}

// Effacer tout
function effacer() {
    document.getElementById("t1").value = "";
    document.getElementById("t2").value = "";
    document.getElementById("resultat").value = "";
    document.getElementById("parite").value = "";
}
