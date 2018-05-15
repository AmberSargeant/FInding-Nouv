function Player(game, frame){
	//call to Phaser.Sprite // new Sprite(game, x, y, key, frame)
	Phaser.Sprite.call(this, game, 64,game.world.height-60,frame);

	// add properties
	this.anchor.set(0.5);
	game.physics.enable(this);
	this.enableBody = true;
	this.body.collideWorldBounds = true;
	this.body.bounce.y = 0.2;
    this.body.gravity.y = 800;
    this.animations.add('walk',[0, 1, 2 ,3, 4, 5],10, true);
	this.animations.add('idle', ['walk1'], 30, false);
	this.body.velocity.x = 0;
}

Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function(){
	console.log(this.body.velocity.x);
	this.body.velocity.x = 0;
	//if right key is pressed, player runs to the right
	if(this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
		this.body.velocity.x = 100;
		this.scale.x = 1;
		this.animations.play('walk');
		if(attacked){
			this.body.velocity.x = 20;
		}
		//else player runs to the left
		}else if(this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
		this.body.velocity.x = -100;
		this.scale.x = -1;
		this.animations.play('walk');
		if(attacked){
			this.body.velocity.x = -20;
		}
        //else idle plays
        }else{
			this.animations.play('idle');
	}	
}
