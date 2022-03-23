const quizData = [
  {
    question: "What's the name of the Goat's sin of Lust",
    a: 'Gowther',
    b: 'Rasuto',
    c: 'Ban',
    d: 'Armor Giant',
    correct: 'a'
  },
  {
    question: "What's the name of Ban husband",
    a: 'Fairy',
    b: 'Rasuto',
    c: 'Elaine',
    d: 'Fox',
    correct: 'c'
  },
  {
    question: "What's the sacred tresure of King in Seven deadly sins ",
    a: 'Chastiefol',
    b: 'Grizzly',
    c: 'Grizzly Bear',
    d: 'King Treasure',
    correct: 'a'
  },
  {
    question: "What's the sacred tresure of Escanor in Seven deadly sins",
    a: 'Gowther',
    b: 'Rasuto',
    c: 'Ritha',
    d: 'Armor Giant',
    correct: 'c'
  }
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
  deselectAnswers()
  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
  d_text.innerText = currentQuizData.d
}

function getSelected() {
  let answer = undefined

  answerEls.forEach(answerEl => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}

function deselectAnswers() {
  answerEls.forEach(answerEl => {
    answerEl.checked = false
  })
}

submitBtn.addEventListener('click', () => {
  // check to see the answer
  const answer = getSelected()

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }

    currentQuiz++
    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Try again?</button>`
    }
  }
})
