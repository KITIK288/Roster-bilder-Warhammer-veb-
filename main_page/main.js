let modal = document.getElementById("myModal");
let btn = document.getElementById("openModalBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

let check = 0;

function themeChange() {
    const modal = document.getElementById("myModalContent");
    const button = document.getElementById("start-roster");
    const img = document.getElementById("img");
    if (check % 2 !== 0) {
        modal.style.backgroundColor = "black";
        button.style.backgroundColor = "white";
        button.style.color = "black";
        Array.from(modal.getElementsByTagName('h1')).forEach((h1) => {
            h1.style.color = 'white';
        });
        Array.from(modal.getElementsByTagName('h2')).forEach((h1) => {
            h1.style.color = 'white';
        });
        img.style.borderColor = 'white';
    } else {
        modal.style.backgroundColor = "white";
        Array.from(modal.getElementsByTagName('h1')).forEach((h1) => {
            h1.style.color = 'black';
        });
        Array.from(modal.getElementsByTagName('h2')).forEach((h1) => {
            h1.style.color = 'black';
        });
        button.style.backgroundColor = "black";
        button.style.color = "white";
        img.style.borderColor = 'black';
    }
    check++;
}
