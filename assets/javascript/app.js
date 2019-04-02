
var questions = [
        {   question: 'Who is the current manager of Manchester United?',
        answers: {
            a: 'Mourinho',
            b: 'Solksjaer',
            c: 'Van Gaal',
            d: 'Anelotti'

        },
        correctAnswer: 'b' 
    },
        {   question: 'Who is the captain of Manchester United?',
        answers: {
            a: 'Valencia',
            b: 'Pogba',
            c: 'Shaw',
            d: 'De Gea'

        },
        correctAnswer: 'a'

    }, 
        {   question: 'Who is the owner of the club?',
        answers: {
            a: 'Glazers',
            b: 'Suttons',
            c: 'Ferguson',
            d: 'Mamalinks'

        },
        correctAnswer: 'a' 
    },

    ];
    
    
var quizContainer = document.getElementById('holds-quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var strtBtn = document.querySelector('#start-button').addEventListener('click', displayQuiz);


function displayQuiz() {
   
     
var output = [];
    
    questions.forEach((currentQuestion, questionNumber) => {

    const answer = [];

        for(letter in currentQuestion.answers) {
            answer.push(
            `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} : ${currentQuestion.answers[letter]}
            </label>`
            );
        }

        // add this question and its answers to the output
    output.push(
        `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answer.join('')} </div>`
        );
        }
        
    );
        
    
    quizContainer.innerHTML = output.join('');
    
    }
    
//to show results

function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
  
    // keep track of user's answers
    let numCorrect = 0;
  
    // for each question...
    questions.forEach( (currentQuestion, questionNumber) => {
  
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = 'input[name=question'+questionNumber+']:checked';
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
      // if answer is correct
      if(userAnswer===currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
  
        // color the answers green
        answerContainers[questionNumber].style.color = 'green';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });
  
    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }

  displayQuiz();
  submitButton.addEventListener('click', showResults);



        
        
            
        
        
        




