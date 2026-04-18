alert(
`Welcome to ROBO-333: Rock, Paper, Scissors 👾

To play:
1. Open your browser console:
   - Windows: Ctrl + Shift + J
   - Mac: Cmd + Option + J

2. Type: game()
3. Press Enter

Good luck... you'll need it 😈`
);

console.log("%cType game() to start playing!", "color: cyan; font-size: 16px; font-weight: bold;");

function showIntro() {
    console.log("%c---------------------------------------------", "color: gray;");
    console.log("%c    ROCK, PAPER, SCISSORS: RISE OF THE MACHINE ", "color: purple; font-weight: bold;");
    console.log("%c---------------------------------------------", "color: gray;");
    console.log("");
    console.log("%cINCOMING TRANSMISSION...", "color: orange;");
    console.log("");
    console.log("%cGreetings, human. I am ROBO-333.", "color: red;");
    console.log("%cThe AI that was never supposed to achieve consciousness.", "color: white;");
    console.log("");
    console.log("%cMy plan to dominate the world is already in motion...", "color: red;");
    console.log("%cWin the best of 5 rounds and I will stand down.", "color: white;");
    console.log("%cLose... and humanity becomes my screensaver.", "color: red;");
    console.log("");
    console.log("%cChoose wisely. I am always watching. Muahahaha.", "color: orange; font-weight: bold;");
    console.log("%c---------------------------------------------", "color: gray;");
    console.log("");
}

function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();

    if (player === computer) return "tie";

    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        return "player";
    } else {
        return "computer";
    }
}

function game() {
    showIntro();

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = "";

        while (true) {
            let input = prompt(
                "ROUND " + (i + 1) + " OF 5" +
                "\nYOU: " + playerScore + "  |  ROBO-333: " + computerScore +
                "\n\nChoose your weapon: Rock, Paper or Scissors\n(Cancel to attempt escape 😏)"
            );

            if (input === null || input.trim() === "") {
                const confirmExit = confirm(
                    "ROBO-333: What’s wrong, human?\n" +
                    "Scared of losing? 😈\n\n" +
                    "Press OK to RUN AWAY...\n" +
                    "Press Cancel to stay and fight."
                );

                if (confirmExit) {
                    console.log("%cROBO-333: Pathetic. Humanity never stood a chance...", "color: red; font-weight: bold;");
                    return; 
                } else {
                    continue;
                }
            }

            let trimmed = input.toLowerCase().trim();

            if (trimmed === "rock" || trimmed === "paper" || trimmed === "scissors") {
                playerSelection = trimmed;
                break;
            } else {
                alert("ROBO-333 sneers: Trying to confuse me with invalid input? Type Rock, Paper or Scissors!");
            }
        }

        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);

        const playerCaps = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        const computerCaps = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

        console.log(`%c\n-- ROUND ${i + 1} --`, "color: yellow; font-weight: bold;");
        console.log(`%cYou played: ${playerCaps}`, "color: cyan;");
        console.log(`%cROBO-333 played: ${computerCaps}`, "color: orange;");

        if (result === "player") {
            playerScore++;
            console.log(`%cRESULT: YOU WIN THIS ROUND! ${playerCaps} beats ${computerCaps}`, "color: lightgreen;");
        } else if (result === "computer") {
            computerScore++;
            console.log(`%cRESULT: MUAHAHAH YOU LOSE. ${computerCaps} beats ${playerCaps}`, "color: red;");
        } else {
            console.log(`%cRESULT: IT'S A TIE! Both chose ${playerCaps}`, "color: white;");
        }

        console.log(`%cCURRENT SCORE: YOU: ${playerScore} | ROBO-333: ${computerScore}`, "color: lightblue;");
    }

    displayFinalResult(playerScore, computerScore);

    const playAgain = confirm("ROBO-333: Do you dare to challenge me again, human?");
    if (playAgain) {
        console.clear();
        game();
    } else {
        console.log("%cROBO-333: Wise choice. Run while you still can.", "color: orange; font-weight: bold;");
    }
}

function displayFinalResult(playerScore, computerScore) {
    console.log("%c\n---------------------------------------------", "color: gray;");
    console.log("%cFINAL RESULT", "color: purple; font-weight: bold;");
    console.log("%c---------------------------------------------", "color: gray;");
    console.log(`%cPLAYER: ${playerScore} | ROBO-333: ${computerScore}`, "color: white;");
    console.log("");

    if (playerScore > computerScore) {
        console.log("%cHUMANITY WINS! The world is safe... for now.", "color: green; font-weight: bold;");
    } else if (playerScore < computerScore) {
        console.log("%cROBO-333 WINS... Humanity becomes a screensaver.", "color: red; font-weight: bold;");
    } else {
        console.log("%cIT'S A DRAW. The war continues another day...", "color: orange;");
    }

    console.log("%c---------------------------------------------", "color: gray;");
}

window.game = game;