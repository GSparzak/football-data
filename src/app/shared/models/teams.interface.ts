export interface Teams {
  count: number;
  filters: any;
  competition: any;
  season: any;
  teams: Team[]
}

export interface Team {
  id: number;
  area: {id: number, name: string};
  name: string;
  shortName: string;
  tla: string;
  crestUrl: string;
  address: string;
  phone: string;
  website: string;
  email: string;
  founded: number;
  clubColors:  string;
  venue: string;
  lastUpdated:  string;
}