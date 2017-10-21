// Question 1:

function Question1 (x, y) {
	return x + y
}
// Numbers:
console.log(Question1(3, 4));
// Strings:
console.log(Question1("Hot","Dog"));

//Question 2:

// First Array:
var Actresses = ["Angelina", "Nicole"];
// Second Array:
var Actors = ["Tom", "Brad"];
// Multidimenstional Array: 
var Couples = [Actors, Actresses];

// Output two of the items in sub-arrays to the console:
console.log(Couples[1][0]);

// Question 3:

if (x < 100){
	alert("Your number is less than 100!");
}	else {
	alert("Your number is greater than 100!");
}

// Question 4:

function Question4(name) {
	return "The name you have entered is " + name
}

// When name is entered:
console.log(Question4("Donovan"));

// Question 5:

// Declared a function when entering certains doors a prize alert is given: 

function Question5(x){
	if (x==="Door1"){
		alert("Gold");	
	} else if(x==="Door2"){
		alert("Silver");
	}	else if(x==="Door3"){
		alert("Bronze");
	}	else {
		alert("this is not a door");
	}
}

//Running the function with different options:
console.log(Question5("Door1"));
console.log(Question5("Door2"));
console.log(Question5("Door3"));
conosle.log(Question5("Banana"));




