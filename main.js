let displayQuestion = document.querySelector('.question');
let nextQuestion = document.querySelector('.nextQuestion');
let answersBox = document.querySelector('.answers-box');
let scoreDisplay = document.querySelector('.score');
let currentQUestion = 0;
let score = 0;
let quizBox = document.querySelector('.box');
var resetBtn = document.createElement('button');
let finalSC = document.createElement('h1');
//questions
let questions = [{
    question: '1:Inside which HTML element do we put the JavaScript?',
    answers: [{
        value: '<script>',
        correct: true
      },
      {
        value: '<scripting>',
        correct: false
      },
      {
        value: '<js>',
        correct: false
      },
      {
        value: '<JavaScript>',
        correct: false
      },
    ]

  },
  {
    question: '2:Where is the correct place to insert a JavaScript?',

    answers: [{
        value: 'The <body> section',
        correct: false
      },
      {
        value: 'The <head> section',
        correct: false
      },
      {
        value: 'All is correct',
        correct: true
      }


    ]

  },
  {
    question: '3:What is the correct syntax for referring to an external script called "xxx.js"?',

    answers: [{
        value: '<script href=...>',
        correct: false
      },
      {
        value: '<script name=...>',
        correct: false
      },
      {
        value: '<script src=...>',
        correct: true
      }


    ]

  },
    {
    question: '4:How do you write "Hello World" in an alert box?',

    answers: [{
        value: `msgBox("This is alert")`,
        correct: false
      },
      {
        value: `alert('This is alert')`,
        correct: true
      },
      {
        value: `msg("This is alert")`,
        correct: false
      },
      {
        value: `alertBox("This is alert")`,
        correct: false
      },


    ]

  },
  {
    question: '5:The external JavaScript file must contain the <script> tag.',

    answers: [{
        value: 'false',
        correct: true
      },
      
      {
        value: 'true',
        correct: false
      }


    ]

  },
    {
    question: '6:How do you create a function in JavaScript?',

    answers: [{
        value: 'function myFunc()',
        correct: true
      },
      
      {
        value: 'function=myFunc',
        correct: false
      },
      
      
      {
        value: 'function:myFunc()',
        correct: false
      }


    ]

  },
   {
    question: '7:How do you call a function named "myFunction"?',

    answers: [{
        value: 'myFunction()',
        correct: true
      },
      
      {
        value: 'call myFunction()',
        correct: false
      },
      
      
      {
        value: 'call function myfunction()',
        correct: false
      }


    ]

  },
  
   {
    question: '8:How to write an IF statement in JavaScript?',

    answers: [{
        value: 'if(i==5)',
        correct: true
      },
      
      {
        value: 'if i=5 then',
        correct: false
      },
      
      
      {
        value: 'if i=5',
        correct: false
      },
      {
        value: 'if i==5 then',
        correct: false
      }


    ]

  },
   {
    question: '9:How can you add a comment in a JavaScript?',

    answers: [{
        value: '//Comment',
        correct: true
      },
      
      {
        value: '--Comment',
        correct: false
      },
      
      
      {
        value: '<!--Comment-->>`',
        correct: false
      },
      {
        value: '**Comment',
        correct: false
      }


    ]

  },
  
   {
    question: '10:JavaScript is the same as Java.',

    answers: [{
        value: 'false',
        correct: true
      },
      
      {
        value: 'true',
        correct: false
      },
      
      
     

    ]

  }
];


//function get Answers
function getAnswers(currentQUestion) {
  
  //kada dodje do kraja pitanja 
  if (currentQUestion >= questions.length) {
    currentQUestion = 0;
    console.log(currentQUestion);
    displayQuestion.remove();
    finalSC.innerText = ` Final score:${score}`;
    finalSC.classList.add('question');
    quizBox.append(finalSC);
    nextQuestion.remove();
    answersBox.remove();
    scoreDisplay.remove();

    resetBtn.innerText = 'One more time?'
    resetBtn.classList.add('resetBtn');
    document.querySelector('.box').append(resetBtn)




  }

  removeLastQuestion();
  displayQuestion.innerText = questions[currentQUestion].question;
  questions[currentQUestion].answers.forEach((answer) => {
      const btn = document.createElement('button');
      btn.classList.add('answer')
      if (answer.correct) {
        btn.classList.add('true');

      }
      btn.innerText = answer.value;
      answersBox.appendChild(btn);
      btn.onclick = checkCorrectAnswer;



    }

  )

}



//fucntion remove Last Question
function removeLastQuestion() {
  while (answersBox.firstChild) {
    answersBox.removeChild(answersBox.lastChild);
  }
}

//cheking corect Anaswer
function checkCorrectAnswer(e) {

  let ans = document.querySelectorAll('.answer');

  if (e.target.matches('.answer')) {
    ans.forEach((ans) => ans.classList.remove('orange'))
    this.classList.add('orange');


  } else {


  }
  if (e.target.matches('.true')) {
    score += 1;

  } else {
    score -= 1;
  }
}




//nextQUestion btn
nextQuestion.addEventListener('click', () => {


  console.log(score)
  nextQuestion.innerText = 'Next Qustion'
  getAnswers(currentQUestion);
  currentQUestion += 1;


});

resetBtn.addEventListener('click', () => {
score=0;
currentQUestion=0;
  finalSC.remove();
  resetBtn.remove();
    scoreDisplay.style.display = 'flex'
  scoreDisplay.innerText = score;
  quizBox.append(displayQuestion);
  quizBox.append(answersBox);
  quizBox.append(nextQuestion);





});
