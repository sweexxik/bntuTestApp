import { ProfileEdit } from './profile_edit.component';
import { ProfileShow } from './profile_show.component';
import { ProfileComponent } from './profile.component';
export var ProfileRoutes = [
    {
        path: 'profile',
        component: ProfileComponent,
        children: [
            { path: 'edit', component: ProfileEdit },
            { path: '', component: ProfileShow }
        ]
    }
];
//# sourceMappingURL=profile.routes.js.map