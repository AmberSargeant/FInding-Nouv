function Enemy(game,key, frame, position){
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
    this.frame = this.animations.add('walk',[0, 1, 2 ,3],4, true);
    this.animations.add('walk',[0, 1, 2 ,3],4, true);
	this.body.setSize(30, 130, 50, 20);

}

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function(){
  	//green ghost follows player
    if(player.x > this.x){
    				this.body.velocity.x =  game.rnd.integerInRange(20,90);
    				   	this.scale.x = 1;
						this.play('walk');
    }else if (player.x < this.x){
    					this.body.velocity.x =  game.rnd.integerInRange(-20,-90);
    					this.scale.x = -1;
						this.play('walk');
    } 
}

	