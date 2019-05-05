import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/security/auth-service.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { AppConfigService } from '../../../services/app-config-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginData: any;
  public formGroup: FormGroup;

  constructor(
    public router: Router,
    private authService: AuthService,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder,
    private appConfigService: AppConfigService
  ) {
    this.loginData = {};
  }

  ngOnInit() {
    const token: any =  this.authService.getToken();
    this.redirectWithValidation(token);
    this.formGroup = this.formBuilder.group({
      user: [{value: ''}, Validators.required],
      password: [{value: ''}, [Validators.required]],
    });
  }

  redirectWithValidation(token) {
    if (token) {
      this.router.navigate(['/main']);
    }
  }

  public login() {
    if (this.formGroup.valid) {
      this.authService.setToken(this.loginData.authName);
      this.redirectWithValidation(this.authService.token);
    } else {
      const controls = this.formGroup.controls;
      for (const name in controls) {
        if (!controls[name].touched) {
          controls[name].markAsTouched();
        }
      }
    }
  }

  validateInputs(str) {
    let validation = false;
    const control = this.formGroup.get(str);
    if (control && control.invalid && control.touched) {
      validation = true;
    }
    return validation;
  }
}
