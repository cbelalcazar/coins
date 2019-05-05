import { Component } from '@angular/core';
import { AuthService } from './services/security/auth-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public user: any;
  constructor(
    public authService: AuthService,
    private router: Router
  ) {
    this.user = this.authService.token;
    if (!this.user) {
      this.router.navigate(['/login']);
    }
  }
  title = 'endava-coins';
}
