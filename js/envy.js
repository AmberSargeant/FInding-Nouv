function Envy(game,key, frame, position){
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
    this.frame = this.animations.add('walk',[0, 1],4, true);
    this.animations.add('walk',[0, 1],4, true);
	this.body.setSize(30, 130, 50, 20);

}

Envy.prototype = Object.create(Phaser.Sprite.prototype);
Envy.prototype.constructor = Envy;

Envy.prototype.update = function(){
  	
}

	