define(['./vrednost'], function(vrednost) {
    function izracunajKvadrat() {
        // pozvan je metod iz vrednost.js
        let x = vrednost.getPodatak();
        // ovde ide deo koda vezan za proracun
        return x * x;
    }

    // publikovanje "javne" funkcije
    return {
        proracunajAMD: izracunajKvadrat
    };
});