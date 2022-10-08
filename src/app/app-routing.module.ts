import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PlayerDetailModalComponent} from './player/player-detail/player-detail.component';
import {PlayerDialogModalComponent} from './player/player-dialog/player-dialog.component';
import {PlayerComponent} from './player/player.component';
import {RankingComponent} from './ranking/ranking.component';
import {TeamComponent} from './team/team.component';

const routes: Routes = [
    // canActivate: [AuthGuard] canActivateChild: [AuthGuard]
    // children: [{path: '', component: ''}]
    {path: '', component: HomeComponent},
    {path: 'ranking', component: RankingComponent},
    {path: 'players', component: PlayerComponent},
    {path: 'player/create', component: PlayerDialogModalComponent, outlet: 'popup'},
    {path: 'player/update/:id', component: PlayerDialogModalComponent, outlet: 'popup'},
    {path: 'player/detail/:id', component: PlayerDetailModalComponent, outlet: 'popup'},
    {path: 'teams', component: TeamComponent},
    {path: 'not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
