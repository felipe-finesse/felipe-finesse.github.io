var i = 0;
var txt = 'Frog Website 2';
var speed = 150;

//Cool typing effect (courtesy of WS3SCHOOl or whatever that shit is called)
function typeWriter() {
	if (i < txt.length) {
		document.getElementById("startText").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
	
}

//When viewer clicks '>begin'
function begin() {
	randomSong();
	document.getElementById('frogPic').style.display='block';
	document.getElementById('startPrompt').style.display='none';
	document.getElementById("button").className = 'show';
}

//Chooses Song to play
function randomSong (){
	songChoice = getRandomInt(3);
	switch(songChoice) {
		case 0:
			playSong("shopSong")
			break;
		case 1:
			playSong("discoSong")
			break;
		case 2:
			playSong("boomySong")
			break;
	}
}

//Plays Song
function playSong(song) {
	var audio = document.getElementById(song);
	audio.play();
}

//Random Integer Generator
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}