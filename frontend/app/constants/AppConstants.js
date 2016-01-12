import pkg from '../../package';

export const DEBUG             = (process.env.NODE_ENV !== 'production');
export const APP_TITLE         = pkg.name;
export const ITEMS_GET_SUCCESS = 'ITEMS_GET_SUCCESS';
export const ITEMS_GET_ERROR   = 'ITEMS_GET_ERROR';
export const ITEMS_UPDATED     = 'ITEMS_UPDATED';
export const USERS_GET_SUCCESS = 'USER_GET_SUCCESS';
export const USERS_GET_ERROR   = 'USERS_GET_ERROR';
export const USERS_UPDATED     = 'USERS_UPDATED';
