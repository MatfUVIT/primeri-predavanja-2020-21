const strukturaPrikaz = function(obj) {
    for (let deo in obj)
        console.log(`${deo} - ${obj[deo]}`);
};

let tacka1 = {
    xKoordinata: 1.3,
    yKoordinata: 2.8,
    pojaviSe: () => console.log('ja sam tacka 1')
};

strukturaPrikaz(tacka1);

tacka1.zKoordinata = 45;

console.log("---");
strukturaPrikaz(tacka1);