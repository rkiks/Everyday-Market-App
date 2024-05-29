import { Component, OnInit } from '@angular/core';
import { Category } from '../../../model/category';
import { IProduct } from '../../../model/product';
import { CategoriesService } from '../../core/services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent implements OnInit {

  
  categories: Category[] = [
    {name: 'Books'},
    {name: 'Appliances'},
    {name: 'Food'},
  ];
  selectedCategory: Category | undefined;

  products: IProduct[] | undefined;
 
  constructor(private readonly categoriesService: CategoriesService, private router: Router) { }
  
 
  ngOnInit() {
  }
 
  onCategoryChanged(category: Category) {
    this.selectedCategory = category;
    alert(category.name);
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

  
}
