import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export const initialState = {
  username: '',
  email: '',
  favTeams: null,
  favLeagues: null
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.gotUserData, (state, userData) => ({
    ...state,
    username: userData.username,
    email: userData.email,
    favTeams: userData.favTeams,
    favLeagues: userData.favLeagues
  }))
);
