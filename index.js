#! /usr/bin/env node
const { program } = require('commander');
// program.command: takes a string that defines the format of the command
// program.description: describes the command for the user. This is helpful when the user executes our tool with the option --help
// program.option: the options that this command can take, if any
// program.action: the action that this command performs, which will be a function

//import list file
const list = require('./commands/list')
const add = require('./commands/add')
const markDone = require('./commands/markDone')
const removeTask = require('./commands/delete')

//program to show the list
program
.command('list')
.description('List all the TODO tasks') //--help will show this description
.action(list) //function to execute as an for showing the list

//program to add the tasks in the list
program
    .command('add <task>') //<task> is an argument here
    .description('Add a new TO DO task')
    .action(add)


// to mark the tasks as done
    program
    .command('mark-done')
    .description('Mark commands done')
    .option('-t, --tasks <tasks...>', 'The tasks to mark done. If not specified, all tasks will be marked done.') //user can use eothe -t ot --tasks
    .action(markDone)

// to mark the tasks as done
program
.command('delete-task')
.description('deletes the particulat task')
.option('-t, --tasks <tasks...>', 'The tasks to mark done. If not specified, all tasks will be marked done.') //user can use eothe -t ot --tasks
.action(removeTask)

//parse the input of the user
program.parse();
