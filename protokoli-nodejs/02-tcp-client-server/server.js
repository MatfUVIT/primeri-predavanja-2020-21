const net = require('net');

let server = net.createServer();

server.on('close',
    function() {
        console.log('Server je zatvoren!');
    });

server.on('connection',
    function(socket) {
        console.log('Veličina bafera: ' + socket.bufferSize);

        console.log('--------- detalji o serveru -----------------');
        let address = server.address();
        let port = address.port;
        let family = address.family;
        let ipaddr = address.address;
        console.log('Server osluškuje na portu: ' + port);
        console.log('IP adresa servera: ' + ipaddr);
        console.log('Vrsta IP protokola (IP4/IP6): ' + family);

        let lport = socket.localPort;
        let laddr = socket.localAddress;
        console.log('Server osluškuje na lokalnom portu: ' + lport);
        console.log('Lokalna IP adresa servera:' + laddr);

        console.log('------------ informacije o udaljenom klijentu --------------');
        let rport = socket.remotePort;
        let raddr = socket.remoteAddress;
        let rfamily = socket.remoteFamily;
        console.log('Soket udaljenog klijenta osluskuje na portu: ' + rport);
        console.log('IP adresa soketa udaljenog klijenta:' + raddr);
        console.log('Vrsta IP protokola za soket udaljenog klijenta (IP4/IP6): ' + rfamily);

        console.log('--------------------------------------------')
        server.getConnections(
            function(error, count) {
                console.log('Broj konkurentnih veza uspostavljenih sa serverom: ' + count);
            });

        socket.setEncoding('utf8');

        socket.setTimeout(800000,
            function() {
                console.log('Socket timed out');
            });

        socket.on('data',
            function(data) {
                let bread = socket.bytesRead;
                let bwrite = socket.bytesWritten;
                console.log('Pročitano bajtova: ' + bread);
                console.log('Upisano bajtova: ' + bwrite);
                console.log('Podaci poslati prema serveru: ' + data);

                //echo data
                let is_kernel_buffer_full = socket.write('[UVIT TCP]' + data + "[UVIT TCP]");
                if (is_kernel_buffer_full) {
                    console.log('Podaci su uspešno prodleđeni iz bafera jezgra, tj. uspešno upisani!');
                } else {
                    socket.pause();
                }
            });

        socket.on('drain',
            function() {
                console.log('Bafer za upis je sada prazan.');
                socket.resume();
            });

        socket.on('error',
            function(error) {
                console.log('Greška: ' + error);
            });

        socket.on('timeout',
            function() {
                console.log('Isteklo je vreme za soket!');
                socket.end('Vreme je isteklo!');
                socket.destroy();
            });

        socket.on('end',
            function(data) {
                console.log('Soket je zaustavljen sa drugog kraja!');
                console.log('Podaci sa kraja: ' + data);
            });

        socket.on('close',
            function(error) {
                let bread = socket.bytesRead;
                let bwrite = socket.bytesWritten;
                console.log('Pročitano bajtova: ' + bread);
                console.log('Upisano bajtova: ' + bwrite);
                console.log('Soket je zatvoren!');
                if (error) {
                    console.log('Soket je zatvoren zbog grške u prenosu');
                }
            });

        setTimeout(
            function() {
                let isdestroyed = socket.destroyed;
                console.log('Soket je uklonjen: ' + isdestroyed);
                socket.destroy();
            }, 1200000);

    });

server.on('error',
    function(error) {
        console.log('Greška: ' + error);
    });

server.on('listening', function() {
    console.log('Server osluškuje!');
});

server.maxConnections = 10;

//static port allocation
server.listen(55351);


let islistening = server.listening;
if (islistening) {
    console.log('Server osluškuje');
} else {
    console.log('Server ne osluškuje');
}

setTimeout(
    function() {
        server.close();
    }, 5000000);