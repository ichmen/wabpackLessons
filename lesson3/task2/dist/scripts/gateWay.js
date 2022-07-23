const _excluded = ["id"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import "core-js/modules/es.promise.js";
const baseUrl = 'http://62d56536d4406e523559e20d.mockapi.io/avi/v1/taskList';
export function getTasks() {
  return fetch(baseUrl).then(response => response.json());
}
export function setTask(taskItem) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(taskItem)
  });
}
export function changeTask(taskItem) {
  const {
    id
  } = taskItem,
        task = _objectWithoutProperties(taskItem, _excluded);

  return fetch("".concat(baseUrl, "/").concat(id), {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(task)
  });
}
export function deleteTask(id) {
  return fetch("".concat(baseUrl, "/").concat(id), {
    method: 'DELETE'
  });
}