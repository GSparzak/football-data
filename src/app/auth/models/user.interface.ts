import { Team } from 'src/app/shared/models/teams.interface';
import { League } from 'src/app/shared/models/league.interface';

export interface User {
  username: string;
  email: string;
  favTeams: Team[];
  favLeagues: League[];
}
