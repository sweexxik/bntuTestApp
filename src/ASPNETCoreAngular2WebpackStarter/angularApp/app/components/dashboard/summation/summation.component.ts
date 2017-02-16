import { Component } from '@angular/core';
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { ToasterService } from "angular2-toaster";
import { DataService } from "../../../services/dataService";

@Component({
    selector: 'summation',
    templateUrl: 'summation.component.html'
})

export class SummationComponent {

    public result: number;
    public firstArg: number = 0;
    public secondArg: number = 0;
    private submitted: boolean = false;

    constructor(
        private dataService: DataService,
        private slimLoadingBarService: SlimLoadingBarService,
        private toasterService: ToasterService) {}

    private calculate(): void {
        this.dataService.getSummationResult({First: this.firstArg, Second: this.secondArg})
            .subscribe(
                data => this.result = <any>data,
                error => () => {
                    this.toasterService.pop('error', 'Damn', 'Something went wrong...');
                },
                () => {
                    this.submitted = true;
                    this.toasterService.pop('success', 'Complete', 'Getting all values complete');
                    this.slimLoadingBarService.complete();
                });
    }

    private clearInputs(): void {
        this.submitted = false;
        this.firstArg = 0;
        this.secondArg = 0;
    }
}

