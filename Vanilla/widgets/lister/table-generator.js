function adatLekeres() {
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(valasz => valasz.json())
        .then(adatok => {
            return adatok;
        })
        .catch(hiba => console.log(hiba));
}

function tablageneralas(id, felhasznaloID, leiras, teljesitve) {
    adatLekeres().then(adatok => {
        return adatok.filter(feladat => {
            return (
                (id === undefined || feladat.id === id) &&
                (felhasznaloID === undefined || feladat.userId === felhasznaloID) &&
                (leiras === undefined || feladat.title.includes(leiras)) &&
                (teljesitve === undefined || feladat.completed === teljesitve)
            );
        })
    }).then((szurtAdatok) => {
        if (szurtAdatok.length === 0) {
            lista.innerHTML = "<tr><td colspan='4'>Nincs megjeleníthető adat</td></tr>";
        } else {
            lista.innerHTML = szurtAdatok
                .map(
                    (feladat) =>
                        `<tr>
                    <td>${feladat.id}</td>
                    <td>${feladat.userId}</td>
                    <td>${feladat.title}</td>
                    <td>${feladat.completed ? "Igen" : "Nem"}</td>
                    </tr>`
                ).join("");
            lapozas();
        }
    });
}



tablageneralas(undefined, undefined, undefined, undefined);