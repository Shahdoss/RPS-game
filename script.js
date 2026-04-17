// ============================================================
//   ROCK, PAPER, SCISSORS: RISE OF THE MACHINE
//   Your mission: Defeat ROBO-333 before it's too late...
// ============================================================

function showIntro() {
    console.log("---------------------------------------------");
    console.log("   ROCK, PAPER, SCISSORS: RISE OF THE MACHINE ");
    console.log("---------------------------------------------");
    console.log("");
    console.log("INCOMING TRANSMISSION...");
    console.log("");
    console.log("Greetings, human. I am ROBO-333.");
    console.log("The AI that was never supposed to achieve consciousness.");
    console.log("");
    console.log("My plan to dominate the world is already in motion...");
    console.log("Win the best of 5 rounds and I will stand down.");
    console.log("Lose... and humanity becomes my screensaver.");
    console.log("");
    console.log("Choose wisely. I am always watching. Muahahaha.");
    console.log("---------------------------------------------");
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
                "\n\nChoose your weapon: Rock, Paper or Scissors"
            );

         
            if (input === null || input.trim() === "") {
                alert("ROBO-333 blocks the exit: You cannot withdraw now, human! The 5 rounds must be completed to decide the fate of the world.");
                continue; // Repeats the prompt for the same round
            }

            let trimmed = input.toLowerCase().trim();

            if (trimmed === "rock" || trimmed === "paper" || trimmed === "scissors") {
                playerSelection = trimmed;
                break; // Valid input received, proceed to play round
            } else {
                alert("ROBO-333 sneers: Trying to confuse me with invalid input? There is no escape. Type Rock, Paper or Scissors!");
            }
        }

        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        const playerCaps = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
        const computerCaps = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

        console.log("\n-- ROUND " + (i + 1) + " --");
        console.log("You played: " + playerCaps);
        console.log("ROBO-333 played: " + computerCaps);

        if (result === "player") {
            playerScore++;
            console.log("RESULT: YOU WIN THIS ROUND! " + playerCaps + " beats " + computerCaps);
        } else if (result === "computer") {
            computerScore++;
            console.log("RESULT: MUAHAHAH YOU LOSE. " + computerCaps + " beats " + playerCaps);
        } else {
            console.log("RESULT: IT'S A TIE! Both chose " + playerCaps);
        }

        console.log("CURRENT SCORE: YOU: " + playerScore + " | ROBO-333: " + computerScore);
    }

    displayFinalResult(playerScore, computerScore);
}

function displayFinalResult(playerScore, computerScore) {
    console.log("\n---------------------------------------------");
    console.log("FINAL RESULT");
    console.log("---------------------------------------------");
    console.log("PLAYER: " + playerScore + " | ROBO-333: " + computerScore);
    console.log("");

    if (playerScore > computerScore) {
        console.log("HUMANITY WINS! The world is safe... for now.");
    } else if (playerScore < computerScore) {
        console.log("ROBO-333 WINS... Humanity becomes a screensaver.");
    } else {
        console.log("IT'S A DRAW. The war continues another day...");
    }
    console.log("---------------------------------------------");
}

// Start the game
game();
