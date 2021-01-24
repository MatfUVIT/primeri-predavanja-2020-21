const PORT = 33333;
const HOST = '127.0.0.1';

const buffer = require('buffer');
const dgram = require('dgram');
let message = new Buffer.from('Pozdrav');

let client = dgram.createSocket('udp4');

client.on('message', function(msg, info) {
    console.log('Podaci primljeni sa servera: ' + msg.toString());
    console.log('Primljeno %d bajtova sa %s:%d\n', msg.length, info.address, info.port);
});


client.send(message, 0, message.length, PORT, HOST,
    function(err, bytes) {
        if (err)
            throw err;
        console.log('UDP poruka poslata na ' + HOST + ':' + PORT);
    });

setTimeout(
    function() {
        client.close();
    }, 10000);