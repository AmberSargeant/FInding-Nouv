function Widow(game,key, frame, position){
	//call to Phaser.Sprite // new Sprite(game, x, y, key, frame)
	Phaser.Sprite.call(this, game, 64,game.world.height-60,key,frame);

	// add properties
	this.anchor.set(0.5);
	this.x = position;
	game.physics.enable(this);
	this.enableBody = true;
	this.body.collideWorldBounds = true;
	this.body.bounce.y = 0.2;
    this.body.gravity.y = 800;
    this.frame = this.animations.add('walk',[0, 1,2],4, true);
    this.animations.add('walk',[0, 1, 2],4, true);
	this.body.setSize(30, 130, 50, 20);
	game.time.events.loop(Phaser.Timer.SECOND*3, this.moveWidow, this);
	this.minX = position - 60;
	this.maxX = position + 60 ;
	this.body.setSize(40, 120, 48, 15);
}

Widow.prototype = Object.create(Phaser.Sprite.prototype);
Widow.prototype.constructor = Widow;

Widow.prototype.update = function(){
	if(this.x < this.minX){
		this.body.velocity.x = 100;
    	this.scale.x = 1;
		this.play('walk');
	}
	if(this.x > this.maxX){
		this.body.velocity.x = -100;
    	this.scale.x = -1;
		this.play('walk');
	}
}

Widow.prototype.moveWidow = function(){
	this.body.velocity.x = game.rnd.integerInRange(-30,30);
	if(this.body.velocity.x < 0){
    		this.scale.x = -1;
			this.play('walk');
	}else if (this.body.velocity.x > 0){
    	    this.scale.x = 1;
			this.play('walk');
	}

}