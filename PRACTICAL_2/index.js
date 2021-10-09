const os = require("os");
console.log("Operating system CPU architecture "+ os.arch());
console.log("Free memory of the system "+ os.freemem());
console.log("Total memory of the system "+ os.totalmem());
console.log("Operating system platform "+ os.platform());
console.log("Information about the current user "+ os.userInfo());