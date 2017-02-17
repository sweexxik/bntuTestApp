import { Injectable }      from '@angular/core';
import { Router }          from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import { myConfig }        from './auth.config';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
    // Configure Auth0
    // https://auth0.com/docs/quickstart/spa/angular2/04-user-profile
    private lock = new Auth0Lock(myConfig.clientID, myConfig.domain, {});

    userProfile: any;

        constructor(private router: Router) {
        this.userProfile = JSON.parse(localStorage.getItem('profile'));

        // Add callback for lock `authenticated` event
        this.lock.on('authenticated', (authResult: any) => {
            localStorage.setItem('id_token', authResult.idToken);
            debugger;
            this.router.navigate(['/dashboard']);
            this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
                if (error) {
                    alert(error);
                    return;
                }
                localStorage.setItem('profile', JSON.stringify(profile));
                this.userProfile = profile;
            });
        });
    }

    public login() {
        // Call the show method to display the widget.
        this.lock.show();
    };

    public authenticated() {
        // Check if there's an unexpired JWT
        // It searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    };

    public logout() {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        this.userProfile = undefined;
    };
}
