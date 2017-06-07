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