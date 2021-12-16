let userName = 'Tom'

userName ? console.log(`Hello ${userName}!`) : console.log('Hello Stranger') 

let question = 'what is my fortune?'


let randomNumber = Math.floor(Math.random() * 8);

switch (randomNumber) {
	case 1:
	eightBall = 'Outlook is bleak :('
	break;
	case 2:
	eightBall = 'My sources say yes'
	break;
	case 3:
	eightBall = "Don't count on it"
	break;
	case 4:
	eightBall = 'Signs point to yes'
	break;
	case 5:
	eightBall = 'Prediction hazey'
	break;
	case 6:
	eightBall = 'Go with your gut'
	break;
	case 7:
	eightBall = 'hmmm'
	break;
	case 8:
	eightBall = 'Come back later'
	break;
	default:
	eightBall = 'Try again'
	break;
	}
	
console.log(`Hello ${userName}! I see you asked "${question}". Magic eight ball says... ${eightBall}`)
	
	
	
