// 화살표 함수에는 없는 것 : 함수 이름, this, arguments
const btn = document.getElementById('btn');

var myObj = {
    count: 3,
    setCounter: function () {
        console.log(this.count);
        btn.addEventListener('click', () => {
            console.log(this.count++);
        });
    }
}

myObj.setCounter();