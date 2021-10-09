const fs = require("fs");

fs.access("1.txt", function(err) {
    if(err){
        console.log("Given directory not exist");
    }else{
        fs.unlink("1.txt", function(err) {
            if (err) {
                console.log(err);
            }else{
                console.log("successfully deleted the file.");
            }
        });
        
    }
});
