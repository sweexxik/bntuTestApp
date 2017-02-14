import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
    selector: 'dashboard-main',
    templateUrl: 'dashboard-main.component.html'
})

export class DashboardMainComponent implements OnInit {

    public message: string;
    public links: Array<string> = [];

    constructor() {
        this.message = 'dashboard';
    }

    ngOnInit() {
        this.links = ['summation', 'subtraction']
    }

    ngAfterViewInit(){

    }
}
