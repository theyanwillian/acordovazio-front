import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PlayerComponent} from './player/player.component';
import {PlayerDetailModalComponent} from './player/player-detail/player-detail.component';
import {PlayerDialogModalComponent} from './player/player-dialog/player-dialog.component';
import {RankingComponent} from './ranking/ranking.component';
import {TeamComponent} from './team/team.component';
import {TeamDialogModalComponent} from "./team/team-dialog/team-dialog.component";
import {TeamDetailModalComponent} from "./team/team-detail/team-detail.component";
import {AuthComponent} from "./auth/auth.component";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
    // canActivate: [AuthGuard] canActivateChild: [AuthGuard]
    // children: [{path: '', component: ''}]
    {path: '', component: HomeComponent},
    {path: 'ranking', component: RankingComponent},
    {path: 'players', component: PlayerComponent},
    {path: 'login', component: AuthComponent},
    {path: 'player/create', component: PlayerDialogModalComponent, outlet: 'popup', canActivate: [AuthGuard]},
    {path: 'player/update/:id', component: PlayerDialogModalComponent, outlet: 'popup', canActivate: [AuthGuard]},
    {path: 'player/detail/:id', component: PlayerDetailModalComponent, outlet: 'popup'},
    {path: 'teams', component: TeamComponent},
    {path: 'team/create', component: TeamDialogModalComponent, outlet: 'popup', canActivate: [AuthGuard]},
    {path: 'team/update/:id', component: TeamDialogModalComponent, outlet: 'popup', canActivate: [AuthGuard]},
    {path: 'team/detail/:id', component: TeamDetailModalComponent, outlet: 'popup'},
    {path: 'not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
