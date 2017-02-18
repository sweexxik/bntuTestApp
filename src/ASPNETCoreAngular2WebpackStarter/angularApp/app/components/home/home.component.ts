import { Component } from '@angular/core';
import { AuthService } from "../../auth/auth.service";

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent {
    constructor(private auth: AuthService){}
}
