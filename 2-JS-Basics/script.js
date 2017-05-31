//Lecture:variables
/*
var name = 'John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/
/*
////////////////////////////////////////////////////////////////////////////////
// Lecture: variables 2
var name = 'John';
var age = 26;

//console.log(name + age);
// console.log(age + age);

var job,isMarried;

// console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married?  ' + isMarried + '.');

age = 'thirty six';
job = 'driver';

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married?  ' + isMarried + '.');

var lastName = prompt('What is the last name?');
console.log(lastName);

alert(name + ' is a ' + age + ' year old ' + job + '. Is he married?  ' + isMarried + '.');\
*/

/*
////////////////////////////////////////////////////////////////////////////////
// Lecture: operators
var now = 2016
var birthYear = now - 26;

birthYear =  now - 26 * 2;
//2016 - 52 = 1964

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;
//ageJohn = ageMark = 26
//ageJohn = 26

ageJohn++;
ageMark *= 2;

console.log(ageJohn);
console.log(ageMark);
*/

/*
////////////////////////////////////////////////////////////////////////////////
// Lecture: if/else statements
var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes'){
	console.log(name + ' is married!');
}
else{
	console.log(name + ' will hopefully marry soon :)');
}

isMarried = true;
if(isMarried){
	console.log('YES!');
}

if(23 == '23'){
	console.log('something to print...');
}
	*/

/*
////////////////////////////////////////////////////////////////////////////////
// Lecture: boolean logic and switch

var age = 20;

if(age < 20){
	console.log('John is a teenager');
}
else if (age >= 20 && age < 30){
	console.log('John is a young man');
}
else{
	console.log('John is a man');
}

var job = 'teacher';
job = prompt('What does John do?');

switch (job){
	case 'teacher':
		console.log('John teaches kids.');
		break;

	case 'driver':
		console.log('John drives a cab in Lisbon');
		break;
	case 'cop':
		console.log('John helps fight crime');
		break;
	default:
		console.log('John does something else');

}*/

/*
// CODING CHALLENGE 1
var heightJohn = 180;
var ageJohn = 26;

var heightMark = 170;
var ageMark = 28;

var scoreJohn = heightJohn + (ageJohn * 5);
var scoreMark = heightMark + (ageMark * 5);

if(scoreJohn > scoreMark){

	console.log('John wins with '  + scoreJohn + ' points.');
}
else if (scoreJohn < scoreMark){

	console.log('Mark wins with ' + scoreMark + ' points');
}
else{

	console.log('It\'s a tie!');
}*/

/*
////////////////////////////////////////////////////////////////////////////////
// Lecture: functions

function calculateAge(yearOfBirth){
	var age = 2016 - yearOfBirth;
	return age;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);
//console.log(ageJohn, ageMike, ageMary);

function yearsUntilRetirement(name, year){
	var age = calculateAge(year);
	var retirement = 65 - age;

	if(retirement >= 0) {

		console.log(name + ' retires in ' + retirement + ' years.');
	}
	else{

		console.log(name + ' is already retired.');
	}
}

yearsUntilRetirement('John', 1990);
yearsUntilRetirement('Mike', 1969);
yearsUntilRetirement('Mary', 1948);
*/

/*
////////////////////////////////////////////////////////////////////////////////
// Lecture: arrays

var names = ['John', 'Jane', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[1]);
names[1] = 'Ben';
console.log(names);

var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue');
john.unshift('Mr.');
john.pop();
john.shift();

console.log(john);

if(john.indexOf('teacher') === -1) {
	console.log('John is not a teacher');
}
*/

/*
////////////////////////////////////////////////////////////////////////////////
// Lecture: objects

var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false
};

console.log(john.lastName);
console.log(john['lastName']);

var xyz = 'job';
console.log(john[xyz]);

john.lastName = 'Miller';
john['job'] = 'programmer';

console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.lastName = 'Smith';
jane['yearOfBirth'] = 1969;
jane['job'] = 'retired';
jane.isMarried = true;

console.log(jane);
*/

////////////////////////////////////////////////////////////////////////////////
// Lecture: objects and methods

// version 1.0
/*
var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function(){
		return 2016 - this.yearOfBirth;
	}
};
*/

//console.log(john.calculateAge(1970));
// console.log(john.calculateAge());

// var age = john.calculateAge();
// john.age = age;

//console.log(john);

/*
// version 2.0
var john = {
	name: 'John',
	lastName: 'Smith',
	yearOfBirth: 1990,
	job: 'teacher',
	isMarried: false,
	family: ['Jane', 'Mark', 'Bob'],
	calculateAge: function () {
		this.age = 2016 - this.yearOfBirth;
	}
};

john.calculateAge();
console.log(john);
*/

////////////////////////////////////////////////////////////////////////////////
// Lecture: loops and iteration
//var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

// FOR loops
/*
for (var i = 0; i < 10; i++){

	console.log(i);
}

for ( var j = 0; j < names.length; j++){

	console.log(names[j]);
}

// Reverse order
for (var k = names.length - 1; k >= 0; k--){

	console.log(names[k]);
}
*/

/*
var i = 0;
while(i < names.length) {

	console.log(names[i]);
	i++;
}

// loop break
/*for (var j = 1; j <= 5; j++){

	console.log(j);
	if(j === 3){

		break;
	}
}

// loop continue
for (var j = 1; j <= 5; j++){

	if(j === 3){

		continue;
	}

	console.log(j);
}
*/

////////////////////////////////////////////////////////////////////////////////
// Lecture: CODING CHALLENGE 2

var years = [1990, 1998, 1970, 2008, 2002];


function printFullAge(years){

	var ages = [];
	var fullAges = [];

	for (var i = 0; i < years.length; i++){

		ages[i] = 2016 - years[i];
	}

	for (i = 0; i < ages.length; i++){

		if (ages[i] >= 18){

			console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is of full age.');
			fullAges.push(true);
		}
		else{

			console.log('Person ' + (i + 1) + ' is ' + ages[i] + ' years old, and is NOT of full age.');
			fullAges.push(false);
		}
	}

	return fullAges;
}

var full_1 = printFullAge(years);
var full_2 = printFullAge([2012, 1915, 1999]);

















