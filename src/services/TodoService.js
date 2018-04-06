import request from './lib/request';

function add(data) {
  return request({
    url:    `/TodoTask`,
    method: 'POST',
    data: data
  });
}

function getAll () {
  return request({
    url:    '/TodoTask',
    method: 'GET'
  });
}

function get(id) {
  return request({
    url:    `/TodoTask/${id}`,
    method: 'GET'
  });
}

function mark(id, data) {
  return request({
    url:    `/TodoTask/mark/${id}`,
    method: 'PUT',
    data: data
  });
}

function remove(id) {
  return request({
    url:    `/TodoTask/${id}`,
    method: 'DELETE'
  });
}

function reset(id) {
  return request({
    url:    `/TodoTask/reset`,
    method: 'POST'
  });
}

function update(id, data) {
  return request({
    url:    `/TodoTask/${id}`,
    method: 'PUT',
    data: data
  });
}



const TodoService = {
  add,
  getAll,
  get,
  mark,
  remove,
  reset,    
  update
}

export default TodoService;