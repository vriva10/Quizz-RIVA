// script.js
const blocks = document.querySelectorAll('.time-block');
const question = document.getElementById('question');
const dateRange = document.getElementById('date-range');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const feedback = document.getElementById('feedback');

let currentBlock = null;

// Helper function to pick a random block
function pickRandomBlock() {
    const index = Math.floor(Math.random() * blocks.length);
    return blocks[index];
}

// Start the quiz by selecting a random block
function startQuiz() {
    currentBlock = pickRandomBlock();
    dateRange.textContent = currentBlock.getAttribute('data-range');
    feedback.textContent = '';
    answerInput.value = '';
}

// Check the user's answer
function checkAnswer() {
    const userAnswer = answerInput.value.trim();
    const correctAnswer = currentBlock.getAttribute('data-name');

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        feedback.textContent = 'Correct! Well done!';
        feedback.style.color = 'green';
        setTimeout(startQuiz, 2000); // Start a new question after 2 seconds
    } else {
        feedback.textContent = `Incorrect! The correct answer was ${correctAnswer}. Try again!`;
        feedback.style.color = 'red';
    }
}

// Event listener for the submit button
submitButton.addEventListener('click', checkAnswer);

// Highlight the block for the current question
function highlightBlock() {
    blocks.forEach(block => block.classList.remove('highlight'));
    if (currentBlock) {
        currentBlock.classList.add('highlight');
    }
}

// Initialize the quiz
startQuiz();
highlightBlock();

// CSS class for highlighting the current block
const style = document.createElement('style');
style.textContent = `
    .highlight {
        background-color: #ffeb3b !important;
        border-color: #fbc02d;
    }
`;
document.head.appendChild(style);


// Initialize the quiz
startQuiz();

