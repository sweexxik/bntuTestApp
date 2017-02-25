import { Injectable }      from '@angular/core';
import { Router }          from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import { myConfig }        from './auth.config';
import Auth0Lock from 'auth0-lock';
import {StringUtils} from "../utils/StringUtils";

// Avoid name not found warnings

@Injectable()
export class AuthService {
    private lock = new Auth0Lock(myConfig.clientID, myConfig.domain, {
        autoclose: true,
        auth: {
            redirect: false,
        }
    });

    private defaultRedirectUrl: string = '/dashboard';
    public userProfile: any;

        constructor(private router: Router) {
        this.userProfile = JSON.parse(localStorage.getItem('profile'));

        this.router.events.subscribe((val) => {
        });

        this.lock.on('authorization_error', (arg1:any, arg2:any)=>{
        });

        this.lock.on('unrecoverable_error', (arg1:any, arg2:any)=>{
        });

        this.lock.on('hash_parsed', (arg1:any, arg2:any)=>{
        });

        // Add callback for lock `authenticated` event
        this.lock.on('authenticated', (authResult: any) => {

            localStorage.setItem('id_token', authResult.idToken);

            let redirectUrl: string = localStorage.getItem('redirect_url');
            this.router.navigate([redirectUrl ? redirectUrl : this.defaultRedirectUrl]);
            localStorage.removeItem('redirect_url');

            this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
                if (error) {
                    console.log(error);
                    return;
                }
                localStorage.setItem('profile', JSON.stringify(profile));
                this.userProfile = profile;
            });
        });
    }

    public isAdmin() {
        return this.userProfile && this.userProfile.app_metadata
            && this.userProfile.app_metadata.roles
            && this.userProfile.app_metadata.roles.indexOf('admin') > -1;
    }

    public login() {
        this.lock.show();
    };

    public authenticated() {
        return tokenNotExpired();
    };

    public logout() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        this.userProfile = undefined;
        this.router.navigate(['home']);
    };
}