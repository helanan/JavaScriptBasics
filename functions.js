//example of a simple day picker switch statement
var day = "Friday";

switch(day) {
	case "Monday":
		console.log("Boooooooo");
	case "Friday":
		console.log("PARTAY");
	  break;
	default:
		console.log("what day is it?");
}

if(day === "Monday") {
	console.log("Booooo");
} else if (day === "Friday"){
	console.log("PARTAYYYY");
} else {
	console.log("what day is it?");
}

//example of arrays

//Array Functions JOIN/SPLIT/REVERSE/SORT
var fruit = ["cherries", "apples", "bananas"];
var fruitString = fruit.join("cats");

var catColors = 'green, red, yellow, black';
var catColorsArray = catColors.split(",");

var reverseFruit = fruit.reverse();

var sortFruit = fruit.sort();

//Array Functions with Values using SORT
var nums = [9,6,8,2,4,11,66];
var numSort = nums.sort(function(a,b) {return a-b});

// Array function that will grab the INDEXOF the array
var animals = ["cats", "turtles", "fish"];

//Array function SLICE
var animals2 = animals.slice(2,4);

//Array function SPLICE
animals.splice(1, 1);

//Array Functions to SORT/REVERSE/MAKE A STRING/JOIN
var colors = ["red", "blue", "gold", "pink", "orange"];
var finalAnswer = colors.sort().reverse().join(" cat ");


