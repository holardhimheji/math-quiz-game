const btn = document.getElementById("generateBtn");
const problemText = document.getElementById("problem");
const answerContainer = document.getElementById('answers');
const answerInput = document.getElementById('answer-input')
const submitBtn = document.getElementById('submit');
const winMessage = document.getElementById('message');
const nextBtn = document.getElementById('next');

let num3;
let inputtedValue;
let computerAnswer;
let word = problemText.innerText;

btn.addEventListener("click", function() {

  let num1 = Math.floor(Math.random() * 40) + 1;
  let num2 = Math.floor(Math.random() * 20) + 1;
  let operators = ['+' , "-", "*", '/'];
  let operator = operators[Math.floor(Math.random() * operators.length)];

  if(operator === '+'){
       num3 = num1 + num2
    } if(operator === '-'){
      num3 = num1 - num2
    } if(operator === '*'){
     num3 = num1 * num2
    } else if(operator === '/'){
      num3 = num1 / num2
    }

  computerAnswer = `${num1} ${operator} ${num2} = `;

  problemText.innerText = computerAnswer
  btn.style.display = 'none'
  answerContainer.style.display = 'block'

})

submitBtn.addEventListener('click', () =>{
  inputtedValue = answerInput.value 

  if(Number(inputtedValue) === num3){
    message = `🎉 Congratulations! You are a Math Genius! 🎉`
  }else {
    message = `😔 Good try! Don't give up, try again! 💪📚`
  }  

  winMessage.innerText = message
  submitBtn.style.display = 'none'
  nextBtn.style.display = 'block'
})

nextBtn.addEventListener('click', () =>{
  problemText.innerText = word;
  btn.style.display = 'block'
  btn.style.alignItems = 'center'
  answerContainer.style.display = 'none'
  submitBtn.style.display = ''
  nextBtn.style.display = 'none'
  winMessage.innerText = ''
  answerInput.value = ''
  inputtedValue = ''
})