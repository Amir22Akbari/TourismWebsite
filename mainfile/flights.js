function zoom1()
	{
	window.open("images/heathrow2.jpg")
	}

function zoom2()
	{
	window.open("images/gatwick2.jpg")
    }

    function navbarredirect(thistext)
    {
    var page = thistext.innerHTML;
        if (page == "Home")
            {
                location.replace("navbartemplate.html")
            }
        else if (page == "Stay")
            {
                location.replace("navbartemplate2.html")
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
                location.replace("")
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