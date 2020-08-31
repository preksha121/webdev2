const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");
let questions = [{
      question: "The Coronavirus has originated from which country?",
      choiceA: "Japan",
      choiceB: "Wuhan",
      choiceC: "United States",
      correct: "B"
    }, {
      question: "How long does the novel coronavirus survive outside the body?",
      choiceA: "A week ",
      choiceB: "Several hours to days",
      choiceC: "Months",
      correct: "B"
    }, {
      question: "How soon can a vaccine for Covid-19 be commercially available?",
      choiceA: "atleast 12 weeks",
      choiceB: "1 week",
      choiceC: "5 weeks",
      correct: "A"
    }
    {
     question: "Which of the following diseases are related to coronavirus?",
     choiceA: "MERS",
     choiceB: "SARS",
     choiceC: "SARS AND MERS",
     correct: "C"
   }
   {
    question: "  What is Coronavirus?",
    choiceA: "It is a large family of viruses:",
    choiceB: " It belongs to the family of Nidovirus.",
    choiceC: "BOTH",
    correct: "C"
  }
  {
   question: " In which age group the COVID-19 spreads?",
   choiceA: " Coronavirus infection is mild in children.",
   choiceB: "ALL AGE GROUPS",
   choiceC: "children",
   correct: "B"
 }
 {
  question: "  What are the precautions that need to be taken to protect from the coronavirus?",
  choiceA: " add more garlic.",
  choiceB: "wear mask",
  choiceC: "wash hands",
  correct: "B"
}
{
 question: "   From where coronavirus got its name?",
 choiceA: "  Due to their crown-like projections..",
 choiceB: "leaf like projections",
 choiceC: "surface like brick",
 correct: "A"
}
{
 question: "   In a study, which cells are found in COVID-19 patients 'bode well' for long term immunity?",
 choiceA: " P-CELL.",
 choiceB: "D-CELL",
 choiceC: "T-CELL",
 correct: "C"
}
{
 question: "  Thailand announced that it has proceeded to test its novel coronavirus vaccine on which animal/bird?",
 choiceA: " MONKEYS",
 choiceB: "DOGS",
 choiceC: "KITTENS",
 correct: "A"
}

    ];
    const lastQuestion = questions.length - 1;
    let runningQuestion = 0;
    let count = 0;
    const questionTime = 10;
    const gaugeWidth = 150;
    const gaugeUnit = gaugeWidth / questionTime;
    let TIMER;
    let score = 0;

    function renderQuestion() {
      let q = questions[runningQuestion];

      question.innerHTML = "<p>" + q.question + "</p>";
      choiceA.innerHTML = q.choiceA;
      choiceB.innerHTML = q.choiceB;
      choiceC.innerHTML = q.choiceC;
    }

    start.addEventListener("click", startQuiz);

    function startQuiz() {
      start.style.display = "none";
      renderQuestion();
      quiz.style.display = "block";
      renderProgress();
      renderCounter();
      TIMER = setInterval(renderCounter, 1000);
    }

    function renderProgress() {
      for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
      }
    }

    function renderCounter() {
      if (count <= questionTime) {
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
      } else {
        count = 0;
        answerIsWrong();
        if (runningQuestion < lastQuestion) {
          runningQuestion++;
          renderQuestion();
        } else {
          clearInterval(TIMER);
          scoreRender();
        }
      }
    }

    function checkAnswer(answer) {
      if (answer == questions[runningQuestion].correct) {
        score++;
        answerIsCorrect();
      } else {
        answerIsWrong();
      }
      count = 0;
      if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
      } else {
        clearInterval(TIMER);
        scoreRender();
      }
    }

    function answerIsCorrect() {
      document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
    }

    function answerIsWrong() {
      document.getElementById(runningQuestion).style.backgroundColor = "#f00";
    }

    function scoreRender() {
      scoreDiv.style.display = "block";

      const scorePerCent = score;
      scoreDiv.innerHTML += "<p>" + scorePerCent + "</p>";
    }
