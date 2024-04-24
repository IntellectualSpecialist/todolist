import { getTasks } from './utils.js';
import { renderTasks } from './render-all-tasks.js';

const onInputChange = (evt) => {
  const currentTask = evt.target.closest('.tasks__item');
  const tasks = getTasks();

  tasks.forEach((element) => {
    if (element.id === parseInt(currentTask.dataset.id, 10)) {
      element.name = evt.target.value;
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
  renderTasks(tasks);
};

export {onInputChange};