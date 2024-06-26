import { getTasks, saveTasks, showTasksPlaceholder, generateId } from './utils.js';
import { renderTasks } from './render-all-tasks.js';

const RENDER_SHOWTIME = 1500;
const ANIMATION_SHOWTIME = 400;
const ANIMATION_ADD_TIME = 100;
const doneListElement = document.querySelector('.done__list');
const taskListElement = document.querySelector('.tasks__list');
const taskTemplateElement = document.querySelector('#done-task').content.querySelector('.done__item');
const donePlaceholderElement = document.querySelector('#done-placeholder');
const doneFragment = document.createDocumentFragment();

const scrollToLastDone = () => {
  const lastTaskElement = doneListElement.querySelector('.done__item:last-child');
  if (lastTaskElement) {
    lastTaskElement.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'center'
    });
  }
};

const renderFakeDone = (taskText) => {
  const doneElement = taskTemplateElement.cloneNode(true);
  doneElement.classList.add('task-card--new');
  doneElement.querySelector('.task-card__text').textContent = taskText;

  doneFragment.append(doneElement);

  donePlaceholderElement.classList.add('hidden');
  doneListElement.append(doneFragment);
  setTimeout(() => {
    const fakeTask = doneListElement.querySelector('.task-card--new');
    fakeTask.classList.add('task-card--show');
  }, ANIMATION_ADD_TIME);
};

const compareTasks = (taskA, taskB) => taskA.id - taskB.id;

const changeTaskStatus = (task) => {
  const tasks = getTasks();
  tasks.forEach((element) => {
    if (element.id === parseInt(task.dataset.id, 10)) {
      element.done = true;
      element.id = generateId();
    }
  });
  tasks.sort(compareTasks);
  saveTasks(tasks);
  renderTasks(tasks);
};

const onCheckChange = (evt) => {
  if (evt.target.matches('.button-icon--check')) {
    const currentTask = evt.target.closest('.tasks__item');
    const currentTaskLabel = currentTask.querySelector('.task-card__label');
    const taskText = currentTask.querySelector('.task-card__text').value;

    currentTask.classList.add('task-card--animation');
    currentTaskLabel.classList.add('task-card__label--effect');
    evt.target.disabled = true;

    setTimeout(() => {
      renderFakeDone(taskText);
    }, ANIMATION_SHOWTIME);

    setTimeout(() => {
      changeTaskStatus(currentTask);
      scrollToLastDone();
      showTasksPlaceholder();
    }, RENDER_SHOWTIME);
  }
};

const setCheckTaskEvent = () => {
  taskListElement.addEventListener('change', onCheckChange);
};

export {onCheckChange, setCheckTaskEvent};
