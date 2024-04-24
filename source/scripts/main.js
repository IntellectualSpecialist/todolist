import {setFormEvents} from './add-task.js';
import {setClearButtonsEvents} from './clear-done.js';
import { getTasks } from './utils.js';
import {renderTasks} from './render-all-tasks.js';

const tasks = getTasks();
renderTasks(tasks);

setClearButtonsEvents();
setFormEvents();
