import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { map, tap } from 'rxjs/operators';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Match } from 'src/app/shared/models/match.interface';
import { ApiResponse } from 'src/app/shared/models/response.interface';
import sortBy from 'lodash/sortBy';

@AutoUnsubscribe()
@Component({
  selector: 'app-current-matches',
  templateUrl: './current-matches.component.html',
  styleUrls: ['./current-matches.component.scss']
})
export class CurrentMatchesComponent implements OnInit, OnDestroy {

  public matches: any = [];

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getTodayMatches().pipe(
      map((res: ApiResponse) => sortBy(res.matches, ['competition.name', 'utcDate'])),
      tap(console.log)
    ).subscribe();
  }

  ngOnDestroy() {}
}
