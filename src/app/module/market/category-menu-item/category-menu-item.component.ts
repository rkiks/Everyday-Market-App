import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category-menu-item',
  templateUrl: './category-menu-item.component.html',
  styleUrl: './category-menu-item.component.css'
})
export class CategoryMenuItemComponent {
 @Input() categoryName: string | undefined;
 @Output() selected = new EventEmitter<string>();

 @Input() checked = false;
 
 onSelected() {
  this.selected.emit(this.categoryName);
 }
}
