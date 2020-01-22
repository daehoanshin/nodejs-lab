function f2() {
    console.log('f2 start');
    throw '에러';
    console.log('f2 end');
}

function f1() {
    console.log('f1 start');
    f2();
    console.log('f1 end');
}

console.log('will : f1');
f1();
console.log('did: f1');