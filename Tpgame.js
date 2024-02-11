//Game Widget ON/OFF function 

const gameid=document.getElementById('tpGame');
  let displaygame=1;
  function Tpgame( )
{
  	if(displaygame==1)
  {
  	gameid.style.display='block';
       document.getElementById('Tpwin').style.display='none';
       document.getElementById('Tpout').style.display='none';       
      displaygame=0;    
  }
  else
 {
  	gameid.style.display='none';
      //Game OFF
       document.getElementById('Tpwin').style.display='none';
       document.getElementById('Tpout').style.display='none';
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

if(j>0) 
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

i++; 

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

	i++; 
	
	j--; 
	
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

	i++;	
	
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

	i++; 
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

	i++;
	j--; 
	
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

	i++;
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

	i++; 
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
	j--; 
	
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

let speed =500;   //speed

setInterval(movement, speed); 
movement(); //beaver movement call

    //Game score calculator script .........>>>

let point=0;  // intiate Score 
let score=`Score:0`; // initial Score 

    //Game Score Increase ....>>

function gamescoreH () 
{ 
	 point++;  //point increase 
	    document.getElementById('result').style.display='none';
	i++;
	if(j==0)
	{
		score=` Score: ${point}/10`;
		result=`Out [touch beaver for try again]`;
		document.getElementById('result').textContent=result;
		document.getElementById('result').style.display='block';
		document.getElementById('score').textContent=score;
		document.getElementById('Tpout').style.display='block';
		document.getElementById('tpGame').style.display='none';
		play=0;   	
    	point=0;
	    j=10;
	}
	else if(point<=10)
	{
     score=` Score : ${point}/10 `;
     document.getElementById('score'). textContent=score;
     play=1;       
	}
	else 
	{
    point=10;
    result=`win [touch beaver for try again]`;
    score=` Score:${point}/10`;
    document.getElementById('result').style.display='block';
    document.getElementById('result'). textContent=result;
    document.getElementById('score'). textContent=score;
    document.getElementById('Tpwin').style.display='block'; 
    document.getElementById('tpGame').style.display='none';
    play=0;  
    point=0;
    j=10;
	}
	     
}

    //Game Score Decrease ....>>
 
function gamescoreD()
{ 
    point--;
    document.getElementById('result').style.display='none';
    if(j==0)
    {
    	score=`  Score : ${point}/10! `;
		result=`Out [touch beaver for try again]`;
		document.getElementById('result'). textContent=result;
		document.getElementById('result').style.display='block';
		document.getElementById('score'). textContent=score;
		document.getElementById('Tpout').style.display='block';
		document.getElementById('tpGame').style.display='none';
		play=0;  
        point=0; 
        j=10;
    }
    else if(point>= -10)
    { 
	 score=` Score : ${point}/10! `;
	document.getElementById('score'). textContent=score;
	play=1;  
    }
    else
    { 
        point=-10; 
		score=`Score : ${point}/10! `;
		result=`Out [touch beaver for try again]`;
		document.getElementById('result'). textContent=result;
		document.getElementById('result').style.display='block';
		document.getElementById('score'). textContent=score;
		document.getElementById('Tpout').style.display='block';
		document.getElementById('tpGame').style.display='none';
		play=0;  
		point=0; 
		j=10; 
     }

}

//Display Guidelines.....>>>>

let guidedisplay=1;
function displayguide()
{
	
	if(guidedisplay==1)
	{
   document.getElementById('guide').style.display='block';
   document.getElementById('TpGameplay').style.display='none';
   guidedisplay=0;
    }
   else
   {
   document.getElementById('guide').style.display='none';
   document.getElementById('TpGameplay').style.display='block';
   guidedisplay=1;
   }
}

//Try Again function....>>>>

function Try_Again()
{ 
	gameid.style.display='block';  //Display previous game 
	document.getElementById('Tpout').style.display='none';
	document.getElementById('Tpwin').style.display='none';
	
}