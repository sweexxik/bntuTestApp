import { Component } from '@angular/core';
import { AuthService } from "../../auth/auth.service";
import { TranslateService } from "ng2-translate";

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent {
    constructor(private translateService: TranslateService, private auth: AuthService){}
}
