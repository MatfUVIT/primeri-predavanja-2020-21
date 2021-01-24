const PORT = 33333;
const HOST = '127.0.0.1';

const dgram = require('dgram');
let server = dgram.createSocket('udp4');

server.on('listening',
    function() {
        let address = server.address();
        console.log('UDP server osluskuje na ' + address.address + ':' + address.port);
    });

server.on('message',
    function(message, remote) {
        console.log(remote.address + ':' + remote.port + ' - ' + message);

        server.send('[UVIT UDP]' + message + '[UVIT UDP]', remote.port, remote.address, function(error) {
            if (error) {
                client.close();
            } else {
                console.log('Poslati su podaci!');
            }

        });
    });

server.on('close', function() {
    console.log('Soket je zatvoren!');
});

server.bind(PORT, HOST);

setTimeout(function() {
    server.close();
}, 20000);