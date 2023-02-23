const lista = document.getElementById("lista");
const visszagomb = document.getElementById("visszagomb");
const tovabbgomb = document.getElementById("tovabbgomb");
const oldalKijelzo = document.getElementById("oldalKijelzo");
const oldalmeretKivalaszto = document.getElementById("oldalmeretKivalaszto");

let oldalmeret = 5;
let aktualisOldalszam = 1;

function lapozoKijelzoFrissites() {
    const osszesoldal = Math.ceil(lista.rows.length / oldalmeret);
    oldalKijelzo.innerText = `${aktualisOldalszam} / ${osszesoldal}`;
    visszagomb.disabled = aktualisOldalszam === 1;
    tovabbgomb.disabled = aktualisOldalszam === osszesoldal;
}

function sorokLapozása() {
    for (let i = 0; i < lista.rows.length; i++) {
        if (i < (aktualisOldalszam - 1) * oldalmeret || i >= aktualisOldalszam * oldalmeret) {
            lista.rows[i].style.display = "none";
        } else {
            lista.rows[i].style.display = "";
        }
    }
}

function lapozas() {
    const osszesoldal = Math.ceil(lista.rows.length / oldalmeret);

    if (aktualisOldalszam > osszesoldal) {
        aktualisOldalszam = osszesoldal;
    }

    lapozoKijelzoFrissites();
    sorokLapozása();
}


lapozoKijelzoFrissites();
sorokLapozása();




visszagomb.addEventListener("click", () => {
    aktualisOldalszam--;
    sorokLapozása();
    lapozoKijelzoFrissites();
});

tovabbgomb.addEventListener("click", () => {
    aktualisOldalszam++;
    sorokLapozása();
    lapozoKijelzoFrissites();
});

oldalmeretKivalaszto.addEventListener("change", () => {
    oldalmeret = oldalmeretKivalaszto.value;
    aktualisOldalszam = 1;
    lapozas()
});