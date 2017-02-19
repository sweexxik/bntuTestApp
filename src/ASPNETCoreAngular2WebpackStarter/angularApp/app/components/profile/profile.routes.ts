import { Routes }     from '@angular/router';
import { ProfileEdit }      from './profile-edit.component';
import { ProfileShow }      from './profile-show.component';
import { ProfileComponent } from './profile.component';
import { AuthGuardService } from "../../auth/auth.guard";

export const ProfileRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'edit',  component: ProfileEdit },
      { path: '',     component: ProfileShow }
    ]
  }
];
