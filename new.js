const quizDB = [
    {
        question:"Q1: What is the full Form of HTML",
        a:"Hello to my Land",
        b:"Hey Text Markup Language",
        c:"HyperText makeup Language",
        d:"HyperText Markup Language",
        ans:"answ4"
    },
    {
        question:"Q2: What is the full Form of CSS",
        a:"Cascading Style Sheets",
        b:"Cascading Style Sheep",
        c:"Cartoon Style Sheets",
        d:"Cascading Super Sheets",
        ans:"answ1"
    },
    {
        question:"Q3: What is the full Form of HTTP",
        a:"HyperText Transfer Protocol",
        b:"Hyper Transfer Protocol",
        c:"Hyper Cartoon Protocol",
        d:"HyperText Makeup Language",
        ans:"answ1"
    },
    {
        question:"Q4: What is the full Form of JS",
        a:"JavaScripted",
        b:"JavaSKip",
        c:"JavaScript",
        d:"JavaScrpe",
        ans:"answ3"
    },
]


const questions = document.querySelector('.question')
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const submit = document.querySelector('#submit')

const answers = document.querySelectorAll('.answer')
const showScore = document.querySelector('#showscore')
let questionsCount = 0;
let score = 0;


function loadQuestion(){
    const questionList = quizDB[questionsCount]
     questions.innerText = (questionList.question);
     option1.innerText = (questionList.a);
     option2.innerText = (questionList.b);
     option3.innerText = (questionList.c);
     option4.innerText = (questionList.d);
 

}
loadQuestion()

const deselectAll =()=>{
    answers.forEach(curAnswerEl=> curAnswerEl.checked = false)
}
const getCheckAnswer =()=>{
       let answer;
       answers.forEach(curAnswerEl => {
        if(curAnswerEl.checked){
            answer = curAnswerEl.id; 
        }
         
       });
       return answer
    }
    
    submit.addEventListener('click',()=>{
       const checkedAnswer = getCheckAnswer()
       console.log(checkedAnswer);
       if(checkedAnswer===quizDB[questionsCount].ans){
        score++;

    }

       questionsCount++;

       deselectAll()

       if(questionsCount<quizDB.length){
        loadQuestion();
       }else{
        showScore.innerHTML=`
           <h2>You Scored ${score}/${quizDB.length}</h2>
           <button class="btn" onclick="location.reload()">Play Again</button>
        `
       }
})



























// const question = document.querySelector('.question');
// const option1 = document.querySelector('#option1');
// const option2 = document.querySelector('#option2');
// const option3 = document.querySelector('#option3');
// const option4 = document.querySelector('#option4');
// const submit = document.querySelector('#submit');

// const answers = document.querySelectorAll('.answer')
// const showScore = document.querySelector('#showscore')
// let questionsCount = 0;
// let score = 0;

// function loadQuestion(){
//    const questionList =  quizDB[questionsCount];
//     question.innerHTML =   questionList.question
//     option1.innerHTML =   questionList.a
//     option2.innerHTML =   questionList.b
//     option3.innerHTML =   questionList.c
//     option4.innerHTML =   questionList.d
// }
// loadQuestion()

// const getCheckAnswer =()=>{
//    let answer;
//    answers.forEach(curAnswerEl => {
//     if(curAnswerEl.checked){
//         answer = curAnswerEl.id; 
//     }
     
//    });
//    return answer
// }

// submit.addEventListener('click',()=>{
//    const checkedAnswer = getCheckAnswer()
//    console.log(checkedAnswer);
//    if(checkedAnswer===quizDB[questionsCount].ans){
//     loadQuestion()
//    }else{
//     showScore.innerHTML =`<h3>You scored ${score}/${quizDB.length} </h3>
//       <button class="" onclick="location.reload()"></button>
//     `

//    }
   
// })

