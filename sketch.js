// sketch.js — p5.js starter

let showExtraButtons = false; //turns off buttons in main menu that arent usable yet

let rightEdge;
let leftEdge;

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
let showShareFoodMenu = false;
let showAcceptedFoodMenu = false;
    let foodStartTime = Infinity;
let showHelpMenu = false;
let showEncouragementMenu = false;
let showFoodSuggestionMenu = false;


// food stuff
let foodInput;
let foodInputHasText = false;

// set suggestions
let suggestion = '';
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

//let encouragement = ('Its not whether you get knocked down, its whether you get up');
let encouragement = '';
let encouragementList = [
    'You are stronger than you think',
    'You dont have to have all of the answers right now',
    'You are doing the best you can',
    'You got this! One step at a time',
    'You are capable of incredible things',
    'I have no doubt that you will be great at this',
    'You are not alone, we are in this together',
    'Your kindness makes the world a better place',
    'Mistakes are just happy little Accidents - Bob Ross',
    'The only time you fail is when you fall down and stay down',
    'Its not whether you get knocked down, its whether you get up', //<- max length
    //'Every day may not be a good day - but there is something good in every day', <- too long
];

let recipe = '';
let recipeLink = '';
let recipeLinkElement;

//hunger meter
let hunger = 0
let hungerTimeCheck = 0;
let hungerReset = false;
let hungerPosX = (10);
let hungerPosY = (20);
let hungerLimit = (100);
let hungerAmount = (0.1); //by how much the meter increases
let hungerInterval = (7200); //how often the meter increases 7200
let hungerFillColour = [107, 65, 85] // #6ad94c
let hungerOutlineColour = [0, 0, 27] // #454545
let hungerOutlineWidth = (5)
let showHungerAlert = false;
let hungerAlert = ('Hmmmm Im starting to get hungry')
let hungerTextSize = (23);
    let showHungerAlertTimer = 0;
    let closeHungerAlertTimer = Infinity;

let breakfastStart = 8;
let lunchStart = 13;
let dinnerStart = 18;


//want meter
let want = 0;
let wantStartTime = null;
let wantSpeedMultiplier = 1;
let fasterWant = 1.5;
const WANT_LIMIT = 100;
const WANT_DURATION = 14400000; // 14400000 = 4 hours in ms
let wantPosX = (300);
let wantPosY = (20);
let wantFillColour = [107, 65, 85] // #6ad94c
let wantOutlineColour = [0, 0, 27] // #454545
let wantOutlineWidth = (5)
let showWantAlert = false;
let wantAlert = ('Goober wishes you were here')
let wantTextSize = (23);
    let showWantAlertTimer = 0;
    let closeWantAlertTimer = Infinity;
let increaseWantValue = (+3); //usually +3 <----Makes this higher to make 'want' jump up when declining suggestion. Only for when testing things

//goober stuff
let gooberOutlineColour = [0, 0, 100];
let gooberFillColour = [0, 0, 100, 200];
let outlineWidth = (5);
let faceColour = [0, 0, 19];

let gooberWidth = (220);
let gooberHeight = (265);
let gooberPosX = (150);
let gooberPosY = (250);

// moving goober
let isMoving = true;
let gooberSpeed = (1);
let moveRight = true;
let moveLeft = false;

// goober expressions
let contemptFace = true; //usually is true
let happyFace = false;
let sadFace = false;
let angryFace = false;

let showHappy = false;
    let restartHappyTime = Infinity;
let showSad = false;
    let restartSadTime = Infinity;

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

let currentFeeling = ('neutral');

//---------------------------------------------------------------------------
function preload(){
  GooberImg =loadImage("Images/Goober-Template.png")
}

function isMobile() {
  return window.innerWidth <= 768;
}

function canvasSize() {
    if (isMobile()) return { w: window.innerWidth, h: window.innerHeight };
    return { w: windowWidth - 40, h: windowHeight - 40 };
}

function setup() {
// load saved value
    //feelings
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
    nothing = localStorage.getItem('nothing') === 'true';
    currentFeeling = localStorage.getItem('currentFeeling') || 'neutral';
    //hunger meter
    hungerReset = localStorage.getItem('hungerReset') === 'true';
    hunger = parseFloat(localStorage.getItem('hunger')) || 0;

// canvas stuff
    const { w, h } = canvasSize();
    createCanvas(w, h);
    strokeCap(ROUND);
    strokeJoin(ROUND);
    colorMode (HSB); //same as HSV
    textFont('Indie Flower');
    rightEdge = (width - 150)
    leftEdge = (150)
    checkTime()
    //resetWant(); //needs to be off. only use for dev

// making the recipe link clickable (AI made)
    recipeLinkElement = createElement('a', 'Watch Recipe');
    recipeLinkElement.attribute('target', '_blank'); // opens in new tab
    recipeLinkElement.style('font-family', 'Indie Flower');
    recipeLinkElement.style('font-size', '20px');
    recipeLinkElement.style('color', 'hsl(354, 0%, 17%)');
    recipeLinkElement.hide(); // hidden until needed
// want stuff:
    wantStartTime = localStorage.getItem('wantStartTime');
    wantSpeedMultiplier = parseFloat(localStorage.getItem('wantSpeedMultiplier')) || 1;
    // only set start time if it has never been started before
    if (wantStartTime === null) {
        wantStartTime = Date.now();
        saveState();
    }
    want = getWantValue();

// food input stuff
    foodInput = createElement('textarea');
    foodInput.size(215, 140);
    foodInput.style('font-family', 'Indie Flower');
    foodInput.style('font-size', '20px');
    foodInput.style('font-weight', '400'); // normal weight
    foodInput.style('-webkit-text-stroke', '0.75px ' + textColour); // mimics strokeWeight
    foodInput.style('background', 'transparent');
    foodInput.style('border', 'none');
    foodInput.style('resize', 'none');
    foodInput.style('outline', 'none');
    foodInput.attribute('id', 'foodInput');
    foodInput.attribute('placeholder', 'Type here...');
    foodInput.position(0, 0);
    foodInput.hide();
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
        localStorage.setItem('nothing', nothing);

        localStorage.setItem('currentFeeling', currentFeeling);

        localStorage.setItem('hunger', hunger);
        localStorage.setItem('hungerReset', hungerReset);

        localStorage.setItem('wantStartTime', wantStartTime);
        localStorage.setItem('wantSpeedMultiplier', wantSpeedMultiplier);
        localStorage.setItem('want', want);
}

function draw() {
    //console.log (gooberSpeed);
    
    background (245, 35, 67);
    drawGooberState (gooberPosX, gooberPosY);
    drawGoober(gooberPosX, gooberPosY);

    drawHungerMeter(hungerPosX, hungerPosY);
    setHungerAlert ();

    drawWantMeter (wantPosX, wantPosY);
    want = getWantValue();
    setWantAlert ()

    if (showMainMenu === true){
        drawMainMenu(gooberPosX, gooberPosY);
    }
    if (showFeelingsMenu === true){
        drawFeelingsMenu(gooberPosX, gooberPosY);
    }
    if (showSuggestionMenu === true){
        drawSuggestionMenu(gooberPosX, gooberPosY);
    }
    if (showAcceptedSuggestionMenu === true){
        drawAcceptedSuggestionMenu(gooberPosX, gooberPosY);
    }
    if (showDeclinedSuggestionMenu === true){
        drawDeclinedSuggestionMenu(gooberPosX, gooberPosY);
    }
    if (showThinking === true){
        drawThinking(gooberPosX, gooberPosY);
        if (millis() - thinkingStartTime > 1500){
            showThinking = false
            showDeclinedSuggestionMenu = true
        }
    }
    if (showOutOfSuggestionMenu === true){
        drawOutOfSuggestionMenu(gooberPosX, gooberPosY);
    }
    if (showRestartSuggestionMenu === true){
        drawRestartSuggestionMenu(gooberPosX, gooberPosY);
        if (millis() - restartSuggestionStartTime > 1500){
            showRestartSuggestionMenu = false
            showSuggestionMenu = true
        }
    }
    if (showShareFoodMenu === true){
        drawShareFoodMenu(gooberPosX, gooberPosY);
    }
    if (showAcceptedFoodMenu === true){
        drawAcceptedFoodMenu(gooberPosX, gooberPosY);
        if (millis() - foodStartTime > 5000){
            showAcceptedFoodMenu = false
            isMoving = true;
        }
    }
    if (showHelpMenu === true){
        drawHelpMenu(gooberPosX, gooberPosY);
    }
    if (showEncouragementMenu === true){ //encouragement
        drawEncouragementMenu(gooberPosX, gooberPosY);
    }
    if (showFoodSuggestionMenu === true){ 
        drawFoodSuggestionMenu(gooberPosX, gooberPosY);
    }
    if (showWantAlert === true && 
        showHungerAlert === false && 
        showMainMenu === false &&
        showFeelingsMenu === false &&
        showSuggestionMenu === false &&
        showAcceptedSuggestionMenu === false &&
        showDeclinedSuggestionMenu === false &&
        showThinking === false &&
        showOutOfSuggestionMenu === false &&
        showRestartSuggestionMenu === false &&
        showShareFoodMenu === false &&
        showAcceptedFoodMenu === false ){
        drawWantAlert(gooberPosX, gooberPosY);
    }
    if (showHungerAlert === true && 
        showWantAlert === false && 
        showMainMenu === false &&
        showFeelingsMenu === false &&
        showSuggestionMenu === false &&
        showAcceptedSuggestionMenu === false &&
        showDeclinedSuggestionMenu === false &&
        showThinking === false &&
        showOutOfSuggestionMenu === false &&
        showRestartSuggestionMenu === false &&
        showShareFoodMenu === false &&
        showAcceptedFoodMenu === false ){
        drawHungerAlert(gooberPosX, gooberPosY);
    }
    if (millis() - hungerTimeCheck > 30000) { //sets hunger every 30 seconds
        checkTime();
        hungerTimeCheck = millis();
    }
    if (isMoving === true){
        moveGoober(gooberPosX, gooberPosY);
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
    else if (happyFace === true) {
        drawHappyFace (x, y-55);
    }
    else if (sadFace === true) {
        drawSadFace (x, y-55);
    }
    else if (angryFace === true) {
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

function drawGooberState (x, y){
//expression
    if (showHappy === true){
        contemptFace = false;
        happyFace = true; //happy
        sadFace = false;
        angryFace = false;
        if (millis() - restartHappyTime > 1500){
            happyFace = false;
            showHappy = false;
        }
    }
    else if (showSad === true){
        contemptFace = false;
        happyFace = false; 
        sadFace = true; //sad
        angryFace = false;
        if (millis() - restartSadTime > 1500){
            sadFace = false;
            showSad = false;
        }
    }
    else if (hunger >= 95 || want >= 95){
        contemptFace = false;
        happyFace = false;
        sadFace = false;
        angryFace = true; //angry
        gooberSpeed = (4);
    }
    else if ((hunger >= 75 && hunger < 95) || (want >= 75 && want < 95)){
        gooberSpeed = (3);
        contemptFace = true; //contempt
        happyFace = false;
        sadFace = false;
        angryFace = false;
    }
    else if ((hunger > 50 && hunger < 75) || (want > 50 && want < 75)) {
        gooberSpeed = (2);
        contemptFace = true; //contempt
        happyFace = false;
        sadFace = false;
        angryFace = false;
    }
    else if (hunger <= 50 || want <= 50 ){
        gooberSpeed = (1);
        contemptFace = true; //contempt
        happyFace = false;
        sadFace = false;
        angryFace = false;
    }
    if (hunger < 75 && wantSpeedMultiplier !== 1) {
        resetWantSpeed();
    }
    if (hunger > 75 && wantSpeedMultiplier !== fasterWant) {
        speedUpWant();
    }
}

function setHungerAlert () {
    //always
    if (hunger >= 95) {
        showHungerAlert = true;
        hungerAlert = ('IM HUNGRY!')
        hungerTextSize = (41);
    }
    //every 10 min
    else if (hunger >= 75 && hunger < 95 && showHungerAlert === false && millis() - showHungerAlertTimer > 600000) {
        showHungerAlert = true;
        closeHungerAlertTimer = millis();
        hungerAlert = ('Yeah.. Im getting very hungry now..')
        hungerTextSize = (23);
    }
    //every 15 min
    else if (hunger >= 50 && hunger < 75 && showHungerAlert === false && millis() - showHungerAlertTimer > 900000) {
        showHungerAlert = true;
        closeHungerAlertTimer = millis();
        hungerAlert = ('Do you have any food to share?')
        hungerTextSize = (23);
    }
    //every 20min
    else if (hunger >= 25 && hunger < 50 && showHungerAlert === false && millis() - showHungerAlertTimer > 1200000) {
        showHungerAlert = true;
        closeHungerAlertTimer = millis();
        hungerAlert = ('Hmmmm Im starting to get hungry')
        hungerTextSize = (23);
    }
    else if (want < 25 ) {
        showHungerAlert = false;
    }

    //hides hunger alert after 
    if (showHungerAlert === true && millis() - closeHungerAlertTimer > 5000) {
        showHungerAlert = false;
        showHungerAlertTimer = millis();
    }
}
function setWantAlert () {
    //always
    if (want >= 95) {
        showWantAlert = true;
        wantAlert = ('Goober feels Abandoned') //
        wantTextSize = (27);
    }
    //every 10 min
    else if (want >= 75 && want < 95 && showWantAlert === false && millis() - showWantAlertTimer > 600000) {
        showWantAlert = true;
        closeWantAlertTimer = millis();
        wantAlert = ('Goober wishes you were here')
        wantTextSize = (23);
    }
    //every 15 min
    else if (want >= 50 && want <75 && showWantAlert === false && millis() - showWantAlertTimer > 900000) {
        showWantAlert = true;
        closeWantAlertTimer = millis();
        wantAlert = ('Goober is curious as to how you are')
        wantTextSize = (23);
    }
    //every 20min
    else if (want >= 25 && want < 50 && showWantAlert === false && millis() - showWantAlertTimer > 1200000) {
        showWantAlert = true;
        closeWantAlertTimer = millis();
        wantAlert = ('Goober is thinking about you')
        wantTextSize = (23);
    }
    else if (want < 25 ) {
        showWantAlert = false;
    }

    //hides want alert after 
    if (showWantAlert === true && millis() - closeWantAlertTimer > 5000) {
        showWantAlert = false;
        showWantAlertTimer = millis();
    }
}

function moveGoober (x, y){
    if (gooberPosX >= leftEdge && gooberPosX < rightEdge && moveRight === true && moveLeft === false){
        gooberPosX = (gooberPosX + gooberSpeed);
    }
    else if (gooberPosX >= rightEdge && moveRight === true){
        gooberPosX = (rightEdge);
        moveRight = false
        moveLeft = true
    }
    else if (gooberPosX <= rightEdge && gooberPosX > leftEdge && moveLeft === true && moveRight === false){
        gooberPosX = (gooberPosX - gooberSpeed);
    }
    else if (gooberPosX <= leftEdge && moveLeft === true){
        gooberPosX = (leftEdge);
        moveRight = true
        moveLeft = false
     }

}

function mouseClicked () {
// close menu if pressed outside goober (except when thinking or restarting suggestions to not break anything)
    if (showThinking === false && showRestartSuggestionMenu === false && showAcceptedFoodMenu === false && !(mouseX > gooberPosX-115 && mouseX < gooberPosX+425 && mouseY > gooberPosY-160 && mouseY < gooberPosY+150)){
        showMainMenu = false
        showFeelingsMenu = false;
        showSuggestionMenu = false;
        showAcceptedSuggestionMenu = false;
        showDeclinedSuggestionMenu = false;
        showOutOfSuggestionMenu = false;
        showRestartSuggestionMenu = false;
        showThinking = false;
        showHelpMenu = false;
        showFoodSuggestionMenu = false;
        showEncouragementMenu = false;
        showShareFoodMenu = false;
        foodInput.hide();
        isMoving = true;
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
        showAcceptedFoodMenu = false;
        showHelpMenu = false;
        foodInput.hide();
        showHungerAlert = false;
        showEncouragementMenu = false;
        showShareFoodMenu = false;
        isMoving = false;
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
        lowerWant (50);
        showHappy = true;
        restartHappyTime = millis()
    }
// press 'that sounds great' in suggestion menu
    else if (showMainMenu === false && showFeelingsMenu === false && showSuggestionMenu === true && showDeclinedSuggestionMenu === false && mouseX > gooberPosX+180 && mouseX < gooberPosX+407 && mouseY > gooberPosY+74 && mouseY < gooberPosY+104) {
        showMainMenu = false
        showFeelingsMenu = false
        showSuggestionMenu = false
        showAcceptedSuggestionMenu = true
        lowerWant (30);
        showHappy = true;
        restartHappyTime = millis()
    }
// press 'no thank you' in suggestion menu
    else if (showMainMenu === false && showFeelingsMenu === false && showSuggestionMenu === true && showDeclinedSuggestionMenu === false && mouseX > gooberPosX+180 && mouseX < gooberPosX+407 && mouseY > gooberPosY+112 && mouseY < gooberPosY+142) {
        showMainMenu = false
        showFeelingsMenu = false
        showSuggestionMenu = false
        showDeclinedSuggestionMenu = true
        pickSuggestion();
        showSad = true;
        restartSadTime = millis()
        increaseWant (increaseWantValue);
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
        isMoving = true;
    }
// press 'sounds great' in declined suggestion menu
    else if (showMainMenu === false && showFeelingsMenu === false && showSuggestionMenu === false && showAcceptedSuggestionMenu === false && showDeclinedSuggestionMenu === true && showThinking === false && mouseX > gooberPosX+180 && mouseX < gooberPosX+407 && mouseY > gooberPosY-45 && mouseY < gooberPosY-15) {
        showMainMenu = false
        showFeelingsMenu = false
        showSuggestionMenu = false
        showDeclinedSuggestionMenu = false
        showAcceptedSuggestionMenu = true
        lowerWant (30);
        showHappy = true;
        restartHappyTime = millis()
    }
// press 'no thanks' in declined suggestion menu
    else if (allSuggestionsUsed === false && showMainMenu === false && showFeelingsMenu === false && showSuggestionMenu === false && showAcceptedSuggestionMenu === false && showDeclinedSuggestionMenu === true && showThinking === false && mouseX > gooberPosX+180 && mouseX < gooberPosX+407 && mouseY > gooberPosY-5 && mouseY < gooberPosY+25) {
        showMainMenu = false
        showFeelingsMenu = false
        showSuggestionMenu = false
        showDeclinedSuggestionMenu = false
        showThinking = true
        thinkingStartTime = millis();
        pickSuggestion();
        showSad = true;
        restartSadTime = millis()
        increaseWant (increaseWantValue);
    }
// press 'no thanks' in declined suggestion menu and out of suggestions
    else if (allSuggestionsUsed === true && showOutOfSuggestionMenu === false && showMainMenu === false && showFeelingsMenu === false && showSuggestionMenu === false && showAcceptedSuggestionMenu === false && showDeclinedSuggestionMenu === true && showThinking === false && mouseX > gooberPosX+180 && mouseX < gooberPosX+407 && mouseY > gooberPosY-5 && mouseY < gooberPosY+25) {
        showMainMenu = false
        showFeelingsMenu = false
        showSuggestionMenu = false
        showDeclinedSuggestionMenu = false
        showThinking = false
        showOutOfSuggestionMenu = true
        allSuggestionsUsed = false
        suggestionsFilledOnce = false;
        showSad = true;
        restartSadTime = millis()
        increaseWant (increaseWantValue);
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
        isMoving = true;
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
    

// share food button
    else if (showMainMenu === true && showShareFoodMenu === false && mouseX > gooberPosX+180 && mouseX < gooberPosX+342 && mouseY > gooberPosY-50 && mouseY < gooberPosY-10) {
        showMainMenu = false
        showShareFoodMenu = true
        foodInput.show();
    }
// done button in food menu
    else if (showMainMenu === false && showShareFoodMenu === true && showAcceptedFoodMenu === false && mouseX > gooberPosX+180 && mouseX < gooberPosX+342 && mouseY > gooberPosY+70 && mouseY < gooberPosY+100) {
        showMainMenu = false
        showShareFoodMenu = false
        showAcceptedFoodMenu = true
        foodStartTime = millis();
        foodInput.value('');
        foodInput.hide();
        resetHunger()
        showHappy = true;
        restartHappyTime = millis()
        lowerWant (50);
    }

//ask for help button in main menu
    else if (showMainMenu === true && showHelpMenu === false &&  mouseX > gooberPosX+180 && mouseX < gooberPosX+332 && mouseY > gooberPosY && mouseY < gooberPosY+40){
        showMainMenu = false;
        showHelpMenu = true;
    }
    //encouragement
    else if (showHelpMenu === true &&  mouseX > gooberPosX+180 && mouseX < gooberPosX+339 && mouseY > gooberPosY-100 && mouseY < gooberPosY-60){
        showMainMenu = false;
        showHelpMenu = false;
        showEncouragementMenu = true;
        pickEncouragement();
        lowerWant (15);
        showHappy = true;
        restartHappyTime = millis()
    }
    //'thank you' in encouragement
    else if (showHelpMenu === false  && showEncouragementMenu === true &&  mouseX > gooberPosX+180 && mouseX < gooberPosX+387 && mouseY > gooberPosY-60 && mouseY < gooberPosY-20){
        showMainMenu = false;
        showHelpMenu = false;
        showEncouragementMenu = false;
        isMoving = true;
    }
    //task help
    else if (showHelpMenu === true &&  mouseX > gooberPosX+180 && mouseX < gooberPosX+339 && mouseY > gooberPosY-50 && mouseY < gooberPosY-10){
        showMainMenu = false;
        showHelpMenu = false;
        showSuggestionMenu = true;
        pickSuggestion();
    }
    //food help
    else if (showHelpMenu === true &&  mouseX > gooberPosX+180 && mouseX < gooberPosX+339 && mouseY > gooberPosY && mouseY < gooberPosY+40){
        showMainMenu = false;
        showHelpMenu = false;
        showFoodSuggestionMenu = true;
        pickRecipe ();
        recipeLinkElement.show();
        lowerWant (15);
        showHappy = true;
        restartHappyTime = millis()
    }
    //'what else' in food help
    else if (showHelpMenu === false  && showFoodSuggestionMenu === true &&  mouseX > gooberPosX+180 && mouseX < gooberPosX+387 && mouseY > gooberPosY-60 && mouseY < gooberPosY-20){
        showMainMenu = false;
        showHelpMenu = false;
        showFoodSuggestionMenu = true;
        isMoving = false;
        pickRecipe ();
    }
    //'thank you' in food help
    else if (showHelpMenu === false  && showFoodSuggestionMenu === true &&  mouseX > gooberPosX+180 && mouseX < gooberPosX+387 && mouseY > gooberPosY-10 && mouseY < gooberPosY+30){
        showMainMenu = false;
        showHelpMenu = false;
        showFoodSuggestionMenu = false;
        isMoving = true;
        recipeLinkElement.hide();
    }
    saveState ();
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
    rect(x+180, y-50, 167, 40, 20); //food
    rect(x+180, y, 152, 40, 20); //help 
    if (showExtraButtons === true){
    rect(x+180, y+50, 242, 40, 20); //tasks 
    rect(x+180, y+100, 262, 40, 20); //proud
    }

    //text
    fill(textColour);
    stroke(textColour)
    strokeWeight (0.75)
    textSize (20);
    text ('Hello! What do you need?', x+195, y-127);
    text ('-Log a feeling •‿•', x+195, y-75);
    text ('-Share food 𓌉◯𓇋', x+195, y-23);
    text ('-Ask for Help ♡', x+195, y+27);
    if (showExtraButtons === true){
    text ('-Share what you enjoy ☆', x+195, y+77);
    text ('-Say Your Proud of Yourself', x+195, y+125);
    }
    
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

function drawShareFoodMenu (x,y){
    fill(menuFillColour);
    stroke(menuOutlineColour);
    strokeWeight(menuOutlineWidth);

    //thinking bubbles
    ellipse (x+110, y-110, 30, 30);
    ellipse (x+137, y-130, 20, 20);
    ellipse (x+160, y-140, 15, 15);
    //menu bubbles
    rect(x+180, y-160, 227, 60, 20); //yipee
    rect(x+180, y-90, 227, 150, 20); //input box
    rect(x+180, y+70, 227, 30, 20); //ok

    //text
    fill(textColour);
    stroke(textColour);
    strokeWeight (0.75);
    textSize (20);
    text ('You have some food to share with me?  Yipee!', x+195, y-148, 220);
    text ('-and thats what I ate-', x+202, y+92);
    foodInput.position(gooberPosX + 210, gooberPosY-68); // adjust to sit on your rect
}
function drawAcceptedFoodMenu (x,y){
    fill(menuFillColour);
    stroke(menuOutlineColour);
    strokeWeight(menuOutlineWidth);

    //thinking bubbles
    ellipse (x+110, y-110, 30, 30);
    ellipse (x+137, y-130, 20, 20);
    ellipse (x+160, y-140, 15, 15);
    //menu bubbles
    rect(x+180, y-160, 227, 110, 20); //thank you

    //text
    fill(textColour);
    stroke(textColour);
    strokeWeight (0.75);
    textSize (20);
    text ('ooo thats yummy!         i hope you enjoyed it and that it gave you lots of fuel', x+192, y-148, 220);
}

function drawHelpMenu(x,y){
    fill(menuFillColour);
    stroke(menuOutlineColour);
    strokeWeight(menuOutlineWidth);

    //thinking bubbles
    ellipse (x+110, y-110, 30, 30);
    ellipse (x+137, y-130, 20, 20);
    ellipse (x+160, y-140, 15, 15);
    //menu bubbles
    rect(x+180, y-160, 185, 50, 20); //of course!
    rect(x+180, y-100, 158, 40, 20); //Encouragement
    rect(x+180, y-50, 165, 40, 20); //task
    rect(x+180, y, 165, 40, 20); //food 
    

    //text
    fill(textColour);
    stroke(textColour)
    strokeWeight (0.75)
    textSize (20);
    text ('Of course!', x+195, y-140, );
    text ('I would love to help', x+195, y-120);
    text ('-Encouragement', x+195, y-75); 
    text ('-Task Suggestion', x+195, y-23);
    text ('-Food Suggestion', x+195, y+27);
}

function drawEncouragementMenu(x,y){
    fill(menuFillColour);
    stroke(menuOutlineColour);
    strokeWeight(menuOutlineWidth);

    //thinking bubbles
    ellipse (x+110, y-110, 30, 30);
    ellipse (x+137, y-130, 20, 20);
    ellipse (x+160, y-140, 15, 15);
    //menu bubbles
    rect(x+180, y-160, 207, 90, 20); //of course!
    rect(x+180, y-60, 207, 40, 20); //thank

    //text
    fill(textColour);
    stroke(textColour)
    strokeWeight (0.75)
    textSize (20);
    text (encouragement, x+195, y-150, 200);
    text ('-Thank you-', x+230, y-50, 200);
}
function drawFoodSuggestionMenu(x,y){
    fill(menuFillColour);
    stroke(menuOutlineColour);
    strokeWeight(menuOutlineWidth);

    //thinking bubbles
    ellipse (x+110, y-110, 30, 30);
    ellipse (x+137, y-130, 20, 20);
    ellipse (x+160, y-140, 15, 15);
    //menu bubbles
    rect(x+180, y-160, 207, 90, 20); //of course!
    rect(x+180, y-60, 207, 40, 20); //no
    rect(x+180, y-10, 207, 40, 20); //thank

    //text
    fill(textColour);
    stroke(textColour)
    strokeWeight (0.75)
    textSize (20);
    text (recipe, x+195, y-150, 200);
    recipeLinkElement.attribute('href', recipeLink);
    recipeLinkElement.position(x+195, y-105);
    text ('-What else is there?-', x+200, y-48, 200);
    text ('-Thank you-', x+230, y+2, 200);
}

function pickEncouragement (){
    encouragement = random(encouragementList);
}

async function pickRecipe() { 
  let response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  let data = await response.json();
  let meal = data.meals[0];
  recipe = meal.strMeal;
  recipeLink = meal.strYoutube;
}

function pickSuggestion(){
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
            availableSuggestions = [...sadSuggestions];
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



// AI made: I dont fully understand how this works but i know what it does
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
}

function drawHungerMeter (x, y){ //x&y are hungerPos

    //fill
    push ();
    fill(hungerFillColour);
    noStroke();
    rect(x, y+20, hunger*2, 20); //thank you
    pop ();
    //outline
    push ();
    noFill();
    stroke(hungerOutlineColour);
    strokeWeight(hungerOutlineWidth);
    rect(x, y+20, 200, 20); //thank you
    pop ();

    fill(textColour);
    stroke(textColour);
    strokeWeight (0.75);
    textSize (20);
    text ('hunger: ' + hunger, x, y);
}
function drawHungerAlert (x,y){
    fill(menuFillColour);
    stroke(menuOutlineColour);
    strokeWeight(menuOutlineWidth);

    //thinking bubbles
    ellipse (x+110, y-110, 30, 30);
    ellipse (x+137, y-130, 20, 20);
    ellipse (x+160, y-140, 15, 15);
    //menu bubbles
    rect(x+180, y-160, 220, 70, 20); //hungry

    //text
    push ();
    fill(textColour);
    stroke(textColour);
    strokeWeight (0.75);
    textSize (hungerTextSize);
    text (hungerAlert, x+192, y-148, 200);
    pop ();
}

function drawWantMeter (x, y){ //x&y are hungerPos

    //fill
    if (want >= 0){
    push ();
    fill(hungerFillColour);
    noStroke();
    rect(x, y+20, want*2, 20); //thank you
    pop ();
    }
    //outline
    push ();
    noFill();
    stroke(hungerOutlineColour);
    strokeWeight(hungerOutlineWidth);
    rect(x, y+20, 200, 20); //thank you
    pop ();

    fill(textColour);
    stroke(textColour);
    strokeWeight (0.75);
    textSize (20);
    text ('want: ' + want, x, y);
}
function drawWantAlert (x,y){
    fill(menuFillColour);
    stroke(menuOutlineColour);
    strokeWeight(menuOutlineWidth);

    //thinking bubbles
    ellipse (x+110, y-110, 30, 30);
    ellipse (x+137, y-130, 20, 20);
    ellipse (x+160, y-140, 15, 15);
    //menu bubbles
    rect(x+180, y-160, 220, 70, 20);

    //text
    push ();
    fill(textColour);
    stroke(textColour);
    strokeWeight (0.75);
    textSize (wantTextSize);
    text (wantAlert, x+192, y-148, 200);
    pop ();
}

//AI coded
    async function checkTime() {
    let ipResponse = await fetch('https://api.ipify.org?format=json');
    let ipData = await ipResponse.json();
    let ip = ipData.ip;
    
    let timeResponse = await fetch('https://timeapi.io/api/time/current/ip?ipAddress=' + ip);
    let timeData = await timeResponse.json();
    
    let hour = timeData.hour;
    let minute = timeData.minute;

    hunger = getHungerTimerValue(hour, minute);
    console.log (hunger)
    saveState();
    }

    function getHungerTimerValue(hour, minute) {
    let currentMinutes = hour * 60 + minute;
    
    let meals = [
        { start: breakfastStart * 60, end: (breakfastStart + 2) * 60 },
        { start: lunchStart * 60, end: (lunchStart + 2) * 60 },
        { start: dinnerStart * 60, end: (dinnerStart + 2) * 60 },
    ];

    for (let meal of meals) {
        if (currentMinutes >= meal.start && currentMinutes < meal.end) {
        if (hungerReset) return 0; // stay at 0 if reset during this meal window
        let elapsed = currentMinutes - meal.start;
        let total = meal.end - meal.start;
        return parseFloat(((elapsed / total) * 100).toFixed(1));
        }
    }

    // outside all meal windows, clear the reset for next meal
    hungerReset = false;
    if (hunger >= 100) return 100;
    return hunger;
    }

    function resetHunger() {
    hunger = 0;
    hungerReset = true;
    showHungerAlertTimer = millis();
    saveState();
    }
//AI made
    function getWantValue() {
        if (wantStartTime === null) return 0;
        let elapsed = Date.now() - wantStartTime;
        let value = (elapsed / (WANT_DURATION / wantSpeedMultiplier)) * WANT_LIMIT;
        return parseFloat(Math.min(value, WANT_LIMIT).toFixed(1));
    }
    function lowerWant(amount) {
        want = want - amount; // can now go below 0
        wantStartTime = Date.now() - ((want / WANT_LIMIT) * WANT_DURATION);
        saveState();
    }
    function increaseWant(amount) {
        want = Math.min(WANT_LIMIT, want + amount); // never goes above 100
        wantStartTime = Date.now() - ((want / WANT_LIMIT) * WANT_DURATION); // recalculate start time
        saveState();
    }
    function resetWant() {
        want = 0;
        wantStartTime = Date.now();
        saveState();
    }
    function speedUpWant() {
        wantStartTime = Date.now() - ((want / WANT_LIMIT) * (WANT_DURATION / wantSpeedMultiplier));
        wantSpeedMultiplier = 1.5;
        saveState();
    }
    function resetWantSpeed() {
        wantStartTime = Date.now() - ((want / WANT_LIMIT) * (WANT_DURATION / wantSpeedMultiplier));
        wantSpeedMultiplier = 1; // back to normal
        saveState();
    }

// Resize the canvas if the window is resized
function windowResized() {
    const { w, h } = canvasSize();
    resizeCanvas(w, h);
    rightEdge = (width - 150)
    leftEdge = (150)
}
