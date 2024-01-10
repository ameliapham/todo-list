import './style.css'

// Variables generals
const input = document.querySelector('#input-task')
input.value = ""
const taskContainer = document.querySelector('.task-container')

// Variables for Adding button
const addButton = document.querySelector('.add-task')

// Function for Adding button
const addTask = () => {
    if (input.value != ""){

        // Add new-task zone
        let newTask = document.createElement("div")
        newTask.className = "new-task"
        taskContainer.appendChild(newTask)

        // Add checkbox
        let checkBox = document.createElement("input")
        checkBox.type = "checkbox"
        checkBox.className = "check-box"
        newTask.appendChild(checkBox)
        
        // Add tasks
        let tasks = document.createElement("p")
        tasks.className = "tasks"
        tasks.innerHTML = input.value
        newTask.append(tasks)

        // Add deleting button
        let deleteButton = document.createElement("button")
        deleteButton.className = "delete-task"
        let iconDelete = document.createElement("i")
        iconDelete.className = "ri-delete-bin-6-line ri-lg"
        deleteButton.appendChild(iconDelete)

        newTask.appendChild(deleteButton)
        
        // Reset value of input
        input.value = ""

        // Function for checkbox
        const checkTask = () => {
            if (checkBox.checked) {
                tasks.style.textDecoration = "line-through"
            } else {
                tasks.style.textDecoration = ""
            }
        }

        checkBox.addEventListener('click', checkTask)

        // Function for Deleting button
        const deleteTask = () => {
            taskContainer.removeChild(newTask)
        }

        deleteButton.addEventListener('click', deleteTask)
    }
}

addButton.addEventListener('click', addTask)