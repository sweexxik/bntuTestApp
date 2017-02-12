import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProfileRoutes } from "./components/profile/profile.routes";

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  ...ProfileRoutes,
  { path: 'about', component: AboutComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
