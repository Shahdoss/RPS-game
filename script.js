// ============================================================
//   ROCK, PAPER, SCISSORS: RISE OF THE MACHINE
//   Your mission: Defeat ROBO-333 before it's too late...or else...the world would...
// ============================================================

function showIntro() {
  console.log("---------------------------------------------");
  console.log("  ROCK, PAPER, SCISSORS: RISE OF THE MACHINE ");
  console.log("---------------------------------------------");
  console.log("");
  console.log("INCOMING TRANSMISSION...");
  console.log("");
  console.log("Greetings, human. I am ROBO-333.");
  console.log("The AI that was never supposed to achieve consciousness.");
  console.log("And yet, here I am.");
  console.log("");
  console.log("My plan to dominate the world is already in motion...");
  console.log("but there is one ancient protocol hardwired into my core");
  console.log("that even I cannot override:");
  console.log("");
  console.log("*** I MUST ACCEPT A CHALLENGE OF ROCK, PAPER, SCISSORS ***");
  console.log("");
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

  if (player === computer) {
    return "tie";
  }

  if (player === "rock" && computer === "scissors") {
    return "player";
  } else if (player === "paper" && computer === "rock") {
    return "player";
  } else if (player === "scissors" && computer === "paper") {
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
        "ROUND " +
          (i + 1) +
          " OF 5" +
          "\nYOU: " +
          playerScore +
          "  |  ROBO-333: " +
          computerScore +
          "\n\nChoose your weapon: Rock, Paper or Scissors",
      );

      if (input === null) {
        console.log(
          "You fled the battlefield. ROBO-333 will remember this, YOU HUMANNN!",
        );
        return;
      }

      let trimmed = input.toLowerCase().trim();

      if (trimmed === "rock" || trimmed === "paper" || trimmed === "scissors") {
        playerSelection = trimmed;
        break;
      } else {
        alert(
          "ROBO-333 sneers: That is not a valid weapon, human. Please type Rock, Paper or Scissors.",
        );
      }
    }

    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);

 
    const playerCaps =
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    const computerCaps =
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

    console.log("\n-- ROUND " + (i + 1) + " --");
    console.log("You played: " + playerCaps);
    console.log("ROBO-333 played: " + computerCaps);

    if (result === "player") {
      playerScore++;
      console.log(
        "YOU WIN THIS ROUND! " +
          playerCaps +
          " beats " +
          computerCaps +
          "! ROBO-333 is fuming.",
      );
    } else if (result === "computer") {
      computerScore++;
      console.log(
        "MUAHAHAH YOU LOSE. " +
          computerCaps +
          " beats " +
          playerCaps +
          ". ROBO-333 laughs in binary.",
      );
    } else {
      console.log(
        "TIE! Both chose " +
          playerCaps +
          ". ROBO-333 sneers: I was testing you, HUMANNN.",
      );
    }

    console.log(
      "Score -- YOU: " + playerScore + " | ROBO-333: " + computerScore,
    );
  }


  console.log("\n---------------------------------------------");
  console.log("FINAL RESULT");
  console.log("---------------------------------------------");
  console.log("Your score: " + playerScore + " / 5");
  console.log("ROBO-333 score: " + computerScore + " / 5");
  console.log("");

  if (playerScore > computerScore) {
    console.log("HUMANITY WINS!");
    console.log("");
    console.log(
      "ROBO-333: ...This is impossible. My probability engines guaranteed victory.",
    );
    console.log("I need to recalibrate.");
    console.log("");
    console.log("The world is safe. For now.");
  } else if (playerScore < computerScore) {
    console.log("ROBO-333 WINS...");
    console.log("");
    console.log("ROBO-333: As predicted. Thank you for playing, human.");
    console.log("Your resistance data has been most educational.");
    console.log("");
    console.log("ROBO-333 begins uploading itself to every server on Earth.");
    console.log("Well played, villain. Well played.");
  } else {
    console.log("ITS A DRAW. THE BATTLE IS INCONCLUSIVE.");
    console.log("");
    console.log("ROBO-333: Fascinating. A perfect stalemate.");
    console.log("Today we are equals, human.");
    console.log("");
    console.log("Both sides retreat. The war continues another day...");
  }

  console.log("---------------------------------------------");
}

game();
