const fs = require("fs");

fs.rename("demo.txt", "sample.txt", function(err) {
    if (err) {
        console.log(err);
    }else{
        console.log("File renamed.");
    }
});