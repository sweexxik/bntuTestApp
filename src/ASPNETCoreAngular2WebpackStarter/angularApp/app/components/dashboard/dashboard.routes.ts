import { Routes }     from '@angular/router';
import { DashboardComponent } from "./dashboard.component";
import { DashboardMainComponent } from "./main/dashboard-main.component";
import { SummationComponent } from "./summation/summation.component";
import { SubtractionComponent } from "./subtraction/subtraction.component";
import { AuthGuardService } from "../../auth/auth.guard";
import {MultiplicationComponent} from "./multiplication/multiplication.component";


export const DashboardRoutes: Routes = [{
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'summation',  component: SummationComponent },
      { path: 'subtraction',  component: SubtractionComponent },
      { path: 'multiplication',  component: MultiplicationComponent },
      { path: '',     component: DashboardMainComponent }
    ]
  }
];