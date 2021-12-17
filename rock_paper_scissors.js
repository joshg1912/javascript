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

console.log(getComputerChoice());

