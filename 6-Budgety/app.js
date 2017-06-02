// BUDGET CONTROLLER
var budgetController = (function(){

	// Function constructor
	var Expense = function(id, description, value){

		this.id = id;
		this.description = description;
		this.value = value;
		this.percentage = -1;
	};

	// Add the method to the prototype so all instances of the object inherit this method.
	Expense.prototype.calcPercentage = function(totalIncome){

		if(totalIncome > 0){

			// Calculate the percentage
			this.percentage = Math.round((this.value / totalIncome) * 100);
		}
		else{

			this.percentage = -1;
		}
	};

	Expense.prototype.getPercentage = function(){

		return this.percentage;
	};

	var Income = function(id, description, value){

		this.id = id;
		this.description = description;
		this.value = value;
	};

	// This function is placed here to keep this part private.
	var calculateTotal = function(type){

		var sum = 0;

		// data.allItems[type] selects the correct array from the data.allItems object.
		// forEach loops through that array.
		data.allItems[type].forEach(function(cur){

			sum += cur.value;
		});

		/* Example
		initial value: 0
		values in array: [200, 400, 100]
		sum = 0 + 200
		sum = 200 + 400
		sum = 600 + 100
		 */

		// Save the sum in the data.totals object
		data.totals[type] = sum;
	};

	// Store all expenses and incomes in an object
	var data = {

		allItems:{
			exp: [],
			inc: []
		},

		totals: {
			exp: 0,
			inc: 0,
		},
		budget: 0,
		percentage: -1
	};

	return{

		addItem: function(type, des, val){

			var newItem, ID;

			// Create new ID based on the last ID in the array and add one.
			if(data.allItems[type].length > 0){

				ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
			}
			else{

				ID = 0;
			}

			// Create new item based on 'inc' or 'exp' type.
			// If the type (from UIController.getinput()) is an exp, create a new Expense instance
			if(type === 'exp'){

				newItem = new Expense(ID, des, val);
			}
			// Otherwise create an new Income instance, using the constructor.
			else if(type === 'inc'){

				newItem = new Income(ID, des, val);
			}

			// Add the new generated item to the data object in the correct array. By using the same name in the object as in variable, you can use the variable.
			data.allItems[type].push(newItem);

			// Return the new element
			return newItem;
		},

		deleteItem: function(type, id){
			var ids, index;
			// We need to know which type and id needs to be deleted

			ids = data.allItems[type].map(function(current){

				return current.id;
			});

			// search the index of the id we are looking for.
			// Example: ids = [1 2 4 6 8]
			// If we are looking for the id 6
			// The index of the id (6) is 3.
			index = ids.indexOf(id);

			if(index !== -1){

				// remove the item from the array
				// .splice(index where to start removing, the number of elements to remove)
				data.allItems[type].splice(index, 1);
			}
		},

		calculateBudget: function(){

			// Calculate total income and expenses
			calculateTotal('exp');
			calculateTotal('inc');

			// Calculate the budget: income - expenses
			data.budget = data.totals.inc - data.totals.exp;

			// Calculate the percentage of income that has been spend.
			if(data.totals.inc > 0){

				data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
			}
			else{

				data.percentage = -1;
			}

		},

		calculatePercentages: function(){

			// Calculate the percentage of the single expense of the total income.
			data.allItems.exp.forEach(function(cur){

				cur.calcPercentage(data.totals.inc);
			});
		},

		getPercentages: function(){

			var allPerc = data.allItems.exp.map(function(cur){

				return cur.getPercentage();
			});
			return allPerc;
		},

		getBudget: function(){

			return{

				budget: data.budget,
				totalInc: data.totals.inc,
				totalExp: data.totals.exp,
				percentage: data.percentage
			}
		},

		testing: function(){

			console.log(data);
		}
	}
})();

// UI CONTROLLER
var UIController = (function(){

	// Create an object to centralise all strings, so you would have to change them only once.
	var DOMstrings = {

		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputButton: '.add__btn',
		incomeContainer: '.income__list',
		expensesContainer: '.expenses__list',
		budgetLabel: '.budget__value',
		incomeLabel: '.budget__income--value',
		expensesLabel: '.budget__expenses--value',
		percentageLabel: '.budget__expenses--percentage',
		container: '.container',
		expensesPercLabel: '.item__percentage',
		dateLabel: '.budget__title--month'
	};

	 var formatNumber = function(num, type){

		var numSplit, int, dec;
		// + or - before the number
		// exactly 2 decimal points
		// comma separating the thousands

		// gets the absolute number, removing positive or negative value
		num = Math.abs(num);

		// add 2 decimals to the number and outputs a string
		num = num.toFixed(2);

		numSplit = num.split('.');

		int = numSplit[0];
		if(int.length > 3){

			int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
		}

		dec = numSplit[1];

		// alternative if statement (shorter)
		// type === 'exp' ? sign = '-' : sign = '+'

		return (type === 'exp' ? sign = '-' : sign = '+') + ' ' + int + '.' + dec;
	};

	return{ // this return makes it possible for the other modules to call the methods

		// created method which returns the values from the input fields.
		getinput: function(){

			// returning an object with the values as properties instead of three separate variables.
			return{
				type: document.querySelector(DOMstrings.inputType).value, // Will inc or exp
				description: document.querySelector(DOMstrings.inputDescription).value,
				value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
			};
		},

		addListItem: function(obj, type){

			var htm, newHtml, element;

			// 1 Create HTML string with placeholder text
			if(type === 'inc'){

				element = DOMstrings.incomeContainer;

				html = '<div class="item clearfix" id="inc-%id%">' +
						'<div class="item__description">%description%</div>' +
						'<div class="right clearfix">' +
							'<div class="item__value">%value%</div>' +
							'<div class="item__delete">' +
								'<button class="item__delete--btn">' +
									'<i class="ion-ios-close-outline"></i>' +
								'</button>' +
							'</div>' +
						'</div>' +
					'</div>';
			}

			else if (type === 'exp'){

				element = DOMstrings.expensesContainer;

				html = '<div class="item clearfix" id="exp-%id%">' +
						'<div class="item__description">%description%</div>' +
						'<div class="right clearfix">' +
							'<div class="item__value">%value%</div>' +
							'<div class="item__percentage">21%</div>' +
							'<div class="item__delete">' +
								'<button class="item__delete--btn">' +
									'<i class="ion-ios-close-outline"></i>' +
								'</button>' +
							'</div>' +
						'</div>' +
					'</div>'
			}

			// 2 Replace the placeholder with actual data
			newHtml = html.replace('%id%', obj.id);

			// replace newHtml, because we want to continue on the last edited string. That's in newHtml instead of html
			newHtml = newHtml.replace('%description%', obj.description);
			newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));

			// 3 Insert HTML into the dom
			document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
		},

		// Method to delete the item
		deleteListItem: function(selectorID){

			var el = document.getElementById(selectorID);
			el.parentNode.removeChild(el);
		},

		// New method to clear input fields
		clearFields: function () {

			var fields, fieldsArray;
			// Select input fields (description and value)
			fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue);
			// querySelectorAll outputs a list instead of an array.

			// Convert the list into an array by calling the Array Prototype.
			fieldsArray = Array.prototype.slice.call(fields);

			// Alternative FOR loop: forEach
			// The forEach goes through all input elements and empties them.
			fieldsArray.forEach(function(current, index, array){

				current.value = "";
			});

			// Set the focus to the first element of the array
			fieldsArray[0].focus();

			/*
			NOTE:
			Converting the NodeList to an array is not necessary anymore.
			forEach also works on NodeLists, as the NodeList prototype also has a forEach method.
			 */
		},

		displayBudget: function(obj){

			obj.budget >= 0 ? type = 'inc' : type = 'exp';

			// Add the values to the DOM in the selected classes.
			document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
			document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
			document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');

			// Show the percentage if it's greater than 0
			if(obj.percentage > 0){

				document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
			}
			// Else don't show the percentage
			else{

				document.querySelector(DOMstrings.percentageLabel).textContent = '---';
			}
		},

		displayPercentages: function(percentages){

			// Select all nodes with the class 'item__percentage'. Outputs a node list.
			var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

			// Create own forEach function, that can go through a node list.
			var nodeListForEach = function(list, callback) {

				for(var i = 0; i < list.length; i++){

					// callback becomes the function of the second parameter nodeListForEach and gets executed each iteration.
					callback(list[i], i);
				}
			};

			//
			nodeListForEach(fields, function(current, index){

				if(percentages[index] > 0){

					current.textContent = percentages[index] + '%';
				}
				else{

					current.textContent = '---';
				}
			});
		},

		displayMonth: function(){

			var now, year, month, months;
			now = new Date();

			year = now.getFullYear();

			months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
			month = now.getMonth();

			document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;

		},

		// Set the private object to public
		getDOMstrings: function(){

			return DOMstrings;
		}
	};
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

	var setupEventListeners = function(){

		var DOM = UICtrl.getDOMstrings(); // Call the getDOMstrings function from UICtrl (UIController) to access the DOMstrings object.
		// DOM is moved from the module scope to the function scope, because the strings are only used inside the setupEventListeners function.

		document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

		// gets fired when ANY key is pressed.
		document.addEventListener('keypress', function(event){

			// console.log(event); // returns the keyEvent object of the key that is pressed
			if(event.keyCode === 13 || event.which === 13){

				ctrlAddItem();
			}
		});

		// Add event listener to the container div, by using Event delegation, because the list items are non-existing in the DOM yet.
		document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
	};

	var updateBudget = function(){

		// 1. Calculate the budget
		budgetCtrl.calculateBudget();

		// 2. Return the budget
		var budget = budgetCtrl.getBudget();

		// 3. Display the budget in the UI
		UICtrl.displayBudget(budget);
	};

	var updatePercentages = function(){

		// 1. Calculate the percentages
		budgetCtrl.calculatePercentages();

		// 2. Read percentage from the budget controller
		var percentages = budgetCtrl.getPercentages();

		// 3. Update UI with the new percentages
		UICtrl.displayPercentages(percentages);
	};

	var ctrlAddItem = function(){

		var input, newItem;

		// 1. Get the field input data
		input = UICtrl.getinput();
		//console.log(input);

		// Only add an item when there is something filled in.
		if(input.description !== "" && !isNaN(input.value) && input.value > 0){

			// 2. Add the item to the budget controller
			// Calling the addItem method from the budgetController module.
			// The arguments are available because of the UIcontroller.getinput() at step 1.
			newItem = budgetCtrl.addItem(input.type, input.description, input.value);

			// Clear the fields
			UICtrl.clearFields();

			// 3. Add the item to the UI
			UICtrl.addListItem(newItem, input.type);

			// Calculate and update budget
			updateBudget();

			// 6. Calculate and update percentages
			updatePercentages();
		}
	};

	var ctrlDeleteItem = function(event){

		// this shows the element that is clicked. (.target)

		// Get the unique ID of the row.
		var itemID, splitID, type, id;

		itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

		if(itemID){

			// .split splits a string into a array
			splitID = itemID.split('-');
			type = splitID[0];
			id = parseInt(splitID[1]);

			// 1. Delete item from the data structure
			budgetCtrl.deleteItem(type, id);

			// 2. Delete the item from the UI
			UICtrl.deleteListItem(itemID);

			// 3. Update and show the new budget
			updateBudget();

			// 4. Calculate and update percentages
			updatePercentages();
		}
	};

	return{
		init: function(){

			console.log('Applications has started.');
			UICtrl.displayMonth();
			UICtrl.displayBudget({

				budget: 0,
				totalInc: 0,
				totalExp: 0,
				percentage: -1
			});
			setupEventListeners();
		}
	};
})(budgetController, UIController);

controller.init();