let i = 0;
let phrase = `You have been doing nothing for ${i} seconds.`;

// How you activate it.
function startCounter(){
	document.getElementById('startButton').style.display = "none";
  document.getElementById('nothing-counter').innerHTML = "Wait and stay <span>steady</span>...";
  setTimeout(setAddInterval, 2000);
}

function setAddInterval(){
	setInterval(addI, 1000)
}

// Where the magical counter actually works.
function addI(){
	i++
  document.getElementById('nothing-counter').innerHTML = `You have been doing <span>Nothing</span> for ${i} seconds.`
}