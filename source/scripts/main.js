import { loadTasks } from './utils.js';
import {setFormEvents} from './add-task.js';
import {setClearButtonsEvents} from './clear-done.js';

loadTasks();
setFormEvents();
setClearButtonsEvents();

