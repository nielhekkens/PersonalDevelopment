////////////////////////////////////////////////////////////////////////////////
// Lecture 95: let and const

// ES5
// var name5 = 'Jane Smith';
// var age5 = 23;
//
// name5 = 'Jane Miller';
// console.log(name5);

// ES6
// const = variables you don't want to mutate
// let = variable that can be changed
// var in es5 is functio

// const name6 = 'Jane Smith';
// let age6 = 23;
//
// // name6 = 'Jane Miller';
// console.log(age6);

// ES5
/*
function driversLicense5 (passedTest){

	if(passedTest){

		var firstName = 'John';
		var yearOfBirth = 1990;
	}

	console.log(firstName + ', born in ' + yearOfBirth + ', is now allowed to drive a car.');
}

driversLicense5(true);

// ES6
function driversLicense6 (passedTest){

	let firstName;
	const yearOfBirth = 1990;

	if(passedTest){

		firstName = 'John';
	}

	console.log(firstName + ', born in ' + yearOfBirth + ', is now allowed to drive a car.');
}

driversLicense6(true);


let i = 23;

for (let i = 0; i < 5; i++){

	console.log(i);
}

console.log(i);
*/
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Lecture 96: blocks and IIFEs

// Const and Let defined inside a block are not accessible from the outside.
// This is good for data privacy.

// A block is created by using curly brackets. If or while or for are not needed.

// ES6
/*
{

	const a = 1;
	let b = 2;
	var c = 3;
}

//console.log(a + b);
console.log(c);

//ES5
(function(){

	var c = 3;
})();

//console.log(c);
*/
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Lecture 97: Strings in ES6
/*
let firstName = 'John';
let lastName =  'Smith';
const yearOfBirth = 1990;
function calcAge(year){

	return 2016 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth +
	'. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
// Template literals
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J')); // new string method startsWith
console.log(n.endsWith('th')); // new string method endsWith
console.log(n.includes('oh')); // new string method includes
console.log(`${firstName} `.repeat(5));
*/
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Lecture 98: Arrow functions (basics)

const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(el){

	return 2016 - el;
});

console.log(ages5);

// ES6
// with 1 argument
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

// with multiple arguments
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);

// multiple arguments and multiple lines of code.
// require curly brackets and return keyword.
ages6 = years.map((el, index) => {

	const now = new Date().getFullYear();
	const age = now - el;
	return `Age element ${index + 1}: ${2016 - el}.`;
});
console.log(ages6);

////////////////////////////////////////////////////////////////////////////////