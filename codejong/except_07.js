function wait(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('error!');
        }, sec * 1000);
    });
}

wait(3).then(
    () => {
        console.log('done!!!')
    },
    e => {
        console.log('1nd catch in Then', e);
    }
).catch(e => {
    console.error('1st catch', e);
}).catch(e => {
    console.log('2nd catch', e);
});

