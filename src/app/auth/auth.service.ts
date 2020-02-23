import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {}

  getUserData() {
    return of({
      username: 'test',
      email: 'test@test.pl',
      favTeams: null,
      favLeagues: null,
    });
  }
}
