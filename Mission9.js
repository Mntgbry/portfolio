function testqcm() {
    let score = 0;
    
    let reponses = document.querySelectorAll("input[type='checkbox']:checked, input[type='radio']:checked");

    reponses.forEach(rep => {
        if (rep.dataset.correct == "1") {
            score++;
        }
    });
    alert("Score : " + score);
}

function corrige() {
    window.open("corrigé.html", "_blank", "width=600, height=400");
}

function effacer() {
    let cases = document.querySelectorAll("input[type='checkbox'], input[type='radio']");
    cases.forEach(c => c.checked = false);

    alert("Toutes vos réponses aux questions vont être effacées");
}