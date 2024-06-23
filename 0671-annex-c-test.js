
const quizData = [
    {
        question: "Why Use vCenter Server?",
        options: ["Enables being able to create vSphere clusters.", "All of the above", "Makes makes management of multiple standalone ESXi hosts much easier", "Unlocks features such as vMotion, High-Availability, and Distributed Resource Scheduler."],
        answer: "All of the above"
    },
    {
        question: "What is vCenter Server?",
        options: ["The management component of VMware vSphere.", "A bare-metal hyperviosr", "A software defined storage solution from VMware", "Monitors the state of syslog/eventmgr services."],
        answer: "The management component of VMware vSphere."
    },
    {
        question: "Virtualization management tools are designed to administer the operation and processes of a physical environment.",
        options: ["True", "False"],
        answer: "False"
    },
// Add more questions here...
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;

    optionsElement.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        optionsElement.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;

    if (selectedButton.innerText === answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quiz.innerHTML = `
        <h1>Quiz Completed!</h1>
        <p>Your score: ${score}/${quizData.length}</p>
    `;
}

showQuestion();