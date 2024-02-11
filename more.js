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
      displaycolor=0;
  }
  else
 {
  	colorwidget.style.display='none';
      displaycolor=1;
  }
  
}

