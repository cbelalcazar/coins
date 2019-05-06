import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as _ from 'lodash';
import { ProductsRepositoryService } from 'src/app/services/products/products-repository.service';
import { AuthService } from 'src/app/services/security/auth-service.service';





@Component({
  selector: 'app-redeem-prizes',
  templateUrl: './redeem-prizes.component.html',
  styleUrls: ['./redeem-prizes.component.css']
})
export class RedeemPrizesComponent implements OnInit {
  public products: any;
  public originalProducts: any;
  public productTypes: any;
  public objectFilters: string;
  public search: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    public router: Router,
    private productsRepositoryService: ProductsRepositoryService,
    private authService: AuthService
  ) {
    this.products = [];
    this.productTypes = [];
    this.objectFilters = '';
    this.search = '';
  }

  ngOnInit() {
    this.products = this.activatedRoute.snapshot.data.products;
    this.originalProducts = this.products;
    this.productTypes = Object.keys(_.groupBy(this.products, product => product.type));
  }

  filterObject() {
    setTimeout(() => {
      this.products = this.originalProducts.filter((obj) => obj.type === this.objectFilters);
    }, 200);
  }

  keyFilter() {
    setTimeout(() => {
      this.products = this.originalProducts.filter((obj) => obj.name.toUpperCase().includes(this.search.toUpperCase()));
    }, 200);
  }

  redeem(product) {
    const object = {
      userFromId: parseInt(this.authService.token.personId, 10),
      userToId: 12,
      amount: product.value,
      interactionId: 4,
      description: product.description
    }
    this.productsRepositoryService.registerTransaction(object)
    .then(() => {
      alert('Transaction successfully executed');
      this.router.navigate(['/main']);
    })
    .catch((error) => alert(error.body.message));
  }

}
