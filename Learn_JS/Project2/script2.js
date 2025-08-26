const wannaPlay = () => {
    const startGame=confirm("Do you wanna Play Rock Paper or Scissors ?") ? playGame() : alert("Ok may be Next Time...");
};
const playGame = () => {
    while (true){
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        var options = ["rock", "paper", "scissors"];
        if (options.includes(playerChoice)==false){
            invalidChoice();
            break;
        }
        let computerChoice = getComputerChoice();
        computerChoice=valueOfComputerChoice(computerChoice);
        const result = determineWinner(playerChoice,computerChoice);
        display(result);
        break;
    }
    const playAgain = toPlayAgain();
    playAgain ? playGame() : thankYou();
};
const getPlayerChoice= ()=>{
    return prompt("Enter rock, paper or scissors");
};

const formatPlayerChoice = (value)=>{
    return value.trim().toLowerCase();
};

const invalidChoice =()=>{
    alert("You Entered a Invalid value ");
};

const getComputerChoice = () => {
    return (Math.floor((Math.random())*3));
};

const valueOfComputerChoice = (value)=>{
    let choice = (value===0) ? "rock" : (value===1) ? "paper" :"scissors";
    return choice;
};

const determineWinner = (player,computer) =>{
    var options = ["rock", "paper", "scissors"];
    let winner= player === computer ? `player's choice: ${player} \n Computer's choice: ${computer}\n It is a Tie`: (player===options[0]&&computer===options[1]) ? `player choice: ${player} \n Computer choice: ${computer} \n computer wins`:(player===options[1]&&computer===options[2])?`player choice: ${player} \n Computer choice: ${computer} \n computer wins`:(player===options[2]&&computer===options[0]) ? `player choice: ${player} \n Computer choice: ${computer} \n computer wins`:`player choice: ${player} \n Computer choice: ${computer} \n Player wins`;
    return winner;
};

const display= (value)=>{
    alert(value);
};

const toPlayAgain =  ()=>{
    return confirm("Do you want to play again?")
}

const thankYou=()=>{
    alert
}
wannaPlay();