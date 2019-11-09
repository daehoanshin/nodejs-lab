/* function a() {
    console.log('A');
} */
var a = function(){
    console.log('A');
}

function slowFunc(callback) {
    console.log('slowFunc');
    setTimeout(() => {console.log('100');
    }, 1000);
    callback();
}

slowFunc(a);
