function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
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
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = "";
        
        while (true) {
            let input = prompt("ROUND " + (i + 1) + ": CHOOSE ROCK, PAPER OR SCISSORS");
            
            if (input === null) {
                console.log("GAME CANCELLED BY USER.");
                return;
            }

            let formattedInput = input.toLowerCase().trim();
            if (formattedInput === "rock" || formattedInput === "paper" || formattedInput === "scissors") {
                playerSelection = formattedInput;
                break; 
            } else {
                alert("INVALID CHOICE! PLEASE TYPE ROCK, PAPER OR SCISSORS.");
            }
        }

        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);


        const playerCaps = playerSelection.toUpperCase();
        const computerCaps = computerSelection.toUpperCase();

        if (result === "player") {
            playerScore++;
            console.log("ROUND " + (i + 1) + ": YOU WIN! " + playerCaps + " BEATS " + computerCaps);
        } else if (result === "computer") {
            computerScore++;
            console.log("ROUND " + (i + 1) + ": YOU LOSE! " + computerCaps + " BEATS " + playerCaps);
        } else {
            console.log("ROUND " + (i + 1) + ": IT'S A TIE! BOTH CHOSE " + computerCaps);
        }
    }

    console.log("--- FINAL SCORE ---");
    console.log("PLAYER: " + playerScore + " | COMPUTER: " + computerScore);
    
    if (playerScore > computerScore) {
        console.log("RESULT: YOU DEFEATED THE EVIL AI!");
    } else if (playerScore < computerScore) {
        console.log("RESULT: THE EVIL AI DOMINATES THE WORLD...");
    } else {
        console.log("RESULT: IT'S A DRAW. THE BATTLE CONTINUES!");
    }
}

game();