import { Component }         from '@angular/core';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'profile_show',
  templateUrl: './profile-show.component.html'
})

export class ProfileShow {
  constructor(private auth: AuthService) {}
};
