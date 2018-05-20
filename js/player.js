function Player(game, key){
	//call to Phaser.Sprite // new Sprite(game, x, y, frame)
	Phaser.Sprite.call(this, game, 64,game.world.height-70,key);

	// add properties
	this.anchor.set(0.5);
	game.physics.enable(this);
	this.enableBody = true;
	this.body.collideWorldBounds = true;
	this.body.bounce.y = 0.2;
    this.body.gravity.y = 800;
    this.body.acceleration.x = 0;
    this.animations.add('walk',[0, 1, 2, 3, 4, 2],10, true);
    this.animations.add('wandHit',[6],6, true);
	this.animations.add('idle', ['walk2'], 30, false);
	this.body.setSize(30, 110, 60, 25);
	this.animations.add('jumping',[7,8],10, false);

	
}

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function(){
	//console.log(this.body.velocity.x);
	this.body.velocity.x = 0;
	//if right key is pressed, player runs to the right
	if(this.game.input.keyboard.isDown(Phaser.Keyboard.D)){
		this.body.velocity.x = 100;
		this.scale.x = 1;
		this.animations.play('walk');
		//else player runs to the left
	}else if(this.game.input.keyboard.isDown(Phaser.Keyboard.A)){
		this.body.velocity.x = -100;
		this.scale.x = -1;
		this.animations.play('walk');
		//else if Q is pressed
	}else if(this.game.input.keyboard.isDown(Phaser.Keyboard.E)){
        //else idle plays
        if(wandAttack){
        this.animations.play('wandHit');
    	}
    }else{
		this.animations.play('idle');
	}	
		//if player pressed up player jump
	if (game.input.keyboard.isDown(Phaser.Keyboard.W) && this.body.touching.down && hitPlatform || hitObstaclePlayer && game.input.keyboard.isDown(Phaser.Keyboard.W) 
			&& this.body.touching.down ||  attacked && game.input.keyboard.isDown(Phaser.Keyboard.W) && this.body.touching.down){
			//makes player go up
            this.body.velocity.y = -300; 
            jump.play('', 0, 0.25, false);          
    }

}
