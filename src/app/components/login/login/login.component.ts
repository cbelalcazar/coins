import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/security/auth-service.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { AppConfigService } from '../../../services/app-config-services.service';
import { ProductsRepositoryService } from 'src/app/services/products/products-repository.service';


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
    private appConfigService: AppConfigService,
    private productsRepositoryService: ProductsRepositoryService
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
      this.productsRepositoryService.person({id: this.loginData.authName})
      .then((person) => {
        console.log(person);
        console.log(Object.keys(person).length === 0 );
        if (Object.keys(person).length === 0 ) {
          alert('User does not exist please validate with the system administrator');
        } else {
          this.authService.setToken(person);
          this.redirectWithValidation(this.authService.token);
        }
      });
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
