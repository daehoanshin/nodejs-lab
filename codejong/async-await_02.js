function delayP(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Date().toISOString());
        }, sec * 1000);
    });
}

async function myAsync() {
    delayP(3).then((time) => {
        console.log(time);
    });
    return 'async';
}

myAsync().then((result) => {
    console.log(result);
});