// Show specific task list based on tab
function showTasks(tabName) {
    // Hide all task lists
    const taskLists = document.querySelectorAll('.task-list');
    taskLists.forEach(list => list.classList.remove('active'));

    // Show the selected task list
    document.getElementById(tabName).classList.add('active');
}

// Add task function
function addTask(tab) {
    const inputField = document.getElementById(`${tab}-input`);
    const taskText = inputField.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById(`${tab}-tasks`);
    const newTask = document.createElement('li');
    newTask.innerHTML = `
        <span>${taskText}</span>
        <button class="complete-btn" onclick="markComplete(this)">Mark as Complete</button>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(newTask);

    // Clear input field
    inputField.value = '';
}

// Mark task as complete
function markComplete(button) {
    const task = button.parentElement;
    task.classList.toggle('completed');
    button.disabled = true; // Disable the complete button once the task is marked
}

// Delete task function
function deleteTask(button) {
    const task = button.parentElement;
    task.remove();
}

// Initialize with daily tasks showing
document.addEventListener('DOMContentLoaded', () => {
    showTasks('daily');
});
