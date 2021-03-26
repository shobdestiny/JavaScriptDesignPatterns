 // here we ll not export the class
 // instead we just need an instance which is reference to the class

class FancyLogger {
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