var btns = [
    document.getElementById('btn0'),
    document.getElementById('btn1'),
    document.getElementById('btn2')
];

function setClick() {
    for (let i = 0; i < 3; i++) {
        btns[i].onclick = function () {
            console.log(i);
        }
    }
}

setClick();