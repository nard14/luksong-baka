preloadGame = {
	preload : function (){
	             game.load.image('bg',"img/lbbg.jpg");
        game.load.image('platform',"img/platform.png");
        game.load.image('one',"img/one.png");
        game.load.image('two',"img/two.png");
        game.load.image('about',"img/about.png");
        game.load.image('developers',"img/developers.png");
        game.load.spritesheet('player2','img/playerko.png',100,100);
        game.load.spritesheet('player','img/tao1.png',100,100);
        game.load.image('match','img/2.png');
        game.load.image('btnleft','img/p1.png');
        game.load.image('star','img/mangga.png');
        game.load.image('sky2','img/p2.png');
        game.load.image('gameover','img/refresh.png');
        game.load.image('bg7','img/bg7.png');
    game.load.audio('bgMusic', 'audio/bird.mp3');
    game.load.audio('yay', 'audio/clapping.mp3');
    game.load.audio('boo', 'audio/Boo.mp3');

    game.load.spritesheet('left', 'img/right.png');
    game.load.spritesheet('right', 'img/left.png');


    game.load.image('bg', 'img/bg.jpg');
    game.load.image('bg1', 'img/puno1.png');
    game.load.image('bg2', 'img/ulap.png');
    game.load.image('bg3', 'img/bundok1.png');
    game.load.image('bg4', 'img/bundok2.png'); 
    game.load.image('platform', 'img/platform.png'); 
    game.load.spritesheet('player', 'img/playerko.png',100,100);
    game.load.image('jump', 'img/exact.png'); 
    game.load.image('baka', 'img/baka.png'); 
    game.load.image('mangga', 'img/mangga.png'); 
    game.load.image('refresh', 'img/refresh.png');
    game.load.audio('bgMusic', 'audio/bird.mp3');
    game.load.audio('yay', 'audio/clapping.mp3');
    game.load.audio('boo', 'audio/Boo.mp3');

	},
	create: function(){
		game.state.start('menu');
	}
}