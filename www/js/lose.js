loseGame={
	create:function(){
bg3 = game.add.tileSprite(0,
            game.height - game.cache.getImage('bg3').height,
            bounds,
            game.cache.getImage('bg3').height,'bg3');
        bg4 = game.add.tileSprite(0,
            game.height - game.cache.getImage('bg4').height,
            bounds,
            game.cache.getImage('bg4').height,'bg4');

        bg1 = game.add.tileSprite(0,
            game.height - game.cache.getImage('bg1').height,
            bounds,
            game.cache.getImage('bg1').height,'bg1');
        bg2 = game.add.tileSprite(0,
            game.height - game.cache.getImage('bg2').height,
            bounds,
            game.cache.getImage('bg2').height,'bg2');


    this.createBakas(6000); 
    baka = game.add.group(); 
    baka.enableBody = true;
    this.createManggas(6000); 
    mangga = game.add.group(); 
    mangga.enableBody = true; 


            yaymusic = game.add.audio('yay');
            boomusic = game.add.audio('boo');
            bgmusic = game.add.audio('bgMusic');
            bgmusic.play();
            this.loopAudio(6000);


        player = game.add.sprite(300,450,'player');
        player.animations.add('run',[1,0,2], 9, true);
        player.animations.add('jump',[5,6], 1,false);
    game.physics.arcade.enable(player);
    player.body.gravity.y = 300;
        platform = game.add.sprite(0,575,'platform');
    game.physics.startSystem(Phaser.Physics.ARCADE); 
        keyboard = game.input.keyboard.createCursorKeys();
    game.physics.arcade.enable(platform);
        platform.scale.x = 2;
        platform.body.immovable = true;

        button = game.add.button(40,450,'jump',this.pushJump);


    score = game.add.text(550,10,'Score: 0',{fill:'red'}); 
       
    life = game.add.text(550,50,'Life: 3',{fill:'red'}); 

    bestScore = game.add.text(50,10,'Best: '+this.retrieveBest(),{fill:'red'}); 


	},
    update:function(){
bg1.tilePosition.x -=2;
    bg2.tilePosition.x -=0.75;
    bg3.tilePosition.x -=0.25;
    bg4.tilePosition.x -=0.5;    


    game.physics.arcade.collide(platform, baka); 
    game.physics.arcade.collide(player,platform);

    game.physics.arcade.overlap(baka, player, this.killPlayer);
    game.physics.arcade.overlap(mangga, player, this.collectMangga);

 if(player.body.touching.down){
                         
    player.animations.play('jump');
 
} 
else{
    player.animations.play('run')
}

 
   }, pushJump:function (){
    if(player.body.touching.down){
    player.body.velocity.y = -275;
    player.animations.play('jump');
   }
} ,
 createBakas:function(time){ 
    setInterval(function(){ 
        var bakas = baka.create(900,500,'baka'); 
        bakas.body.velocity.x = -300; 
    },time) 
},
 createManggas:function(time){ 
    setInterval(function(){ 
        var manggas = mangga.create(890,450,'mangga'); 
        manggas.body.velocity.x = -300; 
    },time) 
}, 

collectMangga:function (player,mangga){
    if(mangga.kill()){
        a = a + 1;
        score.text = 'Score: '+a;
        yaymusic.play();
        boomusic.stop();
        if(a==5){
    loseGame.createBakas(13000);
        }
        else if(a==10){
    loseGame.createBakas(17000);
        }
    }
},
 killPlayer:function(player,baka){
    if(baka.kill()){
    b = b - 1;
    life.text = 'Life: '+b;
        boomusic.play();
        yaymusic.stop();
}
    if(b==0){
         if(loseGame.retrieveBest() <= a){
                   localStorage.setItem("gameStorage",a);
        }
        reStart = game.add.button(350,350,'refresh', reStart);
          function reStart(){
            window.location.href=window.location.href;
        }
    player.kill();}
},
         retrieveBest:function(){ 
            return ((localStorage.getItem("gameStorage") != null) || (localStorage.getItem("gameStorage") != ""))?localStorage.getItem("gameStorage"):0; 
        },

         loopAudio:function(time){
          setInterval (function (){
            bgmusic.play();
          },time);
        }
    
}