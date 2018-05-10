function Enemy(game, frame, position){
	//call to Phaser.Sprite // new Sprite(game, x, y, key, frame)
	Phaser.Sprite.call(this, game, 64,game.world.height-70,frame);

	// add properties
	this.anchor.set(0.5);
	this.x = position;
	game.physics.enable(this);
	this.enableBody = true;
	this.body.collideWorldBounds = true;
	this.body.bounce.y = 0.2;
    this.body.gravity.y = 800;
    this.animations.add('walk',[0, 1, 2 ,3],4, true);
	this.body.velocity.x = 0;
}

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function(){
	}