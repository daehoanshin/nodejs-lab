function yo() {
    setTimeout(function () {
        console.log('1.5초 타이머 끝!');
    }, 1500);

    for (let i = 0; i < 3; i++) {
        doSomething(); //가정 : 매번 1초가 걸리는 일
        console.log(i)
    }
    console.log('3초 걸리는 for문 끝!')
}

yo();

console.log('main 끝!');