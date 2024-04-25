import {setFormEvents} from './add-task.js';
import {setClearButtonsEvents} from './clear-done.js';
import { loadTasks } from './utils.js';

loadTasks();

setClearButtonsEvents();
setFormEvents();
