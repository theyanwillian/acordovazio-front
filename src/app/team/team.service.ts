import {Team} from './team.model';
import {EventEmitter} from '@angular/core';

export class TeamService {
    TeamSelected = new EventEmitter<Team>();
    private teams: Team[] = [new Team('Team1', 'Coach1', 72), new Team('Team2', 'Coach2', 76)];

    getTeams() {
        return this.teams.slice();
    }
}
