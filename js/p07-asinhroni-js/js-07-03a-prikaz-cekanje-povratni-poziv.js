function prikaziNisku(niska, povratniPoziv) {
    setTimeout(
        () => {
            console.log(niska);
            if (typeof povratniPoziv === 'function')
                povratniPoziv.apply(null);
        },
        Math.floor(Math.random() * 50) + 1
    );
}

function prikaziSve() {
    prikaziNisku("А");
    prikaziNisku("Б");
    prikaziNisku("В", () => prikaziNisku("Г"));
    prikaziNisku("Д");
}

prikaziSve();