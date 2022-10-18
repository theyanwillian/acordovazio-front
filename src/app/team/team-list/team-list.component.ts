import {Component, OnInit} from '@angular/core';
import { faEye, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import {Team} from '../team.model';
import {TeamService} from '../team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
    teams: Team[];
    faEye = faEye;
    faPenToSquare = faPenToSquare;

    constructor(private teamService: TeamService) {
    }

    ngOnInit(): void {
        this.getAllTeams();
    }

    getAllTeams() {
        this.teamService.getTeamsList({
            // filter: this.ordem
        }).subscribe(data => {
            this.teams = data;
        });
    }
}
