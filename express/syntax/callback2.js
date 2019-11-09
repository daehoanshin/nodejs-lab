/* function syncFunction1() {
    console.log(1)
  }
  
  function syncFunction2() {
    console.log(2)
  }
  
  function syncFunction3() {
    console.log(3)
  }
  
  syncFunction1()
  syncFunction2()
  syncFunction3() */

/*  function asyncFunction1() {
   setTimeout(function() {
     console.log(1)
   }, 100)
 }
 
 function syncFunction1() {
   console.log(2)
 }
 
 function syncFunction2() {
   console.log(3)
 }
 
 asyncFunction1()
 syncFunction1()
 syncFunction2() */

function asyncFunction1() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log(1)
            resolve()
        }, 300)
    })
}

function asyncFunction2() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log(2)
            resolve()
        }, 100)
    })
}

function asyncFunction3() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log(3)
            resolve()
        }, 100)
    })
}

asyncFunction1()
    .then(function (result) {
        return asyncFunction2()
    })
    .then(function (result) {
        return asyncFunction3()
    })
    .catch(function (error) {
        console.log(error) // promise 체이닝 과정 중에 에러가 발생하면 catch 블록으로 옵니다.
    })


/* function asyncFunction1() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(111)
        }, 300)
    })
}

async function async1() {
    const result = await asyncFunction1()
    // await 키워드로 다른 promise를 반환하는 함수의 실행 결과값을 변수에 담을 수 있습니다.
    console.log(result) // 111
}

async function async2() {
    let result
    try {
        result = await asyncFunction1()
    } catch (error) { // await에서 발생한 에러는 모두 아래 catch 블록에 걸립니다.
        console.log(error)
    }
    if (result === 'AAA') { // if문 분기도 일반 동기함수처럼 작성 가능합니다.
        doSomething()
    }
    return result
}

async function async1() { // 함수 앞에 async 키워드가 붙습니다.
    return 1
}

console.log(async1() instanceof Promise) // async 함수는 무조건 Promise 객체를 반환합니다.
const asyncReturn = async1()
asyncReturn.then() // 따라서 async 함수의 리턴값에도 then이 있습니다. */