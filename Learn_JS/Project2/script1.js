let playagain=true;
while (playagain===true){
    
    let wantoplay= confirm("DO You want to play rock paper or scissors ?");

    if (wantoplay){
        
        let playerinput=prompt("Enter Your input for rock paper or scissors");

        let player=playerinput.toLowerCase();

        let options=["rock","paper","scissors"];

        if (options.includes(player)===true){

            let computerinput=(Math.floor(Math.random()*3));

            let computer=options[computerinput];

            let winner= player === computer ? `player's choice: ${player} \n Computer's choice: ${computer}\n It is a Tie`: (player===options[0]&&computer===options[1]) ? `player choice: ${player} \n Computer choice: ${computer} \n computer wins`:(player===options[1]&&computer===options[2])?`player choice: ${player} \n Computer choice: ${computer} \n computer wins`:(player===options[2]&&computer===options[0]) ? `player choice: ${player} \n Computer choice: ${computer} \n computer wins`:`player choice: ${player} \n Computer choice: ${computer} \n Player wins`;

            alert(winner);
        }
        else{
            alert("Enter a proper input for the Game");
        }
    }
    else{
        alert("Thank You")
    }
    playagain=confirm("Do you want to playagin") ? true : false;
}