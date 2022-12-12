import {NgModule} from "@angular/core";
import {IsLogadoDirective} from "./is-logado.directive";
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {AuthComponent} from "./auth.component";

@NgModule({
    declarations: [
        IsLogadoDirective,
        AuthComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([{path: 'login', component: AuthComponent}])
    ],
    exports: [
        IsLogadoDirective,
        RouterModule
    ],
})
export class AuthModule {}
