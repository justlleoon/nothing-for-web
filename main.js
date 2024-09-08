let i;
let counterInterval;

// How you activate it.
function startCounter(){
  i = 0;
  $("#startButton").hide()
  document.getElementById('nothing-counter').innerHTML = "Wait and stay <span>steady</span>...";
  setTimeout(setAddInterval, 2000);
}

function setAddInterval(){
	counterInterval	= setInterval(addI, 1000);
  // Makes the player lose on mouse movement
  $(document).mousemove(function(){
  	stopAddI();
  });
  // Makes the player lose on click
  $(document).click(function(){
  	stopAddI();
  });
  // Makes the player lose on keypress
  $(document).keypress(function(){
  	stopAddI();
  });
}

// Where the magical counter actually works.
function addI(){
	// Adds 1 to the variable "i"
	i++
  // Changes the text to match with "i"
  document.getElementById('nothing-counter').innerHTML = `You have been doing <span>Nothing</span> for ${i} seconds.`
}

// A function where if you lose it stops counting "i". 
function stopAddI(){
	clearInterval(counterInterval);
  $("#nothing-counter").text(`You lost and did Nothing for ${i} seconds! Refresh the page to play again.`);
}
