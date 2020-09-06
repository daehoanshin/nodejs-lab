// number, string, boolean, null, undefined
// let age = 2;
// let num = '2';

// let number = 2;
// let number2 = number;

// number2 = 3;

// console.log(number);
// console.log(number2);

let obj = {
    name: 'ellie',
    age: 5,
};

let obj2 = obj
obj.name = 'james'

console.log(obj);
console.log(obj2);

const num = 1;
const num2 = 2;
const result = num + num2;
console.log(result);

const num3 = 1;
const num4 = 2;
const result2 = num3 + num4;
console.log(result2);


function add(num1, num2) {
    return num1 + num2;
}

function print(name, age) {
    console.log(`${name} ${age}`);
}

console.log(add(1, 2));
print(8,33);

function divide(num1, num2) {
    return num1 / num2;
}

function surprise(operator) {
    const result = operator(2, 3);
    console.log(result);
}

surprise(divide);

// false: 0 -0, '', null, undefined
// true: -1, 'hello'
let number=2; // undefined
if(number) {
    console.log('true!');
} else {
    console.log('false!');
}

let obj1 = {
    name: 'ellie',
};

obj1 && console.log(obj1.name);