import { Component, OnInit } from '@angular/core';
import { DashboardAction } from "../../../classes";

@Component({
    selector: 'dashboard-main',
    templateUrl: 'dashboard-main.component.html'
})

export class DashboardMainComponent implements OnInit {

    public message: string;
    public actions: Array<DashboardAction> = [{
        Title: 'Summation',
        Description: 'Perfom Summation of two items',
        RelativeLink: 'summation'
    }, {
        Title: 'Subtraction',
        Description: 'Perfom subraction of two items',
        RelativeLink: 'subtraction'
    }, {
        Title: 'Multiplication',
        Description: 'Perfom multiplication of two items',
        RelativeLink: 'multiplication'
    }];

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit(){

    }
}
