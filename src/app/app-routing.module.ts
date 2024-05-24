import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CustomerLandingPageComponent } from './landingPages/customer-landing-page/customer-landing-page.component';
import { AdminLandingPageComponent } from './landingPages/admin-landing-page/admin-landing-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'customer-landing-page', component: CustomerLandingPageComponent },
  { path: 'admin-landing-page', component: AdminLandingPageComponent },
  { path: 'add-product', component: ProductComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'checkout/:id', component: CheckoutComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
