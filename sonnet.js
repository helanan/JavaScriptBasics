//concept of declaring variables and dom manipulation through a simple sonnet
var sonnet = document.getElementById("sonnet")
var sonnetDiv = document.getElementById("sonnet").innerHTML;

//utlizing index of to find the start of a char in a string
var startingPosition = sonnetDiv.indexOf("orphans");
console.log("starting position of orphans", startingPosition);


//example of how to use a switch statement versus a if,then,else
switch (startingPosition) {
	case 410 :
	case 411 :
	case 422 :
	break;
	case 421 :
	default :
}

//console to alert user
console.log("number of characters in sonnet: ", sonnetDiv.length)

//exapme of how to use a replace statement in a string
var newContent = sonnetDiv.replace("winter","yuletide").replace(/ the /gi,"a large"); 
document.getElementById("sonnet").innerHTML = newContent


//example of an array and for loop
var myArray = ["first element",2,false,"last element"];

for (var i = 0; i < myArray.length; i++) {
	myArray[i]
};

for (var i = 0; i < 150; i += 10) {
};


//IF/THEN/ELSE Statement shown through a standard greeting operator
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + "Goodbye and " + greeting + '</h3>');//