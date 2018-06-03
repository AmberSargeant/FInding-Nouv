function Fear(game,key, frame, position){
	//call to Phaser.Sprite // new Sprite(game, x, y, key, frame)
	Phaser.Sprite.call(this, game, 64,game.world.height-75,key,frame);

	// add properties
	this.anchor.set(0.5);
	this.x = position;
	game.physics.enable(this);
	this.enableBody = true;
	this.body.collideWorldBounds = true;
	this.body.bounce.y = 0.2;
    this.body.gravity.y = 800;
    this.frame = this.animations.add('walk',[0, 1, 2],4, true);
    this.animations.add('walk',[0, 1, 2],4, true);
	this.body.setSize(140, 60, 10, 40);
	game.time.events.loop(Phaser.Timer.SECOND*3, this.moveFear, this);
	this.minX = position - 150;
	this.maxX = position + 150;
	this.trackPlayer = false;
}

Fear.prototype = Object.create(Phaser.Sprite.prototype);
Fear.prototype.constructor = Fear;

Fear.prototype.update = function(){
	//console.log(this.trackPlayer);
	if(player.x > this.x + 300 || player.x < this.x - 300 || player.y < 400){
		this.trackPlayer = false;
	}else{
		this.trackPlayer = true;
	}
	if(!this.trackPlayer){
		if(this.x < this.minX){
			this.body.velocity.x = 30;
    		this.scale.x = 1;
			this.play('walk');
		}
		if(this.x > this.maxX){
			this.body.velocity.x = -30;
    		this.scale.x = -1;
			this.play('walk');
		}
	}else if(this.trackPlayer){
		 if(player.x > this.x){
    				this.body.velocity.x = 200;
    				this.scale.x = 1;
				    this.play('walk');
    	}else if (player.x < this.x){
    				this.body.velocity.x =  -200;
    				this.scale.x = -1;
					this.play('walk');
    	} 
	}
}

Fear.prototype.moveFear = function(){
	if(!this.trackPlayer){
	this.body.velocity.x = game.rnd.integerInRange(-30, 30);
	if(this.body.velocity.x < 0){
    		this.scale.x = -1;
			this.play('walk');
	}else if (this.body.velocity.x > 0){
    	    this.scale.x = 1;
			this.play('walk');
	}

	}
}