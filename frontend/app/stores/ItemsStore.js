import BaseStore from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';

import {
  USERS_GET_SUCCESS,
  USERS_GET_ERROR,
  USER_CREATED,
  USER_DELETED,
  USER_CREATE_ERROR,
  USER_UPDATED
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
  switch (action.actionType) {
    case USER_CREATED:
      store.set(action.user)
      break;
    case USER_DELETED:
      store.remove(action.user);
      break;
    case USERS_GET_SUCCESS:
      store.setAll(action.users);
      break;
    case USERS_GET_ERROR:
      break;
    case USER_CREATE_ERROR:
      break;
    default:
  }
});

export default store;
