import BaseStore from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';

import {
  USERS_GET_SUCCESS,
  USERS_GET_ERROR,
  USER_UPDATED,
  USER_CREATE_ERROR
} from '../constants/AppConstants';

class ItemsStore extends BaseStore {

  emitChange() {
    this.emit(USER_UPDATED);
  }

  addChangeListener(callback) {
    this.on(USER_UPDATED, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(USER_UPDATED, callback);
  }
}

let store = new ItemsStore();

AppDispatcher.register((action) => {
  console.log(action.actionType);
  switch (action.actionType) {
    case USER_UPDATED:
      console.log('update invoked.');
      store.setAll(action.users);
      break;
    case USERS_GET_SUCCESS:
      console.log('list invoked.');
      store.setAll(action.users);
      break;
    case USERS_GET_ERROR:
      console.error('User get failed.');
      break;
    case USER_CREATE_ERROR:
      console.error('User create failed.');
      break;
    default:
  }
});

export default store;
