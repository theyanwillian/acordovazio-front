import {Component, OnInit} from '@angular/core';
import {Team} from './team.model';
import {TeamService} from './team.service';

@Component({
    selector: 'app-team',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.css'],
    providers: [TeamService]
})
export class TeamComponent implements OnInit {
    teamSelected: Team;

    constructor(private teamService: TeamService) {
    }

    ngOnInit(): void {
        this.teamService.TeamSelected.subscribe(
            (team: Team) => this.teamSelected = team
        );
    }

}
