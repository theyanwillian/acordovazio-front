import {NgModule} from "@angular/core";
import {TeamComponent} from "./team.component";
import {TeamListComponent} from "./team-list/team-list.component";
import {TeamDialogComponent, TeamDialogModalComponent} from "./team-dialog/team-dialog.component";
import {TeamDetailComponent} from "./team-detail/team-detail.component";
import {SharedModule} from "../shared/shared.module";
import {TeamRoutingModule} from "./team-routing.module";
import {AuthModule} from "../auth/auth.module";

@NgModule({
    declarations: [
        TeamComponent,
        TeamListComponent,
        TeamDialogComponent,
        TeamDialogModalComponent,
        TeamDetailComponent
    ],
    imports: [
        TeamRoutingModule,
        SharedModule,
        AuthModule
    ]
})
export class TeamModule {}
