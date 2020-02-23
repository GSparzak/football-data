import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { authReducer } from './auth-store/auth.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', authReducer),
  ]
})
export class AuthModule {}
