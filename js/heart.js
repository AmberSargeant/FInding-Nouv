function Heart(game,key){
	//call to Phaser.Sprite // new Sprite(game, x, y, key, frame)
	Phaser.Sprite.call(this, game, player.position.x,player.position.y,key);

	// add properties
	this.anchor.set(0.5);
	game.physics.enable(this);
	this.enableBody = true;
	this.body.collideWorldBounds = true;
	this.body.bounce.y = 0.2;
	this.body.setSize(25, 30, 35, 25);
	this.shootHeart();
}

Heart.prototype = Object.create(Phaser.Sprite.prototype);
Heart.prototype.constructor = Heart;

Heart.prototype.update = function(){
	if(this.x > player.x +200 || this.x < player.x -200){
		this.kill();
	}
}

Heart.prototype.shootHeart = function(){
	//if player is moving right, it goes right. Else
	// the heart goes left.
	if(player.movingRight){
	this.body.velocity.x = 300
	}else{
		this.body.velocity.x = -300
	}
}
