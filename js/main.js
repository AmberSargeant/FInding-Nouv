var game;
window.onload =  function() {
//Creates instance of game object and changes canvas size
game = new Phaser.Game(800, 500, Phaser.CANVAS);
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
<<<<<<< HEAD
=======
var fifthWrath = false;
var sixthWrath = false; 
var seventhWrath = false;
var eigthWrath = false;
var ninthWrath = false;
var tenthWrath = false;
>>>>>>> upstream/master
var envy;
var firstEnvy = false;
var secondEnvy = false;
var thirdEnvy = false;
var fourthEnvy = false;
<<<<<<< HEAD
=======
var fifthEnvy = false;
var sixthEnvy = false;
var seventhEnvy = false;
var eigthEnvy = false;
var ninthEnvy = false;
var tenthEnvy = false;
var fear;
var firstFear = false;
var secondFear = false;
var thirdFear = false;
var fourthFear = false;
var fifthFear = false;
var sixthFear = false;
var seventhFear = false;
var widow;
var widow = false;
>>>>>>> upstream/master
var ghostCollision;
var heart;
var startButton;
var wandAttackSound;
var backButton;
var flame;
<<<<<<< HEAD
var walkLimit
var secondWrath;
=======
var walkLimit;
var dieWrath;
var dieEnvy;
var dieFear;
var dieWidow;
var attackedFlame;
var attackedSpikes;
var music3 = false;
var music4 = false;
var endingSound;
var pauseSound;
var explode;
var spikes;
var opening;
var pauseButton;
var unpauseButton;
var backButton;
var creditsButton;
var checkPaused = true;
var checkCredits = true;
var wandText;
var creditScreen;
>>>>>>> upstream/master

//Decalares Mainmenu prototype
MainMenu.prototype = {
	//loads the mainmenu images
	preload: function(){
		console.log('MainMenu: preload');
		game.load.image('particle', 'assets/img/particle.png');
<<<<<<< HEAD
=======
		game.load.image('titleScreen', 'assets/img/findingnouvtitle.png');
		game.load.image('creditScreen', 'assets/img/creditScreen.png');
		game.load.atlas('buttons', 'assets/img/buttons.png', 'assets/img/buttons.json');
		game.load.atlas('credits', 'assets/img/credits.png', 'assets/img/credits.json');
		game.load.audio('opening', 'assets/audio/Finding_Nouv_opening.mp3');
>>>>>>> upstream/master
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
<<<<<<< HEAD
		function startGame(){
			game.state.start('GamePlay');
		}
=======

		//adds credits button
		creditsButton = game.add.sprite(650, 500, 'credits');
		creditsButton.alpha = 0.8;
		creditsButton.enableBody = true;
		game.physics.enable(creditsButton);
   		creditsButton.anchor.set(0.5);
		creditsButton.inputEnabled = true;
		creditsButton.events.onInputDown.add(credits, this);

		//adds alpha inout on play button
		game.input.addMoveCallback(p, this);

		//function that enables start button
		function startGame(){
			game.state.start('GamePlay');
		}

		//function that modifies credits and its pop up.
		function credits(){
			if(checkCredits){
			game.paused = true;
			creditScreen = game.add.sprite(0, 0 ,'creditScreen');
			creditScreen.inputEnabled = true;
			creditScreen.events.onInputDown.add(unpauseCredits, this);
			checkCredits = false;
			}
		}

		function unpauseCredits(){		
			game.paused = false;
			creditScreen.destroy();
		}

		//adds pointer
		function p(pointer) {
    		// console.log(pointer.);
    		//console.log(pointer.event);
		}

>>>>>>> upstream/master
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
<<<<<<< HEAD
=======
		fifthWrath = false;
		sixthWrath = false;
		seventhWrath = false;
		eigthWrath = false;
		ninthWrath = false;
		tenthWrath = false;
>>>>>>> upstream/master
		firstEnvy = false;
		secondEnvy = false;
	 	thirdEnvy = false;
		fourthEnvy = false;
<<<<<<< HEAD
	
=======
		fifthEnvy = false;
		sixthEnvy = false;
		seventhEnvy = false;
		eigthEnvy = false;
		ninthEnvy = false;
		tenthEnvy = false;
		firstFear = false;
		secondFear = false;
		thirdFear = false;
		fourthFear = false;
		fifthFear = false;
		sixthFear = false;
		seventhFear = false;
		widow = false;
		music3 = false;
		music4 = false;
		checkPaused = true;
		checkCredits = true;

		//if mouse hovers over start/credita button..change alpha.
		if(startButton.input.pointerOver()){
        	startButton.alpha = 1;
    	}
    	else{
        	startButton.alpha = 0.5;
    	}if(creditsButton.input.pointerOver()){
        	creditsButton.alpha = 1;
    	}
    	else{
        	creditsButton.alpha = 0.5;
    	}
	},

	//debug info
	render: function(){
		//game.debug.body(startButton);
>>>>>>> upstream/master
	},
}
//Defines actual gameplay
var GamePlay = function(game){};
var pauseButton;
var unpauseButton;
<<<<<<< HEAD
var puaseText;
=======
var backButton;

>>>>>>> upstream/master
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
        game.load.image('helpText', 'assets/img/text1.png');
        game.load.image('wandText', 'assets/img/text2.png');
		game.load.atlas('greenGhost', 'assets/img/greenGhost.png', 'assets/img/greenGhost.json');
		game.load.atlas('player', 'assets/img/player.png', 'assets/img/player.json');
		game.load.atlas('colorbar', 'assets/img/colorbar.png', 'assets/img/colorbar.json');
		game.load.atlas('wand', 'assets/img/wand.png', 'assets/img/wand.json');
		game.load.atlas('envy', 'assets/img/envy.png', 'assets/img/envy.json');
		game.load.atlas('wrath', 'assets/img/wrath.png', 'assets/img/wrath.json');
		game.load.atlas('heart', 'assets/img/heart.png', 'assets/img/heart.json');
		game.load.atlas('fire', 'assets/img/fire.png', 'assets/img/fire.json');
		game.load.atlas('plantObstacles', 'assets/img/plantObstacles.png', 'assets/img/plantObstacles.json');
<<<<<<< HEAD
		game.load.image('particle', 'assets/img/particle.png');
=======
		game.load.atlas('spikes', 'assets/img/spikes.png', 'assets/img/spikes.json');
		game.load.atlas('pausemenubuttons', 'assets/img/pausemenubuttons.png', 'assets/img/pausemenubuttons.json');
>>>>>>> upstream/master
		game.load.audio('ver1', 'assets/audio/Finding_Nouv_ver1.mp3');
		game.load.audio('jump', 'assets/audio/jump4.mp3');
		game.load.audio('ver2', 'assets/audio/Finding_Nouv_ver2.mp3');
		game.load.audio('walk', 'assets/audio/walk5.mp3');
		game.load.audio('wall', 'assets/audio/wall.mp3');
		game.load.audio('wandSound', 'assets/audio/wand2.mp3');
		game.load.audio('wandAttackSound', 'assets/audio/wandAttackSound.mp3');
<<<<<<< HEAD
=======
		game.load.audio('pauseSound', 'assets/audio/pause.mp3');
>>>>>>> upstream/master
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
<<<<<<< HEAD
    	 //makes obstacles
=======

    	 //makes obstacles (Sorry this is nasty)
>>>>>>> upstream/master
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
         var obstacle1 = obstacles.create(6730, game.world.height - 100, 'plantObstacles', 2);
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
         var obstacle1 = obstacles.create(8680, game.world.height - 100, 'plantObstacles', 22);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(8840, game.world.height - 190, 'plantObstacles', 14);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(8960, game.world.height - 250, 'plantObstacles', 16);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(9100, game.world.height - 130, 'plantObstacles', 8);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(9360, game.world.height - 130, 'plantObstacles', 7);
         obstacle1.body.immovable = true;
<<<<<<< HEAD
         var obstacle1 = obstacles.create(9248, game.world.height - 100, 'plantObstacles', 11);
=======
         var obstacle1 = obstacles.create(9248, game.world.height - 110, 'plantObstacles', 12);
>>>>>>> upstream/master
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(9100, game.world.height - 230, 'plantObstacles', 9);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(9400, game.world.height - 230, 'plantObstacles', 17);
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
         var obstacle1 = obstacles.create(11183, game.world.height - 100, 'plantObstacles', 9);
         obstacle1.body.immovable = true;
<<<<<<< HEAD
         var obstacle1 = obstacles.create(11380, game.world.height - 50, 'plantObstacles', 21);
         obstacle1.body.immovable = true;   
         var obstacle1 = obstacles.create(11580, game.world.height - 100, 'plantObstacles', 11);
         obstacle1.body.immovable = true;         
   		 //helptext 

         var obstacle1 = obstacles.create(10130, game.world.height - 30, 'plantObstacles', 15);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(10400, game.world.height - 180, 'plantObstacles', 19);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(10500, game.world.height - 230, 'plantObstacles', 12);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(10800, game.world.height - 100, 'plantObstacles', 22);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(10850, game.world.height - 50, 'plantObstacles', 14);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(11000, game.world.height - 250, 'plantObstacles', 16);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(11100, game.world.height - 90, 'plantObstacles', 8);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(11400, game.world.height - 130, 'plantObstacles', 7);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(11600, game.world.height - 130, 'plantObstacles', 12);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(11680, game.world.height - 230, 'plantObstacles', 9);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(11750, game.world.height - 230, 'plantObstacles', 17);
         obstacle1.body.immovable = true;

         var obstacle1 = obstacles.create(11800, game.world.height - 200, 'plantObstacles', 17);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(11850, game.world.height - 250, 'plantObstacles', 16);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(11900, game.world.height - 300, 'plantObstacles', 17);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(11980, game.world.height - 295, 'plantObstacles', 12);
         obstacle1.body.immovable = true; 

         var obstacle1 = obstacles.create(12000, game.world.height - 50, 'plantObstacles', 5);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(12080, game.world.height - 100, 'plantObstacles', 7);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(12150, game.world.height - 30, 'plantObstacles', 15);
         obstacle1.body.immovable = true;  
         var obstacle1 = obstacles.create(12240, game.world.height - 80, 'plantObstacles', 9);
         obstacle1.body.immovable = true;  
         var obstacle1 = obstacles.create(12290, game.world.height - 250, 'plantObstacles', 19);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(12340, game.world.height - 100, 'plantObstacles', 14);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(12400, game.world.height - 200, 'plantObstacles', 3);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(12480, game.world.height - 100, 'plantObstacles', 9);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(12500, game.world.height - 100, 'plantObstacles', 14);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(12590, game.world.height - 200, 'plantObstacles', 5);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(12650, game.world.height - 300, 'plantObstacles', 3);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(12670, game.world.height - 90, 'plantObstacles', 11);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(12749, game.world.height - 100, 'plantObstacles', 9);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(12800, game.world.height - 200, 'plantObstacles', 21);
         obstacle1.body.immovable = true;   
         var obstacle1 = obstacles.create(12830, game.world.height - 100, 'plantObstacles', 11);
         obstacle1.body.immovable = true;    


         //helptext 

         var obstacle1 = obstacles.create(12900, game.world.height - 30, 'plantObstacles', 11);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(12980, game.world.height - 180, 'plantObstacles', 19);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(13050, game.world.height - 230, 'plantObstacles', 12);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(13120, game.world.height - 200, 'plantObstacles', 22);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(13260, game.world.height - 50, 'plantObstacles', 4);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(13360, game.world.height - 280, 'plantObstacles', 16);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(13390, game.world.height - 100, 'plantObstacles', 15);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(13500, game.world.height - 130, 'plantObstacles', 7);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(13600, game.world.height - 100, 'plantObstacles', 11);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(13680, game.world.height - 130, 'plantObstacles', 0);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(13750, game.world.height - 160, 'plantObstacles', 21);
         obstacle1.body.immovable = true;

         var obstacle1 = obstacles.create(13800, game.world.height - 200, 'plantObstacles', 21);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(13850, game.world.height - 250, 'plantObstacles', 16);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(13900, game.world.height - 300, 'plantObstacles', 17);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(13980, game.world.height - 295, 'plantObstacles', 12);
         obstacle1.body.immovable = true; 

         var obstacle1 = obstacles.create(14020, game.world.height - 50, 'plantObstacles', 0);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(14080, game.world.height - 100, 'plantObstacles', 7);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(14150, game.world.height - 30, 'plantObstacles', 15);
         obstacle1.body.immovable = true;  
         var obstacle1 = obstacles.create(14240, game.world.height - 80, 'plantObstacles', 2);
         obstacle1.body.immovable = true;  
         var obstacle1 = obstacles.create(14290, game.world.height - 250, 'plantObstacles', 19);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(14340, game.world.height - 100, 'plantObstacles', 14);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(14400, game.world.height - 200, 'plantObstacles', 3);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(14480, game.world.height - 100, 'plantObstacles', 9);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(14500, game.world.height - 100, 'plantObstacles', 3);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(14590, game.world.height - 200, 'plantObstacles', 5);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(14650, game.world.height - 300, 'plantObstacles', 8);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(14670, game.world.height - 10, 'plantObstacles', 11);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(14749, game.world.height - 100, 'plantObstacles', 7);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(14800, game.world.height - 200, 'plantObstacles', 22);
         obstacle1.body.immovable = true;   
         var obstacle1 = obstacles.create(14830, game.world.height - 10, 'plantObstacles', 11);
         obstacle1.body.immovable = true;   

         var obstacle1 = obstacles.create(14900, game.world.height - 250, 'plantObstacles', 16);
         obstacle1.body.immovable = true;
=======
   		 
   		 var obstacle1 = obstacles.create(11100, game.world.height - 90, 'plantObstacles', 8);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(11600, game.world.height - 110, 'plantObstacles', 12);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(11680, game.world.height - 210, 'plantObstacles', 9);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(11750, game.world.height - 230, 'plantObstacles', 17);
         obstacle1.body.immovable = true;

         var obstacle1 = obstacles.create(11800, game.world.height - 200, 'plantObstacles', 17);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(11850, game.world.height - 250, 'plantObstacles', 16);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(11900, game.world.height - 300, 'plantObstacles', 17);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(11980, game.world.height - 295, 'plantObstacles', 12);
         obstacle1.body.immovable = true; 

         var obstacle1 = obstacles.create(12000, game.world.height - 50, 'plantObstacles', 5);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(12080, game.world.height - 100, 'plantObstacles', 7);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(12150, game.world.height - 30, 'plantObstacles', 15);
         obstacle1.body.immovable = true;  
         var obstacle1 = obstacles.create(12240, game.world.height - 80, 'plantObstacles', 9);
         obstacle1.body.immovable = true;  
         var obstacle1 = obstacles.create(12290, game.world.height - 250, 'plantObstacles', 19);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(12340, game.world.height - 100, 'plantObstacles', 14);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(12400, game.world.height - 200, 'plantObstacles', 3);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(12480, game.world.height - 100, 'plantObstacles', 9);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(12500, game.world.height - 100, 'plantObstacles', 14);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(12590, game.world.height - 200, 'plantObstacles', 5);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(12650, game.world.height - 300, 'plantObstacles', 3);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(12670, game.world.height - 90, 'plantObstacles', 11);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(12749, game.world.height - 100, 'plantObstacles', 9);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(12800, game.world.height - 200, 'plantObstacles', 21);
         obstacle1.body.immovable = true;   
         var obstacle1 = obstacles.create(12830, game.world.height - 100, 'plantObstacles', 11);
         obstacle1.body.immovable = true;    
      

         var obstacle1 = obstacles.create(12900, game.world.height - 30, 'plantObstacles', 11);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(12980, game.world.height - 180, 'plantObstacles', 19);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(13050, game.world.height - 230, 'plantObstacles', 12);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(13120, game.world.height - 200, 'plantObstacles', 22);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(13360, game.world.height - 280, 'plantObstacles', 16);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(13600, game.world.height - 100, 'plantObstacles', 11);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(13680, game.world.height - 130, 'plantObstacles', 0);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(13750, game.world.height - 160, 'plantObstacles', 21);
         obstacle1.body.immovable = true;

         var obstacle1 = obstacles.create(13800, game.world.height - 200, 'plantObstacles', 21);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(13850, game.world.height - 250, 'plantObstacles', 16);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(13900, game.world.height - 300, 'plantObstacles', 17);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(13980, game.world.height - 295, 'plantObstacles', 12);
         obstacle1.body.immovable = true; 

         var obstacle1 = obstacles.create(14020, game.world.height - 50, 'plantObstacles', 0);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(14080, game.world.height - 100, 'plantObstacles', 7);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(14150, game.world.height - 30, 'plantObstacles', 15);
         obstacle1.body.immovable = true;  
         var obstacle1 = obstacles.create(14240, game.world.height - 80, 'plantObstacles', 2);
         obstacle1.body.immovable = true;  
         var obstacle1 = obstacles.create(14290, game.world.height - 250, 'plantObstacles', 19);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(14340, game.world.height - 100, 'plantObstacles', 14);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(14400, game.world.height - 200, 'plantObstacles', 3);
         obstacle1.body.immovable = true;     
         var obstacle1 = obstacles.create(14670, game.world.height - 10, 'plantObstacles', 11);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(14749, game.world.height - 100, 'plantObstacles', 7);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(14800, game.world.height - 200, 'plantObstacles', 22);
         obstacle1.body.immovable = true;   
         var obstacle1 = obstacles.create(14830, game.world.height - 10, 'plantObstacles', 11);
         obstacle1.body.immovable = true;   

       
>>>>>>> upstream/master
         var obstacle1 = obstacles.create(14980, game.world.height - 180, 'plantObstacles', 19);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(15050, game.world.height - 290, 'plantObstacles', 12);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(15120, game.world.height - 100, 'plantObstacles', 22);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(15260, game.world.height - 50, 'plantObstacles', 4);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(15360, game.world.height - 250, 'plantObstacles', 16);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(15400, game.world.height - 90, 'plantObstacles', 15);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(15500, game.world.height - 130, 'plantObstacles', 7);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(15600, game.world.height - 100, 'plantObstacles', 12);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(15680, game.world.height - 200, 'plantObstacles', 9);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(15750, game.world.height - 230, 'plantObstacles', 21);
         obstacle1.body.immovable = true;

         var obstacle1 = obstacles.create(15800, game.world.height - 200, 'plantObstacles', 21);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(15850, game.world.height - 250, 'plantObstacles', 16);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(15900, game.world.height - 300, 'plantObstacles', 17);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(15980, game.world.height - 295, 'plantObstacles', 12);
         obstacle1.body.immovable = true; 

         var obstacle1 = obstacles.create(16020, game.world.height - 50, 'plantObstacles', 0);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(16080, game.world.height - 100, 'plantObstacles', 7);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(16150, game.world.height - 30, 'plantObstacles', 8);
         obstacle1.body.immovable = true;  
         var obstacle1 = obstacles.create(16240, game.world.height - 80, 'plantObstacles', 2);
         obstacle1.body.immovable = true;  
         var obstacle1 = obstacles.create(16290, game.world.height - 250, 'plantObstacles', 16);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(16340, game.world.height - 100, 'plantObstacles', 14);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(16400, game.world.height - 200, 'plantObstacles', 3);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(16480, game.world.height - 100, 'plantObstacles', 4);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(16500, game.world.height - 100, 'plantObstacles', 3);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(16590, game.world.height - 200, 'plantObstacles', 1);
         obstacle1.body.immovable = true; 
         var obstacle1 = obstacles.create(16650, game.world.height - 300, 'plantObstacles', 0);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(16670, game.world.height - 80, 'plantObstacles', 11);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(16749, game.world.height - 100, 'plantObstacles', 22);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(16749, game.world.height - 30, 'plantObstacles', 11);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(16800, game.world.height - 200, 'plantObstacles', 22);
         obstacle1.body.immovable = true;   
         var obstacle1 = obstacles.create(16830, game.world.height - 100, 'plantObstacles', 2);
         obstacle1.body.immovable = true;    
   		
         var obstacle1 = obstacles.create(16900, game.world.height - 60, 'plantObstacles', 0);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(16950, game.world.height - 90, 'plantObstacles', 1);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(17000, game.world.height - 120, 'plantObstacles', 2);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(17200, game.world.height - 100, 'plantObstacles', 3);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(17300, game.world.height - 100, 'plantObstacles', 9);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(17350, game.world.height - 130, 'plantObstacles', 7);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(17670, game.world.height - 40, 'plantObstacles', 10);
         obstacle1.body.immovable = true; 
<<<<<<< HEAD
=======

         var obstacle1 = obstacles.create(17380, game.world.height - 50, 'plantObstacles', 10);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(17430, game.world.height - 60, 'plantObstacles', 11);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(17460, game.world.height - 80, 'plantObstacles', 12);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(17500, game.world.height - 100, 'plantObstacles', 13);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(17550, game.world.height - 100, 'plantObstacles', 15);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(17580, game.world.height - 150, 'plantObstacles', 14);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(17600, game.world.height - 100, 'plantObstacles', 16);
         obstacle1.body.immovable = true; 

   		 //helptext
   		 helpText = game.add.sprite(-30,0, 'helpText')
   		 wandText = game.add.sprite(5260,0, 'wandText')
>>>>>>> upstream/master

         var obstacle1 = obstacles.create(17380, game.world.height - 50, 'plantObstacles', 10);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(17430, game.world.height - 60, 'plantObstacles', 11);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(17460, game.world.height - 80, 'plantObstacles', 12);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(17500, game.world.height - 100, 'plantObstacles', 13);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(17550, game.world.height - 100, 'plantObstacles', 15);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(17580, game.world.height - 150, 'plantObstacles', 14);
         obstacle1.body.immovable = true;
         var obstacle1 = obstacles.create(17600, game.world.height - 100, 'plantObstacles', 16); // test
         obstacle1.body.immovable = true;
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
<<<<<<< HEAD
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
=======
		 healthBar.animations.add('seven', Phaser.Animation.generateFrameNames('bar',7, 7,''),30, false);	

   		 //adds player and is followed by camera
   		 player = new Player(game,'player');
   		 game.add.existing(player);
   		 game.camera.follow(player, null, 0.1, 0.1);

   		 //adds enemy and weapon/item group
   		 ghost = game.add.group();
   		 wrathG = game.add.group()
   		 envyG = game.add.group();
   		 fearG = game.add.group();
   		 widowG = game.add.group();
   		 hearticles = game.add.group();
   		 flames = game.add.group();
   		 spikesG = game.add.group();
   	
>>>>>>> upstream/master
		 //adds pause button
		 pauseButton = game.add.sprite(750, 0, 'pause');
		 pauseButton.inputEnabled = true;
		 pauseButton.fixedToCamera = true;
		 pauseButton.events.onInputDown.add(pauseGame, this);
		 //functions that enable player to pause game/unpause
		 //and to restart
		function pauseGame(){
			if(checkPaused){
			game.paused = true;
			unpauseButton = game.add.sprite(player.position.x+10, 250 ,'pausemenubuttons');
			unpauseButton.animations.add('unpauseButton',[1],4, false);
			unpauseButton.animations.play('unpauseButton');
   			unpauseButton.anchor.set(0.5);
			unpauseButton.inputEnabled = true;
			unpauseButton.events.onInputDown.add(unpauseGame, this);
			backButton = game.add.sprite(player.position.x, 350 ,'pausemenubuttons');
			backButton.animations.add('backButton',[0],4, false);
			backButton.animations.play('backButton');
			backButton.anchor.set(0.5);
			backButton.inputEnabled = true;
			backButton.events.onInputDown.add(restart, this);
			checkPaused = false;
			}
		}	
		function unpauseGame(){
			game.paused = false;
			unpauseButton.destroy();
			backButton.destroy();
		}

		function restart(){
			game.paused = false;
			unpauseButton.destroy();
			backButton.destroy();
			//stops all music
			ver1.stop();
			ver2.stop();
			game.state.start('MainMenu');
		}

		//adds pointer
		function p(pointer) {
    		// console.log(pointer.);
    		//console.log(pointer.event);
		}
	},
	update: function (){
<<<<<<< HEAD
		//checks collision with hearts
		game.physics.arcade.collide(hearticles, obstacles);
=======
		checkPaused = true;
	
>>>>>>> upstream/master
		//checks collision with platform for both enemy and player
		hitPlatform = game.physics.arcade.collide(player, platforms);
		hitPlatformEnemy = game.physics.arcade.collide(ghost, platforms);
		hitPlatformWrathEnemy = game.physics.arcade.collide(wrathG, platforms);
		//checks collision between Enemy and Player
		/*
	    attacked = game.physics.arcade.collide(ghost, player);
	    attackedWrath = game.physics.arcade.collide(wrathG, player);
<<<<<<< HEAD
	    //checks obstacle collision with enemy and ghost
=======
	    attackedEnvy = game.physics.arcade.collide(envyG, player);
	    attackedFear = game.physics.arcade.collide(fearG, player);
	    attackedFlame = game.physics.arcade.collide(flames, player);
	    attackedSpikes = game.physics.arcade.collide(spikesG, player);
	    attackedWidow = game.physics.arcade.collide(widowG, player);
	    */

	    //checks obstacle collision with enemy and obstacles
>>>>>>> upstream/master
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
<<<<<<< HEAD
		game.physics.arcade.overlap(heart, wrathG, dieWrathGhost, null, this);
=======
	    dieWrath = game.physics.arcade.overlap(heart, wrathG, dieWrathGhost, null, this);
	    dieEnvy = game.physics.arcade.overlap(heart, envyG, dieEnvyGhost, null, this);
	    dieFear = game.physics.arcade.overlap(heart, fearG, dieFearGhost, null, this);
	    dieWidow = game.physics.arcade.overlap(heart, widowG, dieWidow, null, this);

>>>>>>> upstream/master
		function dieWrathGhost(hearticles, wrathG){
		wrathG.kill();
		hearticles.kill();
		}
<<<<<<< HEAD
		//console.log(hitPlatform);
=======
		function dieFearGhost(hearticles, fearG){
			fearG.kill();
			hearticles.kill();
			explode.play('', 0, 0.25, false);
		}
		function dieWidow(hearticles, widow){
			hearticles.kill();
			widowDeathCounter++;
			if(widowDeathCounter == 20){
				widowG.kill();
				explode.play('', 0, 0.25, false);
			}
		}
	

>>>>>>> upstream/master
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
<<<<<<< HEAD
			if(!secondWrath){
			this.spawnWrath();
=======
			if(!secondWrath || !secondEnvy){
				this.spawnWrath();
				this.spawnEnvy();
			}
		}if(player.x > 7000){
			if(!thirdWrath || !thirdEnvy){
				this.spawnWrath();
				this.spawnEnvy();
			}
		}if(player.x > 7500){
			if(!firstFear){
				this.spawnFear();
			}
		}if(player.x > 8000){
			if(!fourthWrath || !fourthEnvy){
				this.spawnWrath();
				this.spawnEnvy();
			}
		}if(player.x > 8500){
			if(!secondFear){
				this.spawnFear();
			}
		}if(player.x > 9000){
			if(!fifthWrath || !fifthEnvy){
				this.spawnWrath();
				this.spawnEnvy();
			}
		}if(player.x > 9500){
			if(!thirdFear){
				this.spawnFear();
			}
		}if(player.x > 9900){
			if(!fourthFear){
				this.spawnFear();
			}
		}if(player.x > 10000){
			if(!music3 || !sixthWrath ||!sixthEnvy){
				ver2.stop();
		    	ver3.play('', 0, 0.25, true);
		    	music3 = true;
		    	this.spawnWrath();
		    	this.spawnEnvy();
			}
		}if(player.x > 12000){
			if(!fifthFear){
				this.spawnFear();
			}
		}if(player.x > 14000){
			if(!eigthWrath || !seventhEnvy){
				this.spawnWrath();
				this.spawnEnvy();
			}
		}if(player.x > 15000){
			if(!music4 || !seventhWrath || !eigthEnvy){
				ver3.stop();
				ver4.play('', 0, 0.25, true);
		    	music4 = true;
		    	this.spawnWrath();
		    	this.spawnEnvy();
			}
		}if(player.x > 16000){
			if(!ninthEnvy || !ninthWrath || !tenthEnvy){
		    	this.spawnEnvy();
		    	this.spawnWrath();
			}
		}if(player.x > 17000){
			if(!widow){
				this.spawnWidow();
>>>>>>> upstream/master
			}
		}
	},
	//debug info
	render: function(){
<<<<<<< HEAD
		game.debug.body(player);
		game.debug.body(obstacles);
=======
		//game.debug.body(player);
		//game.debug.body(obstacles);
		widowG.forEach(game.debug.body,game.debug,"#dd00dd",false);
>>>>>>> upstream/master
		game.debug.spriteInfo(player, 32, 32);

	},
	//if player is attacked deplete health
<<<<<<< HEAD
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
=======
	//if counter reaches 7, restart game!
	/*attackedCounter: function(){
		if(attacked || attackedWrath || attackedEnvy || attackedFear || attackedWidow || attackedSpikes || attackedFlame){
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
	},*/

	//prevents multiple wands being spammed
>>>>>>> upstream/master
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
<<<<<<< HEAD
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
=======
		if(!firstWrath){
	 		wrath = new Wrath(game,'wrath', '', 6000);
     		wrathG.add(wrath);
	 		firstWrath = true;
	 		ver1.stop();
			ver2.play('', 0, 0.25, true);
		}if(!secondWrath){
	    	secondWrath = new Wrath(game,'wrath', '', 7200);
	    	wrathG.add(secondWrath);
	 		secondWrath = true;
		}if(!thirdWrath){
			thirdWrath = new Wrath(game,'wrath', '', 8200);
	    	wrathG.add(thirdWrath);
	 		thirdWrath = true;
		}if(!fourthWrath){
			fourthWrath = new Wrath(game,'wrath', '', 9200);
	    	wrathG.add(fourthWrath);
	 		fourthWrath = true;
		}if(!fifthWrath){
			fifthWrath = new Wrath(game,'wrath', '', 10200);
	    	wrathG.add(fifthWrath);
	 		fifthWrath = true;
		}if(!sixthWrath){
			sixthWrath = new Wrath(game,'wrath', '', 12500);
	    	wrathG.add(sixthWrath);
	 		sixthWrath = true;
		}if(!seventhWrath){
			seventhWrath = new Wrath(game,'wrath', '', 14000);
	    	wrathG.add(seventhWrath);
	 		seventhWrath = true;
	 	}if(!eigthWrath){
			eigthWrath = new Wrath(game,'wrath', '', 15500);
	    	wrathG.add(eigthWrath);
	 		eigthWrath = true;
	 	}if(!ninthWrath){
			ninthWrath = new Wrath(game,'wrath', '', 16500);
	    	wrathG.add(ninthWrath);
	 		ninthWrath = true;
	 	}
	},

	//spawns envy enemy
	spawnEnvy: function(){
		if(!firstEnvy){
	 		envy = new Envy(game,'envy', '', 6065, 300);
     		envyG.add(envy);
	 		firstEnvy = true;
	 	}if(!secondEnvy){
	 		envy = new Envy(game,'envy', '', 7400, 280);
     		envyG.add(envy);
	 		secondEnvy = true;
	 	}if(!thirdEnvy){
	 		envy = new Envy(game,'envy', '', 8750, 300);
     		envyG.add(envy);
	 		thirdEnvy = true;
	 	}if(!fourthEnvy){
	 		envy = new Envy(game,'envy', '', 9600, 300);
     		envyG.add(envy);
	 		fourthEnvy = true;
		 }if(!fifthEnvy){
	 		envy = new Envy(game,'envy', '', 11750, 300);
     		envyG.add(envy);
	 		fifthEnvy = true;
	 	}if(!sixthEnvy){
	 		envy = new Envy(game,'envy', '', 13150, 200);
     		envyG.add(envy);
	 		sixthEnvy = true;
	 	}if(!seventhEnvy){
	 		envy = new Envy(game,'envy', '', 14860, 200);
     		envyG.add(envy);
	 		seventhEnvy = true;
		 }if(!eigthEnvy){
	 		envy = new Envy(game,'envy', '', 15330, 200);
     		envyG.add(envy);
	 		eigthEnvy = true;
		 }if(!ninthEnvy){
	 		envy = new Envy(game,'envy', '', 16700, 100);
     		envyG.add(envy);
	 		ninthEnvy = true;
		 }if(!tenthEnvy){
	 		envy = new Envy(game,'envy', '', 17300, 100);
     		envyG.add(envy);
	 		tenthEnvy = true;
		 }
	},

	//spawns fear enemy
	spawnFear: function(){
		if(!firstFear){
	 		fear = new Fear(game,'fear', '', 8250);
     		fearG.add(fear);
	 		firstFear = true;
	 	}if(!secondFear){
	 		fear = new Fear(game,'fear', '', 10380);
     		fearG.add(fear);
	 		secondFear = true;
	 	}if(!thirdFear){
	 		fear = new Fear(game,'fear', '', 11537);
     		fearG.add(fear);
	 		thirdFear = true;
		 }if(!fourthFear){
	 		fear = new Fear(game,'fear', '', 13100);
     		fearG.add(fear);
	 		fourthFear = true;
		 }if(!fifthFear){
	 		fear = new Fear(game,'fear', '', 14470);
     		fearG.add(fear);
	 		fifthFear = true;
	 	}if(!sixthFear){
	 		fear = new Fear(game,'fear', '', 15770);
     		fearG.add(fear);
	 		sixthFear = true;
	 	}
	},

	//spawns widow enemy
	spawnWidow: function(){
		if(!widow){
	 		widow = new Widow(game,'widow', '', 18000);
     		widowG.add(widow);
	 		widow = true;
	 	}
	},
	//kills hearticles after a certain time.
	//will comment out if unused
	//killHearticles: function(){
		//hearticles.kill();
	//},
>>>>>>> upstream/master
}

//Defines gameover function
var GameOver = function(game){};
var endButton;
GameOver.prototype = {
	//preloads assets
	preload: function(){
<<<<<<< HEAD
		console.log("Gameover:Preload");
		
=======
		//console.log("Gameover:Preload");
		game.load.image('gameover', 'assets/img/gameover.png');
		game.load.atlas('buttons2', 'assets/img/buttons2.png', 'assets/img/buttons2.json');
		game.load.audio('endingSong', 'assets/audio/Finding_Nouv_ending.mp3');
>>>>>>> upstream/master
	},
	//creates assets
	create: function(){

<<<<<<< HEAD
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
=======
		//adds ending song
		endingSong = game.add.audio('endingSong');

		//stops all music and plays ending song
		ver1.stop();
		ver2.stop();
		ver3.stop();
		ver4.stop();
		opening.stop();
		endingSong.play('', 0, 0.25, true);

		//adds gameover buttons
		endButton = game.add.sprite(300, 550, 'buttons2');
		endButton.animations.add('playAgain',[1],4, false);
		endButton.inputEnabled = true;
		endButton.events.onInputDown.add(startOverGame, this);
		endButton.alpha = 0.8;
		endButton.enableBody = true;
		game.physics.enable(endButton);
   		endButton.anchor.set(0.5);
   		endButton2 = game.add.sprite(500, 550, 'buttons2');
		endButton2.animations.add('mainMenu',[0],4, false);
		endButton2.inputEnabled = true;
		endButton2.events.onInputDown.add(endGame, this);
		endButton2.alpha = 0.8;
		endButton2.enableBody = true;
		game.physics.enable(endButton2);
   		endButton2.anchor.set(0.5);
		//adds alpha input on play button
		game.input.addMoveCallback(p, this);

		//adds functionality to end button
		function startOverGame(){
			game.state.start('GamePlay');
			endingSong.stop();
		}

		//adds functionality to end button
		function endGame(){
			game.state.start('MainMenu');
			endingSong.stop();
		}


		//adds pointer
		function p(pointer) {
    		// console.log(pointer.);
    		//console.log(pointer.event);
>>>>>>> upstream/master
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
<<<<<<< HEAD
=======
		fifthWrath = false;
		sixthWrath = false
		seventhWrath = false;
		eigthWrath = false;
		ninthWrath = false;
		tenthWrath = false;
>>>>>>> upstream/master
		firstEnvy = false;
		secondEnvy = false;
	 	thirdEnvy = false;
		fourthEnvy = false;
<<<<<<< HEAD
=======
		fifthEnvy = false;
		sixthEnvy = false;
		seventhEnvy = false;
		eigthEnvy = false; 
		ninthEnvy = false;
		tenthEnvy = false;
		firstFear = false;
		secondFear = false;
		thirdFear = false;
		fourthFear = false;
		fifthFear = false;
		sixthFear = false;
		seventhFear = false;
		widow = false;
		music3 = false;
		music4 = false;
		checkPaused = true;
		checkCredits = true;

		//if mouse hovers over startover/mainmenu button..change alpha.
		if(endButton.input.pointerOver()){
        	endButton.alpha = 1;
    	}
    	else{
        	endButton.alpha = 0.5;
    	}
		if(endButton2.input.pointerOver()){
        	endButton2.alpha = 1;
    	}
    	else{
        	endButton2.alpha = 0.5;
    	}

		//sets frame to playagain
    	endButton.play('playAgain');
    	endButton2.play('mainMenu');
>>>>>>> upstream/master
	}
}

