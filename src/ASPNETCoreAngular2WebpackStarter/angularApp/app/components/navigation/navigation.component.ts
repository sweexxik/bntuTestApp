import { Component } from '@angular/core';
import { Auth } from '../../auth/auth.service'

@Component({
    selector: 'starterTemplateNavigation',
    templateUrl: './navigation.component.html'
})

export class NavigationComponent {
    constructor(private auth: Auth){
    }
}
