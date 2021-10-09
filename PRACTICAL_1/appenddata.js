const fs = require("fs");

fs.appendFile("demo.txt", "\nwelcome", function(err) {
    if (err) {
        console.log(err);
    }else{
    console.log("Data is appended to file successfully.");
    }
});