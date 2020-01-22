async function myAsyncFun() {
    throw 'myAsyncError!';
}

function myPromiseFun() {
    return new Promise((resolve, reject) => {
        // resolve('done!');
        reject('myError!');
    })
}

const result = myAsyncFun().catch(e => {
    console.error(e);
});

const result2 = myPromiseFun().catch(e => {
    console.error(e)
});