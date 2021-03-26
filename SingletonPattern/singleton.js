//Singleton pattern is just a way of creating a single object
//that is shared among a bunch of different resources throughout 
//the application without havng to receate that object or loosing
//any information inside it.......all of the state of this object such as
//variables, methods are shared among all different resources which 
//are using it and there is only one source of information that is
//is a single type of object that is why it is called singleton object
//->>> Only one instance of this object is shared by all resources
//->>> It can not be re instantiated 

// Problem with singleton is testing and refactoring as its become
// diffucult to test a single instance which is being shared by the whole
// application
// Can cause data overwritten


/******************Fancy Logger.js******************/
 export default class FancyLogger {
     constructor(){
         this.logs = []
     }

     log(message) {
         this.log.push(message)
         console.log(`Facny: ${message}`)
     }

     printLogCount() {
         console.log(`${this.log.length} Logs`)
     }
 }
 /******************First implementation.js******************/
 import FancyLogger from'./fancyLogger.js'
 const logger = new FancyLogger ()  //logger is the instance of the fancyLogger class

 export default function logFirstImplementation(){
    logger.printLogCount()
    logger.log('First File')
    logger.printLogCount()
 }

 //console
 // 0 logs
 // Fancy: First file
 // 1 logs

/******************Second implementation.js******************/
 import FancyLogger from'./fancyLogger.js'
 const logger = new FancyLogger () 

 export default function logSecondImplementation(){
    logger.printLogCount()
    logger.log('Second File')
    logger.printLogCount()
 }

 //console
 // 0 logs
 // Fancy: Second file
 // 1 logs

 // >>>>> We are creating new instance in each implementation therefore
 // >>>>> The information is not being shared among the two