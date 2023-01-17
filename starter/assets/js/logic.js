let currentQuestion = 0;
let score = 0;
let timer = 60;

let questions = [
  {
    question: "What is the capital of Norway?",
    answers: [
      { text: "Paris", correct: false },
      { text: "London", correct: false },
      { text: "Rome", correct: false },
      { text: "Oslo", correct: true }
    ]
  },
  {
    question: "How many official languages are there in Norway?",
    answers: [
      { text: "3, Norwegian Bokmål, Norwegian Nynorsk and Sami", correct: true },
      { text: "2, Norwegian and English", correct: false },
      { text: "2, Norwegian Bokmål and Norwegian Nynorsk", correct: false },
      { text: "3, Norwegian, Danish and English", correct: false }
    ]
  },
  {
    question: "What is the second biggest city in Norway after Oslo?",
    answers: [
      { text: "Alta", correct: false },
      { text: "Trondheim", correct: false },
      { text: "Tromsø", correct: false },
      { text: "Bergen", correct: true }
    ]
  },
  {
    question: "Which day do Norwegians celebrate their National Day?",
    answers: [
      { text: "17th May", correct: true },
      { text: "17th March", correct: false },
      { text: "27th May", correct: false },
      { text: "27th March", correct: false }
    ]
  },
];

let startButton = document.getElementById("start-btn");
let questionContainer = document.getElementById("question-container");
let questionElement = document.getElementById("question");
let answerButtonsElement = document.getElementById("answer-buttons");

startButton.addEventListener("click", startGame);

function startGame() {
  startButton.classList.add("hide");
  questionContainer.classList.remove("hide");
  setNextQuestion();
  setInterval(countdown, 1000);
}


function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
    score++;
  } else {
    element.classList.add("incorrect");
    timer -= 10;
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("incorrect");
}

function countdown() {
    
}
