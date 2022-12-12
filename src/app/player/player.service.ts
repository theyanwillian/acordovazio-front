import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {exhaustMap, Observable, Subject, take} from 'rxjs';
import {Player} from './player.model';
import {environment} from "../../environments/environment";

import {createRequestOption} from '../shared/request-util';
import {AuthService} from "../auth/auth.service";

@Injectable({
    providedIn: 'root'
})
export class PlayerService {

    reloadPage = new Subject<boolean>();
    private baseURL = environment.baseUrl + 'players';

    constructor(
        private httpClient: HttpClient,
        private authService: AuthService
    ) {}

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

    getPlayersListIsLogin(): Observable<Player[]> {
        return this.authService.user.pipe(
            take(1), //usa o observable de usuario 1 vez
            exhaustMap(user => { // e substitui o observable de usuario pelo observable de Player[]
                return this.httpClient.get<Player[]>(`${this.baseURL}`, {params: new HttpParams().set('auth', user.token)}); //envia o token de usuario
            })
        );

    }
}
