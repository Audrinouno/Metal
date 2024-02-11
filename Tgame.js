// Oggy and the chrockrochs game ---->>>>

let Tgameid=document.getElementById('Tgame');
let Tgameplayid=document.getElementById('Tgameplay');
let oggyjack=document.getElementById('oggy-jack');
let oggyjackS=document.getElementById('oggy-jackS');
let jDM=document.getElementById('j-D-M');
let jDMS=document.getElementById('j-D-MS');
let oppX=document.getElementById('opponentX');
let oppO=document.getElementById('opponentO');
let useX=document.getElementById('userX');
let useO=document.getElementById('userO');

let displayTgame=1;
function Tgame()
{
oggyjack.style.display='none';
oggyjackS.style.display='block';
jDM.style.display='none';
jDMS.style.display='block';

  if(displayTgame==1)
  {
  	Tgameid.style.display='block';
      Tgameplayid.style.display='none' ;
      displayTgame=0;   
      playMusic();
  }
  else
 {
  	Tgameid.style.display='none';
  Tgameplayid.style.display='none' ;
      displayTgame=1;
      pauseMusic();
      pauseClaugh();
      resetGame();
  }
	
}

function TeamO()
{
oggyjackS.style.display='none';
oggyjack.style.display='block';
jDMS.style.display='none';
jDM.style.display='none';
playclick();
}

function TeamX()
{
jDMS.style.display='none';
jDM.style.display='block';
oggyjackS.style.display='none';
oggyjack.style.display='none';
playclick();
playClaugh();
}

let currentPlayer="";
let oppositePlayer="";
function Oplay()
{
Tgameid.style.display='none';
Tgameplayid.style.display='block' ;
oppO.style.display='none';
oppX.style.display='block';
useX.style.display='none';
useO.style.display='block';
currentPlayer="O";
oppositePlayer="X";
playclick();
}

function Xplay()
{
	Tgameid.style.display='none';
	Tgameplayid.style.display='block' ;
	oppO.style.display='block';
   oppX.style.display='none';
    useX.style.display='block';
    useO.style.display='none';
    currentPlayer="X";
    oppositePlayer="O";
   playclick();
   pauseClaugh();
}


var board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

function makeMove(row, col) {
	
  if (board[row][col] == "") {
    board[row][col] = currentPlayer;
    let usermark=row * 3 + col;
    document.getElementsByClassName("cell")[usermark].innerText = currentPlayer;
    setTimeout (checkWin,500);
    setTimeout( compute,500);
 pauseClaugh();
 pauseOlaugh();
  }
}

function compute(){
	
	   			if(board[1][1]=="")
			{
				board[1][1]=oppositePlayer;
				document.getElementsByClassName("cell")[4].innerText = oppositePlayer;	
               setTimeout (checkWin,500);
							
			}
			else if (board[0][0]==oppositePlayer && board[0][1]=="" && board [0][2]==oppositePlayer)
			{
				board[0][1]=oppositePlayer;
				document.getElementsByClassName("cell")[1].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }	
          else if (board[0][0]=="" && board[0][1]==oppositePlayer && board [0][2]==oppositePlayer)
			{
				board[0][0]=oppositePlayer;
				document.getElementsByClassName("cell")[0].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }	
          else if (board[0][0]==oppositePlayer && board[0][1]==oppositePlayer && board [0][2]=="")
			{
				board[0][2]=oppositePlayer;
				document.getElementsByClassName("cell")[2].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }	
          else if (board[1][0]== "" && board[1][1]==oppositePlayer && board [1][2]==oppositePlayer)
			{
				board[1][0]=oppositePlayer;
				document.getElementsByClassName("cell")[3].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }	
   
         else if (board[1][0]==oppositePlayer && board[1][1]==oppositePlayer && board [1][2]=="")
			{
				board[1][2]=oppositePlayer;
				document.getElementsByClassName("cell")[5].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }	
          else if (board[2][0]==oppositePlayer && board[2][1]=="" && board [2][2]==oppositePlayer)
			{
				board[2][1]=oppositePlayer;
				document.getElementsByClassName("cell")[7].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }
          else if (board[2][0]=="" && board[2][1]==oppositePlayer && board [2][2]==oppositePlayer)
			{
				board[2][0]=oppositePlayer;
				document.getElementsByClassName("cell")[6].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }
          else if (board[2][0]==oppositePlayer && board[2][1]==oppositePlayer && board [2][2]=="")
			{
				board[2][2]=oppositePlayer;
				document.getElementsByClassName("cell")[8].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }
          //jj
          else if (board[0][0]==oppositePlayer && board[1][0]=="" && board [2][0]==oppositePlayer)
			{
				board[1][0]=oppositePlayer;
				document.getElementsByClassName("cell")[3].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }	
          else if (board[0][0]=="" && board[1][0]==oppositePlayer && board [2][0]==oppositePlayer)
			{
				board[0][0]=oppositePlayer;
				document.getElementsByClassName("cell")[0].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }	
          else if (board[0][0]==oppositePlayer && board[1][0]==oppositePlayer && board [2][0]=="")
			{
				board[2][0]=oppositePlayer;
				document.getElementsByClassName("cell")[6].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }	
		else if (board[0][1]== "" && board[1][1]==oppositePlayer && board [2][1]==oppositePlayer)
			{
				board[0][1]=oppositePlayer;
				document.getElementsByClassName("cell")[1].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }	
          else if (board[0][1]==oppositePlayer && board[1][1]==oppositePlayer && board [2][1]=="")
			{
				board[2][1]=oppositePlayer;
				document.getElementsByClassName("cell")[7].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }	
          else if (board[0][2]==oppositePlayer && board[1][2]=="" && board [2][2]==oppositePlayer)
			{
				board[1][2]=oppositePlayer;
				document.getElementsByClassName("cell")[5].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }      
          else if (board[0][2]==oppositePlayer && board[1][2]==oppositePlayer && board [2][2]=="")
			{
				board[2][2]=oppositePlayer;
				document.getElementsByClassName("cell")[8].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }      
          else if (board[0][2]=="" && board[1][2]==oppositePlayer && board [2][2]==oppositePlayer)
			{
				board[0][2]=oppositePlayer;
				document.getElementsByClassName("cell")[2].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }      
			 
			else if (board[0][0] == "" && board[1][1]==oppositePlayer && board [2][2]==oppositePlayer)
			{
				board[0][0]=oppositePlayer;
				document.getElementsByClassName("cell")[0].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }
          
			else if (board[0][0]==oppositePlayer && board[1][1]==oppositePlayer && board [2][2]==""  )
			{
				board[2][2]=oppositePlayer;
				document.getElementsByClassName("cell")[8].innerText = oppositePlayer;		
              setTimeout (checkWin,500);
					
			}
			
			
			else if (board[0][2]=="" && board[1][1]==oppositePlayer && board [2][0]==oppositePlayer  )
			{
				board[0][2]=oppositePlayer;
				document.getElementsByClassName("cell")[2].innerText = oppositePlayer;
               setTimeout (checkWin,500);
					
			}
			else if (board[0][2]==oppositePlayer && board[1][1]==oppositePlayer && board [2][0]==""  )
			{
				board[2][0]=oppositePlayer;
				document.getElementsByClassName("cell")[6].innerText = oppositePlayer;	
		   	setTimeout (checkWin,500);
				
			}
			else if (board[0][0]==currentPlayer && board[0][1]=="" && board [0][2]==currentPlayer)
			{
				board[0][1]=oppositePlayer;
				document.getElementsByClassName("cell")[1].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }	
          else if (board[0][0]=="" && board[0][1]==currentPlayer && board [0][2]==currentPlayer)
			{
				board[0][0]=oppositePlayer;
				document.getElementsByClassName("cell")[0].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }	
          else if (board[0][0]==currentPlayer && board[0][1]==currentPlayer && board [0][2]=="")
			{
				board[0][2]=oppositePlayer;
				document.getElementsByClassName("cell")[2].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }	
          
          else if (board[1][0]== "" && board[1][1]==currentPlayer && board [1][2]==currentPlayer)
			{
				board[1][0]=oppositePlayer;
				document.getElementsByClassName("cell")[3].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }	
   
         else if (board[1][0]==currentPlayer && board[1][1]==currentPlayer && board [1][2]=="")
			{
				board[1][2]=oppositePlayer;
				document.getElementsByClassName("cell")[5].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }	
          else if (board[2][0]==currentPlayer && board[2][1]=="" && board [2][2]==currentPlayer)
			{
				board[2][1]=oppositePlayer;
				document.getElementsByClassName("cell")[7].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }
          else if (board[0][0]==currentPlayer && board[1][0]=="" && board [2][0]==currentPlayer)
			{
				board[1][0]=oppositePlayer;
				document.getElementsByClassName("cell")[3].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }	
          else if (board[0][0]=="" && board[1][0]==currentPlayer && board [2][0]==currentPlayer)
			{
				board[0][0]=oppositePlayer;
				document.getElementsByClassName("cell")[0].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }	
          else if (board[0][0]==currentPlayer && board[1][0]==currentPlayer && board [2][0]=="")
			{
				board[2][0]=oppositePlayer;
				document.getElementsByClassName("cell")[6].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }	
          
		else if (board[0][1]== "" && board[1][1]==currentPlayer && board [2][1]==currentPlayer)
			{
				board[0][1]=oppositePlayer;
				document.getElementsByClassName("cell")[1].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }	
          else if (board[0][1]==currentPlayer && board[1][1]==currentPlayer && board [2][1]=="")
			{
				board[2][1]=oppositePlayer;
				document.getElementsByClassName("cell")[7].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }	
          else if (board[0][2]==currentPlayer && board[1][2]=="" && board [2][2]==currentPlayer)
			{
				board[1][2]=oppositePlayer;
				document.getElementsByClassName("cell")[5].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }      
            else if (board[0][2]==currentPlayer && board[1][2]==currentPlayer && board [2][2]=="")
			{
				board[2][2]=oppositePlayer;
				document.getElementsByClassName("cell")[8].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }      
          else if (board[0][2]=="" && board[1][2]==currentPlayer && board [2][2]==currentPlayer)
			{
				board[0][2]=oppositePlayer;
				document.getElementsByClassName("cell")[2].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }      
			 
			else if (board[0][0] == "" && board[1][1]==currentPlayer && board [2][2]==currentPlayer)
			{
				board[0][0]=oppositePlayer;
				document.getElementsByClassName("cell")[0].innerText = oppositePlayer;				
			   setTimeout (checkWin,500);
				
          }
          
			else if (board[0][0]==currentPlayer && board[1][1]==currentPlayer && board [2][2]==""  )
			{
				board[2][2]=oppositePlayer;
				document.getElementsByClassName("cell")[8].innerText = oppositePlayer;		
              setTimeout (checkWin,500);
					
			}
			
			
			else if (board[0][2]=="" && board[1][1]==currentPlayer && board [2][0]==currentPlayer  )
			{
				board[0][2]=oppositePlayer;
				document.getElementsByClassName("cell")[2].innerText = oppositePlayer;
               setTimeout (checkWin,500);
					
			}
			else if (board[0][2]==currentPlayer && board[1][1]==currentPlayer && board [2][0]==""  )
			{
				board[2][0]=oppositePlayer;
				document.getElementsByClassName("cell")[6].innerText = oppositePlayer;	
		   	setTimeout (checkWin,500);
				
			}
      else {
			for (var k=2;k>-1;k--)
      	{
     		for(var l=0;l<3;l++)
	       	{	
	            if(board[k][l]=="")
		    	{
				board[k][l]=oppositePlayer;
				document.getElementsByClassName("cell")[k*3+l].innerText = oppositePlayer;	
 		   	setTimeout (checkWin,500);
				return;
				}
		       
                }
	
			}
         }
	 
	}
	
	
function checkWin() {
  // Check rows
  for (var i = 0; i < 3; i++) {
    if (board[i][0] != "" && board[i][0] == board[i][1] && board[i][1] == board[i][2]) {
      alert(board[i][0] + " wins!");
      
         if(board[i][0]=='X')
      {playClaugh();}
         else if(board[i][0]=='O')
      {playOlaugh();}
      resetGame();
      return;
    }
  }

  // Check columns
  for (var j = 0; j < 3; j++) {
    if (board[0][j] != "" && board[0][j] == board[1][j] && board[1][j] == board[2][j]) {
      alert(board[0][j] + " wins!");
      if(board[0][j]=='X')
      {playClaugh();}
       else if(board[0][j]=='O')
      {playOlaugh();}    
      resetGame();
      return;
    }
  }

  // Check diagonals
  if (board[0][0] != "" && board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
    alert(board[0][0] + " wins!");
       if(board[0][0]=='X')
      {playClaugh();}
      if(board[0][0]=='O')
      {playOlaugh();}
    resetGame();
    return;
  }

  if (board[0][2] != "" && board[0][2] == board[1][1] && board[1][1] == board[2][0]) {
    alert(board[0][2] + " wins!");
    if(board[0][2]=='X')
      {playClaugh();}
     else if(board[0][2]=='O')
      {playOlaugh();}
    resetGame();
    return;
  }

  // Check for a tie
  var isTie = true;
  for (var row = 0; row < 3; row++) {
    for (var col = 0; col < 3; col++) {
      if (board[row][col] == "") {
        isTie = false;
        break;
      }
    }
  }

  if (isTie) {
    alert("It's a tie!");
    resetGame();
  }
}

function resetGame() {
  
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
k=2;
l=0;
  var cells = document.getElementsByClassName("cell");
  for (var i = 0; i <9; i++) {
    cells[i].innerText = "";
  }
}