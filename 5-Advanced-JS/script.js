// Function constructor
// var john = {
//
// 	name: 'John',
// 	yearOfBirth: 1990,
// 	job: 'teacher'
// }

// var Person = function(name, yearOfbirth, job){
//
// 	this.name = name;
// 	this.yearOfBirth = yearOfbirth;
// 	this.job = job;
// }
//
// Person.prototype.calculateAge = function(){
//
// 	console.log(2016 - this.yearOfBirth);
// }
//
// Person.prototype.lastName = 'Smith'
//
// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');
//
// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();
//
// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);


// OBJECT.CREATE
// var personProto = {
//
// 	calculateAge: function(){
//
// 		console.log(2016 - this.yearOfBirth);
// 	}
// }
//
// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';
//
// var jane = Object.create(personProto, {
//
// 	name: {value: 'Jane'},
// 	yearOfBirth: {value: 1969},
// 	job: {value: 'designer'}
// })


// PRIMITIVES vs OBJECTS

// // Primitives
// var a = 23;
// var b = a;
//
// a =  46;
//
// console.log(a);
// console.log(b);
//
// // Objects
// var obj1 = {
//
// 	name: 'John',
// 	age: 26
// };
// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);
//
// // Functions
// var age = 27;
// var obj = {
//
// 	name: 'Jonas',
// 	city: 'Lisbon'
// };
//
// function change(a, b){
//
// 	a = 30;
// 	b.city = 'San Francisco';
// }
//
// change(age, obj);
// console.log(age);
// console.log(obj.city);


// // PASSING FUNCTIONS AS ARGUMENTS
//
// var years = [1990, 1965, 1937, 2005, 1998];
//
// Functie met twee argumenten. 1: de array 2: een functie die dan wordt uigevoerd
// function arrayCalc(arr, fn){
//
// 	var arrRes = [];
//
// 	for (var i = 0; i < arr.length; i++){
//		// Hier wordt de functie aangroepen die eerder als argument is aangevoerd.
// 		arrRes.push(fn(arr[i]));
// 	}
//
// 	return arrRes;
// }
//
// function calculateAge(el){
//
// 	return 2016 - el;
// }
//
// function isFullAge(el){
//
// 	return el >= 18;
// }
//
// function maxHeartRate(el){
//
// 	if(el >= 18 && el <= 81){
//
// 		return Math.round(206.9 - (0.67 * el));
// 	}
//
// 	else {}
//
// }
//
//
//
// var ages = arrayCalc(years, calculateAge);
// // Variable wordt functie arrayCalc(keuze van array, gekozen functie)

// var fullAges = arrayCalc(ages, isFullAge);
//
// console.log(ages);
// // Output wordt een array met daarin de leeftijden van de personen.

// console.log(fullAges);



// LECTURE: FUNCTIONS RETURNING FUNCTIONS

// function interviewQuestion(job) {
//
// 	if (job === 'designer') {
//
// 		return function (name) {
//
// 			console.log(name + ', can you explain what UX design is?');
// 		}
// 	}
//
// 	else if (job === 'teacher') {
//
// 		return function (name) {
//
// 			console.log('What do you teach, ' + name + '?');
// 		}
// 	}
//
// 	else {
//
// 		return function (name) {
//
// 			console.log(name + ', what do you do?');
// 		}
// 	}
// }
//

// LECTURE: IIFE (Immediately Invoked Function Expressions)
// Keep variables private
/*
(function(){

	var score = Math.random() * 10;
	console.log(score >= 5);
})();

// console.log(score);

(function(goodLuck){

	var score = Math.random() * 10;
	console.log(score >= 5 - goodLuck );
})(5);
*/

/*
// LECTURE: CLOSURES
function retirement(retirementAge){
	var a = ' years left until retirement.';

	return function(yearofBirth){

		var age = 2016 - yearofBirth;
		console.log((retirementAge - age) + a);
	}
}
/*
retirment() returned the uitkomst van
 *

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);


//retirementUS(1990); // is hetzelfde als retirement(66)(1990);

// challenge

function interviewQuestion(job) {

	return function (name){

		if(job === 'designer'){

			console.log(name + ', can you explain what UX design is?');
		}

		else if (job === 'teacher') {

			console.log('What do you teach, ' + name + '?');
		}

		else{

			console.log(name + ', what do you do?');
		}

	}
}

interviewQuestion('teacher')('Alex');
/*
 interviewQuestion('teacher')('Alex');
 wordt
 function('Alex') en dan wordt de anonieme functie uitgevoerd waarbij de input
 van de eerste functie wordt bewaard.
 */
/*
// LECTURE: bind, call and apply
var john = {

	name: 'John',
	age: 26,
	job: 'teacher',
	presentation: function(style, timeOfDay){

		if(style === 'formal'){

			console.log('Good '
				+ timeOfDay + ', Ladies and gentlemen! My name is '
				+ this.name + ', I am a '
				+ this.job + ' and I am '
				+ this.age + ' years old.');
		}

		else if(style === 'friendly'){

			console.log('Hey! What is up? My name is '
				+ this.name + ', I am a '
				+ this.job + ' and I am '
				+ this.age + ' years old. Have a nice '
				+ timeOfDay + '.');
		}
	}
};

var emily = {

	name: 'Emily',
	age: 35,
	job: 'designer'
};

john.presentation('formal', 'morning');

// call method
john.presentation.call(emily, 'friendly', 'afternoon');

// apply method
// john.presentation.apply(emily, ['friendly', 'afternoon'])

// bind method to create a function with preset arguments
// preset friendly argument
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

*/
/*
var years = [1990, 1965, 1937, 2005, 1998];

//Functie met twee argumenten. 1: de array 2: een functie die dan wordt uigevoerd
function arrayCalc(arr, fn){

	var arrRes = [];

	for (var i = 0; i < arr.length; i++){
		// Hier wordt de functie aangroepen die eerder als argument is aangevoerd.
		arrRes.push(fn(arr[i]));
	}

	return arrRes;
}

function calculateAge(el){

	return 2016 - el;
}

function isFullAge(limit, el){

	return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan  = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/

// CODING CHALLENGE 4
// Use IIFE to keep code and variables private.
//(function(){

	// ANSWER
	// FUNCTION CONSTRUCTOR
	function Question (question, options, answer){

		this.question = question;
		this.options = options;
		this.answer = answer;
	}

	// ANSWER display question using prototype
	Question.prototype.displayQuestion = function(){

		// Display question
		console.log(this.question);

		// Go through the answers and display them
		for(var i = 0; i < this.options.length; i++){

			console.log(i + ': ' + this.options[i]);
		}
	};

// ANSWER method to compare answers using prototype
// callback parameter added to keep the score.
	Question.prototype.checkAnswer = function(ans, callback){
		var sc;

		if(ans === this.answer){

			console.log('Correct answer!');
			sc = callback(true);
			// callback is basically the keepScore variable, which is the function score();
		}

		else {

			console.log('Wrong answer! Try again.');
			sc = callback(false);
			//newQuestion();
		}

		// call the method displayScore, input the sc (score) variable
		this.displayScore(sc);

	};
	// Add displayScore method, by using prototypes.
	Question.prototype.displayScore = function(score){

		console.log('Your current score is: ' + score);
		console.log('------------------------------------------');
	};

	// Create a couple of questions using the constructor
	var q1 = new Question('Is Javascript the greatest language in the world?', ['Yes', 'No'], 0);
	var q2 = new Question('Who lives in a pineapple under the sea?', ['Patrick', 'Squidward', 'Spongebob'], 2);
	var q3 = new Question('How do you call a Dutch taxi driver?', ['Chauffeur', 'With a phone', 'Horrible'], 1);
	var q4 = new Question('What does rhyme with orange?', ['Yes', 'No, it doesn\'t', 'Cat', 'Doge'], 1);

	// ANSWER Store the info inside an array;
	var questions = [q1, q2, q3, q4];

	// Function to keep score
	function score(){

		var sc = 0;

		// The correct parameter is a boolean.
		return function(correct){

			// if correct is true, add 1 to the variable.
			if(correct){

				sc++;
			}

			// regardless what happened, return the score.
			return sc;
		}
	}

	// variable keepScore becomes the function score();
	var keepScore = score();


	function newQuestion(){
		// Select one question at random.
		var n = Math.floor(Math.random() * questions.length);

		// Select a random question and display it, by calling the displayQuestion method
		questions[n].displayQuestion();

		// Display prompt and convert the answer to an integer
		var answer = prompt('Please enter the number of your answer or type "exit" to stop:');

		// Check if the written word is exit
		if(answer === 'exit'){

			console.log('Exit the game.');
		}

		else{

			// Call checkAnswer method. Get the answer given by the user and use that as input for the method.
			// added keepScore variable so the function score() will be passed.
			questions[n].checkAnswer(parseInt(answer), keepScore);

			// After the answer is checked, call the newQuestion function to get a new question.
			newQuestion();
		}
	}

	// Call the newQuestion function to start the game.
	newQuestion();
//})();
