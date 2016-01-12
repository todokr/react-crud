import AppDispatcher from '../dispatcher/AppDispatcher';
import WebAPI from '../util/WebAPI';

import {
  ITEMS_GET_SUCCESS,
  ITEMS_GET_ERROR,
  ITEMS_CREATE_SUCCESS
} from '../constants/AppConstants';

export default {
  getItems() {
    WebAPI.getPosts()
      .then((res) => {
        AppDispatcher.dispatch({
          actionType: ITEMS_GET_SUCCESS,
          users: res.data.users
        });
      }).catch(() => {
        AppDispatcher.dispatch({
          actionType: ITEMS_GET_ERROR
        });
      });
  }
};
