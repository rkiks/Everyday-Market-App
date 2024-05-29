import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryMenuItemComponent } from './category-menu-item/category-menu-item.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CategoryMenuItemComponent,
    CategoryMenuComponent,
    ProductsPageComponent,
    ProductListComponent,
    ProductComponent,
    
  
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    ProductsPageComponent,
    
  ]
})
export class MarketModule { }
