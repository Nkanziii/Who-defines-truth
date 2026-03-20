let s2 = function(p) {
  const txt = [
    "وَعَاشِرُوهُنَّ", "بِالْمَعْرُوفِ",
    "وَلَهُنَّ", "مِثْلُ", "الَّذِي", "عَلَيْهِنَّ", "بِالْمَعْرُوفِ",
    "يَا", "أَيُّهَا", "النَّاسُ", "اتَّقُوا", "رَبَّكُمُ", "الَّذِي", "خَلَقَكُم", "مِّن", "نَّفْسٍ", "وَاحِدَةٍ"
  ];
  let sz = 20;
  let flashlightRadius = 150;

  p.setup = function() {
    let canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.parent('container-two');
    p.textSize(sz);
    p.textAlign(p.LEFT, p.TOP);
  }

  p.draw = function() {
    p.clear()
    for (let i = 0; i < p.floor(p.height / sz); i++) {
      for (let j = 0; j < p.floor(p.width / sz); j++) {
        let x = j * sz;
        let y = i * sz;
        let tIndex = (i + j) % txt.length;
        let d = p.dist(p.mouseX, p.mouseY, x, y);
        let brightness = p.map(d, 0, flashlightRadius, 150, 0);
        brightness = p.constrain(brightness, 0, 255);

        let r = 23;   // #177FBF
let g = 127;
let b = 191;

p.fill(r * (brightness/255), g * (brightness/255), b * (brightness/255));
        
        p.text(txt[tIndex], x, y);
      }
    }
  }
  
}

new p5(s2);