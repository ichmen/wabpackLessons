import renderTasks from './render';
import { buttonProcessor, listClickHandler } from './eventHandlers';
import { getTasks } from './gateWay';
import './index.scss';

const listElem = document.querySelector('.list');
const createTaskButton = document.querySelector('.create-task-btn');

const tasks = getTasks();
tasks.then((el) => renderTasks(el));

createTaskButton.addEventListener('click', buttonProcessor);
listElem.addEventListener('click', listClickHandler);
