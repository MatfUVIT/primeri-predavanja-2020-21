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
    await prikaziNisku("А");
    await prikaziNisku("Б");
    prikaziNisku("В");
    prikaziNisku("Г");
    prikaziNisku("Д");
}

prikaziDvaRedom();