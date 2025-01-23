const units = [
    { name: "Angron Daemon Primarch of Khorne", type: "Epic Hero", cost: 460, id: "AngronPlus" },
    { name: "Kharn the Betrayer", type: "Epic Hero", cost: 100, id: "KharnPlus" },
    { name: "Lord Invocatus", type: "Epic Hero", cost: 140, id: "InvocatusPlus" },
    { name: "World Eaters Daemon Prince", type: "Character", cost: 150, id: "CharacterDaemonPrince" },
    { name: "World Eaters Daemon Prince with Wings", type: "Character", cost: 180, id: "CharacterDaemonPrinceWings" },
    { name: "World Eaters Lord on Juggernaut", type: "Character", cost: 120, id: "CharacterLordOnJuggernaut" },
    { name: "World Eaters Master of Executions", type: "Character", cost: 120, id: "CharacterMasterOfExecutions" },
    { name: "Khorne Berserkers", type: "Battleline", cost: 200, id: "KhorneBerserkers" },
    { name: "Jakhals", type: "Battleline", cost: 180, id: "Jakhals" },
    { name: "Eightbound", type: "Infantry", cost: 160, id: "Eightbound" },
    { name: "Exalted Eightbound", type: "Infantry", cost: 220, id: "ExaltedEightbound" },
    { name: "World Eaters Terminator Squad", type: "Infantry", cost: 240, id: "TerminatorSquad" },
    { name: "Chaos Spawn", type: "Beast", cost: 100, id: "ChaosSpawn" },
];

let roster = {
    epicHero: [],
    character: [],
    battleLine: [],
    infantry: [],
    beast: []
};

let epicHeroCounter = -1;

let totalCost = 0;

function recalculateTotalCost() {
    const usedCost =
        roster.epicHero.reduce((sum, unit) => sum + unit.cost, 0) +
        roster.character.reduce((sum, unit) => sum + unit.cost, 0) +
        roster.battleLine.reduce((sum, unit) => sum + unit.cost, 0) +
        roster.infantry.reduce((sum, unit) => sum + unit.cost, 0) +
        roster.beast.reduce((sum, unit) => sum + unit.cost, 0);

    totalCost = 0 + usedCost;
}

function addUnit(unit) {
    if (unit.type === "Epic Hero") {
        if (epicHeroCounter > -1) {
            alert("Epic Hero already added!")
            return;
        }
        roster.epicHero.push(unit);
        epicHeroCounter++;
    } else {
        const typeKeyMap = {
            "Battleline": "battleLine",
            "Character": "character",
            "Infantry": "infantry",
            "Beast": "beast"
        };

        const typeKey = typeKeyMap[unit.type];
        if (typeKey) {
            roster[typeKey].push(unit);
        } else {
            console.error(`Unit type "${unit.type}" is not recognized in roster.`);
            return;
        }
    }

    recalculateTotalCost();
    updateRosterDisplay();
}

function removeUnit(unit) {
    if (unit.type === "Epic Hero") {
        roster.epicHero = roster.epicHero.filter(u => u.name !== unit.name);
        epicHeroCounter--;
    } else {
        const typeKeyMap = {
            "Battleline": "battleLine",
            "Character": "character",
            "Infantry": "infantry",
            "Beast": "beast"
        };

        const typeKey = typeKeyMap[unit.type]; // Получаем правильный ключ типа
        if (typeKey) {
            roster[typeKey] = roster[typeKey].filter(u => u.name !== unit.name);
        } else {
            console.error(`Unit type "${unit.type}" is not recognized in roster.`);
        }
    }

    recalculateTotalCost();
    updateRosterDisplay();
}

function updateRosterDisplay() {
    const epicHeroSpan = document.getElementById("epicHero");
    const characterSpan = document.getElementById("character");
    const battleLineSpan = document.getElementById("battleLine");
    const infantrySpan = document.getElementById("infantry");
    const beastSpan = document.getElementById("beast");
    const totalPointsSpan = document.getElementById("totalPoints");

    epicHeroSpan.innerHTML = roster.epicHero.map(unit =>
        `${unit.name} <button onclick="removeUnit({ name: '${unit.name}', type: 'Epic Hero' })">🗑️</button>`
    ).join("<br>");

    characterSpan.innerHTML = roster.character.map(unit =>
        `${unit.name} <button onclick="removeUnit({ name: '${unit.name}', type: 'Character' })">🗑️</button>`
    ).join("<br>");

    battleLineSpan.innerHTML = roster.battleLine.map(unit =>
        `${unit.name} <button onclick="removeUnit({ name: '${unit.name}', type: 'Battleline' })">🗑️</button>`
    ).join("<br>");

    infantrySpan.innerHTML = roster.infantry.map(unit =>
        `${unit.name} <button onclick="removeUnit({ name: '${unit.name}', type: 'Infantry' })">🗑️</button>`
    ).join("<br>");

    beastSpan.innerHTML = roster.beast.map(unit =>
        `${unit.name} <button onclick="removeUnit({ name: '${unit.name}', type: 'Beast' })">🗑️</button>`
    ).join("<br>");

    totalPointsSpan.innerText = totalCost;
}

document.querySelectorAll('.content ul').forEach(ul => {
    ul.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON' && event.target.textContent === '+') {
            const unitId = event.target.id;
            const unitToAdd = units.find(unit => unit.id === unitId);
            if (unitToAdd) {
                addUnit(unitToAdd);
            }
        }
    });
});

updateRosterDisplay();

function openModal(title, details) {
    document.getElementById('unitTitle').innerText = title;
    document.getElementById('unitDetails').innerText = details;
    document.getElementById('unitModal').style.display = "block";
}

document.getElementById('closeModal').onclick = function() {
    document.getElementById('unitModal').style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('unitModal')) {
        document.getElementById('unitModal').style.display = "none";
    }
}

let check = 0;

function changeTheme() {
    const body = document.body;
    const main = document.getElementById('main');
    const titleName = document.getElementById('titleName');
    const resultContainer = document.getElementById('resultContainer');
    const sidebar = document.getElementById('sidebar');
    const sidebar1 = document.getElementById('sidebar1');
    const sidebar2 = document.getElementById('sidebar2');
    const sidebar3 = document.getElementById('sidebar3');
    const sidebar4 = document.getElementById('sidebar4');
    if (check % 2 === 0) {
        body.style.backgroundColor = "black";
        main.style.backgroundColor = 'black';
        Array.from(body.getElementsByTagName('h1')).forEach((h1) => {
            h1.style.color = 'white';
        });
        Array.from(body.getElementsByTagName('h2')).forEach((h2) => {
            h2.style.color = 'white';
        });
        Array.from(resultContainer.getElementsByTagName('h1')).forEach((h1) => {
            h1.style.color = 'black';
        });
        Array.from(resultContainer.getElementsByTagName('h2')).forEach((h2) => {
            h2.style.color = 'black';
        });

        sidebar.style.backgroundColor = 'black';
        sidebar1.style.backgroundColor = 'black';
        sidebar2.style.backgroundColor = 'black';
        sidebar3.style.backgroundColor = 'black';
        sidebar4.style.backgroundColor = 'black';
        titleName.style.backgroundColor = 'black';

    } else {
        body.style.backgroundColor = "white";
        main.style.backgroundColor = 'white';
        Array.from(body.getElementsByTagName('h1')).forEach((h1) => {
            h1.style.color = 'black';
        });
        Array.from(body.getElementsByTagName('h2')).forEach((h2) => {
            h2.style.color = 'black';
        });
        sidebar.style.backgroundColor = 'white';
        sidebar1.style.backgroundColor = 'white';
        sidebar2.style.backgroundColor = 'white';
        sidebar3.style.backgroundColor = 'white';
        sidebar4.style.backgroundColor = 'white';
        titleName.style.backgroundColor = 'white';
    }
    check++;
}

function pointsLimit() {
    const pointsLimit = document.getElementById('pointsLimit').value;
    console.log(pointsLimit);
    document.getElementById('Limit').innerText = `/${pointsLimit}`;
}

function rosterName() {
    const name = document.getElementById('name').value;
    console.log(name);
    document.getElementById('rosterName').innerText = name;
}
