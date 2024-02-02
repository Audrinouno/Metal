//Time script..............>>>>

function updateTime()
 {
  const timeElement = document.getElementById('time');
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const disign=document.getElementById('disign');
  let session='am';
  
  if (hours>12)
  { 
  hours=hours-12;
  session='pm';
  
  }
  
  if(seconds%2==0)
  {
  	disign.style.display="none";
  }
  else
  {
  	disign.style.display="block";
  }

 const timeString = `${hours}:${minutes}:${seconds} ${session} `;
 timeElement.textContent = timeString;
 
}

setInterval(updateTime, 1000); // Update time every second
updateTime(); // Initial call to display the time

  //Date script............>>>>>
  
  function updateDate()
{
  const dateElement=document.getElementById('date');
  const now=new Date();
  const day=now.getDate().toString();
  let month=now.getMonth() + 1; 
  const year=now.getFullYear().toString();
  
  if(month==1)
  {month='Jan';}
  else if (month==2)
  {month='Feb';}
    else if (month==3)
  {month='Mar';}
  else if (month==4)
  {month='Apr';}
  else if (month==5)
  {month='May';}
  else if (month==6)
  {month='Jun';}
  else if (month==7)
  {month='Jul';}
  else if (month==8)
  {month='Aug';}
  else if (month==9)
  {month='Sep';}
  else if (month==10)
  {month='Oct';}
  else if (month==11)
  {month='Nov';}
  else 
  {month='Dec';}
 
  const dateString=`${day} / ${month} / ${year}`;
  dateElement.textContent=dateString;
 }
 
  setInterval(updateDate,1000);
  updateDate();
  
  //Apps Widget ON/OFF script ............>>>>
  
  const app=document.getElementById('apps');
  let display=1;
  function showhide( )
{
  	if(display==1)
  {
  	app.style.display='block';

      display=0;
  }
  else
 {
  	app.style.display='none';
    
      display=1;
  }
  
}

//Game Widget ON/OFF function 

const gameid=document.getElementById('tpGame');
  let displaygame=1;
  function game( )
{
  	if(displaygame==1)
  {
  	gameid.style.display='block';
       //Game ON
       document.getElementById('Tpwin').style.display='none';
       //display WIN OFF
       document.getElementById('Tpout').style.display='none';
       //display OUT OFF
       
      displaygame=0;    
  }
  else
 {
  	gameid.style.display='none';
      //Game OFF
       document.getElementById('Tpwin').style.display='none';
       //display WIN OFF
       document.getElementById('Tpout').style.display='none';
       //display OUT OFF
      displaygame=1;
  }
  
}


 
 //TpGame Movement script...............>>>>>>
 
   let i=1;    //movement 
   let j=10;   //time interval 
    let play=0; //Game is OFF
  function movement(){

  //holes ids
  
const tpb1h=document.getElementById('tpb1h');
const tpb2h=document.getElementById('tpb2h');
const tpb3h=document.getElementById('tpb3h');
const tpb4h=document.getElementById('tpb4h');
const tpb5h=document.getElementById('tpb5h');
const  tpb6h=document.getElementById('tpb6h');
const  tpb7h=document.getElementById('tpb7h');
const  tpb8h=document.getElementById('tpb8h');
const tpb9h=document.getElementById('tpb9h');

//beaver ids

const tpb1b=document.getElementById('tpb1b');
const tpb2b=document.getElementById('tpb2b');
const tpb3b=document.getElementById('tpb3b');
const tpb4b=document.getElementById('tpb4b');
const tpb5b=document.getElementById('tpb5b');
const tpb6b=document.getElementById('tpb6b');
const tpb7b=document.getElementById('tpb7b');
const tpb8b=document.getElementById('tpb8b');
const tpb9b=document.getElementById('tpb9b');

if(j>0) //if time greater than zero 
{
if(play==1) //game ON
{

// movement of beaver 

if(i==1)
{
tpb1b.style.display=' inline';
tpb1h.style.display=' none';
tpb2b.style.display=' none';
tpb2h.style.display='inline ';
tpb3b.style.display='none ';
tpb3h.style.display='inline ';
tpb4b.style.display=' none';
tpb4h.style.display='inline ';
tpb5b.style.display='none ';
tpb5h.style.display='inline ';
tpb6b.style.display='none ';
tpb6h.style.display=' inline';
tpb7b.style.display=' none';
tpb7h.style.display=' inline';
tpb8b.style.display='none ';
tpb8h.style.display=' inline';
tpb9b.style.display=' none';
tpb9h.style.display=' inline';

i++; // i increase

}
else if(i==2)
{
tpb1b.style.display=' none';
tpb1h.style.display='inline';
tpb2b.style.display=' none';
tpb2h.style.display='inline ';
tpb3b.style.display='none ';
tpb3h.style.display='inline ';
tpb4b.style.display=' none';
tpb4h.style.display='inline ';
tpb5b.style.display='none ';
tpb5h.style.display='inline ';
tpb6b.style.display='none ';
tpb6h.style.display=' inline';
tpb7b.style.display=' none';
tpb7h.style.display=' inline';
tpb8b.style.display='none ';
tpb8h.style.display=' inline';
tpb9b.style.display=' inline';
tpb9h.style.display=' none';

i++; // i increase
}
else if(i==3)
{
tpb1b.style.display=' none';
tpb1h.style.display='inline';
tpb2b.style.display=' none';
tpb2h.style.display='inline ';
tpb3b.style.display='none ';
tpb3h.style.display='inline ';
tpb4b.style.display=' none';
tpb4h.style.display='inline ';
tpb5b.style.display='inline';
tpb5h.style.display='none ';
tpb6b.style.display='none ';
tpb6h.style.display=' inline';
tpb7b.style.display=' none';
tpb7h.style.display=' inline';
tpb8b.style.display='none ';
tpb8h.style.display=' inline';
tpb9b.style.display=' none';
tpb9h.style.display=' inline';

	i++; // i increase
	
	j--; //time decrease 
	
	document.getElementById('timeinterval'). textContent=`time: ${j}`;
	 //display game time
}	
else if(i==4)
{
tpb1b.style.display=' none';
tpb1h.style.display=' inline';
tpb2b.style.display=' inline';
tpb2h.style.display='none ';
tpb3b.style.display='none ';
tpb3h.style.display='inline ';
tpb4b.style.display=' none';
tpb4h.style.display='inline ';
tpb5b.style.display='none ';
tpb5h.style.display='inline ';
tpb6b.style.display='none ';
tpb6h.style.display=' inline';
tpb7b.style.display=' none';
tpb7h.style.display=' inline';
tpb8b.style.display='none ';
tpb8h.style.display=' inline';
tpb9b.style.display=' none';
tpb9h.style.display=' inline';

	i++; // i increase
	
	
}	
else if(i==5)
{
tpb1b.style.display=' none';
tpb1h.style.display=' inline';
tpb2b.style.display=' none';
tpb2h.style.display='inline ';
tpb3b.style.display='none ';
tpb3h.style.display='inline ';
tpb4b.style.display=' none';
tpb4h.style.display='inline ';
tpb5b.style.display='none ';
tpb5h.style.display='inline ';
tpb6b.style.display='none ';
tpb6h.style.display=' inline';
tpb7b.style.display=' inline';
tpb7h.style.display=' none';
tpb8b.style.display='none ';
tpb8h.style.display=' inline';
tpb9b.style.display=' none';
tpb9h.style.display=' inline';

	i++; // i increase
}	
else if(i==6)
{
tpb1b.style.display=' none';
tpb1h.style.display=' inline';
tpb2b.style.display=' none';
tpb2h.style.display='inline ';
tpb3b.style.display='inline';
tpb3h.style.display='none';
tpb4b.style.display=' none';
tpb4h.style.display='inline ';
tpb5b.style.display='none ';
tpb5h.style.display='inline ';
tpb6b.style.display='none ';
tpb6h.style.display=' inline';
tpb7b.style.display=' none';
tpb7h.style.display=' inline';
tpb8b.style.display='none ';
tpb8h.style.display=' inline';
tpb9b.style.display=' none';
tpb9h.style.display=' inline';

	i++; // i increase
	j--; //time decrease
	
	document.getElementById('timeinterval'). textContent=`time: ${j}`;
 //display game time
}	
else if(i==7)
{
tpb1b.style.display=' none';
tpb1h.style.display=' inline';
tpb2b.style.display=' none';
tpb2h.style.display='inline ';
tpb3b.style.display='none ';
tpb3h.style.display='inline ';
tpb4b.style.display=' none';
tpb4h.style.display='inline ';
tpb5b.style.display='none ';
tpb5h.style.display='inline ';
tpb6b.style.display='inline ';
tpb6h.style.display=' none';
tpb7b.style.display=' none';
tpb7h.style.display=' inline';
tpb8b.style.display='none ';
tpb8h.style.display=' inline';
tpb9b.style.display=' none';
tpb9h.style.display=' inline';

	i++; // i increase
}	
else if(i==8)
{
tpb1b.style.display=' none';
tpb1h.style.display=' inline';
tpb2b.style.display=' none';
tpb2h.style.display='inline ';
tpb3b.style.display='none ';
tpb3h.style.display='inline ';
tpb4b.style.display=' none';
tpb4h.style.display='inline ';
tpb5b.style.display='none ';
tpb5h.style.display='inline ';
tpb6b.style.display='none ';
tpb6h.style.display=' inline';
tpb7b.style.display=' none';
tpb7h.style.display=' inline';
tpb8b.style.display='inline ';
tpb8h.style.display=' none';
tpb9b.style.display=' none';
tpb9h.style.display=' inline';

	i++; // i increase 
}	
else if(i==9)
{
tpb1b.style.display=' none';
tpb1h.style.display=' inline';
tpb2b.style.display=' none';
tpb2h.style.display='inline ';
tpb3b.style.display='none ';
tpb3h.style.display='inline ';
tpb4b.style.display=' inline';
tpb4h.style.display='none ';
tpb5b.style.display='none ';
tpb5h.style.display='inline ';
tpb6b.style.display='none ';
tpb6h.style.display=' inline';
tpb7b.style.display=' none';
tpb7h.style.display=' inline';
tpb8b.style.display='none ';
tpb8h.style.display=' inline';
tpb9b.style.display=' none';
tpb9h.style.display=' inline';

	i=1; //repeat loop
	
	j--; //time decrease 
	
	document.getElementById('timeinterval'). textContent=`time: ${j}`;
 //display game time
	
  }	
else 
  {
	i=1;
   }
}	
}

}

setInterval(movement,540); //speed
movement(); //beaver movement call

    //Game score calculator script .........>>>

let point=0;  // intiate Score 
let score=`Score:0`; // initial Score 

    //Game Score Increase ....>>

function gamescoreH () 
{ 
	 point++;  //point increase 
	i++;
	if(point<=10)
	{
     score=` Score : ${point}/10 `;
     document.getElementById('score'). textContent=score;
     //display score 
     play=1;  //ON
     
	}
	else 
	{
    point=10;//point convert to 10
    score=`win [touch beaver for try again]`;
    
    document.getElementById('score'). textContent=score;
     //display score
    document.getElementById('Tpwin').style.display='block';
	//display WIN 
    document.getElementById('tpGame').style.display='none';
	//TpGame display OFF
    play=0;  //OFF
    point=0;
    j=10;
	}
	     if(j==0)
     {
     	point=0; //point convert to zero 
		score=`Out [touch beaver for try again]`;
		document.getElementById('score'). textContent=score;
		//display score 
		document.getElementById('Tpout').style.display='block';
	    //display OUT
		document.getElementById('tpGame').style.display='none';
		//TpGame display OFF
		play=0;   //OFF
		point=0;
		j=10;
     	
     
     }
}

    //Game Score Decrease ....>>
 
function gamescoreD()
{ 
    point--; //point decrease 
    
    if(point>= -10)
    { 
	 score=` Score : ${point}/10! `;
	document.getElementById('score'). textContent=score;
	//display score 
	play=1;   //ON
    }
    else
    { 
        point=-10; //point convert to -10
		score=`Out [touch beaver for try again]`;
		document.getElementById('score'). textContent=score;
		//display score 
		document.getElementById('Tpout').style.display='block';
	    //display OUT
		document.getElementById('tpGame').style.display='none';
		//TpGame display OFF
		play=0;   //OFF
		point=0; //point convert to zero 
		j=10; //game time convert to 10(high)
     }
     if(j==0)
     {
     	point=0; //point convert to zero
		score=`Out [touch beaver for try again]`;
		
		document.getElementById('score'). textContent=score;
		//display score 
		document.getElementById('Tpout').style.display='block';
		//display OUT
		document.getElementById('tpGame').style.display='none';
		//TpGame display OFF
		play=0;   //OFF
		point=0; //point convert to zero 
		j=10; //game time convert to 10(high)
    
     }

}

//Display Guidelines.....>>>>

let guidedisplay=1;
function displayguide()
{
	
	if(guidedisplay==1)
	{
   document.getElementById('guide').style.display='block';
      //Guidelines ON
   document.getElementById('TpGameplay').style.display='none';
     //TpGameplay OFF
   guidedisplay=0;
    }
   else
   {
   document.getElementById('guide').style.display='none';
      //Guidelines OFF
   document.getElementById('TpGameplay').style.display='block';
     //TpGameplay OFF
   guidedisplay=1;
   }
}

//Try Again function....>>>>

function Try_Again()
{  //Display previous game 
	gameid.style.display='block';
	//TpOut Display OFF
	document.getElementById('Tpout').style.display='none';
		//Tpwin Display OFF
	document.getElementById('Tpwin').style.display='none';
	
}

    //background colour changer script......>>>>

function brown()
{
document.body.style.background='brown';
	}
function crimson()
{
document.body.style.background='crimson';
	}
function darkgreen()
{
document.body.style.background='darkgreen';
	}
function grey()
{
document.body.style.background='grey';
    }
	
	//Background-color changer widget ON/OFF......>>>>
	
const colorwidget=document.getElementById('colorchanger');
  let displaycolor=1;
  function backcolor( )
{
  if(displaycolor==1)
  {
  	colorwidget.style.display='block';
      //Background-color changer ON
      displaycolor=0;
  }
  else
 {
  	colorwidget.style.display='none';
      //Background-color changer OFF
      displaycolor=1;
  }
  
}

