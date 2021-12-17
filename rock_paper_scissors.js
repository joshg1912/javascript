function getUserChoice(userInput){
	userInput = userInput.toLowerCase();
	if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
	return userInput;
	} else {
	return 'invalid'}
	}
	
	console.log(getUserChoice('ROCK'));

function getComputerChoice(){
 let choice = Math.floor(Math.random() * 3);

	return choice;
}

console.log(getComputerChoice());

