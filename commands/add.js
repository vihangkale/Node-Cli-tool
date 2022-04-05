const conf = new (require('conf'))()
const chalk = require('chalk')

// Lodu aacha internet kharid bhosdike
// Access karte waqt laptop ko hath mat laga chutiye

//function to add task in the list
function add(task) {

 let todoList = conf.get('todo-list')

    if(!todoList) {
        //default value for to do list
        todoList = []
    }

    todoList.push({
        text:task,
        done:false
    })

    //set todos-list in conf
    conf.set('todo-list', todoList)

     //display message to user
     console.log(
        chalk.green.bold('Task has been added successfully!')
    )

}

module.exports =  add;