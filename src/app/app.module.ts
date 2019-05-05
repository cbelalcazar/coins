import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login/login.component';
import { AuthService } from './services/security/auth-service.service';
import { AppConfigService } from './services/app-config-services.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RedeemPrizesComponent } from './components/redeem-prizes/redeem-prizes.component';
import { CheckBalanceComponent } from './components/check-balance/check-balance.component';
import { TransfersComponent } from './components/transfers/transfers.component';
import { FinanceFoundsComponent } from './components/finance-founds/finance-founds.component';
import { ProductsRepositoryService } from './services/products/products-repository.service';
import { ResourceModule } from '@ngx-resource/handler-ngx-http';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    RedeemPrizesComponent,
    CheckBalanceComponent,
    TransfersComponent,
    FinanceFoundsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ResourceModule.forRoot()
  ],
  providers: [
    AuthService,
    AppConfigService,
    ProductsRepositoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
