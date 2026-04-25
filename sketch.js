// sketch.js — p5.js starter

// Set to true if you want to reserve space for a side UI panel (360px wide)
const SHOW_UI = false;

let textColour = [354, 0, 17];

let menuOutlineColour = [42, 5, 92];
let menuFillColour = [42, 5, 99, 200];
let menuOutlineWidth = (3);

let showMainMenu = false;
let showFeelingsMenu = false;
let showSuggestionMenu = false;
let showAcceptedSuggestionMenu = false;
let showDeclinedSuggestionMenu = false;
let showOutOfSuggestionMenu = false;
let showRestartSuggestionMenu = false;
    let restartSuggestionStartTime = Infinity;
let showThinking = false;
    let thinkingStartTime = Infinity;

// set suggestions
//let suggestion = ('Writing about why your feeling this way') 
let availableSuggestions = [];
let allSuggestionsUsed = false;
let suggestionsFilledOnce = false;
//'Curling up with a good book for an hour or two' <- max length example
let calmSuggestions = [
  'Trying to get some of your to-do tasks done',
  'Starting a new hobby or task',
  'Do some Meal prepping for the week',
  'Checking in on a friend or loved one',
  'Writing a list of things you are grateful for'
];
let happySuggestions = [
  'Writing about why your feeling this way',
  'Sharing your happiness with someone',
  'Taking pictures of things that make you smile',
  'Using the energy to get a hard task done',
  'Making a dopamine list for when you are sad'
];
let excitedSuggestions = [
  'Writing about why your feeling this way',
  'Using the energy to get a hard task done',
  'Sharing your excitement with a friend or love one',
  'Going for a run or doing some exercise',
  'Starting a new hobby or task'
];
let panickedSuggestions = [
  'Writing about why your feeling this way',
  'Taking 5 deep breaths',
  'Going for a walk and noticing nature',
  'Asking someone for help or reassurance',
  'Grounding yourself- name 7 things you can sense'
];
let overwhelmedSuggestions = [
  'Writing about why your feeling this way',
  'Taking 5 deep breaths',
  'Picking one small step to start with',
  'Writing a to-do list or plan to get an overview',
  'Stepping away for 10 minutes to reset'
];
let distractedSuggestions = [
  'Writing about why your feeling this way',
  'Try working to a Pomodoro timer',
  'Putting your phone in another room',
  'Writing a to-do list to set your priorities',
  'Try changing rooms to reset your environment'
];
let sadSuggestions = [
  'Writing about why your feeling this way',
  'Dancing to your favorite music',
  'Sitting with your feelings - they are here to help',
  'Watching a comforting show or movie',
  'Taking a bath or shower to wash it all off'
];
let boredSuggestions = [
  'Writing about why your feeling this way',
  'Starting a new hobby or task',
  'Meeting up with a friend or loved one',
  'Doing something from your to-do list',
  'Exploring a place you have not been before'
];
let annoyedSuggestions = [
  'Writing about why your feeling this way',
  'Stepping away from the situation for a bit',
  'Taking a bath or shower to wash it all off',
  'Doing a different task to take your mind off things',
  'Asking a friend to talk about your frustration'
];
let angrySuggestions = [
  'Writing about why your feeling this way',
  'Stepping away from the situation for a bit',
  'Taking a bath or shower to wash it all off',
  'Doing some exercise to get the anger out',
  'Waiting 20 minutes before responding'
];
let tiredSuggestions = [
  'Giving your body some fuel like a small snack',
  'Going for a walk to get blood flowing',
  'Stepping outside for some fresh air and sun',
  'Taking a short but regenerating nap',
  'Taking the day off to do what brings you joy'
];
let nothingSuggestions = [
  'Writing about why your feeling this way',
  'Doing something small to get you started',
  'Reaching out to a friend or loved one',
  'Going for a walk or doing some exercise',
  'Taking the day off to do what brings you joy'
];




let gooberOutlineColour = [0, 0, 100];
let gooberFillColour = [0, 0, 100, 200];
let outlineWidth = (5);
let faceColour = [0, 0, 19];

let gooberWidth = (220);
let gooberHeight = (265);
let gooberPosX = (150);
let gooberPosY = (200);

// goober expressions
let contemptFace = true;
let happyFace = false;
let sadFace = false;
let angryFace = false;

// user feelings
let nothing = false;         // #969696
let tired = false;           // #fccd77
let angry = false;           // #fc7777
let annoyed = false;         // #d677fc
let bored = false;           // #9f77fc
let sad = false;             // #66a2fd
let distracted = false;      // #80eafd
let overwhelmed = false;     // #4ec9a4
let panicked = false;        // #87c951
let excited = false;         // #b5eb64
let happy = false;           // #effc77
let calm = false;            // #fff8e8

let currentFeeling = ('Neutral');

//---------------------------------------------------------------------------
function preload(){
  GooberImg =loadImage("Images/Goober-Template.png")
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
// load saved value
    calm = localStorage.getItem('calm') === 'true';
    happy = localStorage.getItem('happy') === 'true';
    excited = localStorage.getItem('excited') === 'true';
    panicked = localStorage.getItem('panicked') === 'true';
    overwhelmed = localStorage.getItem('overwhelmed') === 'true';
    distracted = localStorage.getItem('distracted') === 'true';
    sad = localStorage.getItem('sad') === 'true';
    bored = localStorage.getItem('bored') === 'true';
    annoyed = localStorage.getItem('annoyed') === 'true';
    angry = localStorage.getItem('angry') === 'true';
    tired = localStorage.getItem('tired') === 'true';
    currentFeeling = localStorage.getItem('currentFeeling') || 'neutral';

    const { w, h } = canvasSize();
    createCanvas(w, h);
    strokeCap(ROUND);
    strokeJoin(ROUND);
    colorMode (HSB); //same as HSV
    textFont('Indie Flower');
    }
function saveState() {
//save feelings values
    localStorage.setItem('calm', calm);
    localStorage.setItem('happy', happy);
    localStorage.setItem('excited', excited);
    localStorage.setItem('panicked', panicked);
    localStorage.setItem('overwhelmed', overwhelmed);
    localStorage.setItem('distracted', distracted);
    localStorage.setItem('sad', sad);
    localStorage.setItem('bored', bored);
    localStorage.setItem('annoyed', annoyed);
    localStorage.setItem('angry', angry);
    localStorage.setItem('tired', tired);

    localStorage.setItem('currentFeeling', currentFeeling);
}
function draw() {
    background (245, 35, 67);
    
    //area where mousOnGoober is true
    // rect(gooberPosX-115, gooberPosY-160, gooberPosX+390, gooberPosY+110);
    // push ();
    // stroke (0, 79, 62)
    // point (gooberPosX+425, gooberPosY+150);
    // pop ();

    drawGoober(gooberPosX, gooberPosY);

    if (showMainMenu === true){
        drawMainMenu(gooberPosX, gooberPosY);
    }
    else if (showFeelingsMenu === true){
        drawFeelingsMenu(gooberPosX, gooberPosY);
    }
    else if (showSuggestionMenu === true){
        drawSuggestionMenu(gooberPosX, gooberPosY);
    }
    else if (showAcceptedSuggestionMenu === true){
        drawAcceptedSuggestionMenu(gooberPosX, gooberPosY);
    }
    else if (showDeclinedSuggestionMenu === true){
        drawDeclinedSuggestionMenu(gooberPosX, gooberPosY);
    }
    else if (showThinking === true){
        drawThinking(gooberPosX, gooberPosY);
        if (millis() - thinkingStartTime > 1500){
            showThinking = false
            showDeclinedSuggestionMenu = true
        }
    }
    else if (showOutOfSuggestionMenu === true){
        drawOutOfSuggestionMenu(gooberPosX, gooberPosY);
    }
    else if (showRestartSuggestionMenu === true){
        drawRestartSuggestionMenu(gooberPosX, gooberPosY);
        if (millis() - restartSuggestionStartTime > 1500){
            showRestartSuggestionMenu = false
            showSuggestionMenu = true
        }
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
        console.log('Hello!');
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
    else if (nothing === true){ // #969696
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
// close menu if pressed outside goober (except when thinking or restarting suggestions to not break anything)
    if (showThinking === false && showRestartSuggestionMenu === false && !(mouseX > gooberPosX-115 && mouseX < gooberPosX+425 && mouseY > gooberPosY-160 && mouseY < gooberPosY+150)){
        showMainMenu = false
        showFeelingsMenu = false;
        showSuggestionMenu = false;
        showAcceptedSuggestionMenu = false;
        showDeclinedSuggestionMenu = false;
        showOutOfSuggestionMenu = false;
        showRestartSuggestionMenu = false;
        showThinking = false;
    }
// press on goober and open main menu
    if (showMainMenu === false && showThinking === false && showRestartSuggestionMenu === false &&
        mouseX > gooberPosX - gooberWidth/2 && mouseX < gooberPosX + gooberWidth/2 && mouseY > gooberPosY - gooberHeight/2 && mouseY < gooberPosY + gooberHeight/2) {
        showMainMenu = true
        showFeelingsMenu = false;
        showSuggestionMenu = false;
        showAcceptedSuggestionMenu = false;
        showDeclinedSuggestionMenu = false;
        showOutOfSuggestionMenu = false;
        showRestartSuggestionMenu = false;
        showThinking = false;
    }
//press 'log feelings' and open feelings menu
    else if (showMainMenu === true && mouseX > gooberPosX+180 && mouseX < gooberPosX+340 && mouseY > gooberPosY-100 && mouseY < gooberPosY-60) {
        showMainMenu = false
        showFeelingsMenu = true
    }
//press 'done' in feelings menu and close feelings menu
    else if (showMainMenu === false && showFeelingsMenu === true && showSuggestionMenu === false && mouseX > gooberPosX+180 && mouseX < gooberPosX+407 && mouseY > gooberPosY+70 && mouseY < gooberPosY+120) {
        showMainMenu = false
        showFeelingsMenu = false
        showSuggestionMenu = true
        pickSuggestion();
    }
// press 'that sounds great' in suggestion menu
    else if (showMainMenu === false && showFeelingsMenu === false && showSuggestionMenu === true && showDeclinedSuggestionMenu === false && mouseX > gooberPosX+180 && mouseX < gooberPosX+407 && mouseY > gooberPosY+74 && mouseY < gooberPosY+104) {
        showMainMenu = false
        showFeelingsMenu = false
        showSuggestionMenu = false
        showAcceptedSuggestionMenu = true
    }
// press 'no thank you' in suggestion menu
    else if (showMainMenu === false && showFeelingsMenu === false && showSuggestionMenu === true && showDeclinedSuggestionMenu === false && mouseX > gooberPosX+180 && mouseX < gooberPosX+407 && mouseY > gooberPosY+112 && mouseY < gooberPosY+142) {
        showMainMenu = false
        showFeelingsMenu = false
        showSuggestionMenu = false
        showDeclinedSuggestionMenu = true
        pickSuggestion();
    }
// press 'i would like more help' in accepted suggestion menu
    else if (showMainMenu === false && showFeelingsMenu === false && showSuggestionMenu === false && showAcceptedSuggestionMenu === true && showDeclinedSuggestionMenu === false && mouseX > gooberPosX+180 && mouseX < gooberPosX+407 && mouseY > gooberPosY-45 && mouseY < gooberPosY-15) {
        showMainMenu = true
        showFeelingsMenu = false
        showSuggestionMenu = false
        showAcceptedSuggestionMenu = false
    }
// press 'thats it for now' in accepted suggestion menu
    else if (showMainMenu === false && showFeelingsMenu === false && showSuggestionMenu === false && showAcceptedSuggestionMenu === true && showDeclinedSuggestionMenu === false && mouseX > gooberPosX+180 && mouseX < gooberPosX+407 && mouseY > gooberPosY-5 && mouseY < gooberPosY+25) {
        showMainMenu = false
        showFeelingsMenu = false
        showSuggestionMenu = false
        showAcceptedSuggestionMenu = false
    }
// press 'sounds great' in declined suggestion menu
    else if (showMainMenu === false && showFeelingsMenu === false && showSuggestionMenu === false && showAcceptedSuggestionMenu === false && showDeclinedSuggestionMenu === true && showThinking === false && mouseX > gooberPosX+180 && mouseX < gooberPosX+407 && mouseY > gooberPosY-45 && mouseY < gooberPosY-15) {
        showMainMenu = false
        showFeelingsMenu = false
        showSuggestionMenu = false
        showDeclinedSuggestionMenu = false
        showAcceptedSuggestionMenu = true
    }
// press 'no thanks' in declined suggestion menu
    else if (showMainMenu === false && showFeelingsMenu === false && showSuggestionMenu === false && showAcceptedSuggestionMenu === false && showDeclinedSuggestionMenu === true && showThinking === false && allSuggestionsUsed === false && mouseX > gooberPosX+180 && mouseX < gooberPosX+407 && mouseY > gooberPosY-5 && mouseY < gooberPosY+25) {
        showMainMenu = false
        showFeelingsMenu = false
        showSuggestionMenu = false
        showDeclinedSuggestionMenu = false
        showThinking = true
        thinkingStartTime = millis();
        pickSuggestion();
    }
// press 'no thanks' in declined suggestion menu and out of suggestions
    else if (allSuggestionsUsed === true && showOutOfSuggestionMenu === false && showMainMenu === false && showFeelingsMenu === false && showSuggestionMenu === false && showAcceptedSuggestionMenu === false && showDeclinedSuggestionMenu === true && showThinking === false && mouseX > gooberPosX+180 && mouseX < gooberPosX+407 && mouseY > gooberPosY-5 && mouseY < gooberPosY+25) {
        showMainMenu = false
        showFeelingsMenu = false
        showSuggestionMenu = false
        showDeclinedSuggestionMenu = false
        showThinking = false
        showOutOfSuggestionMenu = true
        allSuggestionsUsed === false
        suggestionsFilledOnce = false;
        //pickSuggestion();
    }
// press 'can i hear again' in OutOfSuggestionMenu
    else if (showOutOfSuggestionMenu === true && showThinking === false && mouseX > gooberPosX+180 && mouseX < gooberPosX+407 && mouseY > gooberPosY-17 && mouseY < gooberPosY+13) {
        showMainMenu = false
        showFeelingsMenu = false
        showSuggestionMenu = false
        showDeclinedSuggestionMenu = false
        showThinking = false
        showOutOfSuggestionMenu = false
        showRestartSuggestionMenu = true
        restartSuggestionStartTime = millis();
        allSuggestionsUsed = false
        suggestionsFilledOnce = false;
        //availableSuggestions = [];
        pickSuggestion();
    }
// press 'thats ok' in OutOfSuggestionMenu
    else if (showOutOfSuggestionMenu === true && showThinking === false && mouseX > gooberPosX+180 && mouseX < gooberPosX+407 && mouseY > gooberPosY+20 && mouseY < gooberPosY+50) {
        showMainMenu = false
        showFeelingsMenu = false
        showSuggestionMenu = false
        showDeclinedSuggestionMenu = false
        showThinking = false
        showOutOfSuggestionMenu = false
        showRestartSuggestionMenu = false
        allSuggestionsUsed = false
        suggestionsFilledOnce = false;
    }
    
//feelings
    //calm
    else if (showMainMenu === false && showFeelingsMenu === true && mouseX > gooberPosX+180 && mouseX < gooberPosX+305 && mouseY > gooberPosY-100 && mouseY < gooberPosY-80) {
        showMainMenu = false
        showFeelingsMenu = true
        currentFeeling = 'calm';
        calm = true
        happy = false
        excited = false
        panicked = false  
        overwhelmed = false  
        distracted = false 
        sad = false 
        bored = false  
        annoyed = false   
        angry = false 
        tired = false 
        nothing = false
        suggestionsFilledOnce = false;
        availableSuggestions = [];
    }
    //happy
    else if (showMainMenu === false && showFeelingsMenu === true && mouseX > gooberPosX+180 && mouseX < gooberPosX+305 && mouseY > gooberPosY-72 && mouseY < gooberPosY-52) {
        showMainMenu = false
        showFeelingsMenu = true
        currentFeeling = 'happy';
        calm = false
        happy = true
        excited = false
        panicked = false  
        overwhelmed = false  
        distracted = false 
        sad = false 
        bored = false  
        annoyed = false   
        angry = false 
        tired = false 
        nothing = false
        suggestionsFilledOnce = false;
        availableSuggestions = [];
    }
    //Excited
    else if (showMainMenu === false && showFeelingsMenu === true && mouseX > gooberPosX+180 && mouseX < gooberPosX+305 && mouseY > gooberPosY-44 && mouseY < gooberPosY-24) {
        showMainMenu = false
        showFeelingsMenu = true
        currentFeeling = 'excited';
        calm = false
        happy = false
        excited = true
        panicked = false  
        overwhelmed = false  
        distracted = false 
        sad = false 
        bored = false  
        annoyed = false   
        angry = false 
        tired = false 
        nothing = false
        suggestionsFilledOnce = false;
        availableSuggestions = [];
    }
    //Panicked
    else if (showMainMenu === false && showFeelingsMenu === true && mouseX > gooberPosX+180 && mouseX < gooberPosX+305 && mouseY > gooberPosY-16 && mouseY < gooberPosY+4) {
        showMainMenu = false
        showFeelingsMenu = true
        currentFeeling = 'panicked';
        calm = false
        happy = false
        excited = false
        panicked = true  
        overwhelmed = false  
        distracted = false 
        sad = false 
        bored = false  
        annoyed = false   
        angry = false 
        tired = false 
        nothing = false
        suggestionsFilledOnce = false;
        availableSuggestions = [];
    }
    //overwhelmed
    else if (showMainMenu === false && showFeelingsMenu === true && mouseX > gooberPosX+180 && mouseX < gooberPosX+305 && mouseY > gooberPosY+12 && mouseY < gooberPosY+32) {
        showMainMenu = false
        showFeelingsMenu = true
        currentFeeling = 'overwhelmed';
        calm = false
        happy = false
        excited = false
        panicked = false  
        overwhelmed = true  
        distracted = false 
        sad = false 
        bored = false  
        annoyed = false   
        angry = false 
        tired = false 
        nothing = false
        suggestionsFilledOnce = false;
        availableSuggestions = [];
    }
    //distracted
    else if (showMainMenu === false && showFeelingsMenu === true && mouseX > gooberPosX+180 && mouseX < gooberPosX+305 && mouseY > gooberPosY+40 && mouseY < gooberPosY+60) {
        showMainMenu = false
        showFeelingsMenu = true
        currentFeeling = 'distracted';
        calm = false
        happy = false
        excited = false
        panicked = false  
        overwhelmed = false  
        distracted = true 
        sad = false 
        bored = false  
        annoyed = false   
        angry = false 
        tired = false 
        nothing = false
        suggestionsFilledOnce = false;
        availableSuggestions = [];
    }
    //sad
    else if (showMainMenu === false && showFeelingsMenu === true && mouseX > gooberPosX+312 && mouseX < gooberPosX+407 && mouseY > gooberPosY-100 && mouseY < gooberPosY-80) {
        showMainMenu = false
        showFeelingsMenu = true
        currentFeeling = 'sad';
        calm = false
        happy = false
        excited = false
        panicked = false  
        overwhelmed = false  
        distracted = false 
        sad = true 
        bored = false  
        annoyed = false   
        angry = false 
        tired = false 
        nothing = false
        suggestionsFilledOnce = false;
        availableSuggestions = [];
    }
    //bored
    else if (showMainMenu === false && showFeelingsMenu === true && mouseX > gooberPosX+312 && mouseX < gooberPosX+407 && mouseY > gooberPosY-72 && mouseY < gooberPosY-52) {
        showMainMenu = false
        showFeelingsMenu = true
        currentFeeling = 'bored';
        calm = false
        happy = false
        excited = false
        panicked = false  
        overwhelmed = false  
        distracted = false 
        sad = false 
        bored = true  
        annoyed = false   
        angry = false 
        tired = false 
        nothing = false
        suggestionsFilledOnce = false;
        availableSuggestions = [];
    }
    //annoyed
    else if (showMainMenu === false && showFeelingsMenu === true && mouseX > gooberPosX+312 && mouseX < gooberPosX+407 && mouseY > gooberPosY-44 && mouseY < gooberPosY-24) {
        showMainMenu = false
        showFeelingsMenu = true
        currentFeeling = 'annoyed';
        calm = false
        happy = false
        excited = false
        panicked = false  
        overwhelmed = false  
        distracted = false 
        sad = false 
        bored = false  
        annoyed = true   
        angry = false 
        tired = false 
        nothing = false
        suggestionsFilledOnce = false;
        availableSuggestions = [];
    }
    //angry
    else if (showMainMenu === false && showFeelingsMenu === true && mouseX > gooberPosX+312 && mouseX < gooberPosX+407 && mouseY > gooberPosY-16 && mouseY < gooberPosY+4) {
        showMainMenu = false
        showFeelingsMenu = true
        currentFeeling = 'angry';
        calm = false
        happy = false
        excited = false
        panicked = false  
        overwhelmed = false  
        distracted = false 
        sad = false 
        bored = false  
        annoyed = false   
        angry = true 
        tired = false 
        nothing = false
        suggestionsFilledOnce = false;
        availableSuggestions = [];
    }
    //tired
    else if (showMainMenu === false && showFeelingsMenu === true && mouseX > gooberPosX+312 && mouseX < gooberPosX+407 && mouseY > gooberPosY+12 && mouseY < gooberPosY+32) {
        showMainMenu = false
        showFeelingsMenu = true
        currentFeeling = 'tired';
        calm = false
        happy = false
        excited = false
        panicked = false  
        overwhelmed = false  
        distracted = false 
        sad = false 
        bored = false  
        annoyed = false   
        angry = false 
        tired = true 
        nothing = false
        suggestionsFilledOnce = false;
        availableSuggestions = [];
    }
    //nothing
    else if (showMainMenu === false && showFeelingsMenu === true && mouseX > gooberPosX+312 && mouseX < gooberPosX+407 && mouseY > gooberPosY+40 && mouseY < gooberPosY+60) {
        showMainMenu = false
        showFeelingsMenu = true
        currentFeeling = 'nothing';
        calm = false
        happy = false
        excited = false
        panicked = false  
        overwhelmed = false  
        distracted = false 
        sad = false 
        bored = false  
        annoyed = false   
        angry = false 
        tired = false 
        nothing = true
        suggestionsFilledOnce = false;
        availableSuggestions = [];
    }
    
    saveState();
}

function drawMainMenu(x, y) {
    fill(menuFillColour);
    stroke(menuOutlineColour);
    strokeWeight(menuOutlineWidth);

    //thinking bubbles
    ellipse (x+110, y-110, 30, 30);
    ellipse (x+137, y-130, 20, 20);
    ellipse (x+160, y-140, 15, 15);
    //menu bubbles
    rect(x+180, y-160, 230, 50, 20); //hello!
    rect(x+180, y-100, 165, 40, 20); //feeling
    rect(x+180, y-50, 242, 40, 20); //tasks
    rect(x+180, y, 167, 40, 20); //food
    rect(x+180, y+50, 152, 40, 20); //help
    rect(x+180, y+100, 262, 40, 20); //proud

    //text
    fill(textColour);
    stroke(textColour)
    strokeWeight (0.75)
    textSize (20);
    text ('Hello! What do you need?', x+195, y-127);
    text ('-Log a feeling •‿•', x+195, y-75);
    text ('-Share what you enjoy ☆', x+195, y-23);
    text ('-Share food 𓌉◯𓇋', x+195, y+27);
    text ('-Ask for Help ♡', x+195, y+77);
    text ('-Say Your Proud of Yourself', x+195, y+125);
}
function drawFeelingsMenu(x, y) {
    fill(menuFillColour);
    stroke(menuOutlineColour);
    strokeWeight(menuOutlineWidth);

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
    stroke(216, 60, 92);
    fill(216, 60, 99);
    rect(x+312, y-100, 12, 12, 5); //sad
    stroke(258, 53, 92);
    fill(258, 53, 99);
    rect(x+312, y-72, 12, 12, 5); //bored
    stroke(283, 53, 92);
    fill(283, 53, 99);
    rect(x+312, y-44, 12, 12, 5); //Annoyed
    stroke(0, 53, 92);
    fill(0, 53, 99,);
    rect(x+312, y-16, 12, 12, 5); //Angry
    stroke(39, 53, 92);
    fill(39, 53, 99);
    rect(x+312, y+12, 12, 12, 5); //Tired
    stroke(283, 2, 52);
    fill(283, 0, 59);
    rect(x+312, y+40, 12, 12, 5); //Nothing
    pop ();

    //text
    fill(textColour);
    stroke(textColour)
    strokeWeight (0.75)
    textSize (19);
    text ('How are you feeling today?', x+185, y-127);
    text ('-Yup Thats me-', x+230, y+100);
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
function drawSuggestionMenu(x, y){ //has suggestion
    fill(menuFillColour);
    stroke(menuOutlineColour);
    strokeWeight(menuOutlineWidth);

    //thinking bubbles
    ellipse (x+110, y-110, 30, 30);
    ellipse (x+137, y-130, 20, 20);
    ellipse (x+160, y-140, 15, 15);
    //menu bubbles
    rect(x+180, y-160, 227, 40, 20); //thanks
    rect(x+180, y-112, 227, 86, 20); //current feeling
    rect(x+180, y-18, 227, 84, 20); //suggestion
    rect(x+180, y+74, 227, 30, 20); //yes
    rect(x+180, y+112, 227, 30, 20); //no

    //text
    fill(textColour);
    stroke(textColour)
    strokeWeight (0.75)
    textSize (20);
    text ('Thank you for sharing ♡', x+195, y-135);
    text ('It seems your feeling ' + currentFeeling + ' and thats perfectly ok!', x+190, y-103, 220, 500);
    text ('May I suggest :', x+190, y+4);
    text (suggestion, x+190, y+17, 220, 100);
    text ('-That sounds great-', x+210, y+95);
    text ('-no thank you-', x+235, y+130);
}
function drawAcceptedSuggestionMenu (x, y){
    fill(menuFillColour);
    stroke(menuOutlineColour);
    strokeWeight(menuOutlineWidth);

    //thinking bubbles
    ellipse (x+110, y-110, 30, 30);
    ellipse (x+137, y-130, 20, 20);
    ellipse (x+160, y-140, 15, 15);
    //menu bubbles
    rect(x+180, y-160, 227, 40, 20); //yay
    rect(x+180, y-110, 230, 55, 20); //anything else
    rect(x+180, y-45, 230, 30, 20); //more
    rect(x+180, y-5, 230, 30, 20); //thanks

    //text
    fill(textColour);
    stroke(textColour);
    strokeWeight (0.75);
    textSize (20);
    text ('Yay! Im glad I could Help!', x+195, y-135);
    text ('Let me know if there is anything else i can do •ᴗ•', x+195, y-105, 220);
    text ('-I would like more help-', x+200, y-25);
    text ('-Thats it for now-', x+215, y+15);
}
function drawDeclinedSuggestionMenu (x, y){ //has suggestion
    fill(menuFillColour);
    stroke(menuOutlineColour);
    strokeWeight(menuOutlineWidth);

    //thinking bubbles
    ellipse (x+110, y-110, 30, 30);
    ellipse (x+137, y-130, 20, 20);
    ellipse (x+160, y-140, 15, 15);
    //menu bubbles
    rect(x+180, y-160, 227, 40, 20); //hmmm
    rect(x+180, y-110, 230, 55, 20); //suggestion
    rect(x+180, y-45, 230, 30, 20); //yes
    rect(x+180, y-5, 230, 30, 20); //now

    //text
    fill(textColour);
    stroke(textColour);
    strokeWeight (0.75);
    textSize (20);
    text ('Hmmm How about this :', x+195, y-135);
    text (suggestion, x+195, y-105, 220);
    text ('-That sounds great-', x+210, y-25);
    text ('-no thank you-', x+235, y+15);
}
function drawThinking (x, y){
    fill(menuFillColour);
    stroke(menuOutlineColour);
    strokeWeight(menuOutlineWidth);

    //thinking bubbles
    ellipse (x+110, y-110, 30, 30);
    ellipse (x+137, y-130, 20, 20);
    ellipse (x+160, y-140, 15, 15);
    //menu bubbles
    rect(x+180, y-160, 175, 40, 20); //hmmm

    //text
    fill(textColour);
    stroke(textColour);
    strokeWeight (0.75);
    textSize (20);
    text ('Let me think . . . .', x+195, y-135);
}
function drawOutOfSuggestionMenu (x, y){
    fill(menuFillColour);
    stroke(menuOutlineColour);
    strokeWeight(menuOutlineWidth);

    //thinking bubbles
    ellipse (x+110, y-110, 30, 30);
    ellipse (x+137, y-130, 20, 20);
    ellipse (x+160, y-140, 15, 15);
    //menu bubbles
    rect(x+180, y-160, 227, 135, 20); //sorry
    rect(x+180, y-17, 230, 30, 20); //again
    rect(x+180, y+20, 230, 30, 20); //ok

    //text
    fill(textColour);
    stroke(textColour);
    strokeWeight (0.75);
    textSize (20);
    text ('Im very sorry but I have run out of suggestions for now. You can add more by sharing with me what you enjoy doing!', x+195, y-153, 220);
    text ('-Can I hear them again?-', x+195, y+5);
    text ('-Thats ok-', x+250, y+42);
}
function drawRestartSuggestionMenu (x, y){
    fill(menuFillColour);
    stroke(menuOutlineColour);
    strokeWeight(menuOutlineWidth);

    //thinking bubbles
    ellipse (x+110, y-110, 30, 30);
    ellipse (x+137, y-130, 20, 20);
    ellipse (x+160, y-140, 15, 15);
    //menu bubbles
    rect(x+180, y-160, 120, 40, 20); //Of course

    //text
    fill(textColour);
    stroke(textColour);
    strokeWeight (0.75);
    textSize (20);
    text ('Of course!', x+195, y-135);;
}


function pickSuggestion(){
    // console.log('available suggestions:', availableSuggestions.length);
    // console.log('allSuggestionsUsed:', allSuggestionsUsed);
    if (calm === true) {
        if (availableSuggestions.length === 0 && suggestionsFilledOnce === false) {
            availableSuggestions = [...calmSuggestions];
            suggestionsFilledOnce = true;
        }
    }
    else if (happy === true) {
        if (availableSuggestions.length === 0 && suggestionsFilledOnce === false) {
            availableSuggestions = [...happySuggestions];
            suggestionsFilledOnce = true;
        }
    }
    else if (excited === true) {
        if (availableSuggestions.length === 0 && suggestionsFilledOnce === false) {
            availableSuggestions = [...excitedSuggestions];
            suggestionsFilledOnce = true;
        }
    }
    else if (panicked === true) {
        if (availableSuggestions.length === 0 && suggestionsFilledOnce === false) {
            availableSuggestions = [...panickedSuggestions];
            suggestionsFilledOnce = true;
        }
    }
    else if (overwhelmed === true) {
        if (availableSuggestions.length === 0 && suggestionsFilledOnce === false) {
            availableSuggestions = [...overwhelmedSuggestions];
            suggestionsFilledOnce = true;
        }
    }
    else if (distracted === true) {
        if (availableSuggestions.length === 0 && suggestionsFilledOnce === false) {
            availableSuggestions = [...distractedSuggestions];
            suggestionsFilledOnce = true;
        }
    }
    else if (sad === true) {
        if (availableSuggestions.length === 0 && suggestionsFilledOnce === false) {
            availableSuggestions = [...sadySuggestions];
            suggestionsFilledOnce = true;
        }
    }
    else if (bored === true) {
        if (availableSuggestions.length === 0 && suggestionsFilledOnce === false) {
            availableSuggestions = [...boredSuggestions];
            suggestionsFilledOnce = true;
        }
    }
    else if (annoyed === true) {
        if (availableSuggestions.length === 0 && suggestionsFilledOnce === false) {
            availableSuggestions = [...annoyedSuggestions];
            suggestionsFilledOnce = true;
        }
    }
    else if (angry === true) {
        if (availableSuggestions.length === 0 && suggestionsFilledOnce === false) {
            availableSuggestions = [...angrySuggestions];
            suggestionsFilledOnce = true;
        }
    }
    else if (tired === true) {
        if (availableSuggestions.length === 0 && suggestionsFilledOnce === false) {
            availableSuggestions = [...tiredSuggestions];
            suggestionsFilledOnce = true;
        }
    }
    else if (nothing === true) {
        if (availableSuggestions.length === 0 && suggestionsFilledOnce === false) {
            availableSuggestions = [...nothingSuggestions];
            suggestionsFilledOnce = true;
        }
    }



// dont really understand what this does... AI made it
    if (availableSuggestions.length === 1) {
        let index = floor(random(availableSuggestions.length));
        suggestion = availableSuggestions[index];
        availableSuggestions.splice(index, 1);
        allSuggestionsUsed = true;
        suggestionsFilledOnce = false;
        return;
    }

    let index = floor(random(availableSuggestions.length));
    suggestion = availableSuggestions[index];
    availableSuggestions.splice(index, 1);
    console.log('picked:', suggestion); // ← add here
    console.log('remaining:', availableSuggestions); // ← and here
}

// Resize the canvas if the window is resized
function windowResized() {
  const { w, h } = canvasSize();
  resizeCanvas(w, h);
}
