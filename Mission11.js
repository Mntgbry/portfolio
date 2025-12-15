function AjouterLigne() {
    let tbody = document.getElementById('tbody-facture');
    let lastLi = tbody.lastElementChild;
    let newLi = lastLi.cloneNode(true);

    newLi.querySelector('.desc').value = '';
    newLi.querySelector('.qte').value = 1;
    newLi.querySelector('.prix').value = 0;
    newLi.querySelector('.total-ligne').textContent = '0';

    tbody.appendChild(newLi);
}

function remplir() {
    let descriptions = ["desc1", "desc2", "desc3", "desc4"];
    let lignes = document.querySelectorAll('.ligne-facture');

    lignes.forEach(ligne => {
        let descInput = ligne.querySelector('.desc');
        let qteInput = ligne.querySelector('.qte');
        let prixInput = ligne.querySelector('.prix');

        descInput.value = descriptions[Math.floor(Math.random() * descriptions.length)];
        qteInput.value = Math.floor(Math.random() * 10 + 1);
        prixInput.value = Math.floor(Math.random() * 100 + 1);
    });

    calculer();
}

function calculer() {
    let lignes = document.querySelectorAll('.ligne-facture');
    let totalFacture = 0;

    lignes.forEach(ligne => {
        let qte = parseInt(ligne.querySelector('.qte').value) || 0;
        let prix = parseInt(ligne.querySelector('.prix').value) || 0;
        let totalLigne = qte * prix;

        ligne.querySelector('.total-ligne').textContent = totalLigne.toFixed(2);
        totalFacture += totalLigne;
    });

    let remisePct = parseFloat(document.getElementById('remise').value) || 0;
    let taxePct = parseFloat(document.getElementById('taxe').value) || 0;
    let frais = parseFloat(document.getElementById('frais').value) || 0;

    let remiseVal = totalFacture * remisePct / 100;
    let sousTotalRemise = totalFacture - remiseVal;
    let taxeTotale = sousTotalRemise * taxePct / 100;
    let solde = sousTotalRemise + taxeTotale + frais;

    document.getElementById('sous-total').textContent = totalFacture.toFixed(2);
    document.getElementById('remise-val').textContent = remiseVal.toFixed(2);
    document.getElementById('sous-total-remise').textContent = sousTotalRemise.toFixed(2);
    document.getElementById('taxe-val').textContent = taxePct.toFixed(2);
    document.getElementById('taxe-totale').textContent = taxeTotale.toFixed(2);
    document.getElementById('frais-val').textContent = frais.toFixed(2);
    document.getElementById('total-facture').textContent = solde.toFixed(2) + " €";
}

function annuler() {
    let tbody = document.getElementById('tbody-facture');
    let firstLi = tbody.firstElementChild;

    tbody.innerHTML = "";
    tbody.appendChild(firstLi);

    firstLi.querySelector('.desc').value = "";
    firstLi.querySelector('.qte').value = 1;
    firstLi.querySelector('.prix').value = 0;
    firstLi.querySelector('.total-ligne').textContent = "0";

    document.getElementById('remise').value = 0;
    document.getElementById('taxe').value = 20;
    document.getElementById('frais').value = 5;

    calculer();
}
