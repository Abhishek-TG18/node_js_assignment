var EventEmitter = require('events')

class subscription extends EventEmitter{};

const userSubscription = new subscription();

const subscribeHandler = (user)=>{
    console.log(`${user} has Subscribed the channel`);
}

userSubscription.on('subscribe',subscribeHandler);

userSubscription.emit('subscribe','abhi');

userSubscription.off('subscribe',subscribeHandler);
userSubscription.emit('subscribe','abhi');