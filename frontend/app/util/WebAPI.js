import Request from 'axios';

export default {
  getUsers() {
    return Request.get('http://localhost:9000/json/list');
  },

  createUser(user) {
    return Request.post('http://localhost:9000/json/create', user);
  },

  editUser(user) {
    return Request.post('http://localhost:9000/json/update', user);
  },

  deleteUser(id) {
    return Request.post(`http://localhost:9000/json/remove/${id}`);
  }

};
