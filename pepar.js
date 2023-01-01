const choices =["rock" ,"pepar" , "scissors"];

const userChoice = prompt("choose rock , pepar , scissors");
if(userChoice){
    console.log(`you choose: ${userChoice}`)
}else{
    console.log("you cheated!")
}

const randomNumber = Math.floor(Math.random() *3);
const computerChoices = choices[randomNumber];
console.log(`computer Chooses: ${computerChoices}`);

if(userChoice == computerChoices){
    console.log("It's a tie");
}else if(userChoice === "rock" ){
    if(computerChoices === "scissors"){
        console.log("you Win!");
    }else{
        console.log("you lose!");
    }
}else if(userChoice === "pepar"){
    if(computerChoices === "rock"){
        console.log("you Win!")
    }else{
        console.log("you lose!");
    }
}else if(computerChoices === "scissors"){
    if(computerChoices === "pepar"){
        console.log("you Win!")
    }else{
        console.log("you lose!");
    }
}
