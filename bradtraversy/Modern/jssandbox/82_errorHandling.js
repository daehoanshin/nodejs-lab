const user = {email: 'jdoe@gmail.com'};
try {
    // Produce a referenceError
    // myFunction();

    // Produce a TypeError
    // null.myFunction();

    // Will produce SyntaxError
    // eval('"Hello World"');

    // Will produce a URIError
    // decodeURIComponent('%');

    if(!user.name) {
        throw new SyntaxError('User has no name');
    }

} catch (e) {
    console.log(`User Error : ${e.message}`);
    // console.log(e.message);
    // console.log(e.name);
    // console.log(e instanceof TypeError);
} finally {
    console.log('Finally runs reguardless of result...');
}

console.log('Program continues...');
