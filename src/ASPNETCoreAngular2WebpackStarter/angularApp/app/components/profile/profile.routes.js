import { ProfileEdit } from './profile_edit.component';
import { ProfileShow } from './profile_show.component';
import { ProfileComponent } from './profile.component';
import { AuthGuard } from "../../auth/auth.guard";
export var ProfileRoutes = [
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'edit', component: ProfileEdit },
            { path: '', component: ProfileShow }
        ]
    }
];
//# sourceMappingURL=profile.routes.js.map