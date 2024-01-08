import './style.css'

//Variables
const input = document.querySelector('#input-task')
input.value = null
const button = document.querySelector('.add-task')
const taskContainer = document.querySelector('.task-container')

// Function
const addTask = () => {
    if (input.value != null){
        const task = input.value
        taskContainer.append(task)
        console.log(task)
    }
}

button.addEventListener('click', addTask)