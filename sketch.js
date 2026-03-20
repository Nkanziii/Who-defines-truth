let s1 = function(p) {
  let myImage, size;
  const txt = [
    "وَعَاشِرُوهُنَّ", "بِالْمَعْرُوفِ",
    "وَلَهُنَّ", "مِثْلُ", "الَّذِي", "عَلَيْهِنَّ", "بِالْمَعْرُوفِ",
    "يَا", "أَيُّهَا", "النَّاسُ", "اتَّقُوا", "رَبَّكُمُ", "الَّذِي", "خَلَقَكُم", "مِّن", "نَّفْسٍ", "وَاحِدَةٍ"
  ];

  p.preload = function() {
    myImage = p.loadImage("woman.jpg");
  }

  p.setup = function() {
    myImage.resize(150, 0);
    size = 500 / myImage.width;
    let canvasHeight = myImage.height * size;
    let canvas = p.createCanvas(500, canvasHeight);
    canvas.parent('container');
    myImage.loadPixels();
  }

  p.draw = function() {
    p.clear();
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(size * 2);

    for (let i = 0; i < myImage.width; i++) {
      for (let j = 0; j < myImage.height; j++) {
        let pixelsIndex = (i + j * myImage.width) * 4;
        let r = myImage.pixels[pixelsIndex];
        let g = myImage.pixels[pixelsIndex + 1];
        let b = myImage.pixels[pixelsIndex + 2];
        let bright = (r + g + b)/3;
        let tIndex = (i + j * myImage.width) % txt.length;
        let x = i * size + size / 2;
        let y = j * size + size / 2;
        let offset = (p.frameCount * 2 + j * 20) % (size * txt[tIndex].length);
        
        p.fill(bright * 4);
        p.drawingContext.save();
        p.drawingContext.beginPath();
        p.drawingContext.rect(i * size, j * size, size, size);
        p.drawingContext.clip();
        p.text(txt[tIndex], x - offset, y);
        p.drawingContext.restore();
      }
    }
  }
}

new p5(s1);