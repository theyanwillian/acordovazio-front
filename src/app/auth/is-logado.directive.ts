import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {AuthService} from "./auth.service";

/**
 * @whatItDoes Conditionally includes an HTML element if current user has any
 * of the authorities passed as the `expression`.
 *
 * @howToUse
 * ```
 *     <some-element *jhiHasAnyAuthority="'ROLE_ADMIN'">...</some-element>
 *
 *     <some-element *jhiHasAnyAuthority="['ROLE_ADMIN', 'ROLE_USER']">...</some-element>
 * ```
 */
@Directive({
    selector: '[isLogado]'
})
export class IsLogadoDirective {

    constructor(private authService: AuthService, private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
    }

    @Input()
    set isLogado(role: string) {
        this.authService.user.subscribe(user => {
            if (!user) {
                this.viewContainerRef.clear();
                return;
            }
            this.viewContainerRef.clear();
            this.viewContainerRef.createEmbeddedView(this.templateRef);
            return;
        })
    }
}
