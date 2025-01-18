document.addEventListener('DOMContentLoaded', function() {
    // Sélection des boutons pour les quizz
    const mandarinButton = document.getElementById('mandarin-button');
    const geologyButton = document.getElementById('geology-button');

    // Redirection vers le quizz Mandarin
    mandarinButton.addEventListener('click', function() {
        window.location.href = 'quizz-mandarin.html'; // Lien vers la page du quizz Mandarin
    });

    // Redirection vers le quizz Géologique
    geologyButton.addEventListener('click', function() {
        window.location.href = 'quizz-geologique.html'; // Lien vers la page du quizz Géologique
    });
});
