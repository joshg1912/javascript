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

console.log(getActualSleepHours());



function idealSleepHours(){
let idealHours = 8 * 7
return idealHours
}

console.log(idealSleepHours());
