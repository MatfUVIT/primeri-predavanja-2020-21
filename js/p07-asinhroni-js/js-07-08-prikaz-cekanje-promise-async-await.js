function prikaziNisku(niska) {
    return new Promise((razresi, odbij) => {
        setTimeout(
            () => {
                console.log(niska);
                razresi();
            },
            Math.floor(Math.random() * 50) + 1
        );
    });
}

async function prikaziDvaRedom() {
    prikaziNisku("А");
    await prikaziNisku("Б");
    await prikaziNisku("В");
    prikaziNisku("Г");
    prikaziNisku("Д");
}

prikaziDvaRedom();