window.onload= init;

var map;
var ctxMap;

var raz;
var ctxRaz;

var pl;
var ctxPl;


var nrs;
var ctxNrs;

var Ks;
var ctxKs;

var kch;
var ctxKch;

var ss;
var ctxSs;

var ssk;
var ctxSsk;

var scch;
var ctxScch;

var Sc;
var ctxSc;

var scch;
var ctxScch;
 
 var ddd=0;

 var stats;
var ctxStats;


var chakraMain=500;

var spawnInterval;
var spawnInterval1;
var spawnTime = 20000;
var spawnAmount = 6;

var enemyCvs;
var ctxEnemy;


var drawBtn;
var clearBtn;

var gameWidth = 800;
var gameHeight = 600;

var narutoArray=[];
var kakashiArray=[];

var sasukeArray=[];
var katunArray=[];
var sacuraArray=[];
var rasenganArray=[];
var chedoriArray=[];
var chakraArray=[];
 var enemies = [];
var n=0;
var icon;
var player;

var health=250;

var isPlaying;

var mouseX;
var mouseY;

var selectedP= false;

var background = new Image();
background.src = "img/fonnn.png";

var tiles = new Image();
tiles.src = "img/narutoG.png";

var razmetka = new Image();
razmetka.src = "img/razmetka.png";

var narutoIcon = new Image();
narutoIcon.src = "img/iconN.png";

var narutoR = new Image();
narutoR.src = "img/rasengan.png";


var kakasiModel = new Image();
kakasiModel.src = "img/kakasi.png";



var kakasiCh= new Image();
kakasiCh.src = "img/chedori.png";

var sasukeModel = new Image();
sasukeModel.src = "img/sasuke.png";


var katunModel = new Image();
katunModel.src = "img/katun.png";

var sacuraModel = new Image();
sacuraModel.src = "img/sakuraG.png";

var chakra = new Image();
chakra.src = "img/chakra.png";

var enemy = new Image();
enemy.src = "img/mobb.png";

var  b =1;
var  bK =1;
var  bS =true;
var  bSc =true;
var  bG =true;
var  b1 =false;
var sh=0,sh1=0;
var naruto=false;
var lk;
var araayB =[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];

var x;

var y;
var resengan = new Image();
resengan.src = "img/rasengan.png";

var requestAnimFrame = window.requestAnimationFrame || 
						window.webkitRequestAnimationFrame ||
						window.mozRequestAnimationFrame ||
						window.oRequestAnimationFrame ||
						window.msRequestAnimationFrame;
						
						
function init(){
	map = document.getElementById("map");
	ctxMap=map.getContext("2d");
	
	raz = document.getElementById("razmetka");
	ctxRaz=raz.getContext("2d");
	
	pl = document.getElementById("naruto");
	ctxPl=pl.getContext("2d");
	
    ks = document.getElementById("kakasi");
	ctxKs=ks.getContext("2d");
	
	nrs = document.getElementById("rasengan");
	ctxNrs=nrs.getContext("2d");
	
	kch = document.getElementById("chedori");
	ctxKch=kch.getContext("2d");
	
	enemyCvs = document.getElementById("enemy");
	ctxEnemy=enemyCvs.getContext("2d");
	
    sc = document.getElementById("sacura");
	ctxSc=sc.getContext("2d");
	
	scch = document.getElementById("chakra");
	ctxScch=scch.getContext("2d");

	ss = document.getElementById("sasuke");
	ctxSs=ss.getContext("2d");
	
	ssk = document.getElementById("katun");
	ctxSsk=ssk.getContext("2d");
	
	
	stats = document.getElementById("stats");
	ctxStats=stats.getContext("2d");


	
	map.width=gameWidth;
	map.height=gameHeight;
	
	pl.width=gameWidth;
	pl.height=gameHeight;
	
	ks.width=gameWidth;
    ks.height=gameHeight;
	
		
	kch.width=gameWidth;
    kch.height=gameHeight;
	
	
    sc.width=gameWidth;
    sc.height=gameHeight;
	
	scch.width=gameWidth;
    scch.height=gameHeight;
	
	raz.width=gameWidth;
	raz.height=gameHeight;
	
    nrs.width=gameWidth;
	nrs.height=gameHeight;
		
	ss.width=gameWidth;
	ss.height=gameHeight;
	
    ssk.width=gameWidth;
	ssk.height=gameHeight;
	
	enemyCvs.width=gameWidth;
	enemyCvs.height=gameHeight;
	
	stats.width=gameWidth;
	stats.height=gameHeight;
	
	ctxStats.fillStyle = "#fff";
	ctxStats.font = "bold 15pt Arial";

	
	drawBtn = document.getElementById("drawBtn");
	clearBtn = document.getElementById("clearBtn");
	clearBtn = document.getElementById("clearBtn");
	
	drawBtn.addEventListener("click", drawRect, false);
	clearBtn.addEventListener("click", clearRect, false);
	lk=new Chakra(90,100);
	icon = new Icon(0,0,220,92,100);
	iconK = new Icon(0,65,300,92,150);
	iconS = new Icon(0,130,390,92,125);
	iconSk = new Icon(0,195,475,92,50);
	iconG = new Icon(0,260,560,92,200);
	
   	drawBg();
	startLoop();
	

	selectedP.drawX=x;
	selectedP.drawY=y;
	
		
   document.addEventListener("click",mouseClick,false);
  //  document.addEventListener("mousedown",mouseDown,false);
//	document.addEventListener("mouseup",mouseUp,false);
	

}





function mouseClick(e){
	 	ctxRaz.clearRect(0,150,800,450);
	 x=e.pageX-map.offsetLeft;
	 y=e.pageY-map.offsetTop;
	if (x<750&&x>30&&y>180&y<540){chakraS(x,y);}
	if (x<750&&x>30&&y>180&y<540&&(b==0)){test(x,y);narutoPlay(sh,sh1);} else {ctxRaz.clearRect(190,70,100,100);  b=1;}
	if (x<750&&x>30&&y>180&y<540&&(bK==0)){test(x,y);kakashiPlay(sh,sh1)} else {ctxRaz.clearRect(190,70,100,100);  bK=1;}
	if (x<750&&x>30&&y>180&y<540&&(bS==false)){test(x,y); sasukePlay(sh,sh1);} else {ctxRaz.clearRect(190,70,100,100);  bS=true;}
	if (x<750&&x>30&&y>180&y<540&&(bSc==false)){test(x,y); sacuraPlay(sh,sh1);} else {ctxRaz.clearRect(190,70,100,100);  bSc=true;}
	if (x<750&&x>30&&y>180&y<540&&(bG==false)){test(x,y);} else {ctxRaz.clearRect(190,70,100,100);  bG=true;}
	


	if ((x>220)&&(x<280)&&y>90&&y<140&&(b==1)) {	if (chakraMain>100) {
	a='#ffffff';
} else a='#A52A2A';
	icon.stroke(a); b=0;ctxRaz.drawImage(razmetka,0,0,800,600,0,0,800,600);} else {ctxRaz.clearRect(190,70,100,100);  b=1;}
	 if (x>300&&x<360&&y>90&&y<140&&bK==1) {if (chakraMain>150) {
	a='#ffffff';
} else a='#A52A2A'; iconK.stroke(a); bK=0;ctxRaz.drawImage(razmetka,0,0,800,600,0,0,800,600);} else {ctxRaz.clearRect(280,70,90,100);  bK=1;}
	 if ((x>390)&&(x<450)&&y>90&&y<140&&bS==true) {if (chakraMain>150) {
	a='#ffffff';
} else a='#A52A2A'; iconS.stroke(a); bS=false;ctxRaz.drawImage(razmetka,0,0,800,600,0,0,800,600);} else {ctxRaz.clearRect(360,70,100,100);  bS=true;}
	if ((x>475)&&(x<535)&&y>90&&y<140&&bSc==true) {if (chakraMain>50) {
	a='#ffffff';
} else a='#A52A2A'; iconSk.stroke(a); bSc=false;ctxRaz.drawImage(razmetka,0,0,800,600,0,0,800,600);} else {ctxRaz.clearRect(450,70,90,100);  bSc=true;}
	if ((x>565)&&(x<625)&&y>90&&y<140&&bG==true) {if (chakraMain>150) {
	a='#ffffff';
} else a='#A52A2A'; iconG.stroke(a); bG=false;ctxRaz.drawImage(razmetka,0,0,800,600,0,0,800,600);} else {ctxRaz.clearRect(530,70,100,100);  bG=true;}
	
	 
	 
}

function chakraS(x,y){
	for(var i=0; i<chakraArray.length; i++)
	{
	
		if(x>=chakraArray[i].drawX&&x<=chakraArray[i].drawX+chakraArray[i].width) {chakraArray[i].destroy();chakraMain=chakraMain+25;
		}
	}
	
}

function test(x,y){
	
	for (let i=0;i<3;i++)
	{
		
		let p=i*90+180;
		let p1=180+90*(i+1);
		if (p<y&&y<p1) sh=i;
	}
	
		for (let i=0;i<9;i++)
	{
		
		let p=i*75+40;
		let p1=40+75*(i+1);
		if (p<x&&x<p1) sh1=i;
	}
	


}

function narutoPlay(sh,sh1){
	

if (araayB[sh][sh1]===0){
	
	if (chakraMain>=150){

		narutoArray.push(new Naruto(40+sh1*80,200+sh*90));
		
	chakraMain=chakraMain-150;
araayB[sh][sh1]=1;

spawnTime=spawnTime-50;}}

}


function sasukePlay(sh,sh1){
	
	if (araayB[sh][sh1]===0){
		if (chakraMain>=100){	
	

		sasukeArray.push(new Sasuke(20+sh1*80,200+sh*90));
	
		
	chakraMain=chakraMain-100;
	
araayB[sh][sh1]=1;
	spawnTime=spawnTime-50;}}
}

function kakashiPlay(sh,sh1){
	
	if (araayB[sh][sh1]===0){
		if (chakraMain>=150){	
	

		kakashiArray.push(new Kakasi(20+sh1*80,200+sh*90));
	
		
	chakraMain=chakraMain-150;
	
araayB[sh][sh1]=1;
	spawnTime=spawnTime-50;}}
}

function sacuraPlay(sh,sh1){
	
if (araayB[sh][sh1]===0){
		if (chakraMain>=50){	
	

		sacuraArray.push(new Sacura(20+sh1*80,200+sh*90));
		
	chakraMain=chakraMain-50;
	
araayB[sh][sh1]=1;
spawnTime=spawnTime-25;}}
	
}


function drawRect(){
	
	ctxMap.fillStyle = "3D3D3D";
	ctxMap.fillRect(10,10,100,100);
}

function clearRect()
{
	ctxMap.clearRect(0,0,800,600);
	ctxMap.clearRect(0,0,800,600);
	
}

function drawBg()
{  
	ctxMap.drawImage(background,0,0,800,600,0,0,800,600);
}




function Icon(sx,sy,dx,dy,x)
{
	this.srcX = sx;
	this.srcY = sy;
	this.drawX = dx;
	this.drawY = dy;
	this.width = 40;
	this.height =60;
	
	
	
	
	this.v = x;
}

Icon.prototype.draw = function()
{
	clearCtxIcon(this.drawX,this.drawY,this.width,this.height);
	ctxRaz.drawImage(narutoIcon,this.srcX,this.srcY,this.width,this.height,
					       this.drawX,this.drawY,this.width,this.height);
}

Icon.prototype.stroke = function(a)
{
ctxRaz.strokeStyle=a; ctxRaz.lineWidth=10;
	
	

	ctxRaz.strokeRect(this.drawX-18,this.drawY,this.width+30,this.height);
}


Icon.prototype.update = function()
{    
	
	 if (this.srcX<120) this.srcX += 43; else this.srcX =0;
	
	

}

function clearCtxIcon(dx,dy,x,y)
{
	ctxRaz.clearRect(dx,dy,x,y);
}









function Naruto(dx,dy)
{
	this.srcX = 0;
	this.srcY = 0;
	this.drawX = dx;
	this.drawY = dy;
	this.width = 70;
	this.height =54;
	
	
	
	this.speed = 3;
}

Naruto.prototype.draw = function()
{
	
	clearCtxPlayer( this.drawX,this.drawY,this.width,this.height);
	ctxPl.drawImage(tiles,this.srcX,this.srcY,this.width,this.height,
					       this.drawX,this.drawY,this.width,this.height);
}

Naruto.prototype.update = function()
{    

	
         if (this.srcX<350&&this.srcX>250) {rasenganPlay(this.drawX,this.drawY);}
	
	 if (this.srcX<350) this.srcX += 72; else this.srcX =350;
	
	

}





function clearCtxPlayer(x,y,x1,y1)
{
	ctxPl.clearRect(x,y,x1,y1);
	
}


function draw()
{
	lk.draw();
	icon.draw();
	 //enemyPlay();
	iconK.draw();
	iconS.draw();
	iconSk.draw();
	iconG.draw();
   for(var i = 0; i <narutoArray.length; i++)
	{
		narutoArray[i].draw();
		
	}	
		   for(var i = 0; i <kakashiArray.length; i++)
	{
		kakashiArray[i].draw();
		
	}	
			   for(var i = 0; i <rasenganArray.length; i++)
	{
		rasenganArray[i].draw();
		
	}	
				   for(var i = 0; i <chedoriArray.length; i++)
	{
		chedoriArray[i].draw();
		
	}	
		for(var i = 0; i <enemies.length; i++)
	{
		enemies[i].draw();
	}
	
			   for(var i = 0; i <sacuraArray.length; i++)
	{
		sacuraArray[i].draw();
		
	}	
	
			for(var i = 0; i <chakraArray.length; i++)
	{
		chakraArray[i].draw();
		
	}	
			   for(var i = 0; i <sasukeArray.length; i++)
	{
		sasukeArray[i].draw();
		
	}	
		   for(var i = 0; i <katunArray.length; i++)
	{
		katunArray[i].draw();
		
	}		
	
	
}

function update(){
	lk.update();
    updateStats();
	icon.update();
	iconK.update();
	iconS.update();
	iconSk.update();
	iconG.update();
	
   for(var i = 0; i <narutoArray.length; i++)
	{
		narutoArray[i].update();
}	
	   for(var i = 0; i <kakashiArray.length; i++)
	{
		kakashiArray[i].update();
		
	}	
	
				   for(var i = 0; i <rasenganArray.length; i++)
	{
		rasenganArray[i].update();
		
		
	}	
					   for(var i = 0; i <chedoriArray.length; i++)
	{
		chedoriArray[i].update();
		
	}		
	for(var i = 0; i <enemies.length; i++)
	{
		enemies[i].update();
	}
	
			   for(var i = 0; i <sacuraArray.length; i++)
	{
		sacuraArray[i].update();
		
	}	
	for(var i = 0; i <chakraArray.length; i++)
	{
		chakraArray[i].update();
		
	}	
			   for(var i = 0; i <sasukeArray.length; i++)
	{
		sasukeArray[i].update();
		
	}	
		   for(var i = 0; i <katunArray.length; i++)
	{
		katunArray[i].update();
		
	}		
}


function loop()
{
	if(isPlaying)
	{
		 draw();
		 update();
	     console.log(rasenganArray.length);
		
		 setTimeout(function() {
         requestAnimationFrame(loop);
// Drawing code goes here
}, 1000 / 15);
	}
	
}


function startLoop()
{
	isPlaying = true;
	loop();
startCreatingEnemies();
 startCreatingChakra();
	startResengan();
	startChedori();
		startkatun();
}

function stopLoop()
{
	isPlaying= false;
}
function Sasuke(dx,dy)
{
	this.srcX = 10;
	this.srcY = 0;
	this.drawX = dx;
	this.drawY = dy-10;
	this.width = 60;
	this.height =70;
	
	
	
	
	this.speed = 3;
}

Sasuke.prototype.draw = function()
{
	clearSasuke( this.drawX,this.drawY,this.width,this.height);

	ctxSs.drawImage(sasukeModel,this.srcX,this.srcY,this.width,this.height,
					       this.drawX,this.drawY,this.width,this.height);
}

Sasuke.prototype.update = function()
{   
	 if (this.srcX<400&&this.srcX>350) {katunPlay(this.drawX,this.drawY);}
	  
	 if (this.srcX<350) this.srcX += 60; else this.srcX =0;
	
	

}

function clearSasuke(x,y,x1,y1)
{
	ctxSs.clearRect(x,y,x1,y1);

}

function Kakasi(dx,dy)
{
	this.srcX = 10;
	this.srcY = 0;
	this.drawX = dx;
	this.drawY = dy-10;
	this.width = 100;
	this.height =70;
	
	
	
	
	this.speed = 3;
}

Kakasi.prototype.draw = function()
{
	clearKakshi( this.drawX,this.drawY,this.width,this.height);

	ctxKs.drawImage(kakasiModel,this.srcX,this.srcY,this.width,this.height,
					       this.drawX,this.drawY,this.width,this.height);
}

Kakasi.prototype.update = function()
{   
	 if (this.srcX<1900&&this.srcX>1700) {chedoriPlay(this.drawX,this.drawY);}
	  
	 if (this.srcX<1800) this.srcX += 100; else this.srcX =1900;
	
	

}


function Sacura(dx,dy)
{
	this.srcX = 0;
	this.srcY = 0;
	this.drawX = dx;
	this.drawY = dy;
	this.width = 100;
	this.height =70;
	
	
	
	
	this.speed = 3;
}

Sacura.prototype.draw = function()
{
		clearSacura(this.drawX,this.drawY,this.width,this.height);
	ctxKs.drawImage(sacuraModel,this.srcX,this.srcY,this.width,this.height,
					       this.drawX,this.drawY,this.width,this.height);
}

Sacura.prototype.update = function()
{    
	
	 if (this.srcX<500) this.srcX += 100; else this.srcX =0;
	
	

}

function clearSacura(x,y,x1,y1)
{
	ctxKs.clearRect(x,y,x1,y1);

}
function clearKakshi(x,y,x1,y1)
{
	ctxKs.clearRect(x,y,x1,y1);

}


function clearNaruto(x,y,x1,y1)
{
	ctxPl.clearRect(x,y,x1,y1);

}

function Rasengan(dx,dy)
{

	this.srcX = 0;
	this.srcY = 0;
	this.drawX = dx+60;
	this.drawY = dy+30;
	this.width = 20;
	this.height =30;
	
	
	
	
	this.speed = 3;
}

Rasengan.prototype.draw = function()
{
    clearNarutoR(this.drawX,this.drawY,this.width,this.height);
	ctxNrs.drawImage(narutoR,this.srcX,this.srcY,this.width,this.height,
					       this.drawX,this.drawY,this.width,this.height);
}

Rasengan.prototype.update = function()
{    
	 
	 this.drawX+=5;
	 	if(this.drawX+this.width>800)
	{
		this.destroy();
	}
	


}
Rasengan.prototype.destroy = function()
{
	
	rasenganArray.splice(rasenganArray.indexOf(this),1);
	clearNarutoR(this.drawX,this.drawY,this.width,this.height);
	
}

function rasenganPlay(x,y){
	
	

		rasenganArray.push(new Rasengan(x,y-20));
	



}

function clearNarutoR(x,y,x1,y1)
{
	ctxNrs.clearRect(x-5,y,x1,y1);

}


function Chedori(dx,dy)
{
	
	this.srcX = 0;
	this.srcY = 0;
	this.drawX = dx+60;
	this.drawY = dy+35;
	this.width = 30;
	this.height =30;
	
	
	
	
	this.speed = 3;
}

Chedori.prototype.draw = function()
{
    clearKakashiCh(this.drawX,this.drawY,this.width,this.height);
	ctxKch.drawImage(kakasiCh,this.srcX,this.srcY,this.width,this.height,
					       this.drawX,this.drawY,this.width,this.height);
}

Chedori.prototype.update = function()
{    
	
	 this.drawX+=5;
		 	if(this.drawX+this.width>800)
	{
		this.destroy();
	}
	
	

}

Chedori.prototype.destroy = function()
{
	
	chedoriArray.splice(chedoriArray.indexOf(this),1);
	clearKakashiCh(this.drawX,this.drawY,this.width,this.height);
	
}

function chedoriPlay(x,y){
	
	

		chedoriArray.push(new Chedori(x,y-20));
	



}

function clearKakashiCh(x,y,x1,y1)
{
	ctxKch.clearRect(x,y,x1,y1);

}





function Enemy(y)
{
	this.srcX = 0;
	this.srcY = 0;
	this.drawX = 800;
	this.drawY = 190+y*100;
	this.width = 100;
	this.height = 90;
	
	this.speed = 8;
}

Enemy.prototype.draw = function()
{
  	 clearCtxEnemy( this.drawX,this.drawY,this.width,this.height)
	ctxEnemy.drawImage(enemy,this.srcX,this.srcY,this.width,this.height,
					       this.drawX,this.drawY,this.width,this.height);

}

Enemy.prototype.update = function()
{
	 if (this.srcX<600) this.srcX += 100; else this.srcX =0;
	this.drawX-=10; 
	
	for(var i=0; i<rasenganArray.length; i++)
	{
		
		if(this.drawX>=rasenganArray[i].drawX&&this.drawX<=rasenganArray[i].drawX+rasenganArray[i].width&&this.drawY<=rasenganArray[i].drawY&&this.drawY<=rasenganArray[i].drawY+rasenganArray[i].height) {this.destroy();rasenganArray[i].destroy();ddd=i;}
	}
	
	  for(var i=0; i<chedoriArray.length; i++)
	{
		
		if(this.drawX>=chedoriArray[i].drawX&&this.drawX<=chedoriArray[i].drawX+chedoriArray[i].width&&this.drawY-10<=chedoriArray[i].drawY&&this.drawY<=chedoriArray[i].drawY+chedoriArray[i].height) {this.destroy();chedoriArray[i].destroy();ddd=i;}
	}
	
		
	  for(var i=0; i<katunArray.length; i++)
	{
		
		if(this.drawX>=katunArray[i].drawX&&this.drawX<=katunArray[i].drawX+katunArray[i].width&&this.drawY-10<=katunArray[i].drawY&&this.drawY<=katunArray[i].drawY+katunArray[i].height) {this.destroy();katunArray[i].destroy();ddd=i;}
	}
	
	
	
		
	if(this.drawX+this.width<0)
	{
		this.destroy();
		health=health-1;
	}
	
	

}

Enemy.prototype.destroy = function()
{
	enemies.splice(enemies.indexOf(this),1);
}


function clearCtxEnemy(x,y,x1,y1)
{
	ctxEnemy.clearRect(x,y,x1,y1);
}

Enemy.prototype.destroy = function()
{

	enemies.splice(enemies.indexOf(this),1);
	 clearCtxEnemy( this.drawX,this.drawY,this.width,this.height);
	
}



function enemyPlay(){
	
	

		enemies.push(new Enemy(0,0));
	

	
}

function spawnEnemy()
{
	let y=  Math.floor(Math.random() * (2 - 0 + 1)) + 0;
;
	
				enemies.push(new Enemy(y));
	
}


function startCreatingEnemies()
{
	//stopCreatingEnemies();	console.log(spawnTime);
	spawnInterval= setInterval(function(){spawnEnemy()},3000); 
}


function stopCreatingEnemies()
{
	clearInterval(spawnInterval);
}


function Chakra(dx,dy)
{
	
	this.srcX = 0;
	this.srcY = 0;
	this.drawX = dx;
	this.drawY = dy;
	this.width = 40;
	this.height =50;
	
	

	
	this.speed = 3;
}

Chakra.prototype.draw = function()
{
    clearChakra(this.drawX,this.drawY,this.width,this.height);
	ctxScch.drawImage(chakra,this.srcX,this.srcY,this.width,this.height,
					       this.drawX,this.drawY,this.width,this.height);
}

Chakra.prototype.update = function()
{    
	
 if (this.srcX<90) this.srcX += 40; else this.srcX =0;
	
	

}

Chakra.prototype.destroy = function()
{
	
	chakraArray.splice(chakraArray.indexOf(this),1);
	clearChakra(this.drawX,this.drawY,this.width,this.height);
	
}

function ChakraPlay(){
	
			   for(var i = 0; i <sacuraArray.length; i++)
	{
		
		


		chakraArray.push(new Chakra(sacuraArray[i].drawX+35,sacuraArray[i].drawY-15));
	
	}


}

function clearChakra(x,y,x1,y1)
{
	ctxScch.clearRect(x,y,x1,y1);

}


function startCreatingChakra()
{
	
	spawnInterval1= setInterval(function(){ChakraPlay()},spawnTime); 
}

function startResengan()
{

	spawnInterval1= setInterval(function(){   for(var i = 0; i <narutoArray.length; i++)
	{
		narutoArray[i].srcX=0;
}	},10000); 
}

function startChedori()
{

	spawnInterval1= setInterval(function(){   for(var i = 0; i<kakashiArray.length; i++)
	{
		kakashiArray[i].srcX=0;
}	},9000); 
}


function updateStats()
{
	
	ctxStats.clearRect(0,0,gameWidth,gameHeight);
	ctxStats.fillText(chakraMain,95,80);
	ctxStats.fillStyle="red";
	ctxStats.fillRect(400,30,health,30);

	
}

function Katun(dx,dy)
{
	
	this.srcX = 0;
	this.srcY = 0;
	this.drawX = dx+60;
	this.drawY = dy+35;
	this.width = 40;
	this.height =30;
	
	
	
	
	this.speed = 3;
}

Katun.prototype.draw = function()
{
    clearsasukeCh(this.drawX,this.drawY,this.width,this.height);
	ctxSsk.drawImage(katunModel,this.srcX,this.srcY,this.width,this.height,
					       this.drawX,this.drawY,this.width,this.height);
}

Katun.prototype.update = function()
{    
	
	 this.drawX+=5;
		 	if(this.drawX+this.width>800)
	{
		this.destroy();
	}
	
	

}

Katun.prototype.destroy = function()
{
	
	katunArray.splice(katunArray.indexOf(this),1);
	clearsasukeCh(this.drawX,this.drawY,this.width,this.height);
	
}

function katunPlay(x,y){
	
	

		katunArray.push(new Katun(x,y-20));
	



}

function clearsasukeCh(x,y,x1,y1)
{
	ctxSsk.clearRect(x,y,x1,y1);

}


function startkatun()
{

	spawnInterval1= setInterval(function(){   for(var i = 0; i<sasukeArray.length; i++)
	{
		sasukeArray[i].srcX=0;
}	},6000); 
}


