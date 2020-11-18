/*1st create the code for lookup button*/
window.addEventListener('load', function()
//window.onload=function()
{
//var findCountry=document.getElementById("#lookup");
let findCountry=document.querySelector('#lookup');
findCountry.addEventListener('click',function(mouseEv) 
{
mouseEv.preventDefault();
//url="http://localhost/info2180-lab5/world.php"
        fetch("http://localhost/info2180-lab5/world.php")
            .then(response =>
            {
                if (response.ok)
                 {
                    return response.text()
                 } 
                else
                 {
                    return Promise.reject('something went wrong!')
                 }
            })//end fetch
            .then(data => {
                let worldRes = document.querySelector('#result');
                worldRes.innerHTML = data;
            })//end put data @ this div
            .catch(error => console.log('There was an error: ' + error));
        
    });//end of listener for click
});//end of window loader