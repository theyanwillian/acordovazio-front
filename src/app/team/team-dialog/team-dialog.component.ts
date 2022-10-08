import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Team} from '../team.model';
import {TeamService} from '../team.service';

@Component({
    selector: 'app-team-dialog',
    templateUrl: './team-dialog.component.html',
    styleUrls: ['./team-dialog.component.css']
})
export class TeamDialogComponent implements OnInit {
    @Input() team: Team;

    constructor(private teamService: TeamService) {
    }

    ngOnInit(): void {
    }

    onSelected() {
        this.teamService.TeamSelected.emit(this.team);
    }
}
