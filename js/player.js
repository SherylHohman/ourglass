var Player = function(game, settings) {
  this.c = game.c;
  for (var i in settings) {
    this[i] = settings[i];
  }
  this.size = {x:100,y:5};
  this.color = "#FF4500";
  this.angle = 0;
};

Player.prototype = {

  collision: function(other) {
    
    if (this.c.entities.all(Particle).indexOf(other) !== -1) {
      // LEFT slope
        // -90 to 0
        // -180 to -270
        // 90 to 180
        // 270 to 360
      // RIGHT slope
        // -90 to -180
        // -270 to -360
        // 0 to 90
        // 180 to 270
      var self = this;
      var angleBwn = function(minRange,maxRange){
        if (minRange < self.angle && maxRange > self.angle){
          return true;
        } else {
          return false;
        }
      }

      // paddle slope left
      if (angleBwn(-90,0) || angleBwn(-270,-180) ||
          angleBwn(90,180) || angleBwn(270,360)){

        other.center.y += 2;
        other.center.x = this.getMinX();
        
      // paddle slope right
      } else if (angleBwn(-180,-90) || angleBwn(-360,-270) ||
        angleBwn(0,90) || angleBwn(180,270)) {

        other.center.y += 2;
        other.center.x = this.getMaxX();

      // paddle perfectly flat
      } else {
        if (this.center.y > other.center.y){
            other.center.y -= 20;
        } else {
          other.center.y += 20;
        }
      }
    }

  },

  draw: function(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.center.x - this.size.x / 2,
     this.center.y - this.size.y / 2,
     this.size.x,
     this.size.y);
  },

  update: function() {

    // up, down, left, and right with arrow keys
    if (this.c.inputter.isDown(this.c.inputter.UP_ARROW)) {
      if (this.getMinY() > this.size.y){
        this.center.y -= 4;
      }
    }
    if (this.c.inputter.isDown(this.c.inputter.DOWN_ARROW)) {
      if (this.getMaxY() < this.c.renderer._viewSize.y - this.size.y){
        this.center.y += 4;
      }
    }

    if (this.c.inputter.isDown(this.c.inputter.LEFT_ARROW)) {
      if (this.getMinX() > 4){
        this.center.x -= 4;
      }
    }
    if (this.c.inputter.isDown(this.c.inputter.RIGHT_ARROW)) {
      if (this.getMaxX() < this.c.renderer._viewSize.x - this.size.y){
        this.center.x += 4;
      }
    }

    // rotate clockwise and counterclockwise with X and Z
    if (this.c.inputter.isDown(this.c.inputter.X)) {
      this.angle += 4;
      if (this.angle > 360){
        this.angle = 0;
      };

    }
    if (this.c.inputter.isDown(this.c.inputter.Z)) {
      this.angle -= 4;
      if (this.angle < -360){
        this.angle = 0;
      };
    }

    // sync with firebase
    this.sync();
  },

  getMinX: function() {
    return this.center.x +
      Math.min((this.size.x / 2) * (Math.cos(this.angle * (Math.PI / 180))),
      -1 * (this.size.x / 2) * (Math.cos(this.angle * (Math.PI / 180))));
  },

  getMaxX: function() {
    return this.center.x +
      Math.max((this.size.x / 2) * (Math.cos(this.angle * (Math.PI / 180))),
      -1 * (this.size.x / 2) * (Math.cos(this.angle * (Math.PI / 180))));
  },

  getMinY: function() {
    return this.center.y +
      Math.min((this.size.x / 2) * (Math.sin(this.angle * (Math.PI / 180))),
      -1 * (this.size.x / 2) * (Math.sin(this.angle * (Math.PI / 180))));
  },

  getMaxY: function() {
    return this.center.y +
      Math.max((this.size.x / 2) * (Math.sin(this.angle * (Math.PI / 180))),
      -1 * (this.size.x / 2) * (Math.sin(this.angle * (Math.PI / 180))));
  }

};

// sync minimum info with firebase
// should be called on each update()
Player.prototype.sync = function() {
  this.url.update({center: this.center, angle: this.angle});
}

// sync all player info with firebase
// should be called when player first created
Player.prototype.syncAll = function() {
  this.url.update({center: this.center, angle: this.angle, color: this.color, size: this.size, host: this.host});
}
