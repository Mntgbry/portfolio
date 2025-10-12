function addition()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) + Number(b);
    document.getElementById("resultat").value = c;

    
}


function soustraction()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) - Number(b);
    document.getElementById("resultat").value = c;

    
}


function multiplication()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) * Number(b);
    document.getElementById("resultat").value = c;

    
}


function division()
{
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var c = Number(a) / Number(b);
    document.getElementById("resultat").value = c;

    
}


function permuter()
{
    var a = document.getElementById("t1").value = b;
    var b = document.getElementById("t2").value = f;
    var f = document.getElementById("t3").value = a;
    Number(f) = Number(a);
    Number(a) = Number(b);
    Number(b) = Number(f);
    
}


function pair()
{
    var x = document.getElementById("t1").value;
    if (x % 2 == 0) {
        var a = document.getElementByID("pair").value = "Paire"
        }
        else {
            var b = document.getElementById("pair").value = "Impaire"
        }
    
}

function effacer()
{
    var a = document.getElementById("t1").value = '';
    var b = document.getElementById("t2").value = '';
    var c = document.getElementById("t3").value = '';
    var d = document.getElementById("t4").value = '';
}