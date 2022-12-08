function alexchangetext(thistext) 
{ 
	var inputtext = thistext.innerHTML;
	document.getElementById("alexdisplay1").style.zIndex = "50";
	document.getElementById("alex1snvb").style.color = "white";
	document.getElementById("alexdisplay2").style.zIndex = "49";
	document.getElementById("alex2snvb").style.color = "white";
	document.getElementById("alexdisplay3").style.zIndex = "48";
	document.getElementById("alex3snvb").style.color = "white";
	document.getElementById("alexdisplay4").style.zIndex = "47";
	document.getElementById("alex4snvb").style.color = "white";
	document.getElementById("alexdisplay5").style.zIndex = "46";
	document.getElementById("alex5snvb").style.color = "white";
	if (inputtext == "Biking Paths")
	{
		document.getElementById("alexdisplay1").style.zIndex = "90";
		document.getElementById("alex1snvb").style.color = "orange";
	}
	else if (inputtext == "London Underground")
	{
		document.getElementById("alexdisplay2").style.zIndex = "90";
		document.getElementById("alex2snvb").style.color = "orange";
	}
	else if (inputtext == "Navigation Apps")
	{
		document.getElementById("alexdisplay3").style.zIndex = "90";
		document.getElementById("alex3snvb").style.color = "orange";
	}
	else if (inputtext == "Boating")
	{
		document.getElementById("alexdisplay4").style.zIndex = "90";
		document.getElementById("alex4snvb").style.color = "orange";
	}
	else if (inputtext == "Bus Routes")
	{
		document.getElementById("alexdisplay5").style.zIndex = "90";
		document.getElementById("alex5snvb").style.color = "orange";
	}

 } 
 
function navbarredirect(thistext)
{
var page = thistext.innerHTML;
	if (page == "Home")
		{
			location.replace("projectfile.html")
		}
	else if (page == "Stay")
		{
			location.replace("")
		}
	else if (page == "Places to Visit")
		{
			location.replace("")
		}
	else if (page == "Accomodation")
		{
			location.replace("")
		}
	else if (page == "Food")
		{
			location.replace("")
		}
	else if (page == "Flights")
		{
			location.replace("")
		}
	else if (page == "Transportation")
		{
			location.replace("AlexProject.html")
		}
	else if (page == "About")
		{
			location.replace("")
		}
	else if (page == "Contact")
		{
			location.replace("")
		}
}







