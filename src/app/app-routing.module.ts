import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from "./home/home.component";
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
    // canActivate: [AuthGuard] canActivateChild: [AuthGuard]
    // children: [{path: '', component: ''}]
    {path: '', component: HomeComponent},
    // {path: 'ranking', component: RankingComponent},
    {path: 'players', component: PlayerComponent},
    // {path: 'player/create', component: PlayerDialogModalComponent, outlet: 'popup'},
    // {path: 'player/update/:id', component: PlayerDialogModalComponent, outlet: 'popup'},
    // {path: 'player/detail/:id', component: PlayerDetailModalComponent, outlet: 'popup'},
    // {path: 'teams', component: TeamComponent},
    // {path: 'not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
