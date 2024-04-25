import { getTasks, saveTasks } from './utils.js';
import { renderTasks } from './render-all-tasks.js';

const RENDER_SHOWTIME = 1000;
const tasksPlaceholderElement = document.querySelector('#tasks-placeholder');

const showPlaceholder = () => {
  const tasksElements = document.querySelectorAll('.tasks__item');
  if (tasksElements.length === 0) {
    tasksPlaceholderElement.classList.remove('hidden');
  }
};

const changeTaskStatus = (task) => {
  const tasks = getTasks();
  tasks.forEach((element) => {
    if (element.id === parseInt(task.dataset.id, 10)) {
      element.done = true;
    }
  });
  saveTasks(tasks);
  renderTasks(tasks);
};

const onCheckChange = (evt) => {
  const currentTask = evt.target.closest('.tasks__item');
  const currentTaskLabel = currentTask.querySelector('.task-card__label');

  currentTask.classList.add('task-card--animation');
  currentTaskLabel.classList.add('task-card__label--effect');
  evt.target.disabled = true;

  setTimeout(() => {
    changeTaskStatus(currentTask);
    showPlaceholder();
  }, RENDER_SHOWTIME);
};


export {onCheckChange};
