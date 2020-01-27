// Table of Content 
//      8::     sendAjax(string,boolean,data,function,function)
//     55::     sendAjaxReturnResponse(url,async,data)
//     68::     sendAjaxReturnFunctionReturn(url,async,data,success,fail)
//     71::     blobFileString(obj)



function sendAjax(url,async,data,success,fail){
    // Create a new FormData object.
    var formData = new FormData();
    // Set up the request.
    var xhr = new XMLHttpRequest();

        Object.keys(data).map(
        
            function(k) {
     
                if(typeof data[k] =='string'){
                    formData.append(k, data[k]);  
                }else{
                   console.log(typeof data)
                   if(typeof data[k]==='undefined'){
                        console.error("No photos to upload")
                   }else{
                    for (var i = 0; i < data[k].length; i++) {
                        var files=data[k];
                        var file = files[i];
                        var x=blobFileString(file);
                        formData.append(k+'[]', file, file.name);
                    }
                }
                }


                        
                        
    
            }
        )
    // Set up a handler for when the request finishes.
    xhr.open('POST', url, async);
    xhr.onreadystatechange = function () {
        if (xhr.status === 200) {
        return success(xhr.responseText);
        } else {
        return fail(xhr.status);
        }
    };
    
    // Send the Data.
    try{
        xhr.send(formData);
    }catch(err) { 
       console.log(err.message)
       return false
    }
    return xhr;
}
function sendAjaxReturnResponse(url,async,data){ 
    function  success(x){
    }
    val= sendAjax(url,async,data,success,success);
    return val;
}
function sendAjaxReturnFunctionReturn(url,async,data,success,fail){
    var val= sendAjax(url,async,data,success,fail);
    return val.onreadystatechange()
}
function blobFileString(obj) {
    if(typeof obj.name == 'string'){
        return 2
     }else if(typeof obj.name==null){
        return 1
    }else{
        return 3
    }
}
