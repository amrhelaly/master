function showErrorUser ()
{
	 
	
//	document.getElementById("d").style.display="none";
var x;
    x=document.getElementById("userId");
   // x.style.display="none";
   $(x).notify("You should enter a userName",  { className:"error",  position:"top center",autoHideDelay: 1500,showDuration: 200 });
}

function showErrorPass ()
{
	 
	
//	document.getElementById("d").style.display="none";
var x;
    x=document.getElementById("passId");
   // x.style.display="none";
   $(x).notify("You should enter a password",  { className:"error",  position:"top center",autoHideDelay: 1500,showDuration: 200 });
}