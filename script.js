import './style.css'

// Variables generals
const input = document.querySelector('#input-task')
input.value = null
const taskContainer = document.querySelector('.task-container')

let newTask = document.createElement("div")
newTask.className = "new-task"

let tasks = document.createElement("p")
tasks.className = "tasks"

let buttons = document.createElement("div")
buttons.className = "buttons"

// Variables for Adding button
const addButton = document.querySelector('.add-task')

// Variables for Checking button
let checkButton = document.createElement("button")
checkButton.className = "check-task"
let iconCheck = document.createElement("i")
iconCheck.className = "ri-check-line ri-lg"
checkButton.appendChild(iconCheck)

// Variables for Deleting button
let deleteButton = document.createElement("button")
deleteButton.className = "delete-task"
let iconDelete = document.createElement("i")
iconDelete.className = "ri-delete-bin-6-line ri-lg"
deleteButton.appendChild(iconDelete)


// Function for Adding button
const addTask = () => {
    if (input.value != null){

        // Add new-task zone
        taskContainer.appendChild(newTask)

        // Add tasks
        tasks.innerHTML = input.value
        newTask.append(tasks)

        // Add buttons
        newTask.appendChild(buttons)
        buttons.appendChild(checkButton)
        buttons.appendChild(deleteButton)
        
        // Reset value of input
        input.value = null
    }
}


addButton.addEventListener('click', addTask)

// Function for Checking button
const checkTask = () => {
    tasks.style.textDecoration = "line-through"
    console.log(tasks)
}

checkButton.addEventListener('click', checkTask)