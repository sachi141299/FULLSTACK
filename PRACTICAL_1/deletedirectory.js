const fs = require("fs");

fs.access("./sample1", function(err) {
  if (err) {
    console.log("Given directory not exist");
      
  }else{
     
      fs.rmdir("./sample1",function(err){
        if(err){
            console.log(err);
          }else{
              console.log("directory deleted.");
          }
      });
  }
});

