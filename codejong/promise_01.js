function delayP(sec) {
    return new Promise((resolve, rejct) => {
        setTimeout(() => {
            resolve(new Date().toISOString())
        }, sec * 1000);
    });
}

delayP(1).then((result) => {
    console.log(1, result);
    return delayP(1);
}).then((result) => {
    console.log(2, result);
    return delayP(1);
}).then((result) => {
    console.log(3, result);
}).then((result) => {
    console.log(result);
});
