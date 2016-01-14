import AppDispatcher from '../dispatcher/AppDispatcher';
import WebAPI from '../util/WebAPI';

import {
  USERS_GET_SUCCESS,
  USERS_GET_ERROR,
  USER_UPDATED,
  USER_CREATE_ERROR
} from '../constants/AppConstants';

export default {
  getUsers: () => {
    WebAPI.getUsers()
      .then((res) => {
        AppDispatcher.dispatch({
          actionType: USERS_GET_SUCCESS,
          users: res.data.users
        });
      }).catch(() => {
        AppDispatcher.dispatch({
          actionType: USERS_GET_ERROR
        });
      });
  },

  createUser: (user) => {
    WebAPI.createUser(user)
      .then(() => {
        this.getUsers()
          .then((res) => {
            AppDispatcher.dispatch({
              actionType: USERS_GET_SUCCESS,
              users: res.data.user
            });
          }).catch(() => {
          AppDispatcher.dispatch({
            actionType: USERS_GET_ERROR
          });
        })
      }).catch(() => {
        AppDispatcher.dispatch({
          actionType: USER_CREATE_ERROR
        });
      });
  }
};
