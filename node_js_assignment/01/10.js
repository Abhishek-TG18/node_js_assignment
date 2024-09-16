let EventEmitter = require('events');

class subscription extends EventEmitter{};

const userSubscription = new subscription();

const subscribeHandler = (user)=>{
    console.log(`${user} has just subscribed `);
}
console.log("default number of event listeners :",userSubscription.getMaxListeners());
userSubscription.setMaxListeners(5);
userSubscription.on('subscribe',subscribeHandler);
userSubscription.on('subscribe',subscribeHandler);
userSubscription.on('subscribe',subscribeHandler);
userSubscription.on('subscribe',subscribeHandler);
userSubscription.on('subscribe',subscribeHandler);
try{
userSubscription.on('subscribe',subscribeHandler);
}catch(err){
    console.log("Tried more than 5 times ");
}
userSubscription.emit('subscribe','abhi');