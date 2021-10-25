import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StoresComponent } from './stores/stores.component';
import { TermsNConditionsComponent } from './terms-n-conditions/terms-n-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { AuthModule } from './auth/auth.module';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    StoresComponent,
    TermsNConditionsComponent,
    PrivacyPolicyComponent,
    CartComponent,
    HomeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
