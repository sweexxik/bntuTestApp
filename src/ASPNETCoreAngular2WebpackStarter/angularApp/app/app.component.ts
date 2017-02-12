import { Component } from '@angular/core';
import { Auth } from './auth/auth.service'

@Component({
    selector: 'my-app',
    providers: [ Auth ],
    templateUrl: './app.component.html'
})

export class AppComponent {
    constructor(private auth: Auth){
    }
}
