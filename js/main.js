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
var counter = 0;
var attacked;
var attackedWrath;
var attackedEnvy;
var ver1;
var ver2;
var jump;
var wall;
var walk;
var hitObstacleEnemy;
var hitObstacleWrathEnemy;
var hitObstacleEnvyEnemy;
var hitObstaclePlayer;
var hitPlatform;
var hitPlatformEnemy;
var hitPlatformWrathEnemy;
var hitPlatformEnvyEnemy;
var wand;
var wandSound;
var oneWand = false;
var wandAttack = false;
var firstGreen = false;
var secondGreen = false;
var thirdGreen = false;
var fourthGreen = false;
var wrath;
var firstWrath = false;
var secondWrath = false;
var thirdWrath = false;
var fourthWrath = false; 
var envy;
var firstEnvy = false;
var secondEnvy = false;
var thirdEnvy = false;
var fourthEnvy = false;
var ghostCollision;
var heart;
var startButton;
var wandAttackSound;
var backButton;
var flame;
var walkLimit
var secondWrath;

//Decalares Mainmenu prototype
MainMenu.prototype = {
	//loads the mainmenu images
	preload: function(){
		console.log('MainMenu: preload');
		game.load.image('particle', 'assets/img/particle.png');
	},
	//creates all of the assets
	create: function(){
		console.log("MainMenu: create'")
		//help text
		helpText = game.add.text(330, 110, 'Click the weird particle thingy to begin', { fontSize: '16px', fill: '#EEE8AA' });
		//adds start button
		startButton = game.add.sprite(0, 0, 'particle');
		startButton.inputEnabled = true;
		startButton.events.onInputDown.add(startGame, this);
		function startGame(){
			game.state.start('GamePlay');
		}
	},
	update: function() {
		counter = 0;
		oneWand = false;
		wandAttack = false;
		firstGreen = false;
		secondGreen = false;
		thirdGreen = false;
		fourthGreen = false;
		firstWrath = false;
		secondWrath = false;
		thirdWrath = false;
		fourthWrath = false;
		firstEnvy = false;
		secondEnvy = false;
	 	thirdEnvy = false;
		fourthEnvy = false;
	
	},
}
//Defines actual gameplay
var GamePlay = function(game){};
var pauseButton;
var unpauseButton;
var puaseText;
//loads gameplay assets
GamePlay.prototype = {
	preload: function(){
		console.log("Gameplay: preload");
		game.load.image('greyBackground', 'assets/img/greyBackground.png');
		game.load.image('greyPlatform', 'assets/img/greyPlatform.png');
        game.load.image('obstacle4', 'assets/img/obstacle4.png');
        game.load.image('obstacle5', 'assets/img/obstacle5.png');
        game.load.image('obstacle6', 'assets/img/obstacle6.png');
        game.load.image('arm', 'assets/img/arm.png');
        game.load.image('arm2', 'assets/img/arm2.png');
		game.load.atlas('greenGhost', 'assets/img/greenGhost.png', 'assets/img/greenGhost.json');
		game.load.atlas('player', 'assets/img/player.png', 'assets/img/player.json');
		game.load.atlas('colorbar', 'assets/img/colorbar.png', 'assets/img/colorbar.json');
		game.load.atlas('wand', 'assets/img/wand.png', 'assets/img/wand.json');
		game.load.atlas('envy', 'assets/img/envy.png', 'assets/img/envy.json');
		game.load.atlas('wrath', 'assets/img/wrath.png', 'assets/img/wrath.json');
		game.load.atlas('heart', 'assets/img/heart.png', 'assets/img/heart.json');
		game.load.atlas('fire', 'assets/img/fire.png', 'assets/img/fire.json');
		game.load.atlas('plantObstacles', 'assets/img/plantObstacles.png', 'assets/img/plantObstacles.json');
		game.load.image('particle', 'assets/img/particle.png');
		game.load.audio('ver1', 'assets/audio/Finding_Nouv_ver1.mp3');
		game.load.audio('jump', 'assets/audio/jump4.mp3');
		game.load.audio('ver2', 'assets/audio/Finding_Nouv_ver2.mp3');
		game.load.audio('walk', 'assets/audio/walk5.mp3');
		game.load.audio('wall', 'assets/audio/wall.mp3');
		game.load.audio('wandSound', 'assets/audio/wand2.mp3');
		game.load.audio('wandAttackSound', 'assets/audio/wandAttackSound.mp3');
		game.load.image('pause', 'assets/img/pause.png');
	},
	//creates the assets
	create: function(){
		console.log("Gameplay: Create");
		 //defines music
		 ver1 = game.add.audio('ver1');
		 ver2 = game.add.audio('ver2');
		//sets bounds
		 game.world.setBounds(0,0,20000,600);
		 //adds all audio and sound effects
		 ver1.play('', 0, 0.25, true);
		 wall = game.add.audio('wall');
		 walk = game.add.audio('walk');
		 wandSound = game.add.audio('wandSound');
		 jump = game.add.audio('jump');
		 wandAttackSound = game.add.audio('wandAttackSound');
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
   		 //adds obstacles to group
   		 obstacles = game.add.group();
   		 //enables body for that group
	 	 obstacles.enableBody = true;
    	 //makes obstacles
    	 var obstacle1 = obstacles.create(540, game.world.height - 200, 'obstacle5');
    	 //makes obstacle immovable
    	 obstacle1.body.immovable = true;
    	 var obstacle1 = obstacles.create(580, game.world.height - 300, 'obstacle5');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(600, game.world.height - 250, 'arm');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(520, game.world.height - 150, 'obstacle5'); 
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(500, game.world.height - 100, 'obstacle5');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(480, game.world.height - 50, 'obstacle5');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(560, game.world.height - 250, 'obstacle5');
    	 obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(600, game.world.height - 350, 'obstacle5');
    	 obstacle1.body.immovable = true;
    	 var obstacle1 = obstacles.create(600, game.world.height - 250, 'obstacle4');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(2000, game.world.height - 250, 'obstacle5');
    	 obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(1900, game.world.height - 150, 'arm2');
    	 obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(1880, game.world.height - 150, 'obstacle4');
    	 obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(2050, game.world.height - 100, 'obstacle5');
    	 obstacle1.body.immovable = true;
    	 var obstacle1 = obstacles.create(1980, game.world.height - 200, 'obstacle6');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(1860, game.world.height - 100, 'obstacle5');
    	 obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(1840, game.world.height - 50, 'obstacle5');
         obstacle1.body.immovable = true;  //
         var obstacle1 = obstacles.create(2750, game.world.height - 50, 'obstacle5');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(2770, game.world.height - 100, 'obstacle5');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(2800, game.world.height - 150, 'obstacle5');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(2830, game.world.height - 200, 'obstacle5');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(2860, game.world.height - 250, 'obstacle5');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(2890, game.world.height - 300, 'obstacle5');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(2930, game.world.height - 250, 'obstacle5');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(2960, game.world.height - 200, 'obstacle5');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(2990, game.world.height - 250, 'obstacle5');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(3030, game.world.height - 300, 'obstacle5');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(3120, game.world.height - 300, 'obstacle4');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(3920, game.world.height - 200, 'obstacle4');
         obstacle1.body.immovable = true;//
         var obstacle1 = obstacles.create(4000, game.world.height - 250, 'obstacle5');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(3900, game.world.height - 150, 'arm2');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(3880, game.world.height - 150, 'obstacle4');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(4050, game.world.height - 100, 'obstacle5');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(3980, game.world.height - 200, 'obstacle6');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(3860, game.world.height - 100, 'obstacle5');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(3840, game.world.height - 50, 'obstacle5');
         obstacle1.body.immovable = true;/////
         var obstacle1 = obstacles.create(4100, game.world.height - 200, 'obstacle6');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(4200, game.world.height - 100, 'obstacle5');
    	 obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(4300, game.world.height - 50, 'obstacle5');
         obstacle1.body.immovable = true;  
         var obstacle1 = obstacles.create(4380, game.world.height - 100, 'obstacle5');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(4430, game.world.height - 60, 'obstacle5');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(4460, game.world.height - 150, 'arm2');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(4500, game.world.height - 150, 'obstacle4');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(4550, game.world.height - 100, 'obstacle5');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(4580, game.world.height - 200, 'obstacle6');
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(4600, game.world.height - 100, 'obstacle5');
         obstacle1.body.immovable = true;
      
         var obstacle1 = obstacles.create(5800, game.world.height - 60, 'plantObstacles', 0);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(5900, game.world.height - 90, 'plantObstacles', 1);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(6000, game.world.height - 120, 'plantObstacles', 2);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(6200, game.world.height - 100, 'plantObstacles', 3);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(6300, game.world.height - 100, 'plantObstacles', 9);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(6350, game.world.height - 130, 'plantObstacles', 7);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(5670, game.world.height - 40, 'plantObstacles', 10);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(5700, game.world.height - 80, 'plantObstacles', 6);
         obstacle1.body.immovable = true;  

         var obstacle1 = obstacles.create(6380, game.world.height - 50, 'plantObstacles', 10);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(6430, game.world.height - 60, 'plantObstacles', 11);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(6460, game.world.height - 80, 'plantObstacles', 12);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(6500, game.world.height - 100, 'plantObstacles', 13);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(6550, game.world.height - 100, 'plantObstacles', 15);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(6580, game.world.height - 150, 'plantObstacles', 14);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(6600, game.world.height - 100, 'plantObstacles', 16);
         obstacle1.body.immovable = true;
       

         var obstacle1 = obstacles.create(6640, game.world.height - 200, 'plantObstacles', 14);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(6680, game.world.height - 250, 'plantObstacles', 16);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(6700, game.world.height - 295, 'plantObstacles', 9);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(7348, game.world.height - 70, 'plantObstacles', 11);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(7320, game.world.height - 40, 'plantObstacles', 10);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(7250, game.world.height - 90, 'plantObstacles', 7);
         obstacle1.body.immovable = true; 


		 var obstacle1 = obstacles.create(6800, game.world.height - 150, 'plantObstacles', 5);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(6730, game.world.height - 220, 'plantObstacles', 2);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(6960, game.world.height - 130, 'plantObstacles', 1);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(7150, game.world.height - 140, 'plantObstacles', 2);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(7350, game.world.height - 170, 'plantObstacles', 3);
         obstacle1.body.immovable = true;   
         var obstacle1 = obstacles.create(7530, game.world.height - 150, 'plantObstacles', 4);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(6880, game.world.height - 100, 'plantObstacles', 6);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(7100, game.world.height - 80, 'plantObstacles', 11);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(7470, game.world.height - 100, 'plantObstacles', 8);
         obstacle1.body.immovable = true;             


         var obstacle1 = obstacles.create(7840, game.world.height - 30, 'plantObstacles', 15);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(8030, game.world.height - 180, 'plantObstacles', 19);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(8250, game.world.height - 230, 'plantObstacles', 12);
 		 obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(8640, game.world.height - 100, 'plantObstacles', 22);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(8840, game.world.height - 200, 'plantObstacles', 14);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(8960, game.world.height - 250, 'plantObstacles', 16);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(9100, game.world.height - 130, 'plantObstacles', 8);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(9360, game.world.height - 130, 'plantObstacles', 7);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(9248, game.world.height - 130, 'plantObstacles', 12);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(9100, game.world.height - 230, 'plantObstacles', 9);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(9360, game.world.height - 230, 'plantObstacles', 17);
         obstacle1.body.immovable = true;

         var obstacle1 = obstacles.create(9502, game.world.height - 200, 'plantObstacles', 17);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(9580, game.world.height - 250, 'plantObstacles', 16);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(9672, game.world.height - 300, 'plantObstacles', 17);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(9780, game.world.height - 295, 'plantObstacles', 12);
         obstacle1.body.immovable = true; 

         var obstacle1 = obstacles.create(9860, game.world.height - 50, 'plantObstacles', 5);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(9980, game.world.height - 100, 'plantObstacles', 7);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(10080, game.world.height - 30, 'plantObstacles', 15);
         obstacle1.body.immovable = true;  
         var obstacle1 = obstacles.create(10057, game.world.height - 80, 'plantObstacles', 9);
         obstacle1.body.immovable = true;  
         var obstacle1 = obstacles.create(10280, game.world.height - 250, 'plantObstacles', 19);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(10348, game.world.height - 100, 'plantObstacles', 14);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(10637, game.world.height - 100, 'plantObstacles', 17);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(10667, game.world.height - 100, 'plantObstacles', 9);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(10348, game.world.height - 100, 'plantObstacles', 14);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(10667, game.world.height - 200, 'plantObstacles', 9);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(10960, game.world.height - 200, 'plantObstacles', 20);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(11800, game.world.height - 150, 'plantObstacles', 18);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(11183, game.world.height - 100, 'plantObstacles', 9);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(11380, game.world.height - 200, 'plantObstacles', 21);
         obstacle1.body.immovable = true;   
         var obstacle1 = obstacles.create(11580, game.world.height - 100, 'plantObstacles', 11);
         obstacle1.body.immovable = true;         
   		 //helptext      
   		 //helptext
   		 helpText = game.add.text(50, 90, 'Press pause button to pause the game.', { fontSize: '16px', fill: '#EEE8AA' });
   		 //adds Health Bar
	     healthBar = game.add.sprite(9,9, 'colorbar')
		 healthBar.fixedToCamera = true;
		 //adds healthbar animations
		 healthBar.animations.add('one', Phaser.Animation.generateFrameNames('bar',1, 1, ''),30, false);
		 healthBar.animations.add('two', Phaser.Animation.generateFrameNames('bar',2, 2, ''),30, false);
		 healthBar.animations.add('three', Phaser.Animation.generateFrameNames('bar',3, 3, ''),30, false);
		 healthBar.animations.add('four', Phaser.Animation.generateFrameNames('bar',4, 4, ''),30, false);
		 healthBar.animations.add('five', Phaser.Animation.generateFrameNames('bar',5, 5, ''),30, false);
		 healthBar.animations.add('six', Phaser.Animation.generateFrameNames('bar',6, 7, ''),30, true);
		 healthBar.animations.add('seven', Phaser.Animation.generateFrameNames('bar',7, 7,''),30, false);
		 //adds wrath group
		 wrathG = game.add.group()
   		 //adds player
   		 player = new Player(game,'player');
   		 game.add.existing(player);
   		 //adds greenghost to group
   		 ghost = game.add.group();
   		  //camera follows player
   		 game.camera.follow(player, null, 0.1, 0.1);
   		 //if player is near ghost every.5 seconds health goes down.
   		 game.time.events.loop(Phaser.Timer.SECOND*.3, this.attackedCounter, this);
   		 //makes hearticle group
   		 hearticles = game.add.group();
   		 //makes flame group
   		 flames = game.add.group();
		 //adds pause button
		 pauseButton = game.add.sprite(750, 0, 'pause');
		 pauseButton.inputEnabled = true;
		 pauseButton.fixedToCamera = true;
		 pauseButton.events.onInputDown.add(pauseGame, this);
		 //functions that enable player to pause game/unpause
		 //and to restart
		function pauseGame(){
			game.paused = true;
			unpauseButton = game.add.sprite(player.position.x, 300 ,'fire');
			unpauseButton.inputEnabled = true;
			pauseText = game.add.text(player.position.x, 200, 'Click on fire to continue', { font: '30px Arial', fill: '#fff' });
			unpauseButton.events.onInputDown.add(unpauseGame, this);
			backButton = game.add.sprite(player.position.x, 100 ,'particle');
			backButton.inputEnabled = true;
			backText = game.add.text(player.position.x, 500, 'Click on particle to go back', { font: '30px Arial', fill: '#fff' });
			backButton.events.onInputDown.add(restart, this);
		}	
		function unpauseGame(){
			game.paused = false;
			unpauseButton.destroy();
			pauseText.destroy();
			backButton.destroy();
			backText.destroy();
		}

		function restart(){
			game.paused = false;
			unpauseButton.destroy();
			pauseText.destroy();
			backButton.destroy();
			backText.destroy();
			//stops all music
			ver1.stop();
			ver2.stop();
			game.state.start('MainMenu');
		}
	},
	update: function (){
		//checks collision with hearts
		game.physics.arcade.collide(hearticles, obstacles);
		//checks collision with platform for both enemy and player
		hitPlatform = game.physics.arcade.collide(player, platforms);
		hitPlatformEnemy = game.physics.arcade.collide(ghost, platforms);
		hitPlatformWrathEnemy = game.physics.arcade.collide(wrathG, platforms);
		//checks collision between Enemy and Player
	    attacked = game.physics.arcade.collide(ghost, player);
	    attackedWrath = game.physics.arcade.collide(wrathG, player);
	    //checks obstacle collision with enemy and ghost
	    hitObstacleEnemy = game.physics.arcade.collide(ghost, obstacles);
	    hitObstacleWrathEnemy = game.physics.arcade.collide(wrathG, obstacles);
	    //checks collision with ghost with each other
	    ghostCollision = game.physics.arcade.collide(ghost, ghost);
	  	//checks obstacle collision with player
	    //console.log("got here", hitObstacleEnemy);
	    hitObstaclePlayer = game.physics.arcade.collide(player, obstacles);
	    //checks overlap with player and wand, and collects wand if player overlaps
	    game.physics.arcade.overlap(player, wand, getWand, null, this);
	    function getWand(player, wand){
	    	wand.kill();
	    	wandSound.play('', 0, 0.25, false);
	    	wandAttack = true;
	    }
		//checks overlap with heart and enemy, Kills enemy if they overlap
		game.physics.arcade.overlap(heart, wrathG, dieWrathGhost, null, this);
		function dieWrathGhost(hearticles, wrathG){
		wrathG.kill();
		hearticles.kill();
		}
		//console.log(hitPlatform);
		//if player reaches certain point, wand spawns.
		if(player.x > 5300 && player.x < 5500){
			if(!oneWand){
			this.makewand();
			wand.play('wand');
			}
		}
		//if player reaches a certain point, spawns enemy
		if(player.x > 200){
			if(!firstGreen){
			this.spawnGreen();
			}
		}if(player.x > 600){
			if(!secondGreen){
			this.spawnGreen();
			}
		}if(player.x > 1000){
			if(!thirdGreen){
			this.spawnGreen();
			}
		}if(player.x > 2600){
			if(!fourthGreen){
			this.spawnGreen();
			}
		}if(player.x > 5000){
			if(!firstWrath){
			this.spawnWrath();
			}
		}if(player.x > 6000){
			if(!secondWrath){
			this.spawnWrath();
			}
		}
	},
	//debug info
	render: function(){
		game.debug.body(player);
		game.debug.body(obstacles);
		game.debug.spriteInfo(player, 32, 32);

	},
	//if player is attacked deplete health
	attackedCounter: function(){
	if(attacked || attackedWrath){
		wall.play('', 0, 0.25, false);
		counter++;
		if(counter == 1){
		//console.log("1 health")
		healthBar.animations.play("one");
		}else if(counter ==2){
		//console.log("2 health");
		healthBar.animations.play("two");		
		}else if(counter ==3){
		//console.log("3 health");
		healthBar.animations.play("three");	
		}else if(counter ==4){
		//console.log("4 health");
		healthBar.animations.play("four");	
		}else if(counter ==5){
		//console.log("5 health");
		healthBar.animations.play("five");	
		}else if(counter ==6){
		//console.log("6 health");
		healthBar.animations.play("six");	
		}else if(counter ==7){
		//console.log("7 health");
		healthBar.animations.play("seven");	
		game.state.start('GameOver');
	}				
	}
	},
	//to prevent multiple wands being spammed
	makewand: function(){
	if(!oneWand){
		wand = game.add.sprite(5500,0, 'wand');
		wand.scale.setTo(.5,.5);	
		//enables physics on player
		game.physics.arcade.enable(wand);
		//defines how much gravity and bounce player has.
		wand.body.bounce.y = 0.1;
        wand.body.gravity.y = 30;
        //enables player to collide against world
        wand.body.collideWorldBounds = true;
		//gives the player animations
		wand.animations.add('wand',[0, 1, 2],10, true);
		
	}
	oneWand = true;
	},
	//spawn green ghost at a fixed position
	spawnGreen: function(){
	 if(!firstGreen){
	 	greenGhost = new Enemy(game,'greenGhost', '', 1000);
     	ghost.add(greenGhost);
	 	firstGreen = true
	}if(!secondGreen){
	 	greenGhost = new Enemy(game,'greenGhost', '', 1500);
     	ghost.add(greenGhost);
	 	secondGreen = true
	}if(!thirdGreen){
	 	greenGhost = new Enemy(game,'greenGhost', '', 2500);
     	ghost.add(greenGhost);
	 	thirdGreen = true
	}
	if(!fourthGreen){
	 	greenGhost = new Enemy(game,'greenGhost', '', 3600);
     	ghost.add(greenGhost);
	 	fourthGreen = true
	}
	},
	//spawns wrath enemy
	spawnWrath: function(){
	 if(!firstWrath){
	 	wrath = new Wrath(game,'wrath', '', 5700);
     	wrathG.add(wrath);
	 	firstWrath = true;
	 	ver1.stop();
		ver2.play();
	}if(!secondWrath){
	    secondWrath = new Wrath(game,'wrath', '', 7200);
	    wrathG.add(secondWrath);
	 	secondWrath = true;
	}
	},
	//kills them after a certain time.
	killHearticles: function(){
		hearticles.kill();
	},
}

//Defines gameover function
var GameOver = function(game){};
var endButton;
GameOver.prototype = {
	//preloads assets
	preload: function(){
		console.log("Gameover:Preload");
		
	},
	//creates assets
	create: function(){

		console.log("Gameover: create");
		//help text
		helpText = game.add.text(320, 380, 'click weird particle thingy to startover', { fontSize: '16px', fill: '#FF0000' });
		//stops all music
		ver1.stop();
		ver2.stop();
		//adds end button
		endButton = game.add.sprite(0, 0, 'particle');
		endButton.inputEnabled = true;
		endButton.events.onInputDown.add(endGame, this);
		function endGame(){
			game.state.start('GamePlay');
		}
	},
	update: function(){
		//console.log("Gameover: Update");
		counter = 0;
		oneWand = false;
		wandAttack = false;
		firstGreen = false;
		secondGreen = false;
		thirdGreen = false;
		fourthGreen = false;
		firstWrath = false;
		secondWrath = false;
		thirdWrath = false;
		fourthWrath = false;
		firstEnvy = false;
		secondEnvy = false;
	 	thirdEnvy = false;
		fourthEnvy = false;
	}
}

