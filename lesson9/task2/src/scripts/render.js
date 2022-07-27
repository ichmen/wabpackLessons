import { clearList, sortByDoneByDate, checkBoxProcessor } from './common';

const listElem = document.querySelector('.list');
export default (tasksList) => {
  const taskText = document.querySelector('.task-input');
  taskText.value = '';
  clearList();
  const tasksElems = tasksList.sort(sortByDoneByDate).map(checkBoxProcessor);

  listElem.append(...tasksElems);
};
