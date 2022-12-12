import {Component, OnDestroy, OnInit} from '@angular/core';
import { faEye, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import {Team} from '../team.model';
import {TeamService} from '../team.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit, OnDestroy {
    private activatedSub: Subscription
    teams: Team[];
    faEye = faEye;
    faPenToSquare = faPenToSquare;

    constructor(private teamService: TeamService) {
    }

    ngOnInit(): void {
        this.getAllTeams();
        this.activatedSub = this.teamService.reloadPage.subscribe(() => {
            this.getAllTeams();
            console.log(this.teams);
        });
    }

    getAllTeams() {
        this.teamService.getTeamsList({
            // filter: this.ordem
        }).subscribe(data => {
            this.teams = data;
        });
    }

    ngOnDestroy(): void {
        this.activatedSub.unsubscribe();
    }
}
