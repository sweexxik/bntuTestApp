import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service'
import { TranslateService} from "ng2-translate";

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html'
})

export class NavigationComponent {
    constructor(private translateService: TranslateService, private auth: AuthService){
    }

    private setEn(): void {
        this.translateService.use('en');
    }

    private setRu(): void {
        this.translateService.use('ru');
    }

}
