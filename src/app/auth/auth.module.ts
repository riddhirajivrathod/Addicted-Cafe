import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { VerifyComponent } from './verify/verify.component';
import { OrderComponent } from './order/order.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxOtpInputModule } from 'ngx-otp-input';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'order', component: OrderComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'verify', component: VerifyComponent },
];

@NgModule({
  declarations: [LoginComponent, ProfileComponent, VerifyComponent, OrderComponent],
  imports: [
    CommonModule,
    NgxOtpInputModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AuthModule { }
