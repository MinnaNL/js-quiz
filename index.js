//JS
//frågor!
  
let questions = [
    {
      question: "Daenerys Targaryen is also known as the Mother of Dragons",
      answer: true,
    },
    {
      question: "Jon Snow knows all of the things",
      answer: false,
    },
    {
      question: "There are only six episodes out of 73 that don't feature any deaths",
      answer: true,
    },
    {
      question: "Ned Stark is Jon Snow's father",
      answer: false,
    },
    {
      question: "The children of the forrest created the white walkers",
      answer: true,
    },
    {
      question: "Tyrion Lannister drinks and knows things",
      answer: true,
    },
    {
      question: "The Red Wedding is not based on a real event",
      answer: false,
    },
    {
      question: "Bran Stark is known as the Three-Eyed Raven",
      answer: true,
    },
    {
      question: "Joffrey Baratheon was a beloved king",
      answer: false,
    },
    {
      question: "Winter is coming",
      answer: true,
    },
  ];

  // if (userAnswer) {
    //  let answerValue = userAnswer.value === "true";
    //  if (answerValue === question.answer) {
    //    score++;
    //  }

  // Skapar html för frågorna
  questions.forEach((question, index) => {
    let questionHtml = `
      <fieldset>
        <legend>Question ${index + 1}</legend>
        <p id="question${index + 1}" class="questions">${question.question}</p>
        <label><input type="radio" name="answer${index + 1}" value="true"> True</label>
        <label><input type="radio" name="answer${index + 1}" value="false"> False</label>
      </fieldset>
    `;

    quizForm.innerHTML += questionHtml;

  });
