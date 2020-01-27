const EvnetEmitter = require('events');

// Create class
class MyEmitter extends EvnetEmitter {}

// Init object
const myEmiiter = new MyEmitter();

// Event Listener
myEmiiter.on('event', () => console.log('Event Fired!'));

// Init event
myEmiiter.emit('event');
myEmiiter.emit('event');
myEmiiter.emit('event');
myEmiiter.emit('event');