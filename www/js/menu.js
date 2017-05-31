menuGame = {
	create:function(){
 	bg = game.add.image(0,0,"bg")

 	button = game.add.button(game.width/2-50,game.height/2-50,'one',this.one);
 	button = game.add.button(game.width/2-50,game.height/2+50,'two',this.two);
 	button = game.add.button(game.width/2-50,game.height/2+120,'about',this.about);
 	console.log(menuGame);
	},
	update:function(){

	},
	one:function(){
	game.state.start('lose');
	},
	two:function(){
	game.state.start('play');
	},
	about:function(){
	game.state.start('win');
	}
}