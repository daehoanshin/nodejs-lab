function wait(sec) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('wait Error');
            // resolve('done!');
        }, sec * 1000);
    });
}

async function myAsyncFun() {
    console.log(new Date());
    const result = await wait(3).catch(e => {
        console.error(e);
        // return 'eeee';
    });
    console.log(result);
    /*try {
        await wait(3);
    } catch (e) {
        console.log(e)
    }*/
    console.log(new Date());
}

myAsyncFun().catch(e => console.error(e));
/*try {
    // myAsyncFun().catch(() => l);
} catch (e) {

}*/

