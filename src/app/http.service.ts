import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Teams } from './shared/models/teams.interface';

@Injectable()
export class HttpService {
  private apiKey = '47a85bce93964ce586e5178391549dd0';
  private baseUrl = 'http://api.football-data.org/v2/';
  private httpOptions = {
    headers: new HttpHeaders({
      'X-Auth-Token': this.apiKey
    })
  };

  constructor(private http: HttpClient) {}

  getAllCompetitions() {
    return this.http.get(`${this.baseUrl}competitions`, this.httpOptions);
  }

  getLeague(leagueNr: number) {
    return this.http.get(`${this.baseUrl}competitions/${leagueNr}`, this.httpOptions);
  }

  getLeagueTable(leagueNr: number) {
    return this.http.get(`${this.baseUrl}competitions/${leagueNr}/leagueTable`, this.httpOptions);
  }

  getLeagueFixtures(leagueNr: number) {
    return this.http.get(`${this.baseUrl}competitions/${leagueNr}/fixtures`, this.httpOptions);
  }

  getLeagueTeams(leagueNr: number) {
    return this.http.get(`${this.baseUrl}competitions/${leagueNr}/teams`, this.httpOptions).pipe(
      map((teamsInfo: Teams) => {
        return teamsInfo.teams.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (b.name > b.name) {
            return 1;
          }
          return 0;
        });
      }),
      tap(console.log)
    );
  }

  getTodayMatches() {
    return this.http.get(`${this.baseUrl}/matches`, this.httpOptions).pipe(
      tap(console.log)
    );
  }
}
