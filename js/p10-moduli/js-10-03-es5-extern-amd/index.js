define(['./vrednost', './proracun'], function(vrednost, proracun) {
    function pokreni() {
        let argument = 15;
        vrednost.setPodatak(argument);
        console.log(proracun.proracunajAMD());
    };
    // publikovanje "javne" funkcije
    return {
        pokreniAMD: pokreni,
    };
});