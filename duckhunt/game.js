// Erica Schwartz
// game.js
// October 8, 2015

// init
// called when page loads
var level = 0;
function init() {
	var intervalID = window.setInterval(animate, 500);
}

// Most of this code is inspired by ideas from:
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images
function animate() {
	var img = new Image();
	var ctx = document.getElementById('game_canvas').getContext('2d');
	img.onload = function(){
		ctx.clearRect(0,0,300,300);
    	ctx.drawImage(img,0,0);
  	};
	img.src = 'duckhunt-background.gif';

	var duck_a = new Image();	
	var ctx = document.getElementById('game_canvas').getContext('2d');
	duck_a.onload = function(){
    	ctx.drawImage(duck_a, 0, 112, 40, 40, (level + 50) % 180, 60, 40, 40);
  	};
	duck_a.src = 'duckhunt_various_sheet.png';

	var duck_b = new Image();
	var ctx = document.getElementById('game_canvas').getContext('2d');
	duck_b.onload = function() {
    	ctx.drawImage(duck_b, 260, 112, 40, 40, (level + 100) % 180, 60, 40, 40);
  	};
	duck_b.src = 'duckhunt_various_sheet.png';

	level += 1;
}
