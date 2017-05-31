// Module that handles budget data
// The IIFE creates a new scope, so the variables inside budgetController are private and not accessible from the outside.
var budgetController = (function(){

	var x = 23;
	var add = function(a){

		return x + a;
	}

	return {

		publicTest: function(b){

			return add(b);
		}
	}

})();

// Calling var x or function add from the console is not possible.
// Calling the public function publicTest is possible, because it's made public.
// budgetController.publicTest(5) =>
// add(5) =>
// 23 + 5 (because x = 23 and 5 is passed in the beginning.)


var UIController = (function(){

	// Some code

})();

// This module is connected to the other two modules.
var controller = (function(budgetCtrl, UICtrl){

	// var z gets the public method from the budgetController and has now access to the variables and functions from the other module.
	var z = budgetCtrl.publicTest(5);

	return {

		anotherPublic: function(){

			console.log(z);
		}
	}

})(budgetController, UIController);