let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");

const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");

const result_div = document.querySelector(".result");

const rock_div = document.getElementById("r");

const paper_div = document.getElementById("p");

const scissor_div = document.getElementById("s");

getComputerChoice = () => {
     const choices = ["r", "p", "s"];
     const randomNumber = Math.floor(Math.random() * 3);
     return choices[randomNumber];
};
getComputerChoice();

converToWord = (letter) => {
     if (letter === "r") return "Rock";
     if (letter === "p") return "Paper";
     if (letter === "s") return "Scissor";
};
wins = (user, computer) => {
     const smallUserWord = "(User)".fontsize(3).fontcolor("red").sub();
     const smallComputerWord = "(Comp)".fontsize(3).fontcolor("red").sub();
     userScore++;
     userScore_span.innerHTML = userScore;
     computerScore_span.innerHTML = computerScore;
     const userChoice_div = document.getElementById(user);
     result_div.innerHTML = `${converToWord(
          user
     )}${smallUserWord} beats ${converToWord(
          computer
     )}${smallComputerWord}. you win!`;
     userChoice_div.classList.add("green-glow");
     setTimeout(() => {
          userChoice_div.classList.remove("green-glow");
     }, 800);
};

loss = (user, computer) => {
     computerScore++;
     const userChoice_div = document.getElementById(user);
     userScore_span.innerHTML = userScore;
     computerScore_span.innerHTML = computerScore;
     const smallUserWord = "(User)".fontsize(3).fontcolor("red").sub();
     const smallComputerWord = "(Comp)".fontsize(3).fontcolor("red").sub();
     result_div.innerHTML = `${converToWord(
          user
     )}${smallUserWord} beats ${converToWord(
          computer
     )}${smallComputerWord}. you Lost!`;
     userChoice_div.classList.add("red-glow");
     setTimeout(() => {
          userChoice_div.classList.remove("red-glow");
     }, 800);
};
draw = (user, computer) => {
     const userChoice_div = document.getElementById(user);
     computerScore_span.innerHTML = computerScore;
     const smallUserWord = "(User)".fontsize(3).fontcolor("red").sub();
     const smallComputerWord = "(Comp)".fontsize(3).fontcolor("red").sub();
     result_div.innerHTML = `${converToWord(
          user
     )}${smallUserWord} beats ${converToWord(
          computer
     )}${smallComputerWord}. Match Draw!`;
     userChoice_div.classList.add("grey-glow");
     setTimeout(() => {
          userChoice_div.classList.remove("grey-glow");
     }, 800);
};
game = (userChoice) => {
     const ComputerChoice = getComputerChoice();
     switch (userChoice + ComputerChoice) {
          case "rs":
          case "pr":
          case "sp":
               wins(userChoice, ComputerChoice);
               break;
          case "rp":
          case "ps":
          case "sr":
               loss(userChoice, ComputerChoice);
               break;
          case "rr":
          case "pp":
          case "ss":
               draw(userChoice, ComputerChoice);
               break;
     }
};

main = () => {
     rock_div.addEventListener("click", function () {
          game("r");
     });
     paper_div.addEventListener("click", function () {
          game("p");
     });
     scissor_div.addEventListener("click", function () {
          game("s");
     });
};

main();
