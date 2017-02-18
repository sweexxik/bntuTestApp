import {Component}            from '@angular/core';
import {AuthHttp}             from 'angular2-jwt';
import {Router}               from '@angular/router';
import 'rxjs/add/operator/map';
import {AuthService} from "../../auth/auth.service";
import {myConfig} from "../../auth/auth.config";

@Component({
    selector: 'profile',
    templateUrl: './profile_edit.template.html'
})

export class ProfileEdit {
    address: String

    constructor(private auth: AuthService, private authHttp: AuthHttp, private router: Router) {
        if (auth.userProfile.user_metadata && auth.userProfile.user_metadata.address) {
            this.address = auth.userProfile.user_metadata.address;
        }
    }

    onSubmit() {
        var headers: any = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        var data: any = JSON.stringify({
            user_metadata: {
                address: this.address
            }
        });

        this.authHttp
            .patch('https://' + myConfig.domain + '/api/v2/users/' + this.auth.userProfile.user_id, data, {headers: headers})
            .map(response => response.json())
            .subscribe(
                response => {
                    this.auth.userProfile = response;
                    localStorage.setItem('profile', JSON.stringify(response));
                    this.router.navigate(['/profile']);
                },
                error => alert(error.json().message)
            );
    }
}
