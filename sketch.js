let time = 0;
let wave = [];

let slider;
//let sliderr;
//let sliderg;
//let sliderb;

function setup(){
    createCanvas(600,400);
    slider = createSlider(1,10,1);
    //sliderr = createSlider(1,255,1)
    //sliderg = createSlider(1,255,1)
   // sliderb = createSlider(1,255,1)
}

function draw() {
    background(0);
    translate(150,200);

    let x = 0;
    let y = 0;

    for (let i = 0; i < slider.value(); i++){

        let prevx = x;
        let prevy = y;
        let n = i * 2 + 1;
        let  radius = 75 * (4/(n * PI));
        x += radius * cos(n *time);
        y += radius * sin(n *time);

        //stroke(sliderr.value(),sliderg.value(),sliderb.value(), 100);
        stroke(255);
        noFill();
        ellipse(prevx,prevy, radius * 2)

        fill(255);
        stroke(255);
        //stroke(sliderr.value(),sliderg.value(),sliderb.value());
        line(prevx,prevy,x,y);
        //ellipse(x,y,8 )

    }
    wave.unshift(y);

    translate(200,0);
    line(x -200, y, 0,wave[0]);
    beginShape();
    noFill();
    for (let i = 0; i < wave.length;i++){
        vertex(i,wave[i]);
    }
    endShape();
    
    time += 0.02;

    if (wave.length > 250){
        wave.pop();
    }
}