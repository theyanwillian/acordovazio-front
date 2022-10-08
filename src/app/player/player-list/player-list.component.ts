import {Component, OnInit} from '@angular/core';
import {Player} from '../player.model';
import {PlayerService} from '../player.service';
import {faEye, faPenToSquare} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-player-list',
    templateUrl: './player-list.component.html',
    styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
    players: Player[];
    ordem: string = 'overall';
    faEye = faEye;
    faPenToSquare = faPenToSquare;

    constructor(
        private playerService: PlayerService
    ) {
    }

    ngOnInit(): void {
        this.getAllPlayers();
    }

    getAllPlayers() {
        this.playerService.getPlayersList({
            filter: this.ordem
        }).subscribe(data => {
            this.players = data;
        });
    }

    deletePlayer(id: number) {
        this.playerService.deletePlayer(id).subscribe(data => {
            this.getAllPlayers();
        });
    }
}
