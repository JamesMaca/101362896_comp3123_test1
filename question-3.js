// James MacAloney - 101362896
// COMP 3123 - Lab Test 1
// October 5th 2023
//QUESTION #3 ----------------------------------------------------------------------------------
//Create a script that will do the following:
    //1. Remove Log files
        //remove all the files from the Logs directory, if exists
        //output the file names to delete
        //remove the Logs directory
    //2. Create Log files
        //create a Logs directory, if it does not exist
        //change the current process to the new Logs directory
        //create 10 log files and write some text into the file
        //output the files names to console
//----------------------------------------------------------------------------------------------

const fs = require("fs")
const path = require("path")

const removeLogFiles = () => {
    const logDir = path.join(__dirname, "logs")
    if(fs.existsSync(logDir)){
        const filesToRemove = fs.readdirSync(logDir)
        filesToRemove.forEach((file) => {
            const filePath = path.join(logDir, file)
            fs.unlinkSync(filePath)
            console.log(`deleting files... ${file}`)
        })
        
        fs.rmdirSync(logDir)
        console.log("deleting directory... logs")

    }else{
        console.log("log directory does not exist")
    }
}

const createLogFiles = () => {
    const logDir = path.join(__dirname, "logs")
    if(!fs.existsSync(logDir)){
        fs.mkdirSync(logDir)
        console.log("log dir created!")
    }

    process.chdir(logDir)

    for (let i = 0; i < 10; i++) {
        const name = `log${i}.txt`
        const content = `Log file #${i}`
        fs.writeFileSync(name, content)
        console.log(name + 'file created!')
    }
}

const start = () => {
    const logDir = path.join(__dirname, "logs")
    if(!fs.existsSync(logDir)){
        createLogFiles()
    }else{
        removeLogFiles()
    }
}

start()
