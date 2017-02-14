import { Component } from '@angular/core';

@Component({
    selector: 'summation',
    templateUrl: 'summation.component.html'
})

export class SummationComponent {

    public message: string;

    constructor() {
        this.message = 'add';
    }
}
