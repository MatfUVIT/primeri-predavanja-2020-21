const port = 33333;
const host = '192.168.100.11'; //'127.0.0.1'

const messsages = process.argv.slice(2);

const buffer = require('buffer');
const dgram = require('dgram');


let client = dgram.createSocket('udp4');

client.on('message', function(msg, info) {
    console.log('Podaci primljeni sa servera: ' + msg.toString());
    console.log('Primljeno %d bajtova sa %s:%d\n', msg.length, info.address, info.port);
});

for (const mess of messsages) {

    const message = new Buffer.from(mess);

    client.send(message, 0, message.length, port, host,
        function(err, bytes) {
            if (err)
                throw err;
            console.log('UDP poruka poslata na ' + host + ':' + port);
        });
}

setTimeout(
    function() {
        client.close();
    }, 10000);