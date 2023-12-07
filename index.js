  // Function to toggle dark mode
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
     }

// EventListener för att se till att html-koden är laddad innan JS körs
document.addEventListener("DOMContentLoaded", function () {
  
  // Hämtar elementen och skapar variabler
  let quizForm = document.getElementById("quiz-form");
  let resultContainer = document.getElementById("results");
  
  // Array av frågor och svaren
  const questions = [
      {
          question: "Daenerys Targaryen is also known as the Mother of Dragons",
          answer: true,
      },
      {
        question: "The Red Wedding is not based on a real event",
        answer: false,
    },
      {
          question: "Which of these characters was NOT killed by Arya?",
          options: ["Peter Baelish", "Tywin Lannister", "Walter Frey", "The Night King"],
          answer: ["Tywin Lannister"],
      },
      {
          question: "Which character has all his reproductive organs intact?",
          options: ["Grey Worm", "Varys", "Theon Greyjoy", "The Mountain"],
          answer: "The Mountain",
      },
      {
          question: "There are only four episodes that don't feature any deaths",
          answer: true,
      },
      {
        question: "The First Men created the white walkers",
        answer: false,
    },
    {
      question: "Joffrey was a beloved king",
      answer: false,
  },
      {
          question: "Tyrion Lannister drinks and knows things",
          answer: true,
      },
      {
        question: "Which of the following is NOT a real house motto?",
        options: ["Though All Men Do Despise Us", "Ours Is The Fury", "We Do Not Yield", "None So Fierce"],
        answer: "We Do Not Yield",
    },
      {
          question: "Winter is coming",
          answer: true,
      },
  ];
    // Genererar och lägger in fieldsets för varje fråga
    questions.forEach((question, index) => {
      //Skapar fieldset för varje fråga
      let fieldset = document.createElement("fieldset");
      fieldset.innerHTML = `
          <legend>Question ${index + 1}</legend>
          <p id="question${index + 1}" class="questions">${question.question}</p>
          ${generateAnswerOptions(question, index)}`;
      //Appendar/lägger in det i formuläret
      quizForm.append(fieldset);
  });

  //Hämtar knapparna och skapar variablar
  let submitButton = document.querySelector(".submit");
  let resetButton = document.querySelector(".reset");

  //Läggert till EventListener för när submit klickas
  submitButton.addEventListener("click", function () {
      //Anropar funktionen för att visa resultatscore
      displayResults();
      submitButton.disabled = true; // Disablar den efter
  });

  //Lägger på EventListener för när reset klickas
  resetButton.addEventListener("click", function () {
      document.getElementById("quiz-form").reset(); // Återställer formuläret
      resultContainer.innerHTML = ""; // Tar bort tidigare resultat
      submitButton.disabled = false; // Enablar submit knappet
  });

  // Funktion för att visa resultaten
  function displayResults() {
    //variabel som trackar scoren, börjar på värdet noll
      let score = 0;

      //Loopar igenom frågearrayen
      questions.forEach((question, index) => {
          let userAnswer = document.querySelector(`input[name="answer${index + 1}"]:checked`);

          //Kollar att svar har valts
          if (userAnswer) {
              //Hämtar värdet för svaret
              let answerValue = userAnswer.value;
              // Check if the answer matches the correct answer or if it's a multi-correct question
              if (answerValue === String(question.answer) || answerValue === question.answer) {
                  score++;
              }
          }
      });
      //Resultat och färg variabler
      let resultText;
      let resultColor;

// Ger olika feedback/ färg baserat på poäng
if (score === questions.length) {
    resultText = ` You scored ${score} out of ${questions.length} -You are the rightful ruler of Westeros!`;
    resultColor = "green"; //Om du får alla rätt (extra)
} else if (score > 7) {
    resultText = `You scored ${score} out of ${questions.length} - You must have the blood of the Dragon!`;
    resultColor = "green"; //Om du får mer än 7/10 (7.5 finns inte så vi rundar upp till 8)
} else if (score === 0) {
    resultText = `You scored ${score} out of ${questions.length}. Your name must be Jon Snow, because you know nothing!`;
    resultColor = "red"; //Om du får 0 rätt (extra)
} else if (score >= 5) {
    resultText = `You scored ${score} out of ${questions.length}. Mediocre neither enter into glory nor sorrow.`;
    resultColor = "orange"; //Om du får minst hälften rätt
} else if (score < 5) {
    resultText = `You scored ${score} out of ${questions.length}. Don't give up, there are always lessons in failure!`;
    resultColor = "red"; //Om du får mindre än fem rätt
}


      // Skriver ut resultatet, din score och färgen
      resultContainer.innerHTML = `<span style="color: ${resultColor}">${resultText}</span>`;
  }

  //Funktion för att generera svarsalternativ beroende på frågetyp
  function generateAnswerOptions(question, index) {
      // Om frågan har fler alternativ
      if (question.options && Array.isArray(question.options)) {
          // Skapar radiobuttons med flera frågor
          return question.options.map((option) => `
              <label><input type="radio" name="answer${index + 1}" value="${option}"> ${option}</label>
          `).join('');
      } else {
          // Annars skapa sant/ falskt fråga med två radioknappar
          return `
              <label><input type="radio" name="answer${index + 1}" value="true"> True</label>
              <label><input type="radio" name="answer${index + 1}" value="false"> False</label>
          `;
      }
  }
});