import {removeTask} from './remove-task';

// const donePlaceholderElement = document.querySelector('#done-placeholder');
const clearButtonElement = document.querySelector('.button-icon--clear');

const onClearButtonClick = () => {
  const doneTasks = document.querySelectorAll('.done__item');
  doneTasks.forEach((doneTask) => {
    doneTask.classList.add('task-card--animation');
    // setTimeout(() => {
    removeTask(doneTask);
    // }, 1000);
  });

  // donePlaceholderElement.classList.remove('hidden');
};

const setClearButtonsEvents = () => {
  clearButtonElement.addEventListener('click', onClearButtonClick);
};

export {setClearButtonsEvents};
