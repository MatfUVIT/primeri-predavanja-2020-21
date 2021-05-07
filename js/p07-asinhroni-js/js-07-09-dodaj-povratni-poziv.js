function dodajNisku(prethodna, tekuca, povratniPoziv) {
    setTimeout(
        () => {
            povratniPoziv((prethodna + ' ' + tekuca));
        },
        Math.floor(Math.random() * 50) + 1
    );
}

function dodajSveRedom() {
    dodajNisku('', 'A', result => {
        dodajNisku(result, 'Б', result2 => {
            dodajNisku(result2, 'В', result3 => {
                console.log(result3);
            });
        });
    });
}

dodajSveRedom();