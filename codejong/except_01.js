function sum(x, y) {
    if( typeof x !== 'number' || typeof y !== 'number') {
        throw '숫자가 아닙니다';
    }
    return x + y;
}

console.log(sum('a', 2));