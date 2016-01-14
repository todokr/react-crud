import BaseStore from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';

import {
  USERS_GET_SUCCESS,
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
  switch(action.actionType) {
    case USERS_GET_SUCCESS:
      console.log('update invoked.');
      store.setAll(action.users);
      break;
      default:
  }
});

export default store;
