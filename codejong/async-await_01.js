function delayP(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Date().toISOString());
        }, sec * 1000);
    });
}

function myFunc() {
    return 'func';
}

async function myAsync() {
    return 'async';
}

console.log(myFunc());
console.log(myAsync());
console.log(delayP(3));