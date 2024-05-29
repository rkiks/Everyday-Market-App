import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsPageComponent } from './module/market/products-page/products-page.component';
import { RegisterPageComponent } from './register/register-page/register-page.component';

const routes: Routes = [
  { path: 'products', component: ProductsPageComponent },
  { path: 'register', component: RegisterPageComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
