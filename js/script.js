(function() {
  const myQuestions = [
    {
      question: "Сначала пройди этот говнотест, чтобы получить свой подарочек",
      answers: {
        a: "Гоу"
      },
      correctAnswer: "a"
    },
      {
      question: "Жизнь не имеет смысла без:",
      answers: {
        a: "Мемов",
        b: "Карьерного роста",
        c: "Детей"
      },
      correctAnswer: "a"
    },
    {
      question: "Выбери правильный ответ:",
      answers: {
        a: "Любить себя и радоваться каждому дню",
        b: "Ненавидеть себя и быть всегда в депрессии"
      },
      correctAnswer: "b"
    },
    {
      question: "Кто лучше?",
      answers: {
        a: "Песики",
        b: "Котики",
        c: "Попугайчики"
      },
      correctAnswer: "a"
    },
      {
      question: "Мем июня 2017:",
      answers: {
        a: "He's probably thinking about other girls",
        b: "The floor is..",
        c: "We are number one"
      },
      correctAnswer: "b"
    },
       {
      question: "Потеря года:",
      answers: {
        a: "Честер Беннингтон",
        b: "Лягушонок Пепе",
        c: "Гейб"
      },
      correctAnswer: "c"
    },
      {
      question: "Какие поцелуи нравятся девушкам больше всего?",
      answers: {
        a: "Французкие",
        b: "В шею",
        c: "Млем"
      },
      correctAnswer: "c"
    },
      {
      question: "Дети это:",
      answers: {
        a: "Паразиты жизни",
        b: "Цветы жизни",
        c: "То, что я хочу иметь в жизни"
      },
      correctAnswer: "a"
    },
      {
      question: "Тебе пришли две повестки, какую выберешь:",
      answers: {
        a: "В армейку, хочу рассеюшке служить",
        b: "В ад на хуйцы, конечно же"
      },
      correctAnswer: "b"
    },
      {
      question: "Если нямкать, то:",
      answers: {
        a: "Жареную рыбку в мазике",
        b: "Хинкали-хачапури",
        c: "Блинчики с беконом"
      },
      correctAnswer: "b"
    },
      {
      question: "Нямку нужно запивать:",
      answers: {
        a: "Крымским вином",
        b: "Тархуном",
        c: "Беписом"
      },
      correctAnswer: "b"
    },  
      {
      question: "Если растение, то:",
      answers: {
        a: "Можжевельник",
        b: "Мох",
        c: "Мята"
      },
      correctAnswer: "b"
    },
      {
      question: "Что сделать в следующую пятницу:",
      answers: {
        a: "Пойти на работу",
        b: "Сделать ремонт",
        c: "Отдохнуть бы где-нибудь"
      },
      correctAnswer: "c"
    },    
  ];

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
      var result = "EEEE BOOOIIIII";
      var URL = result.link("https://unsplash.com/photos/o6bCxSgXlA4");
      if (numCorrect === 13) {
      resultsContainer.innerHTML = URL;    
      } else {
          resultsContainer.innerHTML = 'Its not true, its bullshit';
      }
      
      
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit, show results
  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();