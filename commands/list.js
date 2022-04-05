//conf:to store and retrieve task we will use conf package
const conf = new (require('conf'))()

//package to color messages or give visual style to the messages
const chalk = require('chalk');

//action function to list of tasks from teh configuration
function list() {
    //package to retrieving list of tasks
    const todoList = conf.get('todo-list')

    if(todoList && todoList.length) {
        //user has tasks in the list 
        console.log(
            chalk.blue.bold('Tasks in green are done. Tasks in yellow are still not done.')
        )
            todoList.forEach((task, index) => {
                if(task.done) {
                    console.log(
                        chalk.greenBright(`${index}. ${task.text}`)
                    )
                } else {
                    console.log(
                        chalk.yellowBright(`${index}. ${task.text}`)
                    )
                }
            });
    } else {
        //user does't have task in the list

    // this message will shown in red color and bold font weight
    //chalk.COLOR : COLOR can be red,blue,etc
        console.log(
            chalk.red.bold('You don\'t have any tasks yet.')
          )
    }
}


//export the list
module.exports = list;
