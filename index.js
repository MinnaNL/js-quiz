// Togglar dark mode/ light mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.querySelector('main').classList.toggle("dark-mode");

      // ändrar även fieldset-färgen för dark-mode
  const fieldsets = document.querySelectorAll('fieldset');
  fieldsets.forEach(fieldset => {
      fieldset.classList.toggle("dark-mode");
  });
}
  
  // EventListener för att se till att html-koden är laddad innan JS körs
  document.addEventListener("DOMContentLoaded", function () {
  
    // Hämtar elementen och skapar variabler
    let quizForm = document.getElementById("quiz-form");
    let resultContainer = document.getElementById("results");
  
    // Array av frågor och svaren
    const questions = [
        {
            question: "Joffrey was a beloved king",
            answer: false,
        },
        {
            question: "The Red Wedding is based on a real event",
            answer: true,
        },
        {
            question: "Which character was NOT killed by Arya?",
            options: ["Peter Baelish", "Tywin Lannister", "Walter Frey", "The Night King"],
            answer: "Tywin Lannister",
        },
        {
            question: "Tyrion drinks and knows things",
            answer: true,
        },
        {
            question: "Which character has all his reproductive organs intact?",
            options: ["Grey Worm", "Varys", "Theon Greyjoy", "The Mountain"],
            answer: "The Mountain",
        },
        {
            question: "The First Men created the White Walkers",
            answer: false,
        },
        {
            question: "Which character has NOT served as the Hand of the King?",
            options: ["Tyrion Lannister", "Ned Stark", "Renly Baratheon", "Tywin Lannister"],
            answer: ["Renly Baratheon"],
        },
        {
            question: "There are only four episodes that don't feature any deaths",
            answer: true,
        },
        {
            question: "Which is the only official house motto of the following?",
            options: ["Ours Is The Fury", "We Do Not Yield", "A Lannister Always Pays His Debts", "Valar Morghulis"],
            answer: [ "Ours Is The Fury"],
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
  
    // Scrollar mjukt till en specifik plats
    function smoothScrollTo(targetId) {
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
  
    //Läggert till EventListener för när submit klickas
    submitButton.addEventListener("click", function () {
        //Anropar funktionen för att visa resultatscore
        displayResults();
        smoothScrollTo("bottom"); // scrollar ner till botten av sidan, resultatet
        submitButton.disabled = true; // Disablar den efter 
    });
  
    //Lägger på EventListener för när reset klickas
    resetButton.addEventListener("click", function () {
        document.getElementById("quiz-form").reset(); // Återställer formuläret
        resultContainer.innerHTML = ""; // Tar bort tidigare resultat
        submitButton.disabled = false; // Enablar submit knappet
        smoothScrollTo("intro"); // scrollar upp till intro, börja om
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
            resultColor = '#0f8534'; //Grön om du får alla rätt (extra)
        } else if (score > 7) {
            resultText = `You scored ${score} out of ${questions.length} - You must have the blood of the Dragon!`;
            resultColor = '#0f8534'; //Grön om du får mer än 7/10 (7.5 finns inte så vi rundar upp till 8)
        } else if (score === 0) {
            resultText = `You scored ${score} out of ${questions.length} - Your name must be Jon Snow, because you know nothing!`;
            resultColor = '#bd3706'; //Röd om du får 0 rätt (extra)
        } else if (score >= 5) {
            resultText = `You scored ${score} out of ${questions.length} - The mediocre neither enter into glory nor sorrow.`;
            resultColor = '#bd7a06'; //Orange om du får minst hälften rätt
        } else if (score < 5) {
            resultText = `You scored ${score} out of ${questions.length} -Try again, there are always lessons in failure!`;
            resultColor = '#e74c3c'; //Röd om du får mindre än fem rätt
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