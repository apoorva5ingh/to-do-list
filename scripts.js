document.getElementById('add-task').addEventListener('click', addTask);

function addTask() {
    const taskName = document.getElementById('task-name').value;
    const taskPriority = document.getElementById('task-priority').value;
    const taskDeadline = document.getElementById('task-deadline').value;
    const taskCategory = document.getElementById('task-category').value;

    if (taskName === '' || taskDeadline === '' || taskCategory === '') {
        alert('Please fill in all fields');
        return;
    }

    const taskList = document.getElementById('task-list');

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    const taskContent = document.createElement('p');
    taskContent.textContent = taskName;

    const taskPrioritySpan = document.createElement('span');
    taskPrioritySpan.textContent = taskPriority.charAt(0).toUpperCase() + taskPriority.slice(1);
    taskPrioritySpan.classList.add(`priority-${taskPriority}`);

    const taskDeadlineSpan = document.createElement('span');
    taskDeadlineSpan.textContent = `Due: ${taskDeadline}`;
    taskDeadlineSpan.classList.add('deadline');

    const taskCategorySpan = document.createElement('span');
    taskCategorySpan.textContent = taskCategory;
    taskCategorySpan.classList.add('category');

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete-task');
    completeButton.addEventListener('click', () => {
        taskDiv.classList.toggle('complete');
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-task');
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskDiv);
    });

    taskDiv.appendChild(taskContent);
    taskDiv.appendChild(taskPrioritySpan);
    taskDiv.appendChild(taskDeadlineSpan);
    taskDiv.appendChild(taskCategorySpan);
    taskDiv.appendChild(completeButton);
    taskDiv.appendChild(deleteButton);

    taskList.appendChild(taskDiv);

    // Clear input fields
    document.getElementById('task-name').value = '';
    document.getElementById('task-priority').value = 'high';
    document.getElementById('task-deadline').value = '';
    document.getElementById('task-category').value = '';
}



//copyrights reserved -Apoorva Deep Singh 2024
