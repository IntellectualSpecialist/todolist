import {removeTask} from './remove-task';
const PLACEHOLDER_SHOWTIME = 1000;

const donePlaceholderElement = document.querySelector('#done-placeholder');
const clearButtonElement = document.querySelector('.button-icon--clear');

const onClearButtonClick = () => {
  const doneTasks = document.querySelectorAll('.done__item');
  doneTasks.forEach((doneTask) => {
    doneTask.classList.add('task-card--animation');
    removeTask(doneTask);
  });
  setTimeout(() => {
    donePlaceholderElement.classList.remove('hidden');
  }, PLACEHOLDER_SHOWTIME);
};

const setClearButtonsEvents = () => {
  clearButtonElement.addEventListener('click', onClearButtonClick);
};

export {setClearButtonsEvents};
