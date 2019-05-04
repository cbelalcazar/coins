import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login/login.component';
import { RedeemPrizesComponent } from './components/redeem-prizes/redeem-prizes.component';
import { CheckBalanceComponent } from './components/check-balance/check-balance.component';
import { TransfersComponent } from './components/transfers/transfers.component';
import { FinanceFoundsComponent } from './components/finance-founds/finance-founds.component';
import { RedeemPrizesResolverService } from './resolvers/redeem-prizes-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'redeem/prizes',
    component: RedeemPrizesComponent,
    resolve: {
      products: RedeemPrizesResolverService
    }
  },
  {
    path: 'check/balance',
    component: CheckBalanceComponent,
  },
  {
    path: 'transfer',
    component: TransfersComponent,
  },
  {
    path: 'finance/funds',
    component: FinanceFoundsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    RedeemPrizesResolverService
  ]
})
export class AppRoutingModule { }
