const quizData = [
    {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Rome'],
        correctAnswer: 'Paris'
    },
    {
        question: 'What is 5 + 7?',
        options: ['10', '12', '15', '20'],
        correctAnswer: '12'
    },
    {
        question: 'Who wrote "To Kill a Mockingbird"?',
        options: ['Harper Lee', 'Mark Twain', 'J.K. Rowling', 'Charles Dickens'],
        correctAnswer: 'Harper Lee'
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsContainerEl = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    optionsContainerEl.innerHTML = '';
    
    currentQuizData.options.forEach(option => {
        const optionEl = document.createElement('button');
        optionEl.innerText = option;
        optionEl.classList.add('option');
        optionEl.addEventListener('click', () => checkAnswer(option));
        optionsContainerEl.appendChild(optionEl);
    });
}

function checkAnswer(answer) {
    const currentQuizData = quizData[currentQuestion];
    if (answer === currentQuizData.correctAnswer) {
        score++;
    }

    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.disabled = true;
        if (option.innerText === currentQuizData.correctAnswer) {
            option.classList.add('correct');
        } else {
            option.classList.add('incorrect');
        }
    });

    nextBtn.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
        nextBtn.classList.add('hidden');
        const options = document.querySelectorAll('.option');
        options.forEach(option => {
            option.disabled = false;
            option.classList.remove('correct', 'incorrect');
        });
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionEl.innerText = `You completed the quiz! Your score is ${score}/${quizData.length}.`;
    optionsContainerEl.innerHTML = '';
    nextBtn.classList.add('hidden');
}
  
loadQuestion();
