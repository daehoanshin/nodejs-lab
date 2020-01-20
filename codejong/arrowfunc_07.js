// 화살표 함수에는 없는 것 : 함수 이름, this, arguments
// const btn = document.getElementById('btn');

/*const myFun = function() {
    console.log(arguments);
}*/

function outter() {
    const myFun2 = () => {
        console.log(arguments);
    }
    myFun2();
}


// myFun(1,2,3,4);
outter(1,2,3,4);