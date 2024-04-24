import { createTask, getTasks, showAlert } from './utils.js';
import { renderTasks } from './render-all-tasks.js';

const addTaskFormElement = document.querySelector('.add-tasks__form');
const addTaskFieldElement = addTaskFormElement.querySelector('.add-tasks__field');

const addTask = (taskText) => {
  if (taskText) {
    const tasks = getTasks();
    const newTask = createTask(taskText, false);

    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    renderTasks(tasks);
  } else {
    showAlert();
  }
};

const onAddTaskFormSubmit = (evt) => {
  evt.preventDefault();
  addTask(addTaskFieldElement.value);
  addTaskFormElement.reset();
};

const setFormEvents = () => {
  addTaskFormElement.addEventListener('submit', onAddTaskFormSubmit);
};

export {setFormEvents};
