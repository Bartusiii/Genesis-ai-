const genesis = {
    naam: "Genesis",
    energie: 100,
    honger: 0,
    geld: 20,
    werk: "Werkloos",
    vaardigheden: 1
};

function updateUI() {
    document.getElementById("naam").textContent = genesis.naam;
    document.getElementById("energie").textContent = genesis.energie;
    document.getElementById("honger").textContent = genesis.honger;
    document.getElementById("geld").textContent = genesis.geld;
    document.getElementById("werk").textContent = genesis.werk;
    document.getElementById("vaardigheden").textContent = genesis.vaardigheden;
}

function werken() {
    if (genesis.energie < 20) {
        alert("Genesis is te moe om te werken.");
        return;
    }

    genesis.werk = "Aan het werk";
    genesis.geld += 15;
    genesis.energie -= 20;
    genesis.honger += 15;

    updateUI();
}

function eten() {
    if (genesis.geld < 5) {
        alert("Niet genoeg geld om eten te kopen.");
        return;
    }

    genesis.geld -= 5;
    genesis.honger = Math.max(0, genesis.honger - 30);

    updateUI();
}

function rusten() {
    genesis.energie = Math.min(100, genesis.energie + 40);

    updateUI();
}

function leren() {
    if (genesis.energie < 15) {
        alert("Genesis is te moe om te leren.");
        return;
    }

    genesis.vaardigheden += 1;
    genesis.energie -= 15;
    genesis.honger += 10;

    updateUI();
}

updateUI();
