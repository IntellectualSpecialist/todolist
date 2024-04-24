import { getTasks } from './utils.js';
import {renderTasks} from './render-all-tasks.js';

const RENDER_SHOWTIME = 1000;
const tasksPlaceholderElement = document.querySelector('#tasks-placeholder');

const showPlaceholder = () => {
  const tasksElements = document.querySelectorAll('.tasks__item');
  if (tasksElements.length === 0) {
    tasksPlaceholderElement.classList.remove('hidden');
  }
};

const removeTask = (taskElement) => {
  taskElement.classList.add('task-card--animation');
  let tasks = getTasks();
  tasks = tasks.filter((element) => element.id !== parseInt(taskElement.dataset.id, 10));
  localStorage.setItem('tasks', JSON.stringify(tasks));

  setTimeout(() => {
    renderTasks(tasks);
  }, RENDER_SHOWTIME);

};

const onRemoveButtonClick = (evt) => {
  const currentTask = evt.target.closest('.tasks__item');
  evt.target.disabled = true;
  removeTask(currentTask);
  setTimeout(() => {
    showPlaceholder();
  }, RENDER_SHOWTIME);
};

export {onRemoveButtonClick, removeTask};
