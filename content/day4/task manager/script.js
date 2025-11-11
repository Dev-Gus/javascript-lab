document.addEventListener("DOMContentLoaded", () => {
    // 1. Grab elements (input, button, ul, counters)
    const input = document.getElementById('task-input');
    const addBtn = document.querySelector('.add-btn');
    const list = document.querySelector('.task-list');

    const total = document.getElementById('total');
    const done = document.getElementById('done');

    loadTasks();

    // 2. Add listeners (add task, handle Enter key, handle delegation on ul)
    addBtn.addEventListener('click', addTask);

    input.addEventListener('keydown', (e) => {
        if (e.key === "Enter") addTask();
    });

    // 3. Define small helper functions:
    //    - addTask()
    function addTask(text, completed = false) {
        const taskTextValue = (typeof text === 'string') ? text.trim() : input.value.trim();

        if (!taskTextValue) return;

        const task = document.createElement('li');
        task.classList.add('task');

        const taskText = document.createElement('span');
        taskText.classList.add('task-text');
        taskText.textContent = taskTextValue;

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

        if (completed) task.classList.add('completed');

        list.append(task);
        requestAnimationFrame(() => task.classList.add('loaded'));
        saveTasks();

        if(typeof text === 'undefined') {
            input.value = '';
            input.focus();
        }

        updateCounters();
    }

    //    - handleListClick()
    function handleListClick(e) {
        const target = e.target;
        const taskItem = target.closest('.task');

        if (target.matches('.complete-btn')) {
            taskItem.classList.toggle('completed');
            saveTasks();
            updateCounters()

        } else if (target.matches('.delete-btn')) {
            taskItem.classList.add('fade-out');
            taskItem.addEventListener('transitionend', () => {
                taskItem.remove();
                saveTasks();
                updateCounters();
            })
        } else return;
    }

    //    - updateCounters()
    function updateCounters() {
        let totalTasks = list.querySelectorAll('.task').length;
        let completed = list.querySelectorAll('.completed').length;

        total.textContent = totalTasks;
        done.textContent = completed;
    }

    list.addEventListener('click', handleListClick);

    //    - saveTasks() / loadTasks() (for bonus)
    function saveTasks() {
        const tasksData = [];
        const task = list.querySelectorAll('.task');

        task.forEach((task) => {
            const textEl = task.querySelector('.task-text');
            const text = textEl ? textEl.textContent : '';
            const completed = task.classList.contains('completed');

            tasksData.push({ text, completed });
        });

        localStorage.setItem('tasks', JSON.stringify(tasksData));
    };

    function loadTasks() {
        const stored = localStorage.getItem('tasks');
        if (!stored) return;

        const tasks = JSON.parse(stored);
        tasks.forEach(({text, completed}) => {
            addTask(text, completed);
        });

        updateCounters();
    }
})