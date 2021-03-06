import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private auth: AuthService, private router: Router) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.doCheck(state);
    }

    private doCheck(state: RouterStateSnapshot){
        if(this.auth.authenticated()){
            // if(this.auth.isAdmin()){
            return true;
            // } else {
            //     this.router.navigate(['unauthorized']);
            //     return false;
            // }
        } else {
            localStorage.setItem('redirect_url', state.url);
            this.auth.login();
            return false;
        }
    }
}