/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, previousRoll, dice;

// Call init function to initialize everything.
init();

// Roll dice by clicking on "ROLL DICE" button
// Event listener for the button
document.querySelector('.btn-roll').addEventListener('click', function () {
	if (gamePlaying) {
		previousRoll = [dice[0], dice[1]];

		// 1. Random number for both dices
		for (var i = 0; i < 2; i++) {

			dice[i] = Math.floor(Math.random() * 6) + 1;

			// Display the dices
			var diceDOM = document.querySelector('.dice' + [i]);
			diceDOM.style.display = 'block';
			diceDOM.src = 'dice-' + dice[i] + '.png';
		}

		// 2. check if one of the dices is 1. If not, count the score otherwise nextPlayer();
		if (!(dice[0] === 1 || dice[1] === 1)) {

			roundScore += dice[0] + dice[1];


			//TODO implement rule two 6's for two dices
			// If rolled two 6's in a row
			if (dice.includes(6) && previousRoll.includes(6)) {

				// reset the round score and the score for the active player
				roundScore = 0;
				scores[activePlayer] = 0;

				// update the UI
				updateGlobalScore();

				// next player
				nextPlayer();
				console.log('Lose everything');
			}

			// Update the round  for the active Player
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		}

		else {

			nextPlayer();
		}
	}
});

// Save the round score and add it to the global score of the player
document.querySelector('.btn-hold').addEventListener('click', function(){

	if(gamePlaying){

		// Add CURRENT score to GLOBAL score
		scores[activePlayer] += roundScore;

		// Update the UI
		updateGlobalScore();
		//document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		var input = parseInt(document.querySelector('.input-end-score').value);
		var endScore;

		if(input){

			endScore = input;
		}

		else{

			endScore = 100;
		}


		// Check if player won the game
		if(scores[activePlayer] >= endScore){

			// Change name to winner, remove the dice, and remove the active class
			document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
			document.querySelector('.dice0').style.display = 'none';
			document.querySelector('.dice1').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

			gamePlaying = false;
		}
		else{
			// Next player
			nextPlayer();
		}
	}
});

// Create new game
document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer(){

	// Switch activePlayer
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 // Ternary operator for simple IF statements.
	roundScore = 0;
	previousRoll = [0, 0];

	// Reset the round scores in the UI
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	// Toggle class from a HTML element
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	// Hide the dice the turn of the player switches
	// document.querySelector('.dice0').style.display = 'none';
	// document.querySelector('.dice1').style.display = 'none';
}

function updateGlobalScore(){
	document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
}

function init(){
	dice = [0, 0];
	scores = [0, 0];
	activePlayer = 0;
	roundScore = 0;
	gamePlaying = true;

	// Change CSS by using querySelector
	document.querySelector('.dice0').style.display = 'none';
	document.querySelector('.dice1').style.display = 'none';

	// Set the scores to 0 via JS
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	// Reset the names to Player 1 and Player 2
	document.getElementById('name-0').textContent = 'Player 1';
	document.getElementById('name-1').textContent = 'Player 2';

	// Reset the CSS classes for both players
	document.querySelector('.player-0-panel').classList.remove('winner');
	document.querySelector('.player-1-panel').classList.remove('winner');
	document.querySelector('.player-0-panel').classList.remove('active');
	document.querySelector('.player-1-panel').classList.remove('active');

	// Set Player 1 to active
	document.querySelector('.player-0-panel').classList.add('active');

}



/*
Three challenges

1. A player loses his ENTIRE score (GLOBAL + ROUND) when he rolls two 6's in a row.
After that, it's the next player's turn. HINT: Always save the previous dice roll in a separate variable)

2. Add an input field to the HTML where players can set the winning score,
so they can change the predefined score of 100.
HINT: you can read that value with the .value property in JS.

3. Add another dice to the game, so that there are two dices now. The player loses
his current score when one of them is a 1.
HINT: you will need CSS to position the second dice, check the CSS for the first one.

 */