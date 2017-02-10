 var circle1 = {
	x : 100,
	y : 100,
	diameter : 100,
	speedx : 10,
	speedy : -10
}
var circle2 = {
	x : 200,
	y : 200,
	diameter : 100,
	speedx : -10,
	speedy : 10
}
var rectangle = {
	x : 400,
	y : 525,
	wd: 20,
	lt: 100
}

function setup() 
{
	createCanvas(900,550);
}

function draw() 
{
	background(150);

	fill(255);
	ellipse(circle1.x, circle1.y, circle1.diameter, circle1.diameter);
	circle1.x += circle1.speedx;
	circle1.y += circle1.speedy;

	if (circle1.x < 0 || circle1.x > width) 
	{
		circle1.speedx *= -1;
	}

	if (circle1.y < 0 || circle1.y > height) 
	{
		circle1.speedy *= -1;
	}

	fill(255,0,0);
	ellipse(circle2.x, circle2.y, circle2.diameter, circle2.diameter);
	circle2.x += circle2.speedx;
	circle2.y += circle2.speedy;

	if (circle2.x < 0 || circle2.x > width) 
	{
		circle2.speedx *= -1;
	}

	if (circle2.y < 0 || circle2.y > height) 
	{
		circle2.speedy *= -1;
	}

	fill(123,23,44);
	rect(rectangle.x, rectangle.y, rectangle.lt, rectangle.wd);

	if (keyIsPressed("LEFT_ARROW")) {
		rectangle.x  = rectangle.x + 1;
	}

	/*Detecting color  so as to stop the game*/
	var sensor = get(circle1.x, circle1.y);
	var sensor2 = get(circle1.x + 50, circle1.y + 50);



	if ((sensor[0] == 255 && sensor[1] == 0 && sensor[2] == 0) || (sensor2[0] == 255 && sensor2[1] == 0 && sensor2[2] == 0))
	{
		// noLoop();
		circle2.speedx *= -1;
	}
}