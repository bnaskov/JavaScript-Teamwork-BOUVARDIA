/**
 * Created by Zhan on 23.7.2014 г..
 */
var canvasBg = document.getElementById('canvasBg');
var ctxBg = canvasBg.getContext('2d');

var canvasJet = document.getElementById('canvasJet');
var ctxJet = canvasJet.getContext('2d');
var jet1;

var gameWidth = canvasBg.width;
var gameHeight = canvasBg.height;
var fps=30;
var drawInterval;

var imageSprite = new Image();
imageSprite.src = 'imageSprite.png';
imageSprite.addEventListener('load',init,false);



document.getElementById('run').addEventListener('click',getText,false);
var jetInterval;
var rotateInterval;
var checkRight=1;
var checkLeft=1;
var isTrue=false;
var currYPos=600;
var currXPos = 300;


function moveJet(squares){
    switch (checkRight){
        case 1:
            jet1.drawY=jet1.drawY-jet1.speed;
            if(jet1.drawY==(currYPos-(squares*100))){
                clearInterval(jetInterval);
                currYPos=currYPos-(squares*100);
            }
            break;
        case 2:
            jet1.drawX=jet1.drawX+jet1.speed;
            if(jet1.drawX==(currXPos+(squares*100))){
                clearInterval(jetInterval);
                currXPos=currXPos+(squares*100);
            }
            break;
        case 3:
            jet1.drawY=jet1.drawY+jet1.speed;
            if(jet1.drawY==(currYPos+(squares*100))){
                clearInterval(jetInterval);
                currYPos=currYPos+(squares*100);
            }
            break;
        case 4:
            jet1.drawX=jet1.drawX-jet1.speed;
            if(jet1.drawX==(currXPos-(squares*100))){
                clearInterval(jetInterval);
                currXPos=currXPos-(squares*100);
            }
            break;
        case 5:
            jet1.drawY=jet1.drawY-jet1.speed;
            if(jet1.drawY==(currYPos-(squares*100))){
                clearInterval(jetInterval);
                currYPos=currYPos-(squares*100);
            }
            break;
        default :
    }
}

function moveFun(text) {
    switch (text) {
        case 'move(1)':
            jetInterval = setInterval(function () {
                moveJet(1)
            }, 15);
            break;

        case 'move(2)':
            jetInterval = setInterval(function () {
                moveJet(2)
            }, 15);
            break;

        case 'move(3)':
            jetInterval = setInterval(function () {
                moveJet(3)
            }, 15);
            break;

        case 'move(4)':
            jetInterval = setInterval(function () {
                moveJet(4)
            }, 15);
            break;

        case 'move(5)':
            jetInterval = setInterval(function () {
                moveJet(5)
            }, 15);
            break;

        case 'move(6)':
            jetInterval = setInterval(function () {
                moveJet(6)
            }, 15);
            break;

        default :
            return;
    }
}

function rightFun(){
    switch (checkRight){
        case 2:
            if(isTrue){
                break;
            }
            jet1.srcX=0;
            jet1.srcY+=100;
            isTrue=true;
            break;
        case 3:
            if(isTrue){
                break;
            }
            jet1.srcX=0;
            jet1.srcY+=100;
            isTrue=true;
            break;
        case 4:
            if(isTrue){
                break;
            }
            jet1.srcX=0;
            jet1.srcY+=100;
            isTrue=true;
            checkRight=1;
            break;
    }
    jet1.srcX+=100;
    if(jet1.srcX==100*6){
        clearInterval(rotateInterval);
        isTrue=false;
        checkRight++;
    }
}

function leftFun(){
    switch (checkRight){
        case 2:
            if(isTrue){
                break;
            }
            jet1.srcX=0;
            jet1.srcY+=100;
            isTrue=true;
            break;
        case 3:
            if(isTrue){
                break;
            }
            jet1.srcX=0;
            jet1.srcY+=100;
            isTrue=true;
            break;
        case 4:
            if(isTrue){
                break;
            }
            jet1.srcX=0;
            jet1.srcY+=100;
            isTrue=true;
            checkRight=1;
            break;
    }
    jet1.srcX+=100;
    if(jet1.srcX==100*6){
        clearInterval(rotateInterval);
        isTrue=false;
        checkLeft++;
    }
}

function getText() {
    var text = document.getElementById('text-area').value;
    if(text==='right'){
        rotateInterval=setInterval(rightFun,85);
    }
    else if(text==='left'){
        rotateInterval=setInterval(leftFun,85);
    }
    else{
        moveFun(text);
    }
}

function init(){
    drawBg();
    startDrawing();
    jet1=new Jet();
    document.getElementById('run').addEventListener('click',checkText,false);
}

function draw(){
    jet1.draw();
}

function startDrawing(){
    stopDrawing();
    drawInterval = setInterval(draw,fps)
}

function stopDrawing(){
    clearInterval(drawInterval);
}


function Jet(){
    this.srcX=0;
    this.srcY=700;
    this.drawX=300;
    this.drawY=600;
    this.width=100;
    this.height=100;
    this.speed=2;
}

Jet.prototype.draw = function(){
    clearCtxJet();
    ctxJet.drawImage(imageSprite,this.srcX,this.srcY,this.width,this.height,this.drawX,this.drawY,this.width,this.height);
};



function drawJet(){

}

function drawBg() {
    var srcX=0;
    var srcY=0;
    var drawX=0;
    var drawY=0;
    ctxBg.drawImage(imageSprite,srcX,srcY,gameWidth,gameHeight,drawX,drawY,gameWidth,gameHeight);
}

function clearCtxJet(){
    ctxJet.clearRect(0,0,gameWidth,gameHeight);
}
