import {removeTask} from './remove-task';
const REMOVE_SHOWTIME = 1000;

const donePlaceholderElement = document.querySelector('#done-placeholder');
const clearButtonElement = document.querySelector('.button-icon--clear');

const clearDone = () => {
  const doneTasks = document.querySelectorAll('.done__item');

  doneTasks.forEach((doneTask) => {
    doneTask.classList.add('task-card--animation');
    setTimeout(() => {
      removeTask(doneTask);
    }, REMOVE_SHOWTIME);
  });
};

const onClearButtonClick = () => {
  clearDone();

  setTimeout(() => {
    donePlaceholderElement.classList.remove('hidden');
  }, REMOVE_SHOWTIME);
};

const setClearButtonEvent = () => {
  clearButtonElement.addEventListener('click', onClearButtonClick);
};

export {setClearButtonEvent};
