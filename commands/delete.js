const conf = new (require('conf'))()
const chalk = require('chalk')

//mark done function
//object as an argument
function removeTask( item ) {
    let todoList = conf.get('todo-list')

    if (todoList && todoList.length > 0) {
        todoList.splice(item, 1) // remove the item from the array
        //set the new todo-list
        conf.set('todo-list', todoList)
    }

    //show the user a message
    console.log(
        chalk.green.bold('Task removed successfully')
    )
}
module.exports = removeTask