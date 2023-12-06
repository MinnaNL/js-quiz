//JS
//Laddar html-koden innan JS körs
document.addEventListener("DOMContentLoaded", function () {
    let quizForm = document.getElementById("quiz-form");
    let resultContainer = document.getElementById("results");
  
    //Array av frågor och rätt svar
    const questions = [
      {
        question: "Daenerys Targaryen is also known as the Mother of Dragons",
        answer: true,
      },
      {
        question: "Joffrey Baratheon was a beloved king",
        answer: false,
      },
      {
        question: "Jon Snow knows all of the things",
        answer: false,
      },
      {
        question: "The children of the forrest created the white walkers",
        answer: true,
      },
      {
        question: "Rickon Stark is known as the Three-Eyed Raven",
        answer: false,
      },
      {
        question: "There are only six episodes that don't feature any deaths",
        answer: false,
      },
      {
        question: "The Red Wedding is based on a real event",
        answer: true,
      },
      {
        question: "Tyrion Lannister drinks and knows things",
        answer: true,
      },
      {
        question: "Winter is coming",
        answer: true,
      },
    ];

    // Find the submit button using querySelector
    let submitButton = document.querySelector(".submit");

    // Add a click event listener to the submit button
    submitButton.addEventListener("click", function (e) {
        getResults(e);
    });
    
    //Löser att den alertar oavsett vad
    // Updated getResults function to take the event as an argument
    function getResults(e) {
        e.preventDefault(); // Prevent the default form submission
    
        // Kollar om alla frågor är besvarade/checkade
        let allQuestionsAnswered = Array.from(quizForm.querySelectorAll('input[type="radio"]')).every(input => input.checked);
    
        // Om inte, alerta och returna
        if (!allQuestionsAnswered) {
            alert("Please answer all the questions");
            return;
        }
        //Börjar räkna scoren från 0
        let score = 0;
        //Loopar igenom svaren
        questions.forEach((question, index) => {
            //Hämtar värdet för nuvarande fråga, sedan nästa
            let userAnswer = document.querySelector(`input[name="answer${index + 1}"]:checked`);
            //Körs bara om ett svar checkats och jämför med rätt svart
            if (userAnswer) {
                let answerValue = userAnswer.value === "true";
                if (answerValue === question.answer) {
                    score++; //öka poängen med 1 fölr varje rätt svar
                }
            }
        });
        //displaya resultatet
        displayResults(score, questions.length);
    }
    // Funktionen för att räkna och visa resultatet
    function displayResults(score, totalQuestions) {
        let resultText = `You scored ${score} out of ${totalQuestions}.`;
        resultContainer.innerText = resultText; //Skriver resultatet i resultContainern
    }

    // Tar bort frågorna men inte submit-knappen
    Array.from(quizForm.children).forEach(child => {
        if (child.tagName === 'FIELDSET') {
            quizForm.removeChild(child);
        }
    });

    // Skapar och appendar en ny fieldsets för varje fråga
    questions.forEach((question, index) => {
        let fieldset = document.createElement("fieldset");
        fieldset.innerHTML = `
            <legend>Question ${index + 1}</legend>
            <p id="question${index + 1}" class="questions">${question.question}</p>
            <label><input type="radio" name="answer${index + 1}" value="true"> True</label>
            <label><input type="radio" name="answer${index + 1}" value="false"> False</label>
        `;
        quizForm.append(fieldset); //Appendar den till quizForm
    });
});