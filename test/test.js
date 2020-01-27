//On Uploading .....
//call the aj

var uploadButton=document.getElementById("send");
var fileSelect=document.getElementById("files");
var x;
fileSelect.files;


uploadButton.addEventListener("click", function(){ 

    x= sendAjaxReturnResponse("test.php",false,{ stringone:"1"});
    console.log(x)
 });



function onfinish(message){
    return message;
}

function onfailmesage(message){
    console.log('failed')
}