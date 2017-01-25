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

// Looping through arrays with FOR LOOPS
for (var i=0; i<5; i++){
	console.log("i", i);
}

// Simple example of variable hoisting
var fruit = ["cherries", "apples", "bananas"];
for(var j=0; j<fruit.length; j++){
	console.log("fruit", fruit[j]);
}

// An example of a for loop that increments by 10 each time = 10 times 10, 20, 30, 50...100
for (var x=0; x<=100; x+=10) {
	console.log("x", x);
}

//for loop that pushes the index to an array for 5 times// console.log array [0,1,2,3,]
numbers = [0,1,2,3,4,5]
for (i = 0; i < cars.length; i++) { 
    text += cars[i] + "<br>";
}

//for loop that starts at 100 and divides by 2 each time 3 times = 
for (var i=100; i<4; i/2) {
	console.log("p", p);
}

// //an example of an array map function
// var ar = [1, 2, 3, 4, 5];
// var ar2 = ar.map( function(v) { return v*1; } );
// console.log( ar2 );



