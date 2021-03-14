const net = require('net');

const server = 'liss2.math.rs'; //'192.168.100.11'; //'127.0.0.1';//'localhost';
const listeningPort = 55351;

// creating a custom socket client and connecting it....
let client = new net.Socket();
client.connect({
    port: listeningPort,
    host: server
});

client.on('connect',
    function() {
        console.log('Klijent: uspostavljena je konekcija sa serverom');

        console.log('--------- detalji o klijentu -----------------');
        let address = client.address();
        let port = address.port;
        let family = address.family;
        let ipaddr = address.address;
        console.log('Klijent osluškuje na portu: ' + port);
        console.log('IP adresa klijenta:' + ipaddr);
        console.log('Vrsta IP protokola za klijenta (IP4/IP6) : ' + family);
        client.write('pozdrav\r\nod klijenta\r\n');
    });

client.setEncoding('utf8');

client.on('data',
    function(data) {
        console.log('Podaci pristigli sa servera: ' + data);
    });

setTimeout(
    function() {
        client.end('Prekidam komunikaciju sa serverom.');
    }, 15000);

//NOTE:--> all the events of the socket are applicable here..in client...