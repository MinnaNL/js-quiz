<!DOCTYPE html>
<html lang="sv">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Quiz med Javascripts</title>
        <link rel="stylesheet" href="style.css">
        <script src="index.js" defer></script>
    </head>
    <body>
            <main>
                <h1> A Quiz of Fire and Ice*</h1>
                    <div class="quiz-container">
                        <form id="quiz-form">
                            <fieldset>
                                <legend>Questions</legend>
                                <!-- Frågorna läggs in här-->
                            </fieldset>

                        <button class="submit" type="button">
                            Check your answers
                         </button>
                        </form>
                        <h2 id="results-h">Results</h2>
                        <p id="results"></p>
                </div>
            </main>
    </body>
</html>
  
      quizForm.innerHTML += questionHtml;

    });
