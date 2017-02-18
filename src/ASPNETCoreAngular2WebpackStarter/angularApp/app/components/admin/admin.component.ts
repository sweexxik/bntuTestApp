import { Component } from '@angular/core';
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html'
})

export class AdminComponent {
  constructor(private auth: AuthService) {}
};
