import { Component } from '@angular/core';

@Component({
    selector: 'subtraction',
    templateUrl: 'subtraction.component.html'
})

export class SubtractionComponent {

    public message: string;

    constructor() {
        this.message = 'subtraction';
    }
}
