(() => {
  const $faq = document.getElementById("faq");

  // QUESTIONS

  function getHTMLForQuestions(questions) {
    return questions
      .map(
        (question) => `
        <li>
            <h3 class="faq__question">${question.question}</h3>
            <figure class="faq-plus">
              <img src="static/img/images/faq-plus.svg" alt="Plus icon">
            </figure>
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
        <h2>${category}</h2>
            <li>
                <ul id="questions" class="faq__boxes">
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
    const $questions = document.querySelectorAll(".faq__boxes li");
    const $answers = document.querySelectorAll(".faq__answer");
    const $plusIcons = document.querySelectorAll(".faq-plus");

    $questions.forEach((question, questionIndex) => {
      question.addEventListener("click", function () {
        const $answer = $answers[questionIndex];
        const $plusIcon = $plusIcons[questionIndex];

        if ($answer.classList.contains("close")) {
          $answer.classList.remove("close");
          $plusIcon.classList.add("rotate");
        } else {
          $answer.classList.add("close");
          $plusIcon.classList.remove("rotate");
        }

        $answers.forEach((answer, answerIndex) => {
          const $plusIcon = $plusIcons[answerIndex];
          if (answerIndex !== questionIndex) {
            answer.classList.add("close");
            $plusIcon.classList.remove("rotate");
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
