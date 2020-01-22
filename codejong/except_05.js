function wait(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error!');
        }, sec * 1000);
    });
}

try {
    wait(3);
} catch (e) {
    console.error(e);
}

