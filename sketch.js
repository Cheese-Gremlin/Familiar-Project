// sketch.js — p5.js starter

// Set to true if you want to reserve space for a side UI panel (360px wide)
const SHOW_UI = false;

let textColour = [354, 0, 17];

let showMainMenu = false
let mainMenuOutlineColour = [42, 5, 92];
let mainMenuFillColour = [42, 5, 99, 200];
let mainMenuOutlineWidth = (3);

let showFeelingsMenu = false



let gooberOutlineColour = [0, 0, 100];
let gooberFillColour = [0, 0, 100, 200];
let outlineWidth = (5);
let faceColour = [0, 0, 19];

let gooberWidth = (220);
let gooberHeight = (265);
let gooberPosX = (150);
let gooberPosY = (200);

// goober expressions
let contemptFace = true
let happyFace = false
let sadFace = false
let angryFace = false

// user feelings
let tired = false           // #fccd77
let angry = false            // #fc7777
let annoyed = false         // #d677fc
let bored = false           // #9f77fc
let sad = false             // #66a2fd
let distracted = false      // #80eafd
let overwhelmed = false     // #4ec9a4
let panicked = false        // #87c951
let excited = false         // #b5eb64
let happy = false           // #effc77
let calm = false            // #fff8e8

function preload(){
  GooberImg =loadImage("images/Goober-Template.png")
}

function isMobile() {
  return window.innerWidth <= 768;
}

function canvasSize() {
  if (isMobile()) {
    return { w: window.innerWidth, h: window.innerHeight };
  }
  return {
    w: SHOW_UI ? windowWidth - 360 : windowWidth - 40,
    h: windowHeight - 40,
  };
}

function setup() {
  const { w, h } = canvasSize();
  createCanvas(w, h);
  strokeCap(ROUND);
  strokeJoin(ROUND);
  colorMode (HSB); //same as HSV
  textFont('Indie Flower');
}

function draw() {
    background (245, 35, 67);
    
    drawGoober(gooberPosX, gooberPosY);
    if (showMainMenu === true){
        drawMainMenu(gooberPosX, gooberPosY);
    }
    if (showFeelingsMenu === true){
        drawFeelingsMenu(gooberPosX, gooberPosY);
    }
}

function drawGoober(x, y){
    //image (GooberImg, x, y, 256, 311); //template for drawing goober using code
    gooberColour(200, 250); //opacity of body fill colour, opacity of line colour
//body
    fill(gooberFillColour);
    stroke(gooberOutlineColour);
    strokeWeight(outlineWidth);
    beginShape(); //top body
    curveVertex (x-110, y+135);
    curveVertex (x-110, y+135); //bottom left
    curveVertex (x-100, y-65);
    curveVertex (x, y-130); //middle
    curveVertex (x+100, y-65);
    curveVertex (x+110, y+135); //bottom right
    curveVertex (x+110, y+135); 
    endShape();
    gooberSwoops (x-110, y+135); //left most 'swoop'
    gooberSwoops (x-55, y+135);
    gooberSwoops (x, y+135);
    gooberSwoops (x+55, y+135);


//draw face 
    if (contemptFace === true) {
        drawContemptFace (x, y-55);
    }
    if (happyFace === true) {
        drawHappyFace (x, y-55);
    }
    if (sadFace === true) {
        drawSadFace (x, y-55);
    }
    if (angryFace === true) {
        drawAngryFace (x, y-55);
    }
}

    function gooberSwoops (x,y){
        strokeWeight(outlineWidth);
        beginShape();
        curveVertex (x, y);
        curveVertex (x, y); //left 
        curveVertex (x+5, y+5);
        curveVertex (x+15, y+10);
        curveVertex (x+27.5, y+12); //middle
        curveVertex (x+40, y+10); 
        curveVertex (x+50, y+5);
        curveVertex (x+55, y); //right
        curveVertex (x+55, y);
        endShape();
    }

    function gooberColour (bodyOpacity, lineOpacity){
    if (tired === true){ // #fccd77
        gooberOutlineColour = [39, 53, 92, lineOpacity];
        gooberFillColour = [39, 53, 99, bodyOpacity];
    }
    else if (angry === true){ // #fc7777
        gooberOutlineColour = [0, 53, 92, lineOpacity];
        gooberFillColour = [0, 53, 99, bodyOpacity];
    }
    else if (annoyed === true){ // #d677fc
        gooberOutlineColour = [283, 53, 92, lineOpacity];
        gooberFillColour = [283, 53, 99, bodyOpacity];
    }
    else if (bored === true){ // #9f77fc
        gooberOutlineColour = [258, 53, 92, lineOpacity];
        gooberFillColour = [258, 53, 99, bodyOpacity];
    }
    else if (sad === true){ // #66a2fd
        gooberOutlineColour = [216, 60, 92, lineOpacity];
        gooberFillColour = [216, 60, 99, bodyOpacity];
    }
    else if (distracted === true){ // #80eafd
        gooberOutlineColour = [189, 49, 92, lineOpacity];
        gooberFillColour = [189, 49, 99, bodyOpacity];
    }
    else if (overwhelmed === true){ // #4ec9a4
        gooberOutlineColour = [162, 61, 72, lineOpacity];
        gooberFillColour = [162, 61, 79, bodyOpacity];
    }
    else if (panicked === true){ // #87c951
        gooberOutlineColour = [93, 60, 72, lineOpacity];
        gooberFillColour = [93, 60, 79, bodyOpacity];
    }
    else if (excited === true){ // #b5eb64
        gooberOutlineColour = [91, 57, 85, lineOpacity];
        gooberFillColour = [91, 57, 92, bodyOpacity];
    }
    else if (happy === true){ // #effc77
        gooberOutlineColour = [66, 53, 92, lineOpacity];
        gooberFillColour = [66, 53, 99, bodyOpacity];
    }
    else if (calm === true){ // #fff5de
        gooberOutlineColour = [42, 13, 93, lineOpacity];
        gooberFillColour = [42, 13, 100, bodyOpacity];
    }
    else {
        gooberOutlineColour = [283, 2, 52, lineOpacity];
        gooberFillColour = [283, 0, 59, bodyOpacity];
    }
        
    }
    //faces
    function drawContemptFace (x, y){
        noFill();
        stroke(faceColour);
        strokeWeight(outlineWidth*2);
        ellipse (x-45, y, 5, 12); //left eye
        ellipse (x+45, y, 5, 12); //right eye
        beginShape(); //mouth
        strokeWeight(outlineWidth);
        curveVertex (x-25, y+30);
        curveVertex (x-25, y+30); // left
        curveVertex (x-16, y+39);
        curveVertex (x, y+44); //middle
        curveVertex (x+16, y+39);
        curveVertex (x+25, y+30); // right
        curveVertex (x+25, y+30); 
        endShape();

    }
    function drawHappyFace (x, y){
        noFill();
        stroke(faceColour);
        strokeWeight(outlineWidth);
        line (x-55, y-5, x-30, y+5); //left eye
        line ( x-30, y+5, x-55, y+10); 
        line (x+55, y-5, x+30, y+5); //left eye
        line ( x+30, y+5, x+55, y+10); 
        beginShape(); //mouth
        curveVertex (x-25, y+30);
        curveVertex (x-25, y+30); // left
        curveVertex (x-16, y+39);
        curveVertex (x, y+44); //middle
        curveVertex (x+16, y+39);
        curveVertex (x+25, y+30); // right
        curveVertex (x+25, y+30); 
        endShape();

    }
    function drawSadFace (x, y){
        noFill();
        stroke(faceColour);
        strokeWeight(outlineWidth*2);
        ellipse (x-45, y, 5, 12); //left eye
        ellipse (x+45, y, 5, 12); //right eye
        beginShape(); //mouth
        strokeWeight(outlineWidth);
        curveVertex (x-25, y+38);
        curveVertex (x-25, y+38); // left
        curveVertex (x-16, y+29);
        curveVertex (x, y+25); //middle
        curveVertex (x+16, y+29);
        curveVertex (x+25, y+38); // right
        curveVertex (x+25, y+38); 
        endShape();
    }
    function drawAngryFace (x, y){
        noFill();
        stroke(faceColour);
        strokeWeight(outlineWidth*2);
        ellipse (x-45, y, 5, 12); //left eye
        ellipse (x+45, y, 5, 12); //right eye
        strokeWeight(outlineWidth);
        line (x-55, y-20, x-30, y-10); //eyebrows
        line (x+55, y-20, x+30, y-10);
        beginShape(); //mouth
        curveVertex (x-25, y+38);
        curveVertex (x-25, y+38); // left
        curveVertex (x-16, y+29);
        curveVertex (x, y+25); //middle
        curveVertex (x+16, y+29);
        curveVertex (x+25, y+38); // right
        curveVertex (x+25, y+38); 
        endShape();
    }

function mouseClicked () {
// press on goober
  if (showFeelingsMenu === false && showMainMenu === false && mouseX > gooberPosX - gooberWidth/2 && mouseX < gooberPosX + gooberWidth/2 &&
      mouseY > gooberPosY - gooberHeight/2 && mouseY < gooberPosY + gooberHeight/2) {
    console.log('Clicked on goober');
    showMainMenu = true
  }
//press 'log feelings'
  else if (showMainMenu === true && mouseX > gooberPosX+180 && mouseX < gooberPosX+340 && mouseY > gooberPosY-100 && mouseY < gooberPosY-60) {
    console.log('Clicked on log feelings');
    showMainMenu = false
    showFeelingsMenu = true
  }
//calm
  else if (showMainMenu === false && showFeelingsMenu === true && mouseX > gooberPosX+180 && mouseX < gooberPosX+305 && mouseY > gooberPosY-100 && mouseY < gooberPosY-80) {
    console.log('Clicked on log feelings');
    showMainMenu = false
    showFeelingsMenu = true
    calm = true
    happy = false
  }
//happy
  else if (showMainMenu === false && showFeelingsMenu === true && mouseX > gooberPosX+180 && mouseX < gooberPosX+305 && mouseY > gooberPosY-72 && mouseY < gooberPosY-62) {
    console.log('Clicked on log feelings');
    showMainMenu = false
    showFeelingsMenu = true
    calm = false
    happy = true
  }
}

function drawMainMenu(x, y) {
    fill(mainMenuFillColour);
    stroke(mainMenuOutlineColour);
    strokeWeight(mainMenuOutlineWidth);

    //thinking bubbles
    ellipse (x+110, y-110, 30, 30);
    ellipse (x+137, y-130, 20, 20);
    ellipse (x+160, y-140, 15, 15);
    //menu bubbles
    rect(x+180, y-160, 230, 50, 20); //hello!
    rect(x+180, y-100, 160, 40, 20); //feeling
    rect(x+180, y-50, 237, 40, 20); //tasks
    rect(x+180, y, 165, 40, 20); //food
    rect(x+180, y+50, 150, 40, 20); //help
    rect(x+180, y+100, 260, 40, 20); //proud

    //text
    fill(textColour);
    stroke(textColour)
    strokeWeight (0.75)
    textSize (20);
    text ('Hello! What do you need?', x+195, y-127);
    text ('Log a feeling •‿•', x+195, y-75);
    text ('Share what you like to do', x+195, y-23);
    text ('Share food 𓌉◯𓇋', x+195, y+27);
    text ('Ask for Help ♡', x+195, y+77);
    text ('Say Your Proud of Yourself', x+195, y+125);
}

function drawFeelingsMenu(x, y) {
    fill(mainMenuFillColour);
    stroke(mainMenuOutlineColour);
    strokeWeight(mainMenuOutlineWidth);

    //thinking bubbles
    ellipse (x+110, y-110, 30, 30);
    ellipse (x+137, y-130, 20, 20);
    ellipse (x+160, y-140, 15, 15);
    //menu bubbles
    rect(x+180, y-160, 227, 50, 20); //hello!
    //left column
    rect(x+180, y-100, 125, 20, 20); //calm
    rect(x+180, y-72, 125, 20, 20); //happy
    rect(x+180, y-44, 125, 20, 20); //Excited
    rect(x+180, y-16, 125, 20, 20); //Panicked
    rect(x+180, y+12, 125, 20, 20); //overwhelmed
    rect(x+180, y+40, 125, 20, 20); //distracted
    //right column
    rect(x+312, y-100, 95, 20, 20); //sad
    rect(x+312, y-72, 95, 20, 20); //bored
    rect(x+312, y-44, 95, 20, 20); //Annoyed
    rect(x+312, y-16, 95, 20, 20); //Angry
    rect(x+312, y+12, 95, 20, 20); //Tired
    rect(x+312, y+40, 95, 20, 20); //Nothing
    //OK
    rect(x+180, y+70, 227, 50, 20); //done

    //colour bubbles
    //left column
    push ();
    strokeWeight(2.5);
    translate (8, 4)
    stroke(42, 13, 93);
    fill(42, 13, 100);
    rect(x+180, y-100, 12, 12, 5); //calm
    stroke(66, 53, 92);
    fill(66, 53, 99);
    rect(x+180, y-72, 12, 12, 5); //happy
    stroke(91, 57, 85);
    fill(91, 57, 92);
    rect(x+180, y-44, 12, 12, 5); //Excited
    stroke(93, 60, 72);
    fill(93, 60, 79);
    rect(x+180, y-16, 12, 12, 5); //Panicked
    stroke(162, 61, 72);
    fill(162, 61, 79);
    rect(x+180, y+12, 12, 12, 5); //overwhelmed
    stroke(189, 49, 92);
    fill(189, 49, 99);
    rect(x+180, y+40, 12, 12, 5); //distracted
    //right column
    rect(x+312, y-100, 12, 12, 5); //sad
    rect(x+312, y-72, 12, 12, 5); //bored
    rect(x+312, y-44, 12, 12, 5); //Annoyed
    rect(x+312, y-16, 12, 12, 5); //Angry
    rect(x+312, y+12, 12, 12, 5); //Tired
    rect(x+312, y+40, 12, 12, 5); //Nothing
    pop ();

    //text
    fill(textColour);
    stroke(textColour)
    strokeWeight (0.75)
    textSize (19);
    text ('How are you feeling today?', x+185, y-127);
    text ('Yup Thats me', x+240, y+100);
     textSize (17);
    //left column
    text ('Calm', x+205, y-85);
    text ('Happy', x+205, y-58);
    text ('Excited', x+205, y-27);
    text ('Panicked', x+205, y);
    text ('Overwhelmed', x+205, y+27);
    text ('Distracted', x+205, y+55);
    //right column
    text ('Sad', x+337, y-85);
    text ('Bored', x+337, y-57);
    text ('Annoyed', x+337, y-27);
    text ('Angry', x+337, y-1);
    text ('Tired', x+337, y+27);
    text ('Nothing', x+337, y+54);
}

// Resize the canvas if the window is resized
function windowResized() {
  const { w, h } = canvasSize();
  resizeCanvas(w, h);
}
