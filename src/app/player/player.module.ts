import {NgModule} from "@angular/core";
import {PlayerComponent} from "./player.component";
import {PlayerListComponent} from "./player-list/player-list.component";
import {PlayerDialogComponent, PlayerDialogModalComponent} from "./player-dialog/player-dialog.component";
import {PlayerDetailComponent} from "./player-detail/player-detail.component";
import {PlayerRoutingModule} from "./player-routing.module";
import {SharedModule} from "../shared/shared.module";
import {AuthModule} from "../auth/auth.module";

@NgModule({
    declarations: [
        PlayerComponent,
        PlayerListComponent,
        PlayerDialogComponent,
        PlayerDialogModalComponent,
        PlayerDetailComponent
    ],
    imports: [
        PlayerRoutingModule,
        SharedModule,
        AuthModule
    ]
})
export class PlayerModule {}
