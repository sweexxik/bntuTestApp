import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service'
import { DataService } from "./services/dataService";
import { AppReadyEvent } from "./splashscreen/app-ready-event";
import { AuthGuardService } from "./auth/auth.guard";
import { TranslateService } from "ng2-translate";

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
    constructor(private translateService: TranslateService, appReadyEvent: AppReadyEvent){
        appReadyEvent.trigger();
        this.initTranslations();
    }

    private initTranslations(): void {
        this.translateService.addLangs(['en', 'ru']);
        this.translateService.setDefaultLang('ru');
        let browserLang = this.translateService.getBrowserLang();
        this.translateService.use(browserLang.match(/en|ru/) ? browserLang : 'en');
    }
}
