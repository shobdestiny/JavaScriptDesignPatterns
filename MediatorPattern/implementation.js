//Mediator Pattern >> 
//Mediator controls interaction between objects
//Instead of direct communication b/w objects it acts as a mediator to transfer information

//HERE WE HAVE A CHAT ROOM WHICH WILL ACT AS A MEDIATOR 
//AND WILL SEND AND RECIEVE MESSAGES FROM MEMBERS IN CHAT ROOM

function Member(name){
    this.name = name
    this.chatroom = null
}

//Methods/logic in CHATROOM
Member.prototype = {
    send: function(message, toMember){
        this.chatroom.send(message, this, toMember)      //this refers to the current member
        
        //message will be send to chat room instead directly to member
    },
    receive: function(message, fromMember){
        console.log(`${fromMember.name} to ${this.name}: ${message}`)
    }
}

//Mediator Object
function Chatroom(){
    this.members = {}
}

Chatroom.prototype = {
    addMember: function(member){
        this.members[member.name] = member
        member.chatroom = this
    },
    send: function(message, fromMember, toMember){
        toMember.receive(message, fromMember)
    }
}

const chat = new Chatroom()

const john = new Member('John')
const tim = new Member('Tim')
const bob = new Member('Bob')

chat.addMember(bob)
chat.addMember(tim)
chat.addMember(john)

bob.send("Hey John", john)