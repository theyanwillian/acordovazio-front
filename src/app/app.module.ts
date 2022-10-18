import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {NavbarTopComponent} from "./navbar-top/navbar-top.component";
import {HomeComponent} from "./home/home.component";
import {PlayerComponent} from "./player/player.component";
import {PlayerListComponent} from "./player/player-list/player-list.component";
import {PlayerDialogComponent, PlayerDialogModalComponent} from "./player/player-dialog/player-dialog.component";
import {PlayerDetailComponent} from "./player/player-detail/player-detail.component";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FooterComponent} from "./footer/footer.component";
import {HistoryComponent} from "./history/history.component";
import {RegionComponent} from "./history/region/region.component";
import {RankingComponent} from "./ranking/ranking.component";
import {TeamComponent} from "./team/team.component";
import {TeamListComponent} from "./team/team-list/team-list.component";
import {TeamDialogComponent, TeamDialogModalComponent} from "./team/team-dialog/team-dialog.component";
import {TeamDetailComponent} from "./team/team-detail/team-detail.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {TeamService} from "./team/team.service";
import {PlayerService} from "./player/player.service";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarTopComponent,
        FooterComponent,
        PlayerComponent,
        PlayerListComponent,
        PlayerDialogComponent,
        PlayerDialogModalComponent,
        PlayerDetailComponent,
        TeamComponent,
        TeamListComponent,
        TeamDialogComponent,
        TeamDialogModalComponent,
        TeamDetailComponent,
        RankingComponent,
        HistoryComponent,
        RegionComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        NgbModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        FormsModule
    ],
    providers: [
        TeamService,
        PlayerService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
