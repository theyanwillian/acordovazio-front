import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS} from "@angular/common/http";

import {AppComponent} from './app.component';
import {NavbarTopComponent} from "./navbar-top/navbar-top.component";
import {HomeComponent} from "./home/home.component";
import {FooterComponent} from "./footer/footer.component";
import {HistoryComponent} from "./history/history.component";
import {RegionComponent} from "./history/region/region.component";
import {RankingComponent} from "./ranking/ranking.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {TeamService} from "./team/team.service";
import {PlayerService} from "./player/player.service";
import {AuthInterceptorService} from "./auth/auth-interceptor.service";
import {PlayerModule} from "./player/player.module";
import {TeamModule} from "./team/team.module";
import {AuthModule} from "./auth/auth.module";
import {SharedModule} from "./shared/shared.module";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarTopComponent,
        FooterComponent,
        RankingComponent,
        HistoryComponent,
        RegionComponent,
        PageNotFoundComponent,
    ],
    imports: [
        AppRoutingModule,
        SharedModule,
        AuthModule,
        PlayerModule,
        TeamModule
    ],
    exports: [],
    providers: [
        TeamService,
        PlayerService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
