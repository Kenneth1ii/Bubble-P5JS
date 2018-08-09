let bubbles = [];

function setup() {
	createCanvas(600, 400);
	for (i=0; i< 25; i++) {
	let x = random(width);
	let y = random(height);
	let r = random(10,50);

	let b = new Bubble(x,y,r);
	bubbles.push(b);
	}

}

// function mousePressed() {
// 	for (let bubble of bubbles) {
// 		bubble.clicked(mouseX, mouseY);
// 	}
// }

function mousePressed() {
	for (i=bubbles.length -1 ; i >= 0 ; i--) {
		if  (bubbles[i].contains() ) {
			bubbles.splice(i,1);
		}
	}
}
// IMPORTANT Keynote: If You are manipulating an array and while illerating over it. Probably becareful.

function draw() {
	background(0);
				// for every element of in the Array. Almost like for each.
	for(let bubble of bubbles) {
		bubble.move();
		bubble.display();
		if ( bubble.contains() ) {
			bubble.changeColor();
		} else {
			bubble.changeBack();
		}
	}
}

class Bubble {
	constructor(x,y,diameter) {
		this.x = x;
		this.y = y;
		this.diameter = diameter * 2;
		this.brightness = 0;
	}
	move () {
		this.x = this.x + random(-5,5);
		this.y = this.y + random(-5,5);
	}
	display() {
		stroke(255);
 		strokeWeight(4);
		fill(this.brightness, 125);
 		ellipse(this.x, this.y, this.diameter);
	}
	contains() {
		let d = dist(mouseX,mouseY, this.x, this.y);
		return (d <= this.diameter); 
	}

	changeColor() {
		this.brightness = 255;
	}
	changeBack() {
		this.brightness = 0;
	}
}


// function display() {
// 	stroke(255);
// 	strokeWeight(4);
// 	noFill();
// 	ellipse(bubble.x, bubble.y, 24,24);
// }

// function move() {
// 	bubble.x = bubble.x + random(-5,5);
// 	bubble.y = bubble.y + random(-5,5);
// }


