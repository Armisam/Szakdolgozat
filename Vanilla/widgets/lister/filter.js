const szuresgomb = document.getElementById("szuresgomb");
const ID = document.getElementById("ID");
const FelhasznaloID = document.getElementById("FelhasznaloID");
const Leiras = document.getElementById("Leiras");
const Teljesitve = document.getElementById("Teljesitve");


szuresgomb.addEventListener("click", () => {
    let id = ID.value;
    let felhasznaloID = FelhasznaloID.value;;
    let leiras = Leiras.value;
    let teljesitve = Teljesitve.checked;

    if (ID.value == "") {
        id = undefined;
    }
    else {
        id = parseInt(ID.value);
    }
    if (FelhasznaloID.value == "") {
        felhasznaloID = undefined;
    }
    else {
        felhasznaloID = parseInt(FelhasznaloID.value);
    }
    if (Leiras.value == "") {
        leiras = undefined;
    }
    if (!Teljesitve.checked) {
        teljesitve = undefined;
    }


    if (id !== undefined && (id < 0 || id > 201)) {
        alert("Az ID értékét kizárólag 1 és 200 között lehet megadni!");
        return;
    }
    if (felhasznaloID !== undefined && (felhasznaloID < 1 || felhasznaloID > 10)) {
        alert("A FelhasznaloID értékét kizárólag 1 és 10 között lehet megadni!");
        return;
    }

    tablageneralas(id, felhasznaloID, leiras, teljesitve)
});