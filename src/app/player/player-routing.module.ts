import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "../auth/auth.guard";
import {PlayerComponent} from "./player.component";
import {PlayerDialogModalComponent} from "./player-dialog/player-dialog.component";
import {PlayerDetailModalComponent} from "./player-detail/player-detail.component";

const routes: Routes = [
    {path: 'players', component: PlayerComponent},
    {path: 'player/create', component: PlayerDialogModalComponent, outlet: 'popup', canActivate: [AuthGuard]},
    {path: 'player/update/:id', component: PlayerDialogModalComponent, outlet: 'popup', canActivate: [AuthGuard]},
    {path: 'player/detail/:id', component: PlayerDetailModalComponent, outlet: 'popup'},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PlayerRoutingModule { }
