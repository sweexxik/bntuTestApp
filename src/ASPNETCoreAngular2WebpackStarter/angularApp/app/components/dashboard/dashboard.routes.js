import { DashboardComponent } from "./dashboard.component";
import { DashboardMainComponent } from "./main/dashboard-main.component";
import { SummationComponent } from "./summation/summation.component";
import { SubtractionComponent } from "./subtraction/subtraction.component";
import { AuthGuardService } from "../../auth/auth.guard";
export var DashboardRoutes = [{
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuardService],
        children: [
            { path: 'summation', component: SummationComponent },
            { path: 'subtraction', component: SubtractionComponent },
            { path: '', component: DashboardMainComponent }
        ]
    }
];
//# sourceMappingURL=dashboard.routes.js.map