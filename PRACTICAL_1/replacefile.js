const fs = require("fs");

fs.readFile("demo.txt", "utf8", function(err,data) {
  if (err) {
    console.log(err);
  }
  var result = data.replace("Hello World","This is text file");

  fs.writeFile("demo.txt", result,function (err) {
     if (err) {
       console.log(err);
     }else{
       console.log("Replaced data");
     }
  });
});

