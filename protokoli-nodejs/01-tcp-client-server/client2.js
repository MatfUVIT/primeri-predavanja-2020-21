const net = require('net');

let listeningPort = 55351;

// server creation using net.connect --->
let clients = net.connect({ port: listeningPort },
    () => {
        // 'connect' listener
        console.log('Povezan na server!');
        clients.write('Ponovo pozdrav, sad od drugog klijenta');
    });
clients.on('data',
    (data) => {
        console.log(data.toString());
        clients.end();
    });
clients.on('end',
    () => {
        console.log('Prekinuta veza sa serverom');
    });
	
setTimeout(
    function() {
    }, 10000);