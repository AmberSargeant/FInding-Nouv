function Flame(game,key){
	//call to Phaser.Sprite // new Sprite(game, x, y, key, frame)
	Phaser.Sprite.call(this, game, wrath.position.x,wrath.position.y,key);

	// add properties
	this.anchor.set(0.5);
	game.physics.enable(this);
	this.enableBody = true;
	this.body.collideWorldBounds = true;
	this.body.bounce.y = 0.2;
	this.shootFlame();
}

Flame.prototype = Object.create(Phaser.Sprite.prototype);
Flame.prototype.constructor = Flame;

Flame.prototype.update = function(){
	if(this.x > wrath.x +200 || this.x < wrath.x -200){
		this.kill();
	}
}

Flame.prototype.shootFlame = function(){
	//if player is moving right, it goes right. Else
	// the heart goes left.
	if(wrath.movingWrathRight){
		this.body.velocity.x = 300
	}else{
		this.body.velocity.x = -300
	}
}