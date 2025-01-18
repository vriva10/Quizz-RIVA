// Données des ères géologiques avec leurs dates (simplifiées)
const geologicalPeriods = [
    { date: "541 Ma", era: "" },
    { date: "252 Ma", era: "" },
    { date: "66 Ma", era: "" },
    { date: "0", era: "" },
];

// Fonction pour afficher le tableau initial
function displayTable() {
    const tableBody = document.querySelector("#geology-table tbody");
    geologicalPeriods.forEach((period, index) => {
        const row = document.createElement("tr");
        const dateCell = document.createElement("td");
        const eraCell = document.createElement("td");
        
        dateCell.textContent = period.date;
        eraCell.id = `era-${index}`;
        
        row.appendChild(dateCell);
        row.appendChild(eraCell);
        tableBody.appendChild(row);
    });
}

// Sélectionner la question et préparer l'input
function selectQuestion() {
    const randomIndex = Math.floor(Math.random() * geologicalPeriods.length);
    const questionElement = document.getElementById("question");
    questionElement.textContent = `Quel est l'ère géologique correspondant à la date : ${geologicalPeriods[randomIndex].date}?`;
    
    // Gérer la validation
    const validateButton = document.getElementById("validate-answer");
    validateButton.onclick = function() {
        const answerInput = document.getElementById("answer");
        const feedback = document.getElementById("feedback");
        
        // Valider la réponse (ici on suppose une bonne réponse en fonction de la date)
        if (answerInput.value.toLowerCase() === geologicalPeriods[randomIndex].era.toLowerCase()) {
            feedback.textContent = "Bonne réponse !";
            feedback.style.color = "green";
            document.getElementById(`era-${randomIndex}`).textContent = geologicalPeriods[randomIndex].era;
        } else {
            feedback.textContent = "Mauvaise réponse, essayez encore !";
            feedback.style.color = "red";
        }
        
        // Effacer l'input pour la prochaine réponse
        answerInput.value = "";
    };
}

// Fonction de retour au menu
document.getElementById("back-to-menu").addEventListener("click", function() {
    window.location.href = 'index.html';
});

// Initialisation du tableau et de la question
displayTable();
selectQuestion();
