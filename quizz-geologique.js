document.addEventListener('DOMContentLoaded', function () {
    // Éres géologiques et leurs dates (inspirées de la charte géologique)
    const eras = {
        "Hadéen": { start: "4600", end: "4000", description: "Formation de la Terre et premières croûtes continentales." },
        "Archéen": { start: "4000", end: "2500", description: "Premières formes de vie apparues, principalement des stromatolithes." },
        "Protérozoïque": { start: "2500", end: "541", description: "Émergence des premiers eucaryotes et multicellulaires." },
        "Phanérozoïque": { start: "541", end: "present", description: "Divisé en trois grandes périodes : le Paléozoïque, le Mésozoïque et le Cénozoïque." },
        "Paleozoïque": { start: "541", end: "252", description: "Apparition des premiers animaux marins et des premiers végétaux terrestres." },
        "Mésozoïque": { start: "252", end: "66", description: "L'ère des dinosaures, extinction massive à la fin de cette période." },
        "Cénozoïque": { start: "66", end: "present", description: "L'ère des mammifères et de l'homme, le climat se diversifie." },
    };

    let currentEra = null;
    const eraKeys = Object.keys(eras); // Liste des ères géologiques
    const questionElement = document.getElementById("question");
    const feedbackElement = document.getElementById("feedback");
    const answerInput = document.getElementById("answer");
    const validateButton = document.getElementById("validate");
    const backToMenuButton = document.getElementById("back-to-menu");
    const backToMainMenuButton = document.getElementById("back-to-main-menu");

    // Fonction pour générer une question aléatoire sur les ères géologiques
    function generateQuestion() {
        const randomEra = eraKeys[Math.floor(Math.random() * eraKeys.length)];
        currentEra = eras[randomEra];
        questionElement.textContent = `Quelle est l'ère géologique correspondant à la période ${currentEra.start} - ${currentEra.end} millions d'années ?`;
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

    // Affichage du bouton "Menu Principal"
    backToMainMenuButton.style.display = "block";  // Le bouton Menu Principal est visible dès le début

    // Event listener pour le bouton "Menu Principal"
    backToMainMenuButton.addEventListener("click", function () {
        window.location.href = "index.html";  // Rediriger vers la page principale
    });

    // Logique pour démarrer le quiz
    generateQuestion(); // Génère la première question
});

        window.location.href = "index.html";
    });
});
