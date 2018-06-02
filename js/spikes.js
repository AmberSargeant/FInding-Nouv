function Spikes(game, key, widow){
	//call to Phaser.Sprite // new Sprite(game, x, y, key, frame)
	Phaser.Sprite.call(this, game, widow.position.x, widow.position.y,key);
	this.widow = widow;
	// add properties
	this.anchor.set(0.5);
	game.physics.enable(this);
	this.enableBody = true;
	this.body.collideWorldBounds = true;
	this.body.bounce.y = 0.2;
	this.shootSpikes();
	this.animations.add('spikes', [0, 1, 2, 3, 4, 5], 4, true);
}

Spikes.prototype = Object.create(Phaser.Sprite.prototype);
Spikes.prototype.constructor = Spikes;

Spikes.prototype.update = function(){
	if(this.x > this.widow.x +500 || this.x < this.widow.x -500){
		this.kill();
	}
	this.animations.play('spikes');
}

Spikes.prototype.shootSpikes = function(){
	//if player is moving right, it goes right. Else
	// the heart goes left.
	if(player.x < this.widow.x){
		this.body.velocity.x = -300;
		this.scale.x = 1;
	}else if (player.x > this.widow.x){
		this.body.velocity.x = 300;
		this.scale.x = -1;
	}
}