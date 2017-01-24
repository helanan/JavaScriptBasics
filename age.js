// 1. How many hours are in a year
// 2. How many minutes are in a decade
// 3. How many seconds old they are
// 4. If they are older than some arbitrary number, console "I'm old", else "I'm young"

var hoursInYear = 365 * 24;
console.log("Hours in Year: ", hoursInYear)

var minutesPerHour = 60;
var hoursPerDay = 24;
var daysPerYear = 365;
var yearsPerDecade = 10;
console.log("minutes in decade: ", minutesPerHour * hoursPerDay * daysPerYear * yearsPerDecade);

age1 = 7;
age2 = 8;
age3 = 9;
age4 = 27;

function ageSelect() {
	var age = document.getElementById("mySelect").value;
if (age == "age1") {
	document.getElementById('age1').innerHTML = "You are: " + age * minutesPerHour * hoursPerDay * daysPerYear * yearsPerDecade + "minutes old in a decade" ;
} else if (age == "age2") {
	document.getElementById('age2').innerHTML = "You are: " + age;
} else if (age == "age3") {
	document.getElementById('age3').innerHTML = "You are: " + age;
} else if (age == "age4") {
	document.getElementById('age4').innerHTML = "You are: " + age;
	} else {
	document.getElementById('hidden').innerHTML = "Please Select An Option"
	}
};



