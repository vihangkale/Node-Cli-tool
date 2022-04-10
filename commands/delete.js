const conf = new (require('conf'))()
const chalk = require('chalk')

//mark done function
//object as an argument
function removeTask( item ) {
    let todoList = conf.get('todo-list')
    let taskNumber;
    if (todoList && todoList.length > 0) {
        if (item) {
            taskNumber = Number(item.tasks);
            //check if this task is one of the tasks the user specified
                todoList.splice(taskNumber, 1) // remove the item from the array
        }
        //set the new todo-list
        conf.set('todo-list', todoList)
    }

    //show the user a message
    console.log(
        chalk.green.bold('Task Number ${taskNumber}  removed successfully')
    )
}
module.exports = removeTask