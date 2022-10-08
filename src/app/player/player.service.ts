import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Player} from './player.model';
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class PlayerService {

    // private baseURL = environment.baseUrl + 'player';
    private baseURL = 'https://a-cor-do-vazio-rpg-backend.herokuapp.com/player';

    constructor(private httpClient: HttpClient) {
    }

    getPlayersList(req: any): Observable<Player[]> {
        return this.httpClient.get<Player[]>(`${this.baseURL}`, {params: req});
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
