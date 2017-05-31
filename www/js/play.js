playGame={
	create:function(){
 game.add.image(0,0,'bg');
        platform = game.add.sprite(0,568,'platform');
        platform.scale.x=2;
        Leftbutton = game.add.button(650,370,'left',this.pushJump2);
        Rightbutton = game.add.button(50,370,'right',this.pushRight2);

        player = game.add.sprite(100,410,'player');
        player.animations.add('run',[1,0,2],9,true);
        player2 = game.add.sprite(0,610,'player2');
        player2.animations.add('run1',[1,0,2],9,true);
        match = game.add.sprite(350,400,'match');
        match.scale.y=0.75;
        star = game.add.sprite(650,500,'star');
        bg1 = game.add.tileSprite(0,
            game.height - game.cache.getImage('bg7').height,
            bounds,
            game.cache.getImage('bg7').height,'bg7');



        game.physics.arcade.enable(player);
        game.physics.arcade.enable(player2);
        // game.physics.arcade.enabled(platform);
        game.physics.arcade.enable(platform);
        game.physics.arcade.enable(match);
        game.physics.arcade.enable(star);

        platform.body.immovable = true;
        match.body.immovable = true;

        // platform.body.collideWorldBounds = true;
        player.body.collideWorldBounds = true;
        player.body.gravity.y=1000;
        player2.body.collideWorldBounds = true;
        player2.body.gravity.y=1000;
        match.body.collideWorldBounds = true;
        match.body.gravity.y=1000;

    scoreText = game.add.text(550,20,'PLAYER 1',{ fontSize: '30px', fill: 'purple' });
    scoreText2 = game.add.text(50,20,'PLAYER 2',{ fontSize: '30px', fill: 'purple' });

    scoreText = game.add.text(550,50,'Score: 0',{ fontSize: '20px', fill: 'purple' });
    scoreText2 = game.add.text(50,50,'Score: 0',{ fontSize: '20px', fill: 'purple' });
    lifeText = game.add.text(550,80,'life: 3',{ fontSize: '20px', fill: 'purple' });
    lifeText2 = game.add.text(50,80,'life: 3',{ fontSize: '20px', fill: 'purple' });

    
            yaymusic = game.add.audio('yay');
            boomusic = game.add.audio('boo');
            bgmusic = game.add.audio('bgMusic');
            bgmusic.play();
            this.loopAudio(6000);
 
	},
	update:function(){
      game.physics.arcade.collide(player,platform);
        game.physics.arcade.collide(player2,platform);
        // game.physics.arcade.collide(player,match);
        game.physics.arcade.collide(platform,match);

        game.physics.arcade.overlap(player,star,this.collectStar);
        game.physics.arcade.overlap(player2,star,this.collectStar2);

        game.physics.arcade.overlap(player,match,this.killMatch);
        game.physics.arcade.overlap(player2,match,this.killMatch2);

        bg1.tilePosition.x -= 1;


 //    if(keyboard.up.isDown && player.body.touching.down){
 //        player.body.velocity.y = -600;
 //    }
 //    else if(keyboard.right.isDown){
 //     player.body.velocity.x=400;
 //    }
 //    else{
 //     // player.body.velocity.x=0;
 //    }
 //    }		
	},
    collectStar:function(player,star){
            a = a+ 5;
            if(star.kill()){
    scoreText.text = "Score: "+a;
        yaymusic.play();
        button = game.add.button(350,300,'btnleft',playGame.btnleft1);
            }
        },
        
        loopAudio:function(time){
          setInterval (function (){
            bgmusic.play();
          },time);
        },
     btnleft1:function(){
                game.input.onTap.addOnce(playGame.restart);
                button.destroy();
                yaymusic.stop();
                boomusic.stop();
            if(a==0){
               match.revive();
               match.reset(350,400);
               match.scale.y=0.75;
                button.destroy();
            }
            else if(a==5){
               match.revive();
               match.reset(350,400);
               match.scale.y=1;
                button.destroy();
            }
            else if(a==10){
               match.revive();
               match.reset(350,400);
               match.scale.y=1.25;
                button.destroy();
            }
            else if(a==15){
               match.revive();
               match.reset(350,400);
               match.scale.y=1.5;
                button.destroy();
            }
            else if(a==20){
               match.revive();
               match.reset(350,400);
               match.scale.y=1.75;
                button.destroy();
            }
            else if(a==30){
               match.revive();
               match.reset(350,400);
               match.scale.y=2.5;
                button.destroy();
            }
    },
         collectStar2:function(player,star){
            b = b+ 5;
            if(star.kill()){
    scoreText2.text = "Score: "+b;
        yaymusic.play();
        button2 = game.add.button(350,300,'sky2',playGame.btnply2);
            }
        },
     btnply2:function(){
   star.reset(650,500);

               match.reset(350,400);
                game.input.onTap.addOnce(playGame.restart2);
                button2.destroy();
                yaymusic.stop();
                boomusic.stop();
            if(b==0){
               match.revive();
               match.reset(350,400);
               match.scale.y=0.75;
                button2.destroy();
            }
            else if(b==5){
               match.revive();
               match.reset(350,400);
               match.scale.y=1;
                button2.destroy();
            }
            else if(b==10){
               match.revive();
               match.reset(350,400);
               match.scale.y=1.25;
                button2.destroy();
            }
            else if(b==15){
               match.revive();
               match.reset(350,400);
               match.scale.y=1.5;
                button2.destroy();
            }
            else if(b==20){
               match.revive();
               match.reset(350,400);
               match.scale.y=1.75;
                button2.destroy();
            }
            else if(b==25){
               match.revive();
               match.reset(350,400);
               match.scale.y=2;
                button2.destroy();
            }
            else if(b==30){
               match.revive();
               match.reset(350,400);
               match.scale.y=2.5;
                button2.destroy();
            }
        },
    

         killMatch:function(player,match){
            if(player.kill()){
                l = l - 1;
                lifeText.text="life: "+l;
        boomusic.play();
            }
        button2 = game.add.button(350,300,'sky2',playGame.btnply2);
            if(l==0 && l2==0){
                button.destroy();
                button2.destroy();
                if(a>b){
    scoreText = game.add.text(100,150,'PLAYER 1 wins',{ fontSize: '80px', fill: 'pink' });
    scoreText = game.add.text(260,250,'Player1 Score: '+a,{ fontSize: '40px', fill: 'purple' });
    scoreText = game.add.text(260,300,'Player2 Score: '+b,{ fontSize: '40px', fill: 'purple' });
        
                }
                else if(a<b){
    scoreText = game.add.text(100,150,'PLAYER 2 wins',{ fontSize: '80px', fill: 'grey' });
    scoreText = game.add.text(260,250,'Player1 Score: '+a,{ fontSize: '40px', fill: 'purple' });
    scoreText = game.add.text(260,300,'Player2 Score: '+b,{ fontSize: '40px', fill: 'purple' });
                }
                else if(a==b){
    scoreText = game.add.text(350,150,'DRAW',{ fontSize: '50px', fill: 'purple' });
    scoreText = game.add.text(260,250,'Player1 Score: '+a,{ fontSize: '40px', fill: 'purple' });
    scoreText = game.add.text(260,300,'Player2 Score: '+b,{ fontSize: '40px', fill: 'purple' });
                }
                else if(b==a){
    scoreText = game.add.text(350,150,'DRAW',{ fontSize: '50px', fill: 'purple' });
    scoreText = game.add.text(260,250,'Player1 Score: '+a,{ fontSize: '40px', fill: 'purple' });
    scoreText = game.add.text(260,300,'Player2 Score: '+b,{ fontSize: '40px', fill: 'purple' });
                }
    buttongo = game.add.button(300,350,'gameover', this.overgame);
    match.destroy();
    star.destroy();
            }
        },
         killMatch2:function(player2,match){
            if(player2.kill()){
                l2 = l2 - 1;
                lifeText2.text="life: "+l2;
        boomusic.play();
            }
            // if(l2!=0){
        button = game.add.button(350,300,'btnleft',playGame.btnleft1);
            if(l==0 && l2==0){
                button.destroy();
                button2.destroy();
                if(a>b){
    scoreText = game.add.text(100,150,'PLAYER 1 wins',{ fontSize: '80px', fill: 'pink' });
    scoreText = game.add.text(260,250,'Player1 Score: '+a,{ fontSize: '40px', fill: 'purple' });
    scoreText = game.add.text(260,300,'Player2 Score: '+b,{ fontSize: '40px', fill: 'purple' });
                }
                else if(a<b){
    scoreText = game.add.text(100,150,'PLAYER 2 wins',{ fontSize: '80px', fill: 'grey' });
    scoreText = game.add.text(260,250,'Player1 Score: '+a,{ fontSize: '40px', fill: 'purple' });
    scoreText = game.add.text(260,300,'Player2 Score: '+b,{ fontSize: '40px', fill: 'purple' });
                }
                else if(a==b){
    scoreText = game.add.text(350,150,'DRAW',{ fontSize: '50px', fill: 'purple' });
    scoreText = game.add.text(260,250,'Player1 Score: '+a,{ fontSize: '40px', fill: 'purple' });
    scoreText = game.add.text(260,300,'Player2 Score: '+b,{ fontSize: '40px', fill: 'purple' });
                }
                else if(b==a){
    scoreText = game.add.text(350,150,'DRAW',{ fontSize: '50px', fill: 'purple' });
    scoreText = game.add.text(260,250,'Player1 Score: '+a,{ fontSize: '40px', fill: 'purple' });
    scoreText = game.add.text(260,300,'Player2 Score: '+b,{ fontSize: '40px', fill: 'purple' });
                }
    buttongo = game.add.button(300,350,'gameover', playGame.overgame);
    match.destroy();
    star.destroy();
            }
        },
             restart:function () {
           player.revive();
           player.reset(0,410)
           star.revive();
           star.reset(650,500)
            },

             restart2:function () {
           player2.revive();
           player2.reset(0,410)
           star.revive();
           star.reset(650,500)
            },

         pushRight2:function(){
          player.animations.play('run');
          player2.animations.play('run1');
            player2.body.velocity.x=300;
            player.body.velocity.x=300;
        },
         pushJump2:function(){
          player.animations.stop();
          player2.animations.stop();
    if(player.body.touching.down){
        if(a==0){
        player.body.velocity.y = -475;
    }
    else if(a==5){
    player.body.velocity.y = -525;
    }
    else if(a==10){
    player.body.velocity.y = -550;
    }
    else if(a==15){
    player.body.velocity.y = -600;
    }
    else if(a==20){
    player.body.velocity.y = -625;
    }
    else if(a==25){
    player.body.velocity.y = -650;
    }
    else if(a==30){
    player.body.velocity.y = -675;
    }
    }
    if(player2.body.touching.down){
        if(b==0){
        player2.body.velocity.y = -500;
    }
    else if(b==5){
    player2.body.velocity.y = -525;
    }
    else if(b==10){
    player2.body.velocity.y = -550;
    }
    else if(b==15){
    player2.body.velocity.y = -600;
    }
    else if(b==20){
    player2.body.velocity.y = -625;
    }
    else if(b==25){
    player2.body.velocity.y = -650;
    }
    else if(b==30){
    player2.body.velocity.y = -675;
    }
    }
        },
         overgame:function(){
            window.location.href=window.location.href;
        }
}