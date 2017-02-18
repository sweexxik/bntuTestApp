import { Injectable }      from '@angular/core';
import { Router }          from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import { myConfig }        from './auth.config';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class AuthService {
    // Configure Auth0 https://auth0.com/docs/quickstart/spa/angular2/04-user-profile
    private lock = new Auth0Lock(myConfig.clientID, myConfig.domain, {});
    private defaultRedirectUrl: string = '/dashboard';
    userProfile: any;

        constructor(private router: Router) {
        this.userProfile = JSON.parse(localStorage.getItem('profile'));

        this.router.events.subscribe((val) => {
        });

        // Add callback for lock `authenticated` event
        this.lock.on('authenticated', (authResult: any) => {
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
                this.router.navigate([redirectUrl]);
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
        this.lock.show();
    };

    public authenticated() {
        return tokenNotExpired();
    };

    public logout() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        localStorage.removeItem('redirect_url');
        this.userProfile = undefined;
    };
}
