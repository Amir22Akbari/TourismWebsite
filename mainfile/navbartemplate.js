// in location.replace(""), put your html file in between the quotation marks
// I did transportation, so I put AlexProject.html 
// the html files called will need to be in the same folder,
// so if you want to test it make sure that they're there

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
			location.replace("AboutLondon.html")
		}
	else if (page == "Contact")
		{
			location.replace("Contact.html")
		}
}
