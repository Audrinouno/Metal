//Time script..............>>>>

function updateTime()
 {
  const timeElement = document.getElementById('time');
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  let session='am';
  if (hours>12)
  { 
  hours=hours-12;
  session='pm';
  }
  
  const disign=document.getElementById('disign'); 
  if(seconds%2==0)
  {
  	disign.style.display="block";
  }
  else
  {
  	disign.style.display="none";
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
  
  


