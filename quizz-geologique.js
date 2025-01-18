document.addEventListener('DOMContentLoaded', function () {
    const table = document.getElementById("geological-table");
    const cursor = document.createElement("div");
    cursor.id = "cursor";
    document.body.appendChild(cursor);

    const validateButton = document.getElementById("validate");
    const answerInput = document.getElementById("answer");
    const feedbackElement = document.getElementById("feedback");
    const backToMenuButton = document.getElementById("back-to-menu");
    const backToMainMenuButton = document.getElementById("back-to-main-menu");

    const eras = {
        "Hadéen": { period: "Formation de la Terre", date: "4600-4000" },
        "Archéen": { period: "Première vie", date: "4000-2500" },
        "Protérozoïque": { period: "Premiers eucaryotes", date: "2500-541" },
        "Phanérozoïque": { period: "Apparition des animaux", date: "541-252" },
        // Ajoute plus de périodes si nécessaire
    };

    let currentPosition = null;

    function randomizeCursorPosition() {
        // Choisir une cellule aléatoire
        const randomRow = Math.floor(Math.random() * table.rows.length);
        const randomCell = Math.floor(Math.random() * table.rows[randomRow].cells.length);
        
        const cell = table.rows[randomRow].cells[randomCell];
        
        // Déplacer le curseur à la position choisie
        cursor.style.left = cell.offsetLeft + "px";
        cursor.style.top = cell.offsetTop + "px";
        cursor.style.display = "block"; // Afficher le curseur
        
        currentPosition = cell; // Sauvegarder la position pour la question
        const era = currentPosition.getAttribute('data-era');
        const period = currentPosition.getAttribute('data-period');
        const date = currentPosition.getAttribute('data-date');
        
        document.getElementById("question").textContent = `Quelle est l'ère géologique correspondant à ${period} (${date}) ?`;
    }

    // Afficher une nouvelle question
    randomizeCursorPosition();

    // Validation de la réponse
    validateButton.addEventListener("click", function () {
        const userAnswer = answerInput.value.trim().toLowerCase();
        const correctAnswer = currentPosition.getAttribute('data-era').toLowerCase();

        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Bonne réponse !";
            feedbackElement.style.color = "green";
            setTimeout(randomizeCursorPosition, 1000); // Nouvelle question après 1 seconde
        } else {
            feedbackElement.textContent = "Mauvaise réponse, réessayez.";
            feedbackElement.style.color = "red";
        }
    });

    // Event listener pour les autres boutons
    backToMenuButton.addEventListener("click", function () {
        // Retourner au menu secondaire
    });

    backToMainMenuButton.addEventListener("click", function () {
        window.location.href = "index.html";  // Rediriger vers le menu principal
    });
});
