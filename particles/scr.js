let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let width = window.innerWidth;
let height = window.innerHeight;
let nearParticles = [],
	frontParticles = [],
	middleParticles = [],
	farParticles = [];

let particleSettings = {
	count: 500 //count for each layer increase/reduce based on requirement
};

window.requestAnimationFrame =
	window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.oRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	function (callback) {
		window.setTimeout(callback, 1000 / 60);
	};

//random number between range
function randomNumberGenerator(min, max) {
	return Math.random() * (max - min) + min;
}

function createSnowfall(particles, flag) {
	while (particles.length < particleSettings.count) {
		let particle;
		//create particles based on flag
		if (flag == "front") {
			//Particle(area,alpha,vy)area=size,alpha=blur,vy=falling speed
			particle = new Particle(8, 0.9, 0.4);
		} else if (flag == "near") {
			//Particle(area,alpha,vy)area=size,alpha=blur,vy=falling speed
			particle = new Particle(4, 0.6, 0.3);
		} else if (flag == "middle") {
			particle = new Particle(3, 0.5, 0.2);
		} else {
			particle = new Particle(2, 0.3, 0.1);
		}
		particle.color = `rgb(255,255,255)`;
		particles.push(particle);
	}
}

function startSnowfall() {
	//black background
	context.fillStyle = "rgba(0,255,0,1)";
	context.fillRect(0, 0, width, height);
	//create snowfall
	createSnowfall(frontParticles, "front");
	createSnowfall(nearParticles, "near");
	createSnowfall(farParticles, "far");
	createSnowfall(middleParticles, "middle");
	//combine all and sort randomly
	particles = [...frontParticles, ...nearParticles, ...middleParticles, ...farParticles];
	particles = particles.sort(() => 0.5 - Math.random());
	for (let i in particles) {
		particles[i].draw();
		//if particle has crossed the screen height
		if (particles[i].y > height) {
			//reset the particle's y
			particles[i].y = Math.random() * height - height;
		}
	}
	window.requestAnimationFrame(startSnowfall);
}

function Particle(areaValue, alphaValue, vyValue) {
	this.area = areaValue; //4
	this.x = Math.random() * width;
	this.y = Math.random() * height - height;
	this.alpha = alphaValue; //1
	this.vy = vyValue * 10; //0.3
}

Particle.prototype = {
	draw: function () {
		//based on confetti code
		this.y += (Math.cos(this.area) + this.vy) * 0.3;
		context.save();
		context.beginPath();
		//circle
		context.arc(this.x, this.y, this.area, 0, Math.PI * 2);
		context.fillStyle = this.color;
		context.globalAlpha = this.alpha;
		context.closePath();
		context.fill();
		context.restore();
	}
};

window.onload = () => {
	canvas.width = width;
	canvas.height = height;
	nearParticles = [];
	middleParticles = [];
	farParticles = [];
	window.requestAnimationFrame(startSnowfall);
};
