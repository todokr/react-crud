import AppDispatcher from '../dispatcher/AppDispatcher';
import WebAPI from '../util/WebAPI';

import {
  USERS_GET_SUCCESS,
  USERS_GET_ERROR,
  USER_CREATED,
  USER_DELETED,
  USER_CREATE_ERROR,
  USER_DELETE_ERROR
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
    WebAPI.createUser(user).then(() => {
      AppDispatcher.dispatch({
        actionType: USER_CREATED,
        user: user
      });
    });
  },

  deleteUser: (user) => {
    WebAPI.deleteUser(user.id).then(() => {
      AppDispatcher.dispatch({
        actionType: USER_DELETED,
        user: user
      });
    });
  }
};
