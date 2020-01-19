/*ajax('http://a.com', (result) => {

});*/

function delay(sec, callback) {
    setTimeout(() => {
        callback(new Date().toISOString());
    }, sec * 1000);
}

console.log('start', new Date().toISOString());

delay(1, (result) => {
    console.log(1, result);

    delay(1, (result) => {
        console.log(2, result);

        delay(1, (result) => {
            console.log(3, result);
        });
    });
});


// console.log('hello');