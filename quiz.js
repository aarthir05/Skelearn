// const quizData = [
//     {
//         question: "What is the longest bone in the human body?",
//         a: "Femur",
//         b: "Tibia",
//         c: "Humerus",
//         d: "Fibula",
//         correct: "a"
//     },
//     {
//         question: "How many bones are there in the adult human body?",
//         a: "206",
//         b: "215",
//         c: "198",
//         d: "201",
//         correct: "a"
//     },
//     {
//         question: "Which bone is known as the collarbone?",
//         a: "Scapula",
//         b: "Clavicle",
//         c: "Sternum",
//         d: "Humerus",
//         correct: "b"
//     },
//     {
//         question: "What is the smallest bone in the human body?",
//         a: "Stapes",
//         b: "Incus",
//         c: "Malleus",
//         d: "Phalanges",
//         correct: "a"
//     },
//     {
//         question: "Which part of the skeleton protects the brain?",
//         a: "Spine",
//         b: "Ribcage",
//         c: "Skull",
//         d: "Pelvis",
//         correct: "c"
//     },
//     {
//         question: "What is the name of the bone that forms the lower jaw?",
//         a: "Maxilla",
//         b: "Mandible",
//         c: "Zygomatic",
//         d: "Frontal",
//         correct: "b"
//     },
//     {
//         question: "How many vertebrae are in the human spine?",
//         a: "24",
//         b: "26",
//         c: "32",
//         d: "30",
//         correct: "a"
//     },
//     {
//         question: "Which bones are known as the wrist bones?",
//         a: "Carpals",
//         b: "Metacarpals",
//         c: "Phalanges",
//         d: "Tarsals",
//         correct: "a"
//     },
//     {
//         question: "What is the name of the bone in the thigh?",
//         a: "Patella",
//         b: "Tibia",
//         c: "Femur",
//         d: "Fibula",
//         correct: "c"
//     },
//     {
//         question: "Which bone is known as the kneecap?",
//         a: "Patella",
//         b: "Fibula",
//         c: "Tibia",
//         d: "Humerus",
//         correct: "a"
//     }
// ];

// let currentQuiz = 0;
// let score = 0;

// const quizElement = document.getElementById("quiz");

// function loadQuiz() {
//     const currentQuizData = quizData[currentQuiz];

//     quizElement.innerHTML = `
//         <div class="question">${currentQuizData.question}</div>
//         <ul class="answers">
//             <li><label><input type="radio" name="answer" value="a">${currentQuizData.a}</label></li>
//             <li><label><input type="radio" name="answer" value="b">${currentQuizData.b}</label></li>
//             <li><label><input type="radio" name="answer" value="c">${currentQuizData.c}</label></li>
//             <li><label><input type="radio" name="answer" value="d">${currentQuizData.d}</label></li>
//         </ul>
//         <button id="submit">Submit</button>
//     `;

//     document.getElementById("submit").addEventListener("click", submitAnswer);
// }

// function submitAnswer() {
//     const answers = document.querySelectorAll('input[name="answer"]');
//     let selectedAnswer;

//     answers.forEach((answer) => {
//         if (answer.checked) {
//             selectedAnswer = answer.value;
//         }
//     });

//     if (selectedAnswer === quizData[currentQuiz].correct) {
//         score++;
//     }

//     currentQuiz++;

//     if (currentQuiz < quizData.length) {
//         loadQuiz();
//     } else {
//         showResult();
//     }
// }

// function showResult() {
//     quizElement.innerHTML = `
//         <h2>Your score: ${score}/${quizData.length}</h2>
//         <button id="restart">Restart Quiz</button>
//     `;

//     document.getElementById("restart").addEventListener("click", restartQuiz);
// }

// function restartQuiz() {
//     currentQuiz = 0;
//     score = 0;
//     loadQuiz();
// }

// // Load the first quiz question when the page loads
// loadQuiz();



const quizData = [
    {
        question: "What is the longest bone in the human body?",
        a: "Femur",
        b: "Tibia",
        c: "Humerus",
        d: "Fibula",
        correct: "a"
    },
    {
        question: "How many bones are there in the adult human body?",
        a: "206",
        b: "215",
        c: "198",
        d: "201",
        correct: "a"
    },
    {
        question: "Which bone is known as the collarbone?",
        a: "Scapula",
        b: "Clavicle",
        c: "Sternum",
        d: "Humerus",
        correct: "b"
    },
    {
        question: "What is the smallest bone in the human body?",
        a: "Stapes",
        b: "Incus",
        c: "Malleus",
        d: "Phalanges",
        correct: "a"
    },
    {
        question: "Which part of the skeleton protects the brain?",
        a: "Spine",
        b: "Ribcage",
        c: "Skull",
        d: "Pelvis",
        correct: "c"
    },
    {
        question: "What is the name of the bone that forms the lower jaw?",
        a: "Maxilla",
        b: "Mandible",
        c: "Zygomatic",
        d: "Frontal",
        correct: "b"
    },
    {
        question: "How many vertebrae are in the human spine?",
        a: "24",
        b: "26",
        c: "32",
        d: "30",
        correct: "a"
    },
    {
        question: "Which bones are known as the wrist bones?",
        a: "Carpals",
        b: "Metacarpals",
        c: "Phalanges",
        d: "Tarsals",
        correct: "a"
    },
    {
        question: "What is the name of the bone in the thigh?",
        a: "Patella",
        b: "Tibia",
        c: "Femur",
        d: "Fibula",
        correct: "c"
    },
    {
        question: "Which bone is known as the kneecap?",
        a: "Patella",
        b: "Fibula",
        c: "Tibia",
        d: "Humerus",
        correct: "a"
    }
];

const quiz = document.getElementById('quiz');
const submitButton = document.getElementById('submit');

function loadQuiz() {
    quiz.innerHTML = quizData.map((currentQuestion, index) => {
        return `
            <div class="question">
                <strong>${index + 1}. ${currentQuestion.question}</strong>
                <div>
                    <label>
                        <input type="radio" name="question${index}" value="a"> ${currentQuestion.a}
                    </label>
                    <label>
                        <input type="radio" name="question${index}" value="b"> ${currentQuestion.b}
                    </label>
                    <label>
                        <input type="radio" name="question${index}" value="c"> ${currentQuestion.c}
                    </label>
                    <label>
                        <input type="radio" name="question${index}" value="d"> ${currentQuestion.d}
                    </label>
                </div>
                <div class="answer" id="answer${index}" style="margin-top: 10px;"></div>
            </div>
        `;
    }).join('');
}

function getSelectedAnswers() {
    return quizData.map((_, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        return selectedAnswer ? selectedAnswer.value : null;
    });
}

submitButton.addEventListener('click', () => {
    const answers = getSelectedAnswers();

    answers.forEach((answer, index) => {
        const question = quizData[index];
        const answerDisplay = document.getElementById(`answer${index}`);
        
        // Clear previous answer display
        answerDisplay.innerHTML = "";

        if (answer === question.correct) {
            answerDisplay.innerHTML = <span style="color:green;">Your Answer: ${question[answer]} (Correct)</span>;
        } else {
            answerDisplay.innerHTML = `
                <span style="color:red;">Your Answer: ${answer ? question[answer] : 'No answer'} (Incorrect)</span><br>
                Correct Answer: <span style="color:green;">${question[question.correct]}</span>
            `;
        }
    });
});

loadQuiz();