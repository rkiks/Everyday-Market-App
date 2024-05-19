import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';
import { Category } from '../../../model/category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: CoreModule
})
export class CategoriesService {

  loadCategories(): Category[] {
    return [
      {name: 'Books'},
      {name: 'Appliances'},
      {name: 'Food'},
    ];
  }
  
 

  
}
