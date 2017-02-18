import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service'
import { DataService } from "./services/dataService";
import { AppReadyEvent } from "./splashscreen/app-ready-event";
import { AuthGuardService } from "./auth/auth.guard";

@Component({
    selector: 'my-app',
    providers: [
        AuthService,
        DataService,
        AppReadyEvent,
        AuthGuardService
    ],
    templateUrl: './app.component.html'
})

export class AppComponent {
    constructor(appReadyEvent: AppReadyEvent){
        appReadyEvent.trigger();
    }
}
