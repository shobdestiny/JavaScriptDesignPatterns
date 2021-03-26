 // here we ll not export the class
 // instead we just need an instance which is reference to the class

class FancyLogger {
    constructor(){
        if(FancyLogger.instance == null){
            this.logs = []
            FancyLogger.instance = this
        }
        return FancyLogger.instance
    }

    log(message) {
        this.log.push(message)
        console.log(`Facny: ${message}`)
    }

    printLogCount() {
        console.log(`${this.log.length} Logs`)
    }
}

const logger = new FancyLogger()
Object.freeze(logger) 
//freeze will prevent any changes to the methods of this object
export default logger //exporting instance instead of a class