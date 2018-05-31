function Wrath(game,key, frame, position){
	//call to Phaser.Sprite // new Sprite(game, x, y, key, frame)
	Phaser.Sprite.call(this, game, 64,game.world.height-60,key,frame);

	// add properties
	this.anchor.set(0.5);
	this.x = position;
	// position is unique to each wrath
	// Their min/max bounds are 1000 in each direction
	// because they are spawned 2000 units apart
	this.minX = position - 500;
	this.maxX = position + 500 ;
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
	this.flameLoop = game.time.events.loop(Phaser.Timer.SECOND*3, this.oneFlame, this);
	this.moveLoop = game.time.events.loop(Phaser.Timer.SECOND*3, this.moveWrath, this);
}

Wrath.prototype = Object.create(Phaser.Sprite.prototype);
Wrath.prototype.constructor = Wrath;

Wrath.prototype.update = function(){
	if(this.x < this.minX){
		this.body.velocity.x = 100;
		this.movingWrathRight = true;
    	this.scale.x = 1;
		this.play('walk');

	}
	if(this.x > this.maxX){
		this.body.velocity.x = -100;
		this.movingWrathRight = false;
    	this.scale.x = -1;
		this.play('walk');
	}
}

Wrath.prototype.oneFlame = function(){
	this.flame = new Flame(game,'fire', this);
	//console.log(flame);
    flames.add(this.flame);
}

Wrath.prototype.moveWrath = function(){

	this.body.velocity.x = game.rnd.integerInRange(-100,100);
	if(this.body.velocity.x < 0){
			this.movingWrathRight = false;
    		this.scale.x = -1;
			this.play('walk');
	}else if (this.body.velocity.x > 0){
			this.movingWrathRight = true;
    	    this.scale.x = 1;
			this.play('walk');
	}

}
Wrath.prototype.kill = function(){
	game.time.events.remove(this.flameLoop);
	game.time.events.remove(this.moveLoop);
	this.flame.kill();
	Phaser.Sprite.prototype.kill.call(this);
}