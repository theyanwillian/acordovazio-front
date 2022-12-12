import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {NgbModule, NgbPopoverModule} from "@ng-bootstrap/ng-bootstrap";
import {LoadingSpinnerComponent} from "./loading-spinner/loading-spinner.component";
import {AlertComponent} from "./alert/alert.component";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        LoadingSpinnerComponent,
        AlertComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CommonModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        NgbModule,
        ReactiveFormsModule,
        FormsModule,
        NgbPopoverModule,
        FontAwesomeModule,
    ],
    exports: [
        BrowserModule,
        HttpClientModule,
        LoadingSpinnerComponent,
        AlertComponent,
        CommonModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        NgbModule,
        ReactiveFormsModule,
        FormsModule,
        NgbPopoverModule,
        FontAwesomeModule,
    ]
})
export class SharedModule {}
