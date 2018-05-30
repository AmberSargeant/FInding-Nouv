function Wrath(game,key, frame, position){
	//call to Phaser.Sprite // new Sprite(game, x, y, key, frame)
	Phaser.Sprite.call(this, game, 64,game.world.height-60,key,frame);

	// add properties
	this.anchor.set(0.5);
	this.x = position;
	game.physics.enable(this);
	this.enableBody = true;
	this.body.collideWorldBounds = true;
	this.body.immovable = true
	this.body.bounce.y = 0.2;
    this.body.gravity.y = 800;
    this.frame = this.animations.add('walk',[0, 1, 2 , 3 , 4],5, true);
    this.animations.add('walk',[0, 1, 2, 3, 4],4, true);
	this.body.setSize(40, 120, 50, 20);
	this.movingWrathRight  = true;
	this.animations.add('fireMove,', [0, 1, 2], 4, true);
}

Wrath.prototype = Object.create(Phaser.Sprite.prototype);
Wrath.prototype.constructor = Wrath;

Wrath.prototype.update = function(){
	if(this.x > 6500){
			this.movingWrathRight = false;
			this.body.velocity.x =  game.rnd.integerInRange(-70,-100);
    		this.scale.x = -1;
			this.play('walk');
	}else if (this.x < 5800){
			this.movingWrathRight = true;
		    this.body.velocity.x =  game.rnd.integerInRange(70,100);
    	    this.scale.x = 1;
			this.play('walk');

	}
	this.animations.play('fireMove');
}

	