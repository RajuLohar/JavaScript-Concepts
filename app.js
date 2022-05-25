// const log =require('./log');

// log('abcd');

const EventEmitter=require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged',(arg) => {
    console.log('listener called' , arg);
})

emitter.emit('messageLogged',{name:"Raju"});
