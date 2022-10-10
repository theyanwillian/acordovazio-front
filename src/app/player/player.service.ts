import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Player} from './player.model';
import {environment} from "../../environments/environment";

import {createRequestOption} from '../shared/model/request-util';

@Injectable({
    providedIn: 'root'
})
export class PlayerService {

    reloadPage = new Subject<boolean>();
    private baseURL = environment.baseUrl + 'players';

    constructor(private httpClient: HttpClient) {
    }

    getPlayersList(req: any): Observable<Player[]> {
        return this.httpClient.get<Player[]>(`${this.baseURL}`, {params: req});
    }

    getPlayersListFilter(req: any): Observable<Player[]> {
        const options = createRequestOption(req);
        return this.httpClient.get<Player[]>(`${this.baseURL}/filters`, {params: options});
    }

    createPlayer(player: Player): Observable<Object> {
        return this.httpClient.post(`${this.baseURL}`, player);
    }

    getPlayerById(id: number): Observable<Player> {
        return this.httpClient.get<Player>(`${this.baseURL}/${id}`);
    }

    updatePlayer(player: Player): Observable<Object> {
        return this.httpClient.put(`${this.baseURL}`, player);
    }

    deletePlayer(id: number): Observable<Object> {
        return this.httpClient.delete(`${this.baseURL}/${id}`);
    }
}
