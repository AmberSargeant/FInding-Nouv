function Player(game, key){
	//call to Phaser.Sprite // new Sprite(game, x, y, frame)
	Phaser.Sprite.call(this, game, 5000,game.world.height-70,key);

	// add properties
	this.anchor.set(0.5);
	game.physics.enable(this);
	this.enableBody = true;
	this.body.collideWorldBounds = true;
	this.body.bounce.y = 0.2;
    this.body.gravity.y = 800;
    this.body.acceleration.x = 0;
    this.animations.add('walk',[0, 1, 2, 3, 1, 2],10, true);
    this.animations.add('wandHit',[6],6, true);
	this.animations.add('idle', ['walk2'], 30, false);
	this.body.setSize(30, 110, 60, 25);
	this.animations.add('jumping',[7,8],10, false);
	this.movingRight  = true;
	this.shootButton = game.input.keyboard.addKey(Phaser.Keyboard.E);
	this.shootButton.onDown.add(this.oneHeart, this);
}

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function(){
	this.body.velocity.x = 0;

	if (game.input.keyboard.isDown(Phaser.Keyboard.W) && this.body.touching.down && hitPlatform || hitObstaclePlayer && game.input.keyboard.isDown(Phaser.Keyboard.W) 
			&& this.body.touching.down ||  attacked && game.input.keyboard.isDown(Phaser.Keyboard.W) && this.body.touching.down){
			//makes player go up
            this.body.velocity.y = -300; 
            jump.play('', 0, 0.25, false);        
    }
	//if right key is pressed, player runs to the right"

	if(this.game.input.keyboard.isDown(Phaser.Keyboard.D)){
		this.movingRight = true;
		this.body.velocity.x = 105;
		this.scale.x = 1;
		this.animations.play('walk');
		//else player runs to the left
	}else if(this.game.input.keyboard.isDown(Phaser.Keyboard.A)){
		this.movingRight = false;
		this.body.velocity.x = -105;
		this.scale.x = -1;
		this.animations.play('walk');
	}else if(this.game.input.keyboard.isDown(Phaser.Keyboard.E)){
       if(wandAttack){
			this.animations.play('wandHit');
			wandAttackSound.play('', 0, 0.25, false);
		}
    } else {
		this.animations.play('idle');
	}	

	if (!this.body.touching.down){
    	this.animations.play('jumping');
    }
		//if player pressed up player jump
}

Player.prototype.oneHeart = function(){
	if(wandAttack){
		this.animations.play('wandHit');
		heart = new Heart(game,'heart');
    	hearticles.add(heart);
    	wandAttackSound.play('', 0, 0.25, false);
	}
}
