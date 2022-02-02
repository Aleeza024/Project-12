var Track, TrackImage
var Boy, BoyImage
var invisibleWall1, invisibleWall2

function preload() {
  //pre-load images
  TrackImage = loadImage("path.png")
  BoyImage = loadAnimation("Runner-1.png,Runner-2.png")
}

function setup() {
  createCanvas(400, 400);
  //create sprites here


  Track = createSprite(200, 200);
  Track.addImage(pathImage);
  Track.velocityY = 4;
  Track.scale = 1.2;

  Boy = createSprite(200, 50)
  Boy.addAnimation("running", BoyImage)

  invisibleWall1 = createSprite(350, 200, 10, 400)


  invisibleWall2 = createSprite(10, 200, 10, 400)


}

function draw() {
  background("white");
  if (Track.y < 400) {
    Track.y = height / 2;
  }
  Boy.x = World.mouseX;

  Boy.collide(invisibleWall1, invisibleWall2)
  drawSprites()

}
