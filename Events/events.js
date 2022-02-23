const events = require('events');
const util = require('util');

// let eventEmitter = new events.EventEmitter();
// // Registering events
// eventEmitter.on("ddclick", _ => {
//     console.log("clicked...")
// });
// // emitting events by using emit method
// eventEmitter.emit("ddclick");


//!Task
let eventEmitter = new events.EventEmitter();

function Users(name) {
    this.name = name;
    
}
util.inherits(Users, events.EventEmitter);

let Karthik =new Users("Karthik");
let Divya = new Users("Divya");
let Gokul = new Users("Gokul");




let allUsers = [Karthik, Divya, Gokul];
allUsers.forEach(user => {

    // Registering emitter
    user.on("speak", message => {
        console.log(user.name + " said " + message);
    });
});

Divya.emit('speak', "Hi gokul what are you doing ?");
Gokul.emit('speak'," Hi divya i am chatting with my only Friend")

