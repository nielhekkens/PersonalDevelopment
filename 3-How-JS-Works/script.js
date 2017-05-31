///////////////////////////////////////
// Lecture: Hoisting
/*
calculateAge(1965);

// Function declaration
function calculateAge(year){

	console.log(2016 - year);
}

// Bij Function declarations kan je de functie aanroepen ongeacht de locatie van
// de functie in de code.




// Function expression
// retirement(1990);

var retirement = function(year){

	console.log(65 - (2016 - year));
}



// Variables

console.log(age);

var age = 23;

function foo (){

	var age = 65;
	console.log(age);
}
foo();
console.log(age);
*/











///////////////////////////////////////
// Lecture: Scoping


// First scoping example
// Functies hebben toegang tot de variabelen van de parent functie.
// Functie second() heeft toegang tot variabelen a en b omdat deze parents zijn van second()
// Andersom werkt het niet. De global scope kan niet binnen de children kijken, tenzij je de waarden zou returnen.
/*
var a = 'Hello!';
first();
// Hier kan je niet bij variabelen b en c, ten zij ze worden gereturned aan het einde van de functie.

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/





// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();


    function second() {
        var c = 'Hey!';
        third();
        //console.log(a+b+c);

		//console.log(d);
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
    // b is not defined. Dit komt omdat third() niet in de scope chain zit.
	// Hierdoor heeft third() geen toegang to variabelen b en c.
}




///////////////////////////////////////
// Lecture: The this keyword

// console.log(this);
/*
calculateAge(1985);

function calculateAge(year){

	console.log(2016 - year);
	console.log(this);
}
*/
/*
var john = {

	name: 'John',
	yearOfBirth: 1990,
	calculateAge: function(){
		console.log(this);
		console.log(2016 - this.yearOfBirth);

		// function innerFunction(){
		//
		// 	console.log(this);
		// }
		//innerFunction();
	}
};

john.calculateAge();


var mike = {
	name: 'Mike',
	yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();
*/