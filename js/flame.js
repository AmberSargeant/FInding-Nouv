function Flame(game,key){
	//call to Phaser.Sprite // new Sprite(game, x, y, key, frame)
	Phaser.Sprite.call(this, game, wrathG.position.x,wrathG.position.y,key);

	// add properties
	this.anchor.set(0.5);
	game.physics.enable(this);
	this.enableBody = true;
	this.body.collideWorldBounds = true;
	this.body.bounce.y = 0.2;
	this.shootFlame();
	this.animations.add('fireMove', [0, 1, 2], 4, true);
}

Flame.prototype = Object.create(Phaser.Sprite.prototype);
Flame.prototype.constructor = Flame;

Flame.prototype.update = function(){
	if(this.x > wrathG.x +400 || this.x < wrathG.x -400){
		this.kill();
	}
	this.animations.play('fireMove');
}

Flame.prototype.shootFlame = function(){
	//if player is moving right, it goes right. Else
	// the heart goes left.
	if(player.x < wrathG.x){
		this.body.velocity.x = -300;
	}else if (player.x > wrathG.x){
		this.body.velocity.x = 300;
	}
}