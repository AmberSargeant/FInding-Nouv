function Flame(game,key, wrath){
	//call to Phaser.Sprite // new Sprite(game, x, y, key, frame)
	Phaser.Sprite.call(this, game, wrath.position.x,wrath.position.y,key);
	this.wrath = wrath;
	// add properties
	this.anchor.set(0.5);
	game.physics.enable(this);
	this.enableBody = true;
	this.body.collideWorldBounds = true;
	this.shootFlame();
	this.animations.add('fireMove', [0, 1, 2], 4, true);
}

Flame.prototype = Object.create(Phaser.Sprite.prototype);
Flame.prototype.constructor = Flame;

Flame.prototype.update = function(){
	if(this.x > this.wrath.x +200 || this.x < this.wrath.x -200){
		this.kill();
	}
	this.animations.play('fireMove');
	}
Flame.prototype.shootFlame = function(){
	//if player is moving right, it goes right. Else
	// the heart goes left.
	if(player.x < this.wrath.x){
		this.body.velocity.x = -300;
	}else if (player.x > this.wrath.x){
		this.body.velocity.x = 300;
	}
}






