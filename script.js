const questions = [
    {
        question: 'Who co-founded Microsoft alongside Bill Gates?',
        options: ['Steve Jobs', 'Paul Allen', 'Larry Page', 'Mark Zuckerberg'],
        correctAnswer: 'Paul Allen'
    },
    {
        question: 'What does CPU stand for?',
        options: ['Central Processing Unit', 'Computer Processing Unit', 'Central Processor Units', 'Computer Processor Unit'],
        correctAnswer: 'Central Processing Unit'
    },
    {
        question: 'In which year was the first iPhone released?',
        options: ['2005', '2007', '2010', '2012'],
        correctAnswer: '2007'
    },
    {
        question: 'What programming language is often used for web development?',
        options: ['Java', 'Python', 'JavaScript' ,'Ruby'],
        correctAnswer: 'JavaScript'
    },
    {
        question: 'Who is the CEO of Tesla and SpaceX?',
        options: ['Jeff Bezos' ,'Elon Musk' ,'Tim Cook' ,'Sundar Pichai'],
        correctAnswer: 'Elon Musk'
    },
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');

function loadQuestion() {
    const currentQuizQuestion = questions[currentQuestion];
    questionElement.textContent = currentQuizQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuizQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('btn');
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedAnswer) {
    const currentQuizQuestion = questions[currentQuestion];

    if (selectedAnswer === currentQuizQuestion.correctAnswer) {
        score++;
    }

    if (currentQuestion === questions.length - 1) {
        showResult();
    } else {
        currentQuestion++;
        loadQuestion();
    }
}

function showResult() {
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreElement.textContent = `Your score: ${score} out of ${questions.length}`;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}
loadQuestion();
