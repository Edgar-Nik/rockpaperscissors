
const CHOICES = ["rock", "paper", "scissors"];

let userScore = 0;
let computerScore = 0;
let roundNumber = 0;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

const roundEl = document.querySelector(".round");

const userScoreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('computer-score');

const computerOptionEl = document.querySelector(".computer-option");

const winEl = document.querySelector(".win");
const loseEl = document.querySelector(".lose");

const getComputerChoice = function () {
    const index = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[index];
};

const resetStyles = function () {
    rock.style.display = "inline-block";
    paper.style.display = "inline-block";
    scissors.style.display = "inline-block";

    rock.style.pointerEvents = "all";
    scissors.style.pointerEvents = "all";
    paper.style.pointerEvents = "all";
};

const calculateGameState = function (choice) {
    const computerChoice = getComputerChoice();
    const userWin = (choice === "rock" && computerChoice === "scissors")
        || (choice === "scissors" && computerChoice === "paper")
        || (choice === "paper" && computerChoice === "rock");
    const draw = computerChoice === choice;

    roundNumber = roundNumber + 1;

    setTimeout(function () {
        computerOptionEl.innerHTML = `<img src="imgs/${computerChoice}.svg" class="${computerChoice}"/>`;
    }, 500);

    setTimeout(function () {
        computerOptionEl.innerHTML = `<i class="fas fa-check"></i>`;
        resetStyles();
    }, 3000);

    switch (true) {
        case userWin:
            userScore = userScore + 1;
            userScoreEl.innerHTML = userScore;

            if (userScore === 3) {
                winEl.style.display = "block";
                winEl.innerHTML = (
                    ` <div class="result">
                        <p>${userScore} : ${computerScore}</p>
                        <p>You Win, Congrats...</p>
                    </div>`
                );
            }
            break;
        case draw:
            console.log('draw', choice, computerChoice);
            break;
        default:
            computerScore = computerScore + 1;
            computerScoreEl.innerHTML = computerScore;

            if (computerScore === 3) {
                loseEl.style.display = "block";
                loseEl.innerHTML = (
                    ` <div class="result">
                        <p>${userScore} : ${computerScore}</p>
                        <p>You Lose...</p>
                    </div>`
                );
            }
    }

    roundEl.innerHTML = `Round ${roundNumber}`;
};

rock.addEventListener("click", function () {
    paper.style.display = "none";
    scissors.style.display = "none";
    rock.style.pointerEvents = "none";

    calculateGameState("rock");
});

paper.addEventListener("click", function () {
    rock.style.display = "none";
    scissors.style.display = "none";
    paper.style.pointerEvents = "none";

    calculateGameState("paper");
});

scissors.addEventListener("click", function () {
    rock.style.display = "none";
    paper.style.display = "none";
    scissors.style.pointerEvents = "none";

    calculateGameState("scissors");
});
