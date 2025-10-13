function calcul_moyenne() {
    var n1 = prompt("Donner la première note : ");
    var n2 = prompt("Donner la deuxième note : ");
    var n3 = prompt("Donner la troisième note :");

    var somme = Number(n1) + Number(n2) + Number(n3);
    document.write("Voici la somme : " + somme + "<br>");

    var moyenne = somme / 3;
    document.write("Voici la moyenne : " + moyenne + "<br>");

    if (moyenne < 10) {
        document.write("Redoublant");
    }
    else if (moyenne <= 12) {
        document.write("Admis - Passable");
    }
    else if (moyenne <= 14) {
        document.write("Admis - Bien");
    }
    else {
        document.write("Admis - Très bien");
    }
}


function temperature() {
    var temperature = prompt("Saisissez une température en °C :");

    if (temperature <= 10) {
        document.write("Froid");
    }
    else if (temperature <= 25) {
        document.write("Normal");
    }
    else {
        document.write("Chaud");
    }
}


function compare_nombres() {
    var n1 = prompt("Donner le premier nombre : ");
    var n2 = prompt("Donner le deuxième nombre : ");

    if (n1 >= n2) {
        document.write("Plus grand : " + n1 + ", Plus petit : " + n2);
    }
    else if (n1 = n2) {
        document.write("Les 2 nombres sont de la même valeur");
    }
    else {
        document.write("Plus grand : " + n2 + ", Plus petit : " + n1);
    }
}

function bonus() {
    var chiffreSecret = Math.floor(Math.random() * 20) + 1;
    var n = prompt("Saisissez un chiffre : ");

    if (n >= chiffreSecret) {
        document.write("Votre chiffre est supérieur au chiffre secret !");
    }
    else if (n === chiffreSecret) {
        document.write("Félicitations ! Vous avez trouvé le chiffre : " + chiffreSecret);
    }
    else {
        document.write("Votre chiffre est inférieur au chiffre secret !");
    }
}