const ALERT_SHOWTIME = 5000;
const errorTemplateElement = document.querySelector('#error-message').content.querySelector('.add-tasks__error');
const errorFragment = document.createDocumentFragment();
const addTaskElement = document.querySelector('.add-tasks');

let id = JSON.parse(localStorage.getItem('id')) || 0;

const generateId = () => {
  id += 1;
  localStorage.setItem('id', JSON.stringify(id));
  return id;
};

function getTasks() {
  return JSON.parse(localStorage.getItem('tasks')) || [];
}

const createTask = (taskName, boolean) => ({
  id: generateId(),
  name: taskName,
  done: boolean
});

const showAlert = () => {
  const errorElement = errorTemplateElement.cloneNode(true);

  errorFragment.append(errorElement);
  addTaskElement.append(errorElement);

  setTimeout(() => {
    errorElement.remove();
  }, ALERT_SHOWTIME);
};

export {getTasks, createTask, showAlert};
