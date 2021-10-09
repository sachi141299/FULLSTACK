const fs = require("fs");

fs.access("./sample1", function(err) {
  if (err) {
      fs.mkdir("./sample1",function(err){
          if(err){
              console.log(err);
            }else{
                console.log("New directory successfully created.");
            }
        });
  }else{
      console.log("Given directory exist");
  }
});

