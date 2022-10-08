import {Component, OnDestroy, OnInit} from '@angular/core';
import {Player} from '../player.model';
import {PlayerService} from '../player.service';
import {faEye, faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-player-list',
    templateUrl: './player-list.component.html',
    styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit, OnDestroy {
    private activatedSub: Subscription
    players: Player[];
    ordem: string = 'overall';
    faEye = faEye;
    faPenToSquare = faPenToSquare;
    faTrash = faTrash;

    constructor(
        private playerService: PlayerService,
    ) {
    }

    ngOnInit(): void {
        this.getAllPlayers();
        this.activatedSub = this.playerService.reloadPage.subscribe(reload => {
            this.getAllPlayers();
        })
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

    ngOnDestroy(): void {
        this.activatedSub.unsubscribe();
    }
}
