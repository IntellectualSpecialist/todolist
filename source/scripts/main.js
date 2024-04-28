import { loadTasks } from './utils.js';
import {setFormEvents} from './add-task.js';
import {setCheckTaskEvent} from './check-task.js';
import {setTaskRemoveEvent} from './remove-task.js';
import {setEditTaskEvent} from './task-edit.js';
import {setClearButtonEvent} from './clear-done.js';

loadTasks();
setFormEvents();
setCheckTaskEvent();
setTaskRemoveEvent();
setEditTaskEvent();
setClearButtonEvent();

