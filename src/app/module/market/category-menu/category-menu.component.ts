import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Category } from '../../../model/category';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrl: './category-menu.component.css'
})
export class CategoryMenuComponent {
  @Input() categories: Category[] | undefined
  @Output() categoryChanged = new EventEmitter<Category>();

  selectedCategoryName: string | undefined;

  onCategorySelected(categoryName: string) {
    const cat = this.categories?.find(c => c.name === categoryName);
    this.selectedCategoryName = cat?.name
    this.categoryChanged.emit(cat);
  }
}
