import { Component, OnInit } from '@angular/core';

import { PRODUCTS } from '../../../model/mock-products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  
  products = PRODUCTS

  ngOnInit(): void {
    console.log(this.products);
    
  }

  
  
}
