// const Person = require('./person');
// // import Person from './person';

// const person1 = new Person('John Doe', 30);

// person1.greeting();


const Logger = require('./logger');
const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener:', data));

logger.log('Hello World');
logger.log('Hi');
logger.log('Hello');