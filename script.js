import './style.css'

//Variables
const input = document.querySelector('#input-task')
input.value = null
const addButton = document.querySelector('.add-task')
const taskContainer = document.querySelector('.task-container')

// Function
const addTask = () => {
    if (input.value != null){

        // Add new-task zone
        let newTask = document.createElement("div")
        newTask.className = "new-task"
        taskContainer.appendChild(newTask)

        // Add tasks
        let tasks = document.createElement("p")
        tasks.className = "tasks"
        tasks.innerHTML = input.value
        newTask.append(tasks)

        // Add buttons
        let buttons = document.createElement("div")
        buttons.className = "buttons"
        newTask.appendChild(buttons)

        let checkButton = document.createElement("button")
        checkButton.className = "check-task"
        let iconCheck = document.createElement("i")
        iconCheck.className = "ri-check-line ri-lg"
        checkButton.appendChild(iconCheck)

        let deleteButton = document.createElement("button")
        deleteButton.className = "delete-task"
        let iconDelete = document.createElement("i")
        iconDelete.className = "ri-delete-bin-6-line ri-lg"
        deleteButton.appendChild(iconDelete)

        buttons.appendChild(checkButton)
        buttons.appendChild(deleteButton)
        
        // Reset value of input
        input.value = null
    }
}


addButton.addEventListener('click', addTask)