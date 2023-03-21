
const oldalak = {
    "/": () => {
        document.getElementById("tartalom").innerHTML = "Főoldal tartalom minta szöveg!";
    },
    "/aoldal": () => {
        document.getElementById("tartalom").innerHTML = "A oldal tartalom minta szöveg!";
    },
    "/boldal": () => {
        document.getElementById("tartalom").innerHTML = "B oldal tartalom minta szöveg!";
    }
};

const navigator = () => {
    const url = location.hash.slice(1) || '/';
    oldalak[url]();
};

window.addEventListener('hashchange', navigator);

navigator();