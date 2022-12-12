import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "../auth/auth.guard";
import {TeamComponent} from "./team.component";
import {TeamDialogModalComponent} from "./team-dialog/team-dialog.component";
import {TeamDetailModalComponent} from "./team-detail/team-detail.component";

const routes: Routes = [
    {path: 'teams', component: TeamComponent},
    {path: 'team/create', component: TeamDialogModalComponent, outlet: 'popup', canActivate: [AuthGuard]},
    {path: 'team/update/:id', component: TeamDialogModalComponent, outlet: 'popup', canActivate: [AuthGuard]},
    {path: 'team/detail/:id', component: TeamDetailModalComponent, outlet: 'popup'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeamRoutingModule { }
