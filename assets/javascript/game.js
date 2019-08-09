//Define variables and initialize when game loads.

let gameRandNum = Math.floor(Math.random()*(120 - 19 + 1) + 19);
let winCount = 0;
let loseCount = 0;
let diamondHit = Math.floor(Math.random()*(12 - 1 + 1) + 1);
let rubyHit = Math.floor(Math.random()*(12 - 1 + 1) + 1);
let emeraldHit = Math.floor(Math.random()*(12 - 1 + 1) + 1);
let sapphireHit = Math.floor(Math.random()*(12 - 1 + 1) + 1);
let userTotalScore = 0;

//Re-initialize game variables with new random numbers at the end of each game.
function initCrystalValues(){
    diamondHit = Math.floor(Math.random()*(12 - 1 + 1) + 1);
    rubyHit = Math.floor(Math.random()*(12 - 1 + 1) + 1);
    emeraldHit = Math.floor(Math.random()*(12 - 1 + 1) + 1);
    sapphireHit = Math.floor(Math.random()*(12 - 1 + 1) + 1);
}

//Define function to determine wins or loses. And clear score board and Generate random number to match.

function startPlay(){
    if(userTotalScore === gameRandNum){
		winCount++;
		document.getElementById('wins').innerText = winCount;
		document.getElementById('win-or-lose').innerText = "YOU WIN!!";
		gameRandNum = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		document.getElementById('random-number').innerText = gameRandNum;
		userTotalScore = 0;
		document.getElementById('current-score-counter').innerText = userTotalScore;
		initCrystalValues();
	} else if(userTotalScore > gameRandNum){
		loseCount++;
		document.getElementById('losses').innerText = loseCount;
		document.getElementById('win-or-lose').innerText = "YOU LOSE!!";
		gameRandNum = Math.floor(Math.random()*(120 - 19 + 1) + 19);
		document.getElementById('random-number').innerText = gameRandNum;
		userTotalScore = 0;
		document.getElementById('current-score-counter').innerText = userTotalScore;
		initCrystalValues();
	}
}

document.getElementById("random-number").innerText = gameRandNum;

//Define event listeners for each crystal.

document.getElementById("diamond").addEventListener('click', function(){
	userTotalScore += diamondHit;
	document.getElementById('current-score-counter').innerText = userTotalScore;
	document.getElementById("win-or-lose").innerText = "";
	startPlay();
});

document.getElementById("ruby").addEventListener('click', function(){
	userTotalScore += rubyHit;
	document.getElementById('current-score-counter').innerText = userTotalScore;
	document.getElementById("win-or-lose").innerText = "";
	startPlay();
});

document.getElementById("emerald").addEventListener('click', function(){
	userTotalScore += emeraldHit;
	document.getElementById('current-score-counter').innerText = userTotalScore;
	document.getElementById("win-or-lose").innerText = "";
	startPlay();
});

document.getElementById("sapphire").addEventListener('click', function(){
	userTotalScore += sapphireHit;
	document.getElementById('current-score-counter').innerText = userTotalScore;
	document.getElementById("win-or-lose").innerText = "";
	startPlay();
});
