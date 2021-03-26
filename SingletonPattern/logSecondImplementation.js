import logger from'./fancyLogger.js'

 export default function logSecondImplementation(){
    logger.printLogCount()
    logger.log('Second File')
    logger.printLogCount()
 }

 //console
 // 1 logs
 // Fancy: Second file
 // 2 logs

 //Now the state is being shared