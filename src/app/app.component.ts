import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Football Info App';
  private apiKey = '47a85bce93964ce586e5178391549dd0';
  private baseUrl = 'http://api.football-data.org/v1';
  public currLeague: any;
  public currLeagueTeams: any;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.currLeagueTeams = this.httpService.getLeagueTeams(2021);
    this.currLeague = this.httpService.getLeague(2021);
    
  }

  
}
