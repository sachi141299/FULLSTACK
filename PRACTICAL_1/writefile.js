const fs= require("fs");
fs.writeFile("demo.txt","Hello World",function(err){
    if(err){
        console.log(err);
    }else{
        console.log("File saved successfully");
    }
});