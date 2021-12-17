function getSleepHours(day){
day = day.toLowerCase();
     switch(day){
	case 'monday':
	return 7
	break;
	case 'tuesday':
	return 7
	break;
	case 'wednesday':
	return 8
	break;
	case 'thursday':
	return 7
	break;
	case 'friday':
	return 8
	break;
	case 'saturday':
	return 7
	break;
	case 'sunday':
	return 7
	break;
	default:
	return 'enter valid day'
	}
};

//console.log(getSleepHours('FRIDAY'));

function getActualSleepHours(){
return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
}

//console.log(getActualSleepHours());


//calculates ideal hours by multiplying ideal hours(8) times days of the week (7)
function idealSleepHours(){
let idealHours = 8 * 7
return idealHours
}

//console.log(idealSleepHours());



function calculateSleepDebt(){
	if(idealSleepHours() === getActualSleepHours()){
	return 'Youre right on track'}
	     else if(getActualSleepHours() < idealSleepHours()){
	     let difference = idealSleepHours() - getActualSleepHours()
	     return `Youre not sleeping enough! Add ${difference} hours to your sleep schedule to get on track.`
	     }
	          else if(idealSleepHours() > getActualSleepHours()){
	          let difference = getActualSleepHours() - idealSleepHours()
	          return `Youre over sleeping by ${difference} hours!`
	          }
}


console.log(calculateSleepDebt());


