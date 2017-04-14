window.onload= init;

var map;
var ctxMap;

var pl;
var ctxPl;

var enemyCvs;
var ctxEnemy;

var stats;
var ctxStats;
 
var drawBtn;
var clearBtn;

var gameWidth = 800;
var gameHeight = 500;

var mapX =0;
var mapX1 = gameWidth;

 var health;



var background = new Image();
background.src = "img/fonMain.png";

var background1 = new Image();
background1.src = "img/fonMain.png";

var tiles = new Image();
tiles.src = "player.png";

var enemy1 = new Image();
enemy1.src = "img/enemy1.png";


var player;
var enemies = [];

var spawnInterval;
var spawnTime = 6000;
var spawnAmount = 6;

var isPlaying;

var requestAnimFrame = window.requestAnimationFrame || 
						window.webkitRequestAnimationFrame ||
						window.mozRequestAnimationFrame ||
						window.oRequestAnimationFrame ||
						window.msRequestAnimationFrame;
						

function init(){
	map = document.getElementById("map");
	ctxMap=map.getContext("2d");
	
	pl = document.getElementById("player");
	ctxPl=pl.getContext("2d");

	enemyCvs = document.getElementById("enemy");
	ctxEnemy=enemyCvs.getContext("2d");
	
	stats = document.getElementById("stats");
	ctxStats=stats.getContext("2d");
		
	
	map.width=gameWidth;
	map.height=gameHeight;
	
	pl.width=gameWidth;
	pl.height=gameHeight;
	
	enemyCvs.width=gameWidth;
	enemyCvs.height=gameHeight;
	
	stats.width=gameWidth;
	stats.height=gameHeight;
	
	ctxStats.fillStyle = "#fff";
	ctxStats.font = "bold 15pt Arial";
	
	drawBtn = document.getElementById("drawBtn");
	clearBtn = document.getElementById("clearBtn");
	
	drawBtn.addEventListener("click", drawRect, false);
	clearBtn.addEventListener("click", clearRect, false);
	
	resetHealth()
	
	player = new Player();

	
	
	
    startLoop();
	
	
	document.addEventListener("keydown",checkKeyDown, false);
	document.addEventListener("keyup",checkKeyUp,false);
}

function drawRect(){
	
	ctxMap.fillStyle = "3D3D3D";
	ctxMap.fillRect(10,10,100,100);
}

function clearRect()
{
	ctxMap.clearRect(0,0,800,500);
	
}

function updateStats()
{
	ctxStats.clearRect(0,0,gameWidth,gameHeight);
	ctxStats.fillText("health"+health,20,40);
	
}
function drawBg()
{  
	ctxMap.clearRect(0,0,gameWidth,gameHeight);
	ctxMap.drawImage(background,0,0,800,500,mapX,0,800,500);
	ctxMap.drawImage(background1,0,0,800,500,mapX1,0,800,500);
}
function draw()
{
	player.draw();
	clearCtxEnemy();
	for(var i = 0; i <enemies.length; i++)
	{
		enemies[i].draw();
	}
}
//objects
function Player()
{
	this.srcX = 0;
	this.srcY = 0;
	this.drawX = 0;
	this.drawY = 0;
	this.width = 100;
	this.height = 130;
	
	
	this.isUp=false;
	this.isDown=false;
	this.isLeft=false;
	this.isRight=false;
	
	this.speed = 3;
}

Player.prototype.draw = function()
{
	clearCtxPlayer();
	ctxPl.drawImage(tiles,this.srcX,this.srcY,this.width,this.height,
					       this.drawX,this.drawY,this.width,this.height);
}

Player.prototype.update = function()
{
	if(health<0) resetHealth();
	if(this.drawX<0) this.drawX = 0;
	
	if(this.drawX>gameWidth - this.width) this.drawX = gameWidth- this.width;
	
	if(this.drawY<0) this.drawY = 0;
	
	if(this.drawY>gameHeight-this.height) this.drawY = gameHeight -this.height;
	
	for(var i=0; i<enemies.length; i++)
	{
		if(this.drawX>=enemies[i].drawX&&this.drawY>=enemies[i].drawY&&
		this.drawX<=enemies[i].drawX+enemies[i].width&&
		this.drawY<=enemies[i].drawY+enemies[i].height) health--;
	}
	
	this.chooseDir();
}

Player.prototype.chooseDir = function()
{
	if(this.isUp)
	{
		this.drawY -=this.speed;
	}
	if(this.isDown)
	{
		this.drawY +=this.speed;
	}
	if(this.isLeft)
	{
		this.drawX -=this.speed;
	}
	if(this.isRight)
	{
		this.drawX +=this.speed;
	}
}


function clearCtxPlayer()
{
	ctxPl.clearRect(0,0,gameWidth,gameHeight);
}

function checkKeyDown(e)
{
	var keyID = e.keyCode || e.which;
	var keyChar = String.fromCharCode(keyID);
	
	if(keyChar == "W")
	{
		player.isUp = true;
		e.preventDefault();
	}
	
	if(keyChar == "S")
	{
		player.isDown = true;
		e.preventDefault();
	}
	
	if(keyChar == "D")
	{
		player.isRight = true;
		e.preventDefault();
	}
	
	if(keyChar == "A")
	{
		player.isLeft = true;
		e.preventDefault();
	}
}

function checkKeyUp(e)
{
	var keyID = e.keyCode || e.which;
	var keyChar = String.fromCharCode(keyID);
	
	if(keyChar == "W")
	{
		player.isUp = false;
		e.preventDefault();
	}
	
	if(keyChar == "S")
	{
		player.isDown = false;
		e.preventDefault();
	}
	
	if(keyChar == "D")
	{
		player.isRight = false;
		e.preventDefault();
	}
	
	if(keyChar == "A")
	{
		player.isLeft = false;
		e.preventDefault();
	}
}

function Enemy()
{
	this.srcX = 0;
	this.srcY = 0;
	this.drawX = Math.floor(Math.random()*gameWidth)+gameWidth;
	this.drawY = Math.floor(Math.random()*gameHeight);
	this.width = 87;
	this.height = 87;
	
	this.speed = 8;
}

Enemy.prototype.draw = function()
{
  	
	ctxEnemy.drawImage(enemy1,this.srcX,this.srcY,this.width,this.height,
					       this.drawX,this.drawY,this.width,this.height);

}

Enemy.prototype.update = function()
{
	 if (this.srcX<320) this.srcX += 87; else this.srcX =0;
	this.drawX-=7; 
	
	if(this.drawX+this.width<0)
	{
		this.destroy();
	}
	
}

Enemy.prototype.destroy = function()
{
	enemies.splice(enemies.indexOf(this),1);
}


function clearCtxEnemy()
{
	ctxEnemy.clearRect(0,0,gameWidth,gameHeight);
}

function spawnEnemy(count)
{
	for (var i =  0; i<count; i++)
	{
		enemies[i] = new Enemy();
	}
}


function startCreatingEnemies()
{
	stopCreatingEnemies();
	spawnInterval= setInterval(function(){spawnEnemy(spawnAmount)},spawnTime);
}


function stopCreatingEnemies()
{
	clearInterval(spawnInterval);
}



function loop()
{
	if(isPlaying)
	{
		 draw();
		 update();
		 requestAnimFrame(loop);
	}
	
}


function startLoop()
{
	isPlaying = true;
	loop();
	startCreatingEnemies();
}

function stopLoop()
{
	isPlaying= false;
}

function update()
{
	moveBg();
	drawBg();
	updateStats();
	player.update();
	for(var i = 0; i <enemies.length; i++)
	{
		enemies[i].update();
	}
}


function resetHealth()
{
	health=100;
}

function moveBg()
{
	var vel = 4;
	mapX-=4;
	mapX1-=4;
	if(mapX+gameWidth<0) mapX=gameWidth-5;
	if(mapX1+gameWidth<0) mapX1=gameWidth-5;
	
	
}