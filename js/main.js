var game;
window.onload =  function() {
//Creates instance of game object and changes canvas size
game = new Phaser.Game(800, 600, Phaser.CANVAS);
game.state.add('MainMenu', MainMenu);
game.state.add('GamePlay', GamePlay);
game.state.add('GameOver', GameOver);
game.state.start('MainMenu');
}
//Declaring variables.
var MainMenu = function(game) {};
var player;
var platforms;
var helpText;
var greenGhost;
var healthBar;

//Decalares Mainmenu prototype
MainMenu.prototype = {
	//loads the mainmenu images
	preload: function(){
		console.log('MainMenu: preload');
	},
	//creates all of the assets
	create: function(){
		console.log("MainMenu: create'")
		//help text
		helpText = game.add.text(330, 110, 'Click spacebar to begin!', { fontSize: '16px', fill: '#EEE8AA' });

	},
	update: function() {
		//console.log("MainMenu: update");
		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
			game.state.start('GamePlay')
		}
	}
}

//Defines actual gameplay
var GamePlay = function(game){};
//loads gameplay assets
GamePlay.prototype = {
	preload: function(){
		console.log("Gameplay: preload");
		game.load.image('greyBackground', 'assets/img/greyBackground.png');
		game.load.image('greyPlatform', 'assets/img/greyPlatform.png');
		game.load.atlas('greenGhost', 'assets/img/greenGhost.png', 'assets/img/greenGhost.json');
		game.load.atlas('player', 'assets/img/player.png', 'assets/img/player.json');
		game.load.atlas('colorbar', 'assets/img/colorbar.png', 'assets/img/colorbar.json');
	},
	//creates the assets
	create: function(){
		console.log("Gameplay: Create");
		 game.world.setBounds(0,0,20000,600);
		 //enables physics 
		 game.physics.startSystem(Phaser.Physics.ARCADE);
		//adds color background(placeholder)
		 var greyBackground = game.add.sprite(0, 0, 'greyBackground');
		 //adds platforms to group
		 platforms = game.add.group();
		 //  enables body for that group
         platforms.enableBody = true;
    	 // creates the ground
    	 var greyPlatform = platforms.create(-60, game.world.height - 90 , 'greyPlatform');
    	 //  scales the ground so it can fit the game width
   		 // The ground doesnt fall or move when jumped on
   		 greyPlatform.body.setSize(20000, 80, 80, 80);
   		 greyPlatform.body.immovable = true;
   		 //helptext
   		 helpText = game.add.text(50, 50, 'Press Q to Leave', { fontSize: '16px', fill: '#EEE8AA' });
   		 //adds Health Bar
	     healthBar = game.add.sprite(9,9, 'colorbar')
	     game.physics.arcade.enable(healthBar);
	     healthBar.enableBody = true;
	     healthBar.body.collideWorldBounds = true;
   		 //adds player
   		 this.player = new Player(game,'player');
   		 this.game.add.existing(this.player);
   		 //camera follows player
   		 game.camera.follow(this.player, null, 0.1, 0.1);
		 //adds green ghost
   		 this.greenGhost = new Enemy(game,'greenGhost', 700);
   		 this.game.add.existing(this.greenGhost);
	},
	update: function (){
		//sets health bar velocity to 0
		healthBar.body.velocity.x = 0;
		var hitPlatform = game.physics.arcade.collide(this.player, platforms);
		var hitPlatformEnemy = game.physics.arcade.collide(this.Enemy, platforms);
		//console.log("Gameplay: update");
		//console.log(hitPlatform);
		//console.log(this.player.body.touching.down);
		//if player presses q game over
	 	if(game.input.keyboard.isDown(Phaser.Keyboard.Q)){
			game.state.start('GameOver');
		}
		//if player pressed up player jump
		if (game.input.keyboard.isDown(Phaser.Keyboard.UP) && this.player.body.touching.down && hitPlatform){
			//makes player go up
            this.player.body.velocity.y = -300;
    	}
    	//green ghost follows player
    	if(this.player.x > this.greenGhost.x){
    				this.greenGhost.body.velocity.x = 80;
    				   	this.greenGhost.scale.x = 1;
						this.greenGhost.play('walk');
    	}else if (this.player.x < this.greenGhost.x){
    					this.greenGhost.body.velocity.x = -80;
    					this.greenGhost.scale.x = -1;
						this.greenGhost.play('walk');
    	} 
	    }
}

//Defines gameover function
var GameOver = function(game){};
GameOver.prototype = {
	//preloads assets
	preload: function(){
		console.log("Gameover:Preload");
		
	},
	//creates assets
	create: function(){
		console.log("Gameover: create");
		//help text
		helpText = game.add.text(320, 380, '(Press Spacebar to startover.)', { fontSize: '16px', fill: '#FF0000' });
	},
	update: function(){
		//console.log("Gameover: Update");
		if(game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
			game.state.start('MainMenu');
		}

	}
}

