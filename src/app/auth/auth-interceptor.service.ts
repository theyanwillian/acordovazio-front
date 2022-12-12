import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {exhaustMap, Observable, take} from "rxjs";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
    constructor(private authService: AuthService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return this.authService.user.pipe(
            take(1), //usa o observable de usuario 1 vez
            exhaustMap(user => { // e substitui o observable de usuario pelo observable abaixo
                if (!user) {
                    return next.handle(req);
                }
                const modifiedReq = req.clone();
                modifiedReq.params.set('auth', user.token)
                return next.handle(modifiedReq);
            })
        );
    }

}

