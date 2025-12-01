let userScore = 0;
let compscore = 0;
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
let cScore = document.querySelector(("#comp-score"));
let uScore = document.querySelector(("#user-score"));

const updateScore = (userWin) => {
    if(userWin) {
        uScore.innerText = userScore;
    } 
    else {
        cScore.innerText=compscore;
    }
   
    
}

const showWinner = (userWin) => {
    if (userWin) {
        console.log("You won");
        msg.innerText = "You won";
        userScore++;
        msg.style.backgroundColor="green";
    }
    else {
        console.log("you lost");
        msg.innerText = "You Lost:(";
        compscore++;
         msg.style.backgroundColor="red";
    }
    updateScore(userWin);
};


const drawGame = () => {
    console.log("Its draw");
    msg.innerText = "It's draw";
     msg.style.backgroundColor="#081b31";
};

const generateChoice = () => {
    const opts = ["rock", "paper", "scissors"];
    let randIdx = Math.floor(Math.random() * 3);
    console.log(randIdx);


    return opts[randIdx];
};

const playGame = (choice) => {
    let userWin = true;
    const compChoice = generateChoice();
    console.log(`comp chose ${compChoice}`);
    if (choice === compChoice) {
        drawGame();
    }
    else {
        if (choice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (choice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin);
    }

};

choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id");
        console.log(`your choice ${choiceId}`);

        playGame(choiceId)

    })
});