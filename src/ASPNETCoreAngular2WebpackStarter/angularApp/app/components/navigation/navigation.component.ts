import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service'

@Component({
    selector: 'starterTemplateNavigation',
    templateUrl: './navigation.component.html'
})

export class NavigationComponent {
    constructor(private auth: AuthService){
    }
}
