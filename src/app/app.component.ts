import { Component } from '@angular/core';
import { AuthService } from './services/security/auth-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public user: any;
  constructor(
    public authService: AuthService
  ) {
    this.user = this.authService.token;
    console.log('hellooooo');
  }
  title = 'endava-coins';
}
