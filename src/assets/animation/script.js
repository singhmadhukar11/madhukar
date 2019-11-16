function InteractiveParticles(canvas, args){
  var that = this;
  this.canvas = canvas;
  this.args = args;
  this.density = 12;
  this.produceDistance = 1;
  this.baseRadius = 2.377;
  this.reactionSensitivity = 1;
  this.particleRecessSpeed = 0.15;
  this.canvasPadding = 30
  this.ignoreColors = [];
  this.particles = [];
  this.mouse = {
      x: -1000,
      y: -1000,
      down: false
  };
  this.animation = null;
  this.context = null;
  this.bgImage = null;
  this.bgCanvas = null;
  this.bgContext = null;
  this.bgContextPixelData = null;

  for (var key in args) {
    this[key] = args[key];
  }

  this.add = function() {
      // Set up the visual canvas
      that.context = that.canvas.getContext('2d', { alpha: true });

      // this.context.globalCompositeOperation = "lighter";
      if(that.size.length){
        that.canvas.width = that.size[0] + (that.canvasPadding*2);
        that.canvas.height = that.size[1] + (that.canvasPadding*2);
      }else{
        that.canvas.width = that.canvas.clientWidth + (that.canvasPadding*2);
        that.canvas.height = that.canvas.clientHeight + (that.canvasPadding*2);
      }

      that.canvas.style.display = 'block'
      that.canvas.addEventListener('mousemove', that.pointerMove, false);
      that.canvas.addEventListener('mouseout', that.pointerOut, false);
      that.canvas.addEventListener('touchstart', that.pointerMove, false);
      that.canvas.addEventListener('ontouchend', that.pointerOut, false);

      window.onresize = function(event) {
        if(that.size.length){
          that.canvas.width = that.size[0];
          that.canvas.height = that.size[1];
        }else{
          that.canvas.width = that.canvas.clientWidth;
          that.canvas.height = that.canvas.clientHeight;
        }
        that.onWindowResize();
      }

      // Load initial input image
      that.getImageData(that.image);
  };

  this.makeParticles = function() {
      // remove the current particles
      that.particles = [];
      var width, height, i, j;
      var colors = that.bgContextPixelData.data;

      for (i = 0; i < that.canvas.height; i += that.density) {

          for (j = 0; j < that.canvas.width; j += that.density) {


              var pixelPosition = (j + i * that.bgContextPixelData.width) * 4;

              // Ignore colors
              var ignoreColor = false;
              if(that.ignoreColors.length){
                  for (var ckey in that.ignoreColors){
                      if (colors[pixelPosition] == that.ignoreColors[ckey][0] && (colors[pixelPosition + 1]) == that.ignoreColors[ckey][1] && (colors[pixelPosition + 2]) == that.ignoreColors[ckey][2]) {
                          ignoreColor = true;
                      }
                  }
                  if(ignoreColor) continue;
              }

              var color = 'rgba(' + colors[pixelPosition] + ',' + colors[pixelPosition + 1] + ',' + colors[pixelPosition + 2] + ',' + '1)';
              that.particles.push({
                  x: j,
                  y: i,
                  originalX: j,
                  originalY: i,
                  color: color
              });
          }
      }
  };

  this.updateparticles = function() {

      var i, currentPoint, theta, distance;

      for (i = 0; i < that.particles.length; i++) {

          currentPoint = that.particles[i];

          theta = Math.atan2(currentPoint.y - that.mouse.y, currentPoint.x - that.mouse.x);

          if (that.mouse.down) {
              distance = that.reactionSensitivity * 200 / Math.sqrt((that.mouse.x - currentPoint.x) * (that.mouse.x - currentPoint.x) +
                  (that.mouse.y - currentPoint.y) * (that.mouse.y - currentPoint.y));
          } else {
              distance = that.reactionSensitivity * 100 / Math.sqrt((that.mouse.x - currentPoint.x) * (that.mouse.x - currentPoint.x) +
                  (that.mouse.y - currentPoint.y) * (that.mouse.y - currentPoint.y));
          }


          currentPoint.x += Math.cos(theta) * distance + (currentPoint.originalX - currentPoint.x) * that.particleRecessSpeed;
          currentPoint.y += Math.sin(theta) * distance + (currentPoint.originalY - currentPoint.y) * that.particleRecessSpeed;

      }
  };

  this.produceparticles = function() {

      var i, currentPoint;

      for (i = 0; i < that.particles.length; i++) {

          currentPoint = that.particles[i];

          // produce the dot.
          that.context.fillStyle = currentPoint.color;
          that.context.strokeStyle = currentPoint.color;

          that.context.beginPath();
          that.context.arc(currentPoint.x, currentPoint.y, that.baseRadius, 0, Math.PI * 2, true);
          that.context.closePath();
          that.context.fill();

      }
  };

  this.produce = function() {
      that.animation = requestAnimationFrame(function() {
          that.produce()
      });

      that.remove();
      that.updateparticles();
      that.produceparticles();

  };

  this.remove = function() {
    that.canvas.width = that.canvas.width;
  };

  // The filereader has loaded the image... add it to image object to be producen
  this.getImageData = function(data) {

    that.bgImage = new Image;
    that.bgImage.src = data;

    that.bgImage.onload = function() {

    //this
        that.produceInteractiveParticles();
    }
  };

  // Image is loaded... produce to bg canvas
  this.produceInteractiveParticles = function() {

    that.bgCanvas = document.createElement('canvas');
    that.bgCanvas.width = that.canvas.width;
    that.bgCanvas.height = that.canvas.height;

      var newWidth, newHeight;

      // // If the image is too big for the screen... scale it down.
      // if (this.bgImage.width > this.bgCanvas.width - this.canvasPadding || this.bgImage.height > this.bgCanvas.height - this.canvasPadding) {
      //     var maxRatio = Math.max(this.bgImage.width / (this.bgCanvas.width - this.canvasPadding), this.bgImage.height / (this.bgCanvas.height - this.canvasPadding));
      //     newWidth = this.bgImage.width / maxRatio;
      //     newHeight = this.bgImage.height / maxRatio;
      // } else {
          newWidth = that.bgImage.width;
          newHeight = that.bgImage.height;
      // }

      // produce to background canvas
      that.bgContext = that.bgCanvas.getContext('2d', { alpha: false });
      that.bgContext.drawImage(that.bgImage, Math.round((that.canvas.width - newWidth) / 2), Math.round((that.canvas.height - newHeight) / 2), Math.round(newWidth), Math.round(newHeight));
      that.bgContextPixelData = that.bgContext.getImageData(0, 0, Math.round(that.bgCanvas.width), Math.round(that.bgCanvas.height));

      that.makeParticles();
      that.produce();
  };

  this.pointerMove = function(event) {
      that.mouse.x = event.offsetX || (event.layerX - that.canvas.offsetLeft);
      that.mouse.y = event.offsetY || (event.layerY - that.canvas.offsetTop);
  };

  this.pointerOut = function(event) {
      that.mouse.x = -1000;
      that.mouse.y = -1000;
      that.mouse.down = false;
  };

  // Resize and reproduce the canvas.
  this.onWindowResize = function() {
      cancelAnimationFrame(that.animation);
      that.produceInteractiveParticles();
  };

  this.add(this.canvas, this.args);
}

(function() {
  var dots = new InteractiveParticles(document.getElementById('dots'), {
    size: [690,130],
    density: 5,
    baseRadius: 1,
    ignoreColors: [
      [0,0,0]
    ],
     image: "data:image/png;base64,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"
  });
})();
