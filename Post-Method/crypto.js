const crypto = require('crypto');

let password = "Karthik0388";
let finalData = crypto.createHash('sha256', password).digest('hex');

console.log(password);
console.log(finalData);
