import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Team} from './team.model';
import {environment} from "../../environments/environment";

import {createRequestOption} from '../shared/model/request-util';

@Injectable({
    providedIn: 'root'
})
export class  TeamService {

    reloadPage = new Subject<boolean>();
    private baseURL = environment.baseUrl + 'teams';

    constructor(private httpClient: HttpClient) {
    }

    getTeamsList(req: any): Observable<Team[]> {
        return this.httpClient.get<Team[]>(`${this.baseURL}`, {params: req});
    }

    getTeamsListFilter(req: any): Observable<Team[]> {
        const options = createRequestOption(req);
        return this.httpClient.get<Team[]>(`${this.baseURL}/filters`, {params: options});
    }

    createTeam(team: Team): Observable<Object> {
        return this.httpClient.post(`${this.baseURL}`, team);
    }

    getTeamById(id: number): Observable<Team> {
        return this.httpClient.get<Team>(`${this.baseURL}/${id}`);
    }

    updateTeam(team: Team): Observable<Object> {
        return this.httpClient.put(`${this.baseURL}`, team);
    }

    deleteTeam(id: number): Observable<Object> {
        return this.httpClient.delete(`${this.baseURL}/${id}`);
    }
}
