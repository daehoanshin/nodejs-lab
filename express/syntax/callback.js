/* function a() {
    console.log('A');
} */
var a = function () {
    console.log('A');
}

function slowFunc(callback) {
    console.log('slowFunc');
    setTimeout(() => {
        console.log('100');
    }, 1000);
    callback();
}

slowFunc(a);

const getHtml = async () => {
    return "https://www.yna.co.kr/sports/all";
};

console.log(getHtml)