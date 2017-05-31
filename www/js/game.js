
var bgmusic, loopAudio, boomusic, yaymusic;
var platform, bgmusic;
var player, player2;
var keyboard;
var match, star, scoreText, scoreText2, lifeText, lifeText2;
var a=0;
var b = 0;
var l = 3;
var l2 = 3;
var bounds = 1500;
var button, button2, buttongo;
var bounds = 1500;
var platform, player, baka, bakas, mangga, manggas;
var score, life, bestScore, reStart;
var a = 0, b = 3;
var bgmusic, loopAudio, boomusic, yaymusic;
var bgbird;
var game = new Phaser.Game(800,600, Phaser.CANVAS, '');

	game.state.add('boot',bootGame);
	game.state.add('preload',preloadGame);
	game.state.add('menu',menuGame);
	game.state.add('play', playGame);
	game.state.add('win', winGame);
	game.state.add('lose',loseGame);
	game.state.add('game', game);

	//	Now start the Boot state.
	game.state.start('boot');
