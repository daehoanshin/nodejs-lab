// 화살표 함수에는 없는 것 : 함수 이름, this, arguments
// const btn = document.getElementById('btn');

/*const myFun = function() {
    console.log(arguments);
}*/


const myFun2 = (...args) => {
    console.log(args);
}

// myFun(1,2,3,4);
myFun2(1,2,3);