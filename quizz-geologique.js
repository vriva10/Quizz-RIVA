document.addEventListener('DOMContentLoaded', function () {
    const eras = {
        "Archéen": { date: "3.8 à 2.5 milliards d'années" },
        "Protérozoïque": { date: "2.5 milliards à 541 millions d'années" },
        "Phanérozoïque": { date: "541 millions d'années à aujourd'hui" }
        // Ajoute d'autres ères si nécessaire
    };

    let currentEra = null;
    const questionElement = document.getElementById("question");
    const feedbackElement = document.getElementById("feedback");
    const answerInput = document.getElementById("answer");
    const validateButton = document.getElementById("validate");

    // Fonction pour générer une question aléatoire
    function generateQuestion() {
        const eraKeys = Object.keys(eras);
        const randomEra = eraKeys[Math.floor(Math.random() * eraKeys.length)];
        currentEra = eras[randomEra];
        questionElement.textContent = `Quelle est l'ère géologique correspondant à la date : ${currentEra.date}?`;
    }

    // Validation de la réponse
    validateButton.addEventListener("click", function () {
        const userAnswer = answerInput.value.trim().toLowerCase();
        const correctAnswer = currentEra ? Object.keys(eras).find(key => key.toLowerCase() === userAnswer) : null;

        if (correctAnswer) {
            feedbackElement.textContent = "Bonne réponse !";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "Mauvaise réponse, réessayez.";
            feedbackElement.style.color = "red";
        }
    });

    // Redémarrer le quizz
    generateQuestion();

    // Affichage du bouton "Retour à l'accueil"
    document.getElementById("back-to-home").style.display = "block";
    document.getElementById("back-to-home").addEventListener("click", function () {
        window.location.href = "index.html";
    });
});
