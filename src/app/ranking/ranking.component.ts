import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../player/player.service';
import {Player} from '../player/player.model';
import {faSort, faSortUp, faSortDown, faEye, faSpinner} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-ranking',
    templateUrl: './ranking.component.html',
    styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
    players: Player[];
    predicate = 'score';
    reverse = false;
    faSort = faSort;
    faSortUp = faSortUp;
    faSortDown = faSortDown;
    faEye = faEye;
    faSpinner = faSpinner;
    filterNome = '';
    filterClasse = '';
    loading = false;
    currentTimeout = null;
    classes = ['Lançador', 'Lutador', 'Controlador', 'Assassino', 'Tanque'];

    constructor(
        private playerService: PlayerService
    ) {
    }

    ngOnInit(): void {
        this.getAllPlayersFilter();
    }

    sort() {
        const result = [this.predicate + ',' + (this.reverse ? 'asc' : 'desc')];
        return result;
    }

    updateFilter(predicate: string) {
        if (predicate === this.predicate) {
            this.reverse = !this.reverse;
            this.getAllPlayersFilter();
        } else {
            this.predicate = predicate;
            this.reverse = false;
            this.getAllPlayersFilter();
        }
    }

    getAllPlayersFilter() {
        this.loading = false;
        this.playerService.getPlayersListFilter({
            sort: this.sort(),
            nome: this.filterNome,
            classe: this.filterClasse,
        }).subscribe(data => {
            this.players = data;
        });
    }

    onKeyUp() {
        this.loading = true;
        this.cancelTimeout();
        this.currentTimeout = setTimeout(() => {
            this.getAllPlayersFilter();
        }, 2000);
    }

    cancelTimeout(): void {
        clearTimeout(this.currentTimeout);
        this.currentTimeout = undefined;
    }
}
