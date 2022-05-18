let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let rgbButton = document.getElementById('rgbButton');
let hexButton = document.getElementById('hexButton');

// Loads page with RGB color changer selected
const rgbSelect = () => {
    button1.style.display = 'flex';
    button2.style.display = 'none';
    rgbButton.style.backgroundColor = 'black';
    rgbButton.style.color = 'white';
    hexButton.style.backgroundColor = '#ccd3f2';
    hexButton.style.color = 'black';
    document.body.style.backgroundColor = '#3a4c8d';
    button1.innerHTML = 'CLICK ME!';
}

// hex color selector
const hexSelect = () => {
    button1.style.display = 'none';
    button2.style.display = 'flex';
    hexButton.style.backgroundColor = 'black';
    hexButton.style.color = 'white';
    rgbButton.style.backgroundColor = '#ccd3f2';
    rgbButton.style.color = 'black';
    document.body.style.backgroundColor = '#3a4c8d';
    button2.innerHTML = 'CLICK ME!';
}

// changes rgb colors
const rgbChanger = () => {
    let randomNumR = Math.floor(Math.random() * 256);
    let randomNumG = Math.floor(Math.random() * 256);
    let randomNumB = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${randomNumR}, ${randomNumG}, ${randomNumB})`;
    button1.innerHTML = `CLICK AGAIN!<br><br>rgb(${randomNumR}, ${randomNumG}, ${randomNumB})`;
}

// changes hex colors
const hexChanger = () => {
    let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
        hexColor += hex[Math.floor(Math.random() * hex.length)];
    }

    document.body.style.backgroundColor = hexColor;
    button2.innerHTML = `CLICK AGAIN!<br><br>${hexColor}`;
}

// resets the colors
const reloadColors = () => {
    document.body.style.backgroundColor = '#3a4c8d';
    button1.innerHTML = 'CLICK ME!'
    button2.innerHTML = 'CLICK ME!'
}