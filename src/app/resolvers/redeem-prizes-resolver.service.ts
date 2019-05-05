import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProductsRepositoryService } from '../services/products/products-repository.service';


@Injectable({
  providedIn: 'root'
})
export class RedeemPrizesResolverService implements Resolve<any> {

  constructor(
    private productsRepositoryService: ProductsRepositoryService
  ) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.productsRepositoryService.get();
  }
}
