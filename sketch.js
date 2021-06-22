let ditherType = 'floydsteinberg';

function preload() {
  resetSketch();
}

function setup() {
  
  var myCanvas = createCanvas(0.2*windowWidth, 0.2*windowWidth);
  img.resize(width,height)
  
  yellow = new Riso('SUNFLOWER');
  pixelDensity(1)

  myCanvas.parent('#visualizer')
  myCanvas.mousePressed(resetSketch);
}

function draw() {
  background(255);

  let threshold = map(mouseX, 0, width, 0, 255);

  clearRiso();

  let dithered = ditherImage(img, ditherType, threshold);
  yellow.image(dithered, 0, 0, width, height);

  drawRiso();
}

// function keyReleased() {
//   if (key == 1) ditherType = 'atkinson';
//   else if (key == 2) ditherType = 'floydsteinberg';
//   else if (key == 3) ditherType = 'bayer';
//   else if (key == 4) ditherType = 'none';
// }

function resetSketch() {
    var images = [
    "https://res.cloudinary.com/dnhpzzy3e/image/upload/v1624323500/NSUO/Visualizer%20Images/3_bo4rf5.jpg",
    "https://res.cloudinary.com/dnhpzzy3e/image/upload/v1624323500/NSUO/Visualizer%20Images/5_ekvqwr.jpg",
    "https://res.cloudinary.com/dnhpzzy3e/image/upload/v1624323500/NSUO/Visualizer%20Images/4_mmjdws.jpg",
    "https://res.cloudinary.com/dnhpzzy3e/image/upload/v1624323500/NSUO/Visualizer%20Images/2_pz609r.jpg",
    "https://res.cloudinary.com/dnhpzzy3e/image/upload/v1624323500/NSUO/Visualizer%20Images/1_kugc2q.jpg"
          ];
  
  var randomImage = Math.floor(Math.random() * 5)

  img = loadImage(images[randomImage]);
  img.resize(width,height)
}