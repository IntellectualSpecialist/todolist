const tasksListElement = document.querySelector('.tasks__list');
const taskTemplateElement = document.querySelector('#new-task').content.querySelector('.tasks__item');
const tasksPlaceholderElement = document.querySelector('#tasks-placeholder');
const tasksFragment = document.createDocumentFragment();
const tasksCountElement = document.querySelector('.tasks__count');

const doneListElement = document.querySelector('.done__list');
const doneTemplateElement = document.querySelector('#done-task').content.querySelector('.done__item');
const doneCountElement = document.querySelector('.done__count');
const donePlaceholderElement = document.querySelector('#done-placeholder');
const doneFragment = document.createDocumentFragment();

const renderTasks = (tasks) => {
  tasksListElement.innerHTML = '';
  doneListElement.innerHTML = '';

  let taskCount = 0;
  let doneTaskCount = 0;

  tasks.forEach((task) => {
    if (task.done === false) {
      const taskElement = taskTemplateElement.cloneNode(true);

      taskElement.querySelector('.task-card__text').value = task.name;
      taskElement.dataset.id = task.id;

      tasksFragment.append(taskElement);

      tasksPlaceholderElement.classList.add('hidden');
      taskCount += 1;
    } else {
      const doneElement = doneTemplateElement.cloneNode(true);
      doneElement.querySelector('.task-card__text').textContent = task.name;

      doneElement.dataset.id = task.id;
      doneFragment.append(doneElement);

      donePlaceholderElement.classList.add('hidden');
      doneTaskCount += 1;
    }
  });
  tasksListElement.append(tasksFragment);
  doneListElement.append(doneFragment);

  tasksCountElement.textContent = taskCount;
  doneCountElement.textContent = doneTaskCount;
};

export {renderTasks};
