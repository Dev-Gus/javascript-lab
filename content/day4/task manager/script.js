document.addEventListener("DOMContentLoaded", () => {
    // 1. Grab elements (input, button, ul, counters)
    const input = document.getElementById('task-input');
    const addBtn = document.querySelector('.add-btn');
    const list = document.querySelector('.task-list');

    const total = document.getElementById('total');
    const done = document.getElementById('done');

    // 2. Add listeners (add task, handle Enter key, handle delegation on ul)
    addBtn.addEventListener('click', addTask);

    input.addEventListener('keydown', (e) => {
        if (e.key === "Enter") addTask();
    });

    // 3. Define small helper functions:
    //    - addTask()
    function addTask() {
        let inputValue = input.value;
        inputValue = inputValue.trim();

        if (inputValue !== '') {
            const task = document.createElement('li');
            task.classList.add('task');

            const taskText = document.createElement('span');
            taskText.classList.add('task-text');
            taskText.textContent = inputValue;

            const taskActions = document.createElement('div');
            taskActions.classList.add('task-actions');

            const completeBtn = document.createElement('button');
            completeBtn.classList.add('complete-btn');
            completeBtn.setAttribute('aria-label', 'Mark task complete');
            completeBtn.textContent = '✔';

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete-btn');
            deleteBtn.setAttribute('aria-label', 'Delete task');
            deleteBtn.textContent = '✖';

            taskActions.append(completeBtn, deleteBtn);
            task.append(taskText, taskActions);

            list.append(task);
            input.value = '';
            input.focus();
        } else return;
    }
    
    list.addEventListener('click', handleListClick);

    //    - handleListClick()
    

    //    - updateCounters()
    //    - saveTasks() / loadTasks() (for bonus)
})