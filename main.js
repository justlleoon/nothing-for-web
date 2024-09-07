let i = 0;
let phrase = `You have been doing nothing for ${i} seconds.`;
let counterInterval;

// How you activate it.
function startCounter(){
	document.getElementById('startButton').style.display = "none";
  document.getElementById('nothing-counter').innerHTML = "Wait and stay <span>steady</span>...";
  setTimeout(setAddInterval, 2000);
}

function setAddInterval(){
	counterInterval	= setInterval(addI, 1000);
  // Makes the player lose on mouse movement
  $(document).mousemove(function(){
  	stopAddI();
  	$("#nothing-counter").text(`You lost and did Nothing for ${i} seconds!`)
  });
  // Makes the player lose on click
  $(document).click(function(){
  	stopAddI();
  	$("#nothing-counter").text(`You lost and did Nothing for ${i} seconds!`)
  });
  // Makes the player lose on keypress
  $(document).keypress(function(){
  	stopAddI();
  	$("#nothing-counter").text(`You lost and did Nothing for ${i} seconds!`)
  });
}

// Where the magical counter actually works.
function addI(){
	// Adds 1 to the variable "i"
	i++
  // Changes the text to match with "i"
  document.getElementById('nothing-counter').innerHTML = `You have been doing <span>Nothing</span> for ${i} seconds.`
}

function stopAddI(){
	clearInterval(counterInterval);
}