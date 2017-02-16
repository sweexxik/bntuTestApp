import { Component } from '@angular/core';
import { Auth } from './auth/auth.service'
import {DataService} from "./services/dataService";

@Component({
    selector: 'my-app',
    providers: [
        Auth,
        DataService
    ],
    templateUrl: './app.component.html'
})

export class AppComponent {
    constructor(private auth: Auth){
    }
}
