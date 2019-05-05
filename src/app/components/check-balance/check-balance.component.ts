import { Component, OnInit } from '@angular/core';
import { ProductsRepositoryService } from 'src/app/services/products/products-repository.service';
import { AuthService } from 'src/app/services/security/auth-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.css']
})
export class CheckBalanceComponent implements OnInit {
  public user: any;
  public accountInformation: any;
  public transactions: Array<any>;

  constructor(
    private productsRepositoryService: ProductsRepositoryService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.authService.token;
    this.productsRepositoryService.personalAccountInfo({
      id: this.user.personId
    })
    .then((accountInformation) => {
      this.accountInformation = accountInformation;
      this.productsRepositoryService.transactions({
        id: this.user.personId
      }).then((transactions) => {
        this.transactions = transactions;
      });
    })
    .catch(() => alert('Error please contact the system administrator'));

  }

}
