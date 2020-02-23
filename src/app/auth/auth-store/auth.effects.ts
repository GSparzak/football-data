import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType, Effect } from '@ngrx/effects';
import { switchMap, tap, map } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { User } from './../user.interface';

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions, private authService: AuthService) {}

  // @Effect()
  userLoggedIn$ = createEffect(() => this.actions$.pipe(
    ofType('[Login Page] User logged in'),
    switchMap(() => this.authService.getUserData().pipe(
      map((userData: User) => ({ type: '[Auth API] Fetched user data', payload: userData}))
    ))
  ));
}
