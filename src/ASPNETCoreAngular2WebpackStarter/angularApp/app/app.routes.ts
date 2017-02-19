import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProfileRoutes } from "./components/profile/profile.routes";
import { DashboardRoutes } from "./components/dashboard/dashboard.routes";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { AuthGuardService } from './auth/auth.guard';
import { UnauthorizedComponent } from "./components/page-not-found/unauthorized.component";
import { LoginComponent } from "./components/login/login.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  ...ProfileRoutes,
  ...DashboardRoutes,
  { path: 'about', component: AboutComponent },
  { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '**', component: PageNotFoundComponent }
];


export const appRoutingProviders: any[] = [AuthGuardService];
export const routing = RouterModule.forRoot(appRoutes);
