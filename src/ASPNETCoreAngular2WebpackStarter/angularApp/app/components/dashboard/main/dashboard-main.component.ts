import { Component, OnInit } from '@angular/core';
import { DashboardAction } from "../../../classes";

@Component({
    selector: 'dashboard-main',
    templateUrl: 'dashboard-main.component.html'
})

export class DashboardMainComponent implements OnInit {

    public message: string;
    public actions: Array<DashboardAction> = [{
        Title: 'Calculation.Summation',
        Description: 'Calculation.SummationDesc',
        RelativeLink: 'summation'
    }, {
        Title: 'Calculation.Subtraction',
        Description: 'Calculation.SubtractionDesc',
        RelativeLink: 'subtraction'
    }, {
        Title: 'Calculation.Multiplication',
        Description: 'Calculation.MultiplicationDesc',
        RelativeLink: 'multiplication'
    }];

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit(){

    }
}
