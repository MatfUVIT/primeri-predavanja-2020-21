const fs = require('fs');

console.log('\n');

let tokZaCitanje = fs.createReadStream('lorem.txt');
tokZaCitanje.setEncoding('utf8');
let i = 1;
tokZaCitanje.on('data',
    (prispeliPodaci) => {
        console.log("*********************" + i++);
        console.log(prispeliPodaci);
    });