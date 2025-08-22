//first Interaction Game
let want_to_play = confirm("Do You want play Rock, Paper or Scissors Game");
if (want_to_play){
    let player_choice = prompt("choose the from rock paper scissors");
    if (player_choice){
        let player = player_choice.trim().toLowerCase();
        if (player === "rock" || player === "paper" || player === "scissors"){
            let computer_choice = Math.ceil(Math.random()*3);
            let computer;
            switch (computer_choice){
                case 1:
                    computer = "rock";
                    break;
                case 2:
                    computer = "paper";
                    break;
                default:
                    computer = "scissors";
            }
            let winner = (player === computer) ? "It is a Tie" : (player === "rock" && computer === "paper") ? "You are the Winner" : (player === "paper" && computer === "scissors") ? "You are the Winner" : (player === "scissors" && computer === "paper") ? "You are the Winner" : "Computer is the Winner" ;
            alert(winner);
            let play_again = confirm("Do You want to play again");
            play_again ? location.reload() : alert("Ok, Thank You")
        }
        else{
            alert("Please enter the right choice")
        }
    }
    else{
        alert("You didn't enter the right choice");
    }
}
else{
    alert("Thank You")
}