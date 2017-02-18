import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProfileRoutes } from "./components/profile/profile.routes";
import { DashboardRoutes } from "./components/dashboard/dashboard.routes";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { AuthGuard } from './auth/auth.guard';
import { UnauthorizedComponent } from "./components/page-not-found/unauthorized.component";
var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent }
].concat(ProfileRoutes, DashboardRoutes, [
    { path: 'about', component: AboutComponent },
    { path: 'unauthorized', component: UnauthorizedComponent },
    { path: '**', component: PageNotFoundComponent }
]);
export var appRoutingProviders = [AuthGuard];
export var routing = RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map