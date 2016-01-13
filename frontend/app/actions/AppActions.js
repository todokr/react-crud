import AppDispatcher from '../dispatcher/AppDispatcher';
import WebAPI from '../util/WebAPI';

import {
  ITEMS_GET_SUCCESS,
  ITEMS_GET_ERROR,
  ITEMS_CREATE_SUCCESS
} from '../constants/AppConstants';

export default {
  getUsers: () => {
    WebAPI.getUsers()
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
  },

  createUser: (user) => {
    WebAPI.createUser(user)
      .then((res) => {
        AppDispatcher.dispatch({
          actionType: USER_CREATE_SUCCESS,
          user: res.data.user
        });
      }).catch(() => {
        AppDispatcher.dispatch({
          actionType: ITEM_CREATE_ERROR
        });
      });
  }
};
