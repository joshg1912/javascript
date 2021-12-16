let userName = ''


userName ? console.log(`Hello ${userName}!`) : console.log('Hello Stranger')

let question = 'whats my fortune?'


let randomNumber = Math.floor(Math.random() * 8)

if(randomNumber === 1 ) {
 eightBall = 'Outlook bleak :('
 
}
	else if (randomNumber === 2) {
	eightBall = 'My sources say yes'
	}
	else if (randomNumber === 3) {
	eightBall = 'Prediction hazey'
	}
	else if (randomNumber === 4) {
	eightBall = "Don't count on it"
	}
	else if (randomNumber === 5) {
	eightBall = 'Turn back'
	}
	else if (randomNumber === 6) {
	eightBall = 'Looking good'
	}
	else if (randomNumber === 7) {
	eightBall = 'Not adviseable'
	}
	else if (randomNumber === 8) {
	eightBall = 'come back later'
	}
	else {
	eightBall = 'try again'
	}

userName ? console.log(`Hello ${userName}! I see you asked "${question}". Magic eightball says...${eightBall}`) : console.log(`Hello Stranger! I see you asked ${question}. Magic eightball says... ${eightBall}`)
