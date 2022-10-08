import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../player/player.service';
import {Player} from '../player/player.model';
import {faSort, faSortUp, faSortDown, faEye} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-ranking',
    templateUrl: './ranking.component.html',
    styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
    players: Player[];
    predicate = 'overall';
    reverse = false;
    faSort = faSort;
    faSortUp = faSortUp;
    faSortDown = faSortDown;
    faEye = faEye

    constructor(
        private playerService: PlayerService
    ) {
    }

    ngOnInit(): void {
        this.getAllPlayers();
    }

    getAllPlayers() {
        this.playerService.getPlayersList({
            sort: this.sort()
        }).subscribe(data => {
            console.log(data);
            this.players = data;
        });
    }

    sort() {
        const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        return result;
    }

    updateFilter(predicate: string) {
        if (predicate === this.predicate) {
            this.reverse = !this.reverse;
            this.getAllPlayers();
        } else {
            this.predicate = predicate;
            this.reverse = false;
            this.getAllPlayers();
        }
    }
}
