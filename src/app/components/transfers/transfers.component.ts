import { Component, OnInit } from '@angular/core';
import { ProductsRepositoryService } from 'src/app/services/products/products-repository.service';
import { AuthService } from 'src/app/services/security/auth-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent implements OnInit {
  public user: any;
  public accountInformation: any;
  public transactions: Array<any>;
  public persons: Array<any>;
  public objectToSend: any;
  public formGroup: FormGroup;

  constructor(
    private productsRepositoryService: ProductsRepositoryService,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { 
    this.objectToSend = {};
  }

  ngOnInit() {
    this.user = this.authService.token;
    this.formGroup = this.formBuilder.group({
      person: [{value: ''}, Validators.required],
      description: [{value: ''}, Validators.required],
      value: [{value: ''}, Validators.required]
    });
    this.productsRepositoryService.personalAccountInfo({
      id: this.user.personId
    })
    .then((accountInformation) => {
      this.accountInformation = accountInformation;
      this.productsRepositoryService.transactions({
        id: this.user.personId
      }).then((transactions) => {
        this.transactions = transactions;
        this.productsRepositoryService.persons()
        .then((persons) => {
          this.persons = persons;
        });
      });
    })
    .catch(() => alert('Error please contact the system administrator'));

  }

  validateInputs(str) {
    let validation = false;
    const control = this.formGroup.get(str);
    if (control && control.invalid && control.touched) {
      validation = true;
    }
    return validation;
  }

  transfer() {
    if (this.formGroup.valid) {
      const object = {
        userFromId: parseInt(this.authService.token.personId, 10),
        userToId: this.objectToSend.person,
        amount: this.objectToSend.value,
        interactionId: 5,
        description: this.objectToSend.description
      };
      this.productsRepositoryService.registerTransaction(object)
      .then(() => {
        alert('Transaction successfully executed');
        this.router.navigate(['/main']);
      })
      .catch((error) => error.body.message);
    } else {
      const controls = this.formGroup.controls;
      for (const name in controls) {
        if (!controls[name].touched) {
          controls[name].markAsTouched();
        }
      }
    }
  }

}
