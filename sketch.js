var wall, thickness;
var bullet, speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(100, 200, 50, 50);
  bullet.shapeColor = "white";
  speed = random(223, 321);
  weight = random (30, 52)
  bullet.velocityX = speed;

  fill(80, 80, 80);
  thickness = random(22, 83);
  wall = createSprite(1200, 200, thickness, height/2);
}

function draw() {
  background(0);  


  if(hasCollided(wall, bullet))
  { 
    damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);
  if (damage>10)
  {
    bullet.shapeColor =color(255,0,0);
  }
  if (damage<10)
  {
    bullet.shapeColor = color(0,250,0);
  }
}
  drawSprites();
}

function hasCollided(Lbullet, Lwall)
{
  bulletRightEdge= Lbullet.x +Lbullet.width;
  wallLeftEdge= Lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  else
  {
    return false;
  }
}
