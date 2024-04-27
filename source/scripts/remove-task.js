import { getTasks, saveTasks, showTasksPlaceholder } from './utils.js';
import {renderTasks} from './render-all-tasks.js';

const RENDER_SHOWTIME = 1000;

const removeTask = (taskElement) => {
  let tasks = getTasks();

  tasks = tasks.filter((element) => element.id !== parseInt(taskElement.dataset.id, 10));
  saveTasks(tasks);

  renderTasks(tasks);
};

const onRemoveButtonClick = (evt) => {
  const currentTask = evt.target.closest('.tasks__item');
  evt.target.disabled = true;
  currentTask.classList.add('task-card--animation');

  setTimeout(() => {
    removeTask(currentTask);
    showTasksPlaceholder();
  }, RENDER_SHOWTIME);
};

export {onRemoveButtonClick, removeTask};
