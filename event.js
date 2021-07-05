const EventEmitter  = require('events')
const myEmitter = new EventEmitter();

function c1() {
   console.log('an event occurred! c1');
}

function c2() {
    console.log('an event occurred! c2');
 }
myEmitter.on('eventOne', c1); // Register for eventOne
myEmitter.addListener('hello', ()=>{console.log('say hello')})
//myEmitter.off('eventOne', c1)
//myEmitter.addListener('eventOne', c2)
//const listeners = myEmitter.listeners('eventOne')
//const count = myEmitter.listenerCount('eventOne')
myEmitter.emit( 'hello')
myEmitter.emit('eventOne')
//console.log(listeners, count)

