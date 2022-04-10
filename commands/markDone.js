const conf = new (require('conf'))()
const chalk = require('chalk')

//mark done function
//object as an argument
function markDone({ tasks }) {
    let todoList = conf.get('todo-list')
    let isNotExists = false;
    let isExists = false;

    if (todoList) {
        //loop over the todo list tasks
         todoList.map((task, index) => {
            //check if the user specified the tasks to mark done
            if (tasks) {
                console.log(tasks.indexOf(index.toString()) !== -1);
                //check if this task is one of the tasks the user specified
                if (tasks.indexOf(index.toString()) !== -1) {
                    //mark only specified tasks by user as done
                        if ( task.done === true) {
                                console.log(
                                    chalk.green.yellow('this Task has been already marked as done')
                                )
                        } else {
                            task.done = true                    
                            //show the user a message
                            if (isExists == false) {
                                isExists == true
                                console.log(
                                    chalk.green.bold('Tasks have been marked as done successfully')
                                )
                            }                 
                        }
                    }  else {
                        if (isNotExists == false) {
                            isNotExists = true;
                            console.log(chalk.green.red("Task cannot be marked done as the task doesn't exist"))
                        }
                    } 
            }
                
            return task
        });

        //set the new todo-list
        conf.set('todo-list', todoList)
    }
   

}
module.exports = markDone