import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-redeem-prizes',
  templateUrl: './redeem-prizes.component.html',
  styleUrls: ['./redeem-prizes.component.css']
})
export class RedeemPrizesComponent implements OnInit {
  public products: any;
  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.products = [];
  }

  ngOnInit() {
    this.products = this.activatedRoute.snapshot.data.products;
    console.log(this.products);
    
  }

}
