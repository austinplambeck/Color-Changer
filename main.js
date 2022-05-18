let button = document.getElementById('button');

const colorChanger = () => {
    let randomNumR = Math.floor(Math.random() * 256);
    let randomNumG = Math.floor(Math.random() * 256);
    let randomNumB = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${randomNumR}, ${randomNumG}, ${randomNumB})`;
    button.innerHTML = `CLICK AGAIN!<br><br>rgb(${randomNumR}, ${randomNumG}, ${randomNumB})`;
}