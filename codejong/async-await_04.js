function delayP(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Date().toISOString());
        }, sec * 1000);
    });
}

async function myAsync() {
    const result = await delayP(3).then((time) => {
        return 'x';
    });
    console.log(result);
    return 'async';
}

myAsync().then((result) => {
    console.log(result);
});