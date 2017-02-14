import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProfileRoutes } from "./components/profile/profile.routes";
import { DashboardRoutes } from "./components/dashboard/dashboard.routes";
var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent }
].concat(ProfileRoutes, DashboardRoutes, [
    { path: 'about', component: AboutComponent }
]);
export var routing = RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map