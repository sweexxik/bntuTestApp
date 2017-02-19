import { Component } from '@angular/core';
import { ToasterService } from "angular2-toaster";
import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { DataService } from "../../../services/dataService";

@Component({
    selector: 'multiplication',
    templateUrl: 'multiplication.component.html'
})

export class MultiplicationComponent {

    public result: number;
    public firstArg: number = 0;
    public secondArg: number = 0;
    private submitted: boolean = false;

    constructor(private dataService: DataService,
        private slimLoadingBarService: SlimLoadingBarService,
        private toasterService: ToasterService) {
    }

    private calculate(): void {
        this.dataService.getMultiplicationResult({Arg1: this.firstArg, Arg2: this.secondArg})
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
