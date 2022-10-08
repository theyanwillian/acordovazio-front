import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {NavbarTopComponent} from "./navbar-top/navbar-top.component";
import {HomeComponent} from "./home/home.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarTopComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        NgbModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
