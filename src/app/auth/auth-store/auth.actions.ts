import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.interface';

export const login = createAction('[Login Page] User logged in', props<{username: string, password: string}>());
export const logout = createAction('[Menu] Logout');
export const gotUserData = createAction('[Auth API] Fetched user data', props<User>());
