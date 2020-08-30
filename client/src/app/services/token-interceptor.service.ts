import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UserService } from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector, private UserService: UserService) { }
  
  intercept(req, next) {
    // let UserService = this.injector.get(UserService)
    let tokenReq = req.clone({
      setHeaders: {
        authtoken: '' + this.UserService.loadToken()
      }
    });
    return next.handle(tokenReq);
  }
}

