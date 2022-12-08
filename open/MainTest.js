function alexchangetext(thistext) 
{ 
	var inputtext = thistext.innerHTML;
	var alexbackgroundimage = document.getElementById("aleximagebackground");
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
		alexbackgroundimage.src="bikebackground.jpg";
	}
	else if (inputtext == "London Underground")
	{
		document.getElementById("alexdisplay2").style.zIndex = "90";
		document.getElementById("alex2snvb").style.color = "orange";
		alexbackgroundimage.src="trainbackground.jpg";
	}
	else if (inputtext == "Navigation Apps")
	{
		document.getElementById("alexdisplay3").style.zIndex = "90";
		document.getElementById("alex3snvb").style.color = "orange";
		alexbackgroundimage.src="taxibackground.jpg";
	}
	else if (inputtext == "Boating")
	{
		document.getElementById("alexdisplay4").style.zIndex = "90";
		document.getElementById("alex4snvb").style.color = "orange";
		alexbackgroundimage.src="boatbackground.jpg";
	}
	else if (inputtext == "Bus Routes")
	{
		document.getElementById("alexdisplay5").style.zIndex = "90";
		document.getElementById("alex5snvb").style.color = "orange";
		alexbackgroundimage.src="busbackground.jpg";
	}

 } 
 
function navbarredirect(thistext)
{
var page = thistext.innerHTML;
	if (page == "Home")
		{
			location.href("")
		}
	else if (page == "Stay")
		{
			location.href("stayindex.html")
		}
	else if (page == "Places to Visit")
		{
			location.href("")
		}
	else if (page == "Hotels")
		{
			location.href("")
		}
	else if (page == "Food")
		{
			location.href("foodwebsite.html")
		}
	else if (page == "Flights")
		{
			location.href("")
		}
	else if (page == "Transportation")
		{
			location.href("Transportation.html")
		}
	else if (page == "About")
		{
			location.href("AboutLondon.html")
		}
	else if (page == "Contact")
		{
			location.href("Contact.html")
		}
}

const select = document.querySelectorAll('.currency');
const button = document.getElementById('convertcurrency');
const number_box = document.getElementById('number_box');
const answer_box = document.getElementById('answer_box');

fetch('https://api.frankfurter.app/currencies')
.then((response) => response.json())
.then((data) => {

    show(data);
});

function show(data){
    const asArray = Object.entries(data);

    for (let i=0; i<asArray.length; i++){

        select[0].innerHTML += `<option value="${asArray[i][0]}">${asArray[i][1]}</option>`;//3
        select[1].innerHTML += `<option value="${asArray[i][0]}">${asArray[i][1]}</option>`;//3
    }
}

button.addEventListener('click', () => {
    let currency_one = select[0].value;
    let currency_two = select[1].value;
    let value = number_box.value;

    if(currency_one != currency_two){ 
        convert(currency_one, currency_two, value);
    }else{
        alert('choose the currency');
    }
});

function convert(currency_one, currency_two, value){ 
    const host = 'api.frankfurter.app'; 
    fetch(`https://${host}/latest?amount=${value}&from=${currency_one}&to=${currency_two}`)//5.1
    .then((val) => val.json())
    .then((val) => {
        answer_box.value = Object.values(val.rates)[0];
    })
}

function zoom1()
	{
	window.open("images/londoner.jpg")
	}

function zoom2()
	{
	window.open("images/londoner2.jpg")
	}
function zoom3()
	{
	window.open("images/londoner3.jpg")
	}

function zoom4()
	{
	window.open("images/londoner4.jpg")
	}

function zoom5()
	{
	window.open("images/corinthia.jpg")
	}

function zoom6()
	{
	window.open("images/corinthia2.jpg")
	}

function zoom7()
	{
	window.open("images/corinthia3.jpg")
	}

function zoom8()
	{
	window.open("images/corinthia4.jpg")
	}

function zoom9()
	{
	window.open("images/rubens.jpg")
	}

function zoom10()
	{
	window.open("images/rubens2.webp")
	}

function zoom11()
	{
	window.open("images/rubens3.webp")
	}

function zoom12()
	{
	window.open("images/rubens4.webp")
	}



function jeremyzoom1()
	{
	window.open("images/heathrow2.jpg")
	}

function jeremyzoom2()
	{
	window.open("images/gatwick2.jpg")
    }