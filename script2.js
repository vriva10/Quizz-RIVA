document.addEventListener('DOMContentLoaded', function () {
    // Sélectionner les boutons pour rediriger vers les quizz
    const mandarinButton = document.querySelector("#mandarin-quiz-button");
    const geologieButton = document.querySelector("#geologie-quiz-button");

    // Ajouter les écouteurs d'événements sur chaque bouton
    mandarinButton.addEventListener("click", function () {
        window.location.href = "quizz-mandarin.html";  // Redirection vers le quizz mandarin
    });

    geologieButton.addEventListener("click", function () {
        window.location.href = "quizz-geologique.html";  // Redirection vers le quizz géologique
    });
});
