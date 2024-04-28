import { getTasks, saveTasks } from './utils.js';
import { renderTasks } from './render-all-tasks.js';

const taskListElement = document.querySelector('.tasks__list');

const editTask = (task, newValue) => {
  const tasks = getTasks();

  tasks.forEach((element) => {
    if (element.id === parseInt(task.dataset.id, 10)) {
      element.name = newValue;
    }
  });

  saveTasks(tasks);
  renderTasks(tasks);
};

const onInputChange = (evt) => {
  if (evt.target.matches('.task-card__text')) {
    const currentTask = evt.target.closest('.tasks__item');
    const currentValue = evt.target.value;

    editTask(currentTask, currentValue);
  }
};

const setEditTaskEvent = () => {
  taskListElement.addEventListener('change', onInputChange);
};

export {onInputChange, setEditTaskEvent};
