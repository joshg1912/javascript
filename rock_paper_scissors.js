function getUserChoice(userInput){
	userInput = userInput.toLowerCase();
	if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
	return userInput;
	} else {
	return 'invalid'}
	}
	
	console.log(getUserChoice('cherrybomb'));

function getComputerChoice(){
 let choice = Math.floor(Math.random() * 3);
 
 switch(choice){
 case 0: 
 return 'rock'
 break;
 case 1:
 return 'paper'
 break;
 case 2:
 return 'scissors'
 break;
 default:
 return 'rocket'
 break;
 }
}

// console.log(getComputerChoice());

function determineWinner(userChoice,computerChoice) {
	if(userChoice === computerChoice){
	return 'Its a tie!'}
	
	if(userChoice === 'rock'){
	if(computerChoice === 'paper'){
	return 'computer wins'}
	else {
	return 'user wins'}
	}
	if(userChoice === 'paper'){
	if(computerChoice ==='scissors'){
	return 'computer wins' 
	} else {
	return 'user wins'}
	}
	if(userChoice === 'scissors'){
	if (computerChoice === 'rock'){
	return 'computer wins'} else {
	return 'user wins'}
	}
}



function playGame(){
let userChoice = getUserChoice('paper');
let computerChoice = getComputerChoice();

console.log(determineWinner(userChoice,computerChoice));

}

playGame();

