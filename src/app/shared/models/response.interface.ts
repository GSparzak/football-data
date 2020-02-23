import { Match } from './match.interface';

export interface ApiResponse {
  count: number;
  filter: {
    dateFrom: string;
    dateTo: string;
    permission: string;
  };
  matches: Match[];
}
