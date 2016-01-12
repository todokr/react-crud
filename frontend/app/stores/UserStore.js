import BaseStore from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';

import {
  USERS_GET_SUCCESS,
  USERS_GET_ERROR,
  USERS_UPDATED
} from '../constants/AppConstants';

class UsersStore extends BaseStore {

  emitChange() {
    this.emit(USERS_UPDATED);
  }

  addChangeListener(callback) {
    this.on(USERS_UPDATED, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(USERS_UPDATED, callback);
  }
}

let store = new UsersStore();

AppDispatcher.register((action) => {
  switch(action.actionType) {
  case USERS_GET_SUCCESS:
    store.setAll(action.items);
    break;
  default;
  }
});

export default store;
