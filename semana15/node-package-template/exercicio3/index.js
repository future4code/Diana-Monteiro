const fs = require('fs')

fs.appendFile("./taskList.txt", `${process.argv[2]},\n`, (err)=> err&&console.log(err))

fs.readFile("./taskList.txt", function(err, file) {
    console.log('Tarefas:\n' + file.toString());
})
