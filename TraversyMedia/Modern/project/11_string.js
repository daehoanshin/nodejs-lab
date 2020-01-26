const firstname = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there my name is Brad';
const tags = 'web design,web development,programming';

let val;

val = firstname + lastName;

// Concatenation
val = firstname + ' ' + lastName;

// Append
val = 'Brad ';
val += 'Traversy';

val = 'Hello, my name is ' + firstname + ' and I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length 
val = firstname.length;

// concat
val = firstname.concat(' ', lastName);

// Change case
val = firstname.toUpperCase();
val = firstname.toLowerCase()

val = firstname[2];

// indexOf()
val = firstname.indexOf('l');
val = firstname.lastIndexOf('l');

// charAt()
val = firstname.charAt('2');
// Get last char
val = firstname.charAt(firstname.length - 1);

// substring()
val = firstname.substring(0, 4);

// slice()
val = firstname.slice(-3);

// split()
val = str.split(' ');
val = tags.split(',');

// replace()
val = str.replace('Brad', 'Jack');

// include()
val = str.includes('foo');

console.log(val);

