var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;
var sparks = [];

function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0, 0, width, height);
	updateSparks();
	renderSparks();
}

function Spark() {
	this.init();
}

Spark.prototype.init = function() {
  this.x = Math.round((Math.random() * width) * 2);
  this.y = Math.round((Math.random() * height) * 2);
  this.rad = Math.ceil(Math.random() * 40);
  this.alph = 1;
}

Spark.prototype.update = function() {
  if (this.alph > 0) this.alph -= 0.1;
  else this.init();
}

Spark.prototype.render = function() {
	ctx.save();
	ctx.fillStyle = '#' + Math.random().toString(16).slice(2, 8);
	ctx.globalAlpha = this.alph;
	ctx.beginPath();
	ctx.arc(this.x, this.y, this.rad, 0, Math.PI * 2, false);
	ctx.fill();
	ctx.restore();
}

function createSparks() {
	for (var i = 0; i < 500; i++) {
		sparks.push(new Spark());
	}
}

function updateSparks() {
	var i = sparks.length;
	while (i--) {
		sparks[i].update();
	}
}

function renderSparks() {
	var i = sparks.length;
	while (i--) {
		sparks[i].render();
	}
}

createSparks();
animate();