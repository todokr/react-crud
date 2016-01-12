import Request from 'axios';

export default {
  getItems() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(['Item 1', 'Item 2', 'Item 3'].map((item, i) => {
          return {
            id: i,
            label: item
          };
        }));
      }, 500);
    });
  },

  getPosts() {
    return Request.get('http://localhost:9000/json/list');
  },

  createPost(data) {
    return Request.post('http://jsonplaceholder.typicode.com/posts', data);   
  }

};
