const quizData = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris',
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Mars', 'Saturn', 'Jupiter', 'Neptune'],
      answer: 'Jupiter',
    },
    {
      question: 'Which country won the FIFA World Cup in 2018?',
      options: ['Brazil', 'Germany', 'France', 'Argentina'],
      answer: 'France',
    },
    {
      question: 'What is the tallest mountain in the world?',
      options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Makalu'],
      answer: 'Mount Everest',
    },
    {
      question: 'Which is the largest ocean on Earth?',
      options: [
        'Pacific Ocean',
        'Indian Ocean',
        'Atlantic Ocean',
        'Arctic Ocean',
      ],
      answer: 'Pacific Ocean',
    },
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Cu', 'Fe'],
      answer: 'Au',
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: [
        'Pablo Picasso',
        'Vincent van Gogh',
        'Leonardo da Vinci',
        'Michelangelo',
      ],
      answer: 'Leonardo da Vinci',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Mercury', 'Uranus'],
      answer: 'Mars',
    },
    {
      question: 'What is the largest species of shark?',
      options: [
        'Great White Shark',
        'Whale Shark',
        'Tiger Shark',
        'Hammerhead Shark',
      ],
      answer: 'Whale Shark',
    },
    {
      question: 'Which animal is known as the King of the Jungle?',
      options: ['Lion', 'Tiger', 'Elephant', 'Giraffe'],
      answer: 'Lion',
    },
  ]

const resultContainer = document.querySelector(".score_count");
const progressContainer = document.querySelector(".progress_count");
const questioncountContainer = document.querySelector(".question_no")
const questionText = document.querySelector(".question_text")
const questionbox = document.querySelector(".quesansbox")

const answer1 = document.querySelector(".answer1")
const answer2 = document.querySelector(".answer2")
const answer3 = document.querySelector(".answer3")
const answer4 = document.querySelector(".answer4")

const resetButton = document.querySelector(".reset")

let result = 0;
let indexNo = 0;
let progress = 1



function displayQuestions(){
    colorresetButton()

    let questionNo = indexNo;
    questionText.innerHTML = quizData[questionNo].question;
    answer1.innerHTML = quizData[questionNo].options[0];
    answer2.innerHTML = quizData[questionNo].options[1];
    answer3.innerHTML = quizData[questionNo].options[2];
    answer4.innerHTML = quizData[questionNo].options[3];
    
    let questionVal = progress;
    questioncountContainer.textContent = questionVal;
    resultContainer.textContent = result;
    progressContainer.textContent = questionVal;
    

    

}

function colorresetButton(){
    answer1.style.backgroundColor = "white";
    answer2.style.backgroundColor = "white";
    answer3.style.backgroundColor = "white";
    answer4.style.backgroundColor = "white";
}

// function buttonClicked(clickedButton) {
//     // Disable all buttons
//     var buttons = document.getElementsByTagName("button");
//     for (var i = 0; i < buttons.length; i++) {
//         buttons[i].disabled = true;
//     }

//     // Enable only the clicked button
//     clickedButton.disabled = false;
// }

// function reset(){
//     questionbox.innerHTML = `<div class="question"><span>Q<span class="question_no"></span>:</span><span class="question_text"></span></div><div class="answerbox"><button class="answer answer1">asdfasdf</button><button class="answer answer2">asdfasdf</button><button class="answer answer3">asdfasd</button><button class="answer answer4">asdfasdf</button></div>`
//     indexNo = 0;
//     result = 0;
//     progress = 1;
//     displayQuestions()


// }


function displayResult(){

    questionbox.innerHTML = `<div class="result"><div class="resultbox"><div class="resulttext">Correct Answerers : ${result/10}</div><div class="totalscore">Total Score : ${result} </div><div class="resetbox"></div></div></div>`;
    resultContainer.textContent = result;
}


function checkanswer(e){
    let questionNo = indexNo;
    
   

    if(e.target.textContent == quizData[questionNo].answer){
        result += 10;
        progress++;
        e.target.style.backgroundColor = "green"
        

    }else {
        
        progress++;
        e.target.style.backgroundColor = "red"
    }
    indexNo++;
    if (indexNo < 10){
        setTimeout(() =>displayQuestions(),300)

    }else {
        setTimeout(() => displayResult(),300)
    }



    

}



answer1.addEventListener("click",(e) => checkanswer(e));
answer2.addEventListener("click",(e) => checkanswer(e));
answer3.addEventListener("click",(e) => checkanswer(e));
answer4.addEventListener("click",(e) => checkanswer(e));


displayQuestions()