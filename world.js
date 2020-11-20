/*1st create the code for lookup button*/
//window.addEventListener('load', function()
window.onload=function()
{
//var findCountry=document.getElementById("#lookup");
var findCountry=document.querySelector('#lookup');
var hrequest;
findCountry.addEventListener('click',function(mouseEv) 
{

mouseEv.preventDefault();

 hrequest=new XMLHttpRequest();
var PHPurl="world.php";/*?query="+ srchQuery */

hrequest.onreadystatechange=loadCountry;
hrequest.open("GET",PHPurl);
hrequest.send();


});//end of listener for click

/*HANDLING THE RESPONSE TO the AJAX REQUEST */
function loadCountry()
{

    if (hrequest.readyState===XMLHttpRequest.DONE);
    {
        if (hrequest.status===200)
        {
            var response=hrequest.responseText;
            var country=document.querySelector("#result");
            country.innerHTML=response;

        }

        else
        {
            alert("We're sorry. There's an issue with the request.")
        }
    }

}
    
}//end of window loader