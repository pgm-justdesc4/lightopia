(() => {
  const $faq = document.getElementById("faq");

  // QUESTIONS

  function getHTMLForQuestions(questions) {
    return questions
      .map(
        (question) => `
        <li>
            <h3 class="faq__question">${question.question}</h3>
            <p id="answer" class="faq__answer close">
              ${question.answer}
            </p>
        </li>`
      )
      .join("");
  }

  // CATEGORIES

  function getHTMLForCategories(questions) {
    let categories = [];

    questions.forEach((question) => {
      let inArray = false;

      for (let i = 0; i < categories.length; i++) {
        if (categories[i] === question.category) {
          inArray = true;
        }
      }

      if (!inArray) {
        categories.push(question.category);
      }
    });

    return categories
      .map((category) => {
        return `
            <li>
                <h2>${category}</h2>
                <ul id="questions">
                    ${getHTMLForQuestions(
                      questions.filter((question) => {
                        return question.category === category;
                      })
                    )}
                </ul>
            </li>`;
      })
      .join("");
  }

  // ANSWERS

  function registerListeners() {
    const $questions = document.querySelectorAll(".faq__question");
    const $answers = document.querySelectorAll(".faq__answer");

    $questions.forEach((question, questionIndex) => {
      question.addEventListener("click", function () {
        const $answer = $answers[questionIndex];

        if ($answer.classList.contains("close")) {
          $answer.classList.remove("close");
        } else {
          $answer.classList.add("close");
        }

        $answers.forEach((answer, answerIndex) => {
          if (answerIndex !== questionIndex) {
            answer.classList.add("close");
          }
        });
      });
    });
  }

  function buildUI() {
    $faq.innerHTML = getHTMLForCategories(questions);
  }

  function initialize() {
    buildUI();
    registerListeners();
  }

  initialize();
})();
