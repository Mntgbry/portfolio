function affichagetab(){
    document.write("<table border=2px width=30%");
    for(let i=0; i<=2; i++){
        document.write("<tr><td>*</td><td>*</td><td>*</td></tr>");
    }
    document.write("</table>");
}
function affichagetab2(){
    var X=prompt("Combien de lignes ?");
    document.write("<table border=2px width=30%");
    for(let i=1; i<=X; i++){
        document.write("<tr><td>"+i+"</td><td>*</td><td>*</td></tr>");
    }
    document.write("</table>");
}
function seconnecter(){
    var login=prompt("Entrez votre nom d'utilisateur");
    var password=prompt("Entrez votre mot de passe");
    if (login=="Mountaga" && password=="Barry")
    {document.write("Bienvenue :"+login);}
    else {alert("Accès refusé")}
}

function cdc(){
    var chaine=prompt("Donnez un mot");
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("La chaîne contient  " + chaine.length + "  caracteres"+"<br>");
    document.write("La première lettre est   "+ chaine.substr(0,1)+"<br>");
    document.write("La dernière lettre est   "+ chaine.substr(-1)+"<br>");
}

function seconnecter2()
{window.location.href="Identification.html"}

function login(){
    var login=prompt("Login ?");
    var mdp=prompt("Mot de passe ?");
    if (login=="Mountaga" && mdp=="Barry")
    {window.location.href="yes.html"}
else {window.location.href="no.html"}
}