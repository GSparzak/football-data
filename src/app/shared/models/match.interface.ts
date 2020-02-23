import { Referee } from './referee.interface';
import { Score } from './score.interface';
import { Competition } from './competition.interface';
import { Season } from './season.interface';
import { Team } from './teams.interface';

export interface Match {
 id: number;
 competition: Competition;
 season: Season;
 utcDate: string;
 matchday: number;
 stage: string;
 group: string;
 lastUpdated: string;
 score: Score;
 homeTeam: Partial<Team>;
 awayTeam: Partial<Team>;
 referees: Referee[];
}
