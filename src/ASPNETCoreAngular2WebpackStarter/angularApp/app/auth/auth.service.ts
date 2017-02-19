import { Injectable }      from '@angular/core';
import { Router }          from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import { myConfig }        from './auth.config';
import Auth0Lock from 'auth0-lock';
import {StringUtils} from "../utils/StringUtils";

// Avoid name not found warnings

@Injectable()
export class AuthService {
    // Configure Auth0 https://auth0.com/docs/quickstart/spa/angular2/04-user-profile
    private lock = new Auth0Lock(myConfig.clientID, myConfig.domain, {
        autoclose: true,
        auth: {
        redirect: false,
        // redirectUrl: "some url",
    }});
    private defaultRedirectUrl: string = '/dashboard';
    userProfile: any;

        constructor(private router: Router) {
        this.userProfile = JSON.parse(localStorage.getItem('profile'));

        this.router.events.subscribe((val) => {
        });
        this.lock.on('authorization_error', (arg1:any, arg2:any)=>{
            debugger;
        });

        this.lock.on('unrecoverable_error', (arg1:any, arg2:any)=>{
            debugger;
        });

        this.lock.on('hash_parsed', (arg1:any, arg2:any)=>{
            debugger;
        })
        // Add callback for lock `authenticated` event
        this.lock.on('authenticated', (authResult: any) => {
            debugger;

            localStorage.setItem('id_token', authResult.idToken);

            this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
                if (error) {
                    alert(error);
                    return;
                }
                localStorage.setItem('profile', JSON.stringify(profile));
                this.userProfile = profile;
                var redirectUrl: string = localStorage.getItem('redirect_url');
                redirectUrl = redirectUrl ? redirectUrl : this.defaultRedirectUrl;
                this.router.navigate(['home']);
                localStorage.removeItem('redirect_url');
            });
        });
    }

    public isAdmin() {
        return this.userProfile && this.userProfile.app_metadata
            && this.userProfile.app_metadata.roles
            && this.userProfile.app_metadata.roles.indexOf('admin') > -1;
    }

    public login() {
        if(StringUtils.isNotEmptyString(window.location.hash)) {
            setTimeout(() => {
                if (!this.authenticated()) {
                    this.lock.show();
                }
            }, 300);
        }
        else {
            this.lock.show();
        }
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
