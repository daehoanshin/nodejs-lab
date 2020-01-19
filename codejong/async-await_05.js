function delayP(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(new Date().toISOString());
        }, sec * 1000);
    });
}

function normalFun() {
    return 'wow';
}

async function myAsync() {
    const result = await normalFun();
    console.log(result);
    return 'async';
}

myAsync().then((result) => {
    console.log(result);
});