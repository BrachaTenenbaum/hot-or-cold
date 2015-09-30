/*--- Computer selects random number ---*/
function selectNumber() {

	var selectedNumber = Math.floor((Math.random()*100)+1);
	console.log("Generated Random Number = "+ selectedNumber);

	return selectedNumber;

}

var guessNumber;
var numberOfGuesses = 0;
var randomNumber;


	/*--- Track number of guesses ---*/
	function tracking() {
		numberOfGuesses++;
		$('#count').text(numberOfGuesses);
		console.log("Yes", numberOfGuesses);
	}

	/*--- Track the guesses (5/18)---*/
	function trackGuesses() {
		$("#guessList").prepend('<li>' + guessNumber + '</li>');
		console.log("TrackGuesses");
	}

	/*--- Clear the tracked guesses (6/2)---*/
	function clearGuesses() {
		//var ul = document.getElementById('guessList');
		/*while(ul.children.length > 0) {
			ul.removeChild(ul.firstChild);
		}*/
 		//ul.innerHTML = '';
 		$('#guessList').empty();
	}


  	/*--- Clear the text box ---*/
	function clearText() {
		$('#userGuess').val('');
		console.log("Clear");
	}

	/*--- Bring Guess Tracker back to 0 (added 5/18-- continues to add from previous game..)---*/
	function clearGuessTracker() {
		$("#count").text(0);
		numberOfGuesses = 0;
		console.log("ClearTracking");
	}

	/*--- Clear the Hot/cold Feedback (6/2)---*/
	function clearFeedback() {
		$("#feedback").text("Make your Guess!");
	}

	function newGame() {
		clearFeedback();
		clearText();
		clearGuessTracker();
		randomNumber = selectNumber();
		clearGuesses();
		 

	}

  	/*--- Hot or Cold ---*/
  		function playGame(answer) { 

		var guessNumber = $("#userGuess").val();
			console.log("guessNumber", guessNumber);	

		var guessChecker = (Math.abs(guessNumber - answer));
			console.log("guessChecker", guessChecker);


		if(guessChecker === 0) {
			$("#feedback").replaceWith("<h2 id='feedback'>" + "You got it right - press the New Game button to start again!" + "</h2>");
		}

		else if(guessChecker >= 30 && guessChecker <=49) {
			$("#feedback").replaceWith("<h2 id='feedback'>" + "You're cold!" + "</h2>");
		}

		else if(guessChecker >= 20 && guessChecker <=29) {
			$("#feedback").replaceWith("<h2 id='feedback'>" + "You're warm!" + "</h2>");
		}

		else if(guessChecker >= 10 && guessChecker <=19) {
			$("#feedback").replaceWith("<h2 id='feedback'>" + "You're hot!" + "</h2>");
		}

		else if(guessChecker >= 1 && guessChecker <=9) {
			$("#feedback").replaceWith("<h2 id='feedback'>" + "You're burning up!" + "</h2>");
		}

		else {
			$("#feedback").replaceWith("<h2 id='feedback'>" + "You're freezing!" + "</h2>");
		}

	}


$(document).ready(function() {

	/*--- On ready: New Game ---*/
	$("form").submit(function(event){
		console.log("On submit");
		event.preventDefault();
		guessNumber = $("#userGuess").val();
		tracking();
		playGame(randomNumber);
		clearText();
		trackGuesses();
		 
	
	});

	/*--- Click New Game (added 5/18 + create new function here newGame) ---*/
	$("a.new").click(function() {
		event.preventDefault();
			newGame();

	});


	/*--- Display information modal box ---*/

  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/

  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  		newGame();

}); 
 
	