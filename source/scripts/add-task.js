import { createTask, getTasks, showAlert, saveTasks } from './utils.js';
import { renderTasks } from './render-all-tasks.js';

const RENDER_SHOWTIME = 600;
const addTaskFormElement = document.querySelector('.add-tasks__form');
const addTaskFieldElement = addTaskFormElement.querySelector('.add-tasks__field');

const tasksListElement = document.querySelector('.tasks__list');
const taskTemplateElement = document.querySelector('#new-task').content.querySelector('.tasks__item');
const tasksPlaceholderElement = document.querySelector('#tasks-placeholder');
const tasksFragment = document.createDocumentFragment();

const scrollToLastTask = () => {
  const lastTaskElement = tasksListElement.querySelector('.tasks__item:last-child');
  if (lastTaskElement) {
    lastTaskElement.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'center'
    });
  }
};

const renderFakeTask = (value) => {
  const taskElement = taskTemplateElement.cloneNode(true);

  taskElement.classList.add('task-card--new');
  taskElement.querySelector('.task-card__text').value = value;

  tasksFragment.append(taskElement);

  tasksPlaceholderElement.classList.add('hidden');
  tasksListElement.append(tasksFragment);


  setTimeout(() => {
    const fakeTask = tasksListElement.querySelector('.task-card--new');
    fakeTask.classList.add('task-card--show');
  }, 0);
};

const addTask = (taskText) => {
  const tasks = getTasks();
  const newTask = createTask(taskText, false);

  tasks.push(newTask);
  saveTasks(tasks);

  renderTasks(tasks);
};

const onAddTaskFormSubmit = (evt) => {
  evt.preventDefault();
  const message = addTaskFieldElement.value;

  if (message) {
    renderFakeTask(message);
    setTimeout(() => {
      addTask(message);
      scrollToLastTask();
    }, RENDER_SHOWTIME);
    addTaskFieldElement.blur();
    addTaskFormElement.reset();
    addTaskFieldElement.focus();
  } else {
    showAlert();
  }
};

const setFormEvents = () => {
  addTaskFormElement.addEventListener('submit', onAddTaskFormSubmit);
};

export {setFormEvents};
