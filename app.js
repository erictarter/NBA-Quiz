// Quix questions stored in OBJ

const myQuestions = [
  {
    question: 'Which player has made 12 3-pointers in a game?',
    answers: {
      a: 'Kevin Durant',
      b: 'Kobe Bryant',
      c: 'Reggie Miller'
    },
    correctAnswer: 'Kobe Bryant'
  },
  {
    question: 'Which team won the finals is 2011?',
    answers: {
      a: 'LA Lakers',
      b: 'Detroit Pistons',
      c: 'Dallas Mavericks'
    },
    correctAnswer: 'Dallas Mavericks'
  },
  {
    question: 'How tall is Yao Ming?',
    answers: {
      a: '7 fet 3 inches',
      b: '7 feet',
      c: '7 feet 6 inches'
    },
    correctAnswer: '7 feet 6 inches'
  },
  {
    question: 'What Country is Tony Parker From?',
    answers: {
      a: 'France',
      b: 'US',
      c: 'Germany'
    },
    correctAnswer: 'France'
  },
  {
    question: 'How Tall is a Basketball hoop?',
    answers: {
      a: '20 feet',
      b: '11 feet',
      c: '10 feet'
    },
    correctAnswer: '10 feet'
  },
  {
    question:
      'Which Year in the 2000s did team USA not win gold in basketball?',
    answers: {
      a: '2004',
      b: '2000',
      c: '2008'
    },
    correctAnswer: '2004'
  },
  {
    question: 'Which team originally drafted Kobe Bryant?',
    answers: {
      a: 'Houston',
      b: 'Cleveland',
      c: 'Charlotte'
    },
    correctAnswer: 'Charlotte'
  },
  {
    question: 'What College did Chris Paul go to?',
    answers: {
      a: 'North Carolina',
      b: 'Wake Forrest',
      c: 'Seton Hall'
    },
    correctAnswer: 'Wake Forrest'
  },
  {
    question:
      'Who is the Play that holds the record for most points(37) in a quarter?',
    answers: {
      a: 'Michael Jordan',
      b: 'Klay Thompson',
      c: 'Lonzo Ball'
    },
    correctAnswer: 'Klay Thompson'
  },
  {
    question: 'Which of these coaches did not coach the Blazers?',
    answers: {
      a: 'Rick Adelman',
      b: 'Mo Cheeks',
      c: 'Luke Walton'
    },
    correctAnswer: 'Luke Walton'
  }
];

// DOM ELS

const startBtn = document.getElementById('start-btn');
const nextQuestionBtn = document.getElementById('next-question');
const submitButton = document.getElementById('submit-btn');
const heading = document.getElementById('header-text');
const container = document.getElementById('container');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results');
const answerOptions = document.getElementById('answer');
const displayResults = document.getElementById('display-results');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');
const spinner = document.getElementById('spinner-gif');
const lenthOfQuiz = document.getElementById('length-of-quiz');
const nameInput = document.getElementById('name');
const submitScoreBtn = document.getElementById('submit-name-btn');
const nameForm = document.getElementById('submit-name');
const okBtn = document.getElementById('ok-btn');
const nameLabel = document.getElementById('name-label');
const enterNameH3 = document.getElementById('enter-name-h3');

// global variables

const allSubmittedAnswers = [];

let currentQuestion = 0;

let correctAnswers = [];
let answeredCorrect = 0;

let totalAnswered = 0;
let answersSelected = [];

let finalCheck = 0;
let selectedAnswerLast;

lenthOfQuiz.innerText = myQuestions.length;

// Clicking the Start button activates animation then displays first question

const startGame = () => {
  startBtn.classList.add('dissolve');
  container.style.background = 'rgba(0, 0, 0, 0.6)';

  setTimeout(() => {
    heading.classList.add('remove');
  }, 400);

  setTimeout(() => {
    displayQuestion();
    quizContainer.classList.add('move-in');
    quizContainer.style.display = 'flex';
    nextQuestionBtn.style.display = 'flex';
  }, 600);
};

// start button adds first question to the DOM

const displayQuestion = () => {
  quizContainer.classList.remove('move-in');
  myQuestions.filter((question, index) =>
    index === currentQuestion
      ? (quizContainer.innerHTML = `<div class="question-number" id="question-number">Question: ${index +
          1}</div class='each-answer'>
    <div class="question" id="question">${question.question}</div>
    <div class="choices" id="choices">
    <div>
    <input
    name='answer'
    class="answer"
    id="answer"
    type="radio"
    value="${question.answers.a}"
  />
  <label for='${question.answers.a}'>
  a: ${question.answers.a}
  </label>
  </div>
  <div class='each-answer'>
  <input
    name='answer'
    class="answer"
    id="answer"
    type="radio"
    value="${question.answers.b}"
  />
  
        b: ${question.answers.b} 
        </div>
        <div class='each-answer'>
  <input
    name='answer'
    class="answer"
    id="answer"
    type="radio"
    value="${question.answers.c}"
  />
  c: ${question.answers.c} 
  </div>

<button class="btn next-question" id="next-question">Next Question</button>

    </div>`)
      : null
  );
  correctAnswers.push(myQuestions[currentQuestion].correctAnswer);
};

// this function runs after the first question is answered and the next button is clicked

function displayNextQuestion() {
  quizLength = myQuestions.length;
  currentQuestion += 1;
  totalAnswered += 1;
  const selectedAnswersEachQuestion = answersSelected.map(answer => answer);
  sumbitedAnswer =
    // selectedAnswersEachQuestion.pop();
    selectedAnswersEachQuestion[selectedAnswersEachQuestion.length - 1];

  if (selectedAnswersEachQuestion.length > currentQuestion - 1) {
    if (correctAnswers[currentQuestion - 1] === sumbitedAnswer) {
      answeredCorrect += 1;
    }

    if (currentQuestion < quizLength) {
      if (
        myQuestions[currentQuestion].correctAnswer === sumbitedAnswer &&
        currentQuestion < myQuestions.length
      ) {
        answeredCorrect.push(sumbitedAnswer);
      }

      if (currentQuestion + 1 < myQuestions.length) {
        quizContainer.classList.remove('move-in');
        quizContainer.classList.add('move-out');
        setTimeout(() => {
          displayQuestion();
        }, 300);
        setTimeout(() => {
          quizContainer.classList.remove('move-out');
          quizContainer.classList.add('move-in');
        }, 300);
      } else {
        quizContainer.classList.remove('move-in');
        quizContainer.classList.add('move-out');
        setTimeout(() => {
          finishQuiz();
        }, 300);
        setTimeout(() => {
          quizContainer.classList.remove('move-out');
          quizContainer.classList.add('move-in');
        }, 300);
      }
    }
  } else {
    currentQuestion -= 1;
    showMessage('Please select an answer');
  }

  allSubmittedAnswers.push(sumbitedAnswer);
}

// show message if no answers are selected

function showMessage(msg) {
  popup.innerHTML = `<h2>${msg}</h2>`;

  popup.classList.add('show-popup');
  setTimeout(() => {
    popup.classList.remove('show-popup');
    popup.classList.add('hide-popup');
  }, 2000);
  popup.classList.remove('hide-popup');
}

// last question of quiz;

function finishQuiz() {
  nextQuestionBtn.innerHTML = 'Finish';
  nextQuestionBtn.id = 'finish';
  const finishBtn = document.getElementById('finish');

  // num > 0 ? (finishBtn.disabled = 'false') : null;

  selectedAnswerLast = answersSelected.map(answer => answer);
  sumbitedAnswer =
    // selectedAnswersEachQuestion.pop();
    selectedAnswerLast[selectedAnswerLast.length - 1];
  finalCheck += 1;

  myQuestions.filter((question, index) =>
    index === currentQuestion
      ? (quizContainer.innerHTML = `<div class="question-number" id="question-number">Question: ${index +
          1}</div class='each-answer'>
  <div class="question" id="question">${question.question}</div>
  <div class="choices" id="choices">
  <div>
    <input
    name='answer'
    class="answer"
    id="answer"
    type="radio"
    value="${question.answers.a}"
  />
  <label for='${question.answers.a}'>
  a: ${question.answers.a}
  </label>
  </div>
  <div class='each-answer'>
  <input
    name='answer'
    class="answer"
    id="answer"
    type="radio"
    value="${question.answers.b}"
  />
  
        b: ${question.answers.b} 
        </div>
        <div class='each-answer'>
  <input
    name='answer'
    class="answer"
    id="answer"
    type="radio"
    value="${question.answers.c}"
  />
  c: ${question.answers.c} 
  </div>

<button class="btn next-question" id="next-question">Finish</button>

  </div>`)
      : null
  );
  if (finalCheck > 0) {
    correctAnswers.push(myQuestions[currentQuestion].correctAnswer);
    finishBtn.addEventListener('click', submitName);
  }
}

// this function fires off when an answer is selected

function selectAnswer(e) {
  answersSelected.push(e.target.value);
  e.target.classList.add('selected');

  // myQuestions.filter((question, index) =>
  //   index === currentQuestion && e.target.value === question.correctAnswer
  //     ? (answeredCorrect += 1)
  //     : null
  // );
}

function submitName() {
  nameInput.classList.add('pushup');
  enterNameH3.classList.add('pushup');
  okBtn.classList.add('pushup');

  enterNameH3.style.display = 'block';
  nameLabel.style.display = 'inline';
  nameForm.style.display = 'flex';
  okBtn.style.display = 'inline';
  nameInput.style.display = 'block';
  // submitScoreBtn.style.display = 'inline';
  quizContainer.style.display = 'none';
  nextQuestionBtn.style.display = 'none';

  okBtn.addEventListener('click', showResults);
}

function showResults() {
  enterNameH3.style.display = 'none';

  nameLabel.style.display = 'none';
  spinner.style.display = 'block';
  nameInput.style.display = 'none';
  nextQuestionBtn.style.display = 'none';
  okBtn.style.display = 'none';

  setTimeout(() => {
    submitScoreBtn.style.display = 'block';
    spinner.style.display = 'none';
    displayResults.innerText = `You Scored ${Math.floor(
      (answeredCorrect / myQuestions.length) * 100
    )}%`;
    // setTimeout(() => {
    //   location.reload();
    // }, 5000);
  }, 1000);
}

function submitQuiz(e) {
  e.preventDefault();
  showMessage('Quiz Submited!');
  console.log(nameInput.innerText);
  setTimeout(() => {
    nameForm.submit();
  }, 2500);
}

startBtn.addEventListener('click', startGame);

nameForm.addEventListener('keydown', e => {
  console.log(e.target);
});

function addName() {
  const score = Math.floor((answeredCorrect / myQuestions.length) * 100);
  nameInput.value += ` - ${score}%`;
}

function addScoreValue() {
  const score = Math.floor((answeredCorrect / myQuestions.length) * 100);
  nameInput.value += ` - ${score}%`;
}

nextQuestionBtn.addEventListener('click', displayNextQuestion);
quizContainer.addEventListener('change', selectAnswer);
submitScoreBtn.addEventListener('click', submitQuiz);
nameForm.addEventListener('submit', addName);
okBtn.addEventListener('click', addScoreValue);

// closePopup.addEventListener('click', () => {
//   popup.style.display = 'none';
// });

// create animation for displaying questions

// require last question answered before submiting results
