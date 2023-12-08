Ändra efter användartest:

double negative på frågan om red wedding
THE mediocre neither ....


Process:

Klar med allt för G utom Dark-mode. Github har strulat lite, nånting med remote branch och origin branch. Nu är det i synk och funkar som den ska (so far). 
Har också lagt tid på att kommentera koden så jag fattar vad jag tittar på fortare, hjälper när jag ska ändra om saker att veta exakt vad allt gör. 

Extra: gjort olika meddelanden beroende på score, även en för om du får 0/10 och en för 10/10 pga kul!

Reflektion:
Lagt lite för mkt tid på frågorna och texterna men de va kul, men borde först gjort klart allt det "viktiga", hade kunnat ha typ placeholders för frågorna etc.
Det är bättre att använda terminalen än knapparna, allt gick smooth att comitta tills jag började använda knapparna, då ballade de ur.

Fastnar lätt i saker som inte är viktig för quizets huvudfunktion, lagt FÖR mycket tid på "onödiga" saker som inte måste ingå i uppgiften, pga jag vill att det ska va bra UX


Testat och fått ge upp just nu:
- Alla frågor måste vara besvarade för att kunna checka sina svar, annars alerta "Please check your answers". Visar sig svårare än det verkar, alerten kommer upp varje gång man klickar på submitknappen vilket inte är förväntat. Eftersom det inte är essentiellt tar jag bort funktionen, redan lagt för många timmar på det, blev galen

- Testat att ha en "starta quiz" knapp som sen genererar alla frågorna, återkommer till det igen sen. Funkar som det ska, men även html koden som submit-knappen och resultat headingen ska vara dolda tills sen. Ska gå men prioriterar att först bli klar med den funktionalitet för uppgiften
-Kopplat till starta quiz-knappen, ville jag också lägga till en restart knapp som nollställer och checkar ur alla radiobuttons och resultat. Återkommer till om hinner
-Ville ändra färg på radiobuttons men det var mer komplicerat än jag trodde, detta får vänta eller släppas
-Testade med mulitple correct answers, men det innebar att jag behövde ändra stora delar av min befintliga kod. Jag behövde först uppnå Godkänt-kraven: Darkmode

Kvar för G:
Dark-mode

Kvar för VG:
multiple choice, multiple correct answers frågor. 
Visa vilka som var rätt och fel

Om hinner:
Bilder
Färger och font (tex den orange är för ljus mot bakgrunden)
Lägga in flerval /fler rätt frågor
Lägga in visa vilka som var fel
Bättre feedback, tex kryssa i alla frågor för o gå vidare


Uppgiftsbeskrivning (checka av längs vägen):
Du har fått i uppgift att skapa en quiz-applikation åt Ankademin. Användare ska kunna svara på frågor och få feedback på huruvida hen besvarat dessa rätt eller fel. Applikationen ska fungera utan några större buggar. Du väljer själv vilka frågor som quizet ska bestå utav.

Du ska även ha ditt projekt på Github och pusha upp kod kontinuerligt under projektets gång.


Betyg G:

Quizet innehåller 10 frågor. Frågorna består av sant/falskt påståenden med två möjliga svarsalternativ: Sant eller Falskt. KLAR

Användaren ska utöver att besvara frågor för quizet, även kunna byta utseende på sidan mellan dark mode (dvs mörk bakgrundsfärg med ljus text ) och light mode (ljus bakgrundsfärg med mörk text).

Användaren ska kunna besvara samtliga frågor och sedan klicka på en knapp för att se sitt resultat. KLAR

Skriv ut antal rätt som användaren fått. Använd även färg och text för att meddela användarens resultat utefter följande kriterier: KLAR

< 50% - Underkänt (röd) KLAR

50%-75% - Bra (gul/orange) KLAR

> 75% - Riktigt bra jobbat (grönt) KLAR

Du har gjort minst 8 commits till ditt Github-repository under projektets gång. KLAR

 

Betyg VG:


Alla G-krav är uppfyllda

Frågorna ska bestå utav en blandning av följande typer (minst 2 av varje typ)

Sant/falskt-påståenden - (Två svarsalternativ - Sant eller Falskt) KLAR

Multiple choice - (Fyra svarsalternativ varav ett rätt svar) KLAR

Checkbox-svar (4 checkboxar med svarsalternativ - 2 eller 3 rätta svar, övriga felaktig). TESTAT, EJ KLAR

Användaren ska kunna se exakt vilka frågor hen besvarat rätt och/eller felaktigt när resultatet visas. (Om hen besvarat frågan fel, bestämmer du själv om du vill skriva ut det rätta svaret eller inte).

Tekniskt krav: Koden följer “DRY”-principen (Dont repeat yourself), undviker större upprepningar av kod i logiken.

 

Bonus: Försök att snygga till quizet med CSS så att den ser lite mer användarvänlig ut!