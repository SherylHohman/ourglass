var Particle = function(game, settings, position) {
  this.c = game.c;
  for (var i in settings) {
    this[i] = settings[i];
  }
  this.size = {x:3, y:3};
  this.color = "#FAEBD7";
};


Particle.prototype = {

  update: function(timeSinceLastTick){
    
    // update position
    if (this.getMaxY() < this.c.renderer._viewSize.y - this.size.y){ 
      if (this.center.y === 0) { 
        this.center.y++; 
      } else {
        this.center.y += this.center.y * .01;
      }
      this.center.y++;
    } else {
      // if particles reach the bottom, send them back up to the top
      this.center.y = this.c.entities.all(Spout)[0].center.y;
      this.center.x = this.c.entities.all(Spout)[0].center.x;
    }
    this.sync();
  },

  draw: function(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.center.x - this.size.x / 2,
      this.center.y - this.size.y / 2,
      this.size.x,
      this.size.y
    );
  },

  getMaxY: function() {
    return this.center.y - 1;
  }

};

Particle.prototype.sync = function() {
  //debugger;
  this.url.update({center: this.center});
}