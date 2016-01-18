import pkg from '../../package';

export const DEBUG = (process.env.NODE_ENV !== 'production');
export const APP_TITLE = pkg.name;
export const USERS_GET_SUCCESS = 'USERS_GET_SUCCESS';
export const USERS_GET_ERROR = 'USERS_GET_ERROR';
export const USER_CREATED = 'USER_CREATED';
export const USER_CREATE_ERROR = 'USER_CREATE_ERROR';
export const USER_DELETED = 'USER_DELETED';
export const ITEMS_CREATE_SUCCESS = 'ITEMS_CREATE_SUCCESS';

export const USER_UPDATED = 'USER_UPDATED';
